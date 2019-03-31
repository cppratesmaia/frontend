import { Injectable } from "@angular/core";
import { Http, Headers, Response, URLSearchParams } from "@angular/http";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { User } from "./user.model";
import { Config } from "../config";

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    // Create user account
    public register(user: User) {
        if (!user.email || !user.password) {
            return throwError("Please provide both an email address and password.");
        }

        console.log(`Creating account: ${user}`); // Test - to be removed later

        return this.http.post(
            Config.apiUrl + "/user/createAccount",
            user,
            { headers: this._getCommonPostHeaders() }
        ).pipe(
            catchError(this._handleErrors)
        );
    }

    // Login user
    public login(user: User) {

        console.log(`Loggin in ${user.email} : ${user.password}`); // Test - to be removed later 

        return this.http.post(
            Config.apiUrl + "/user/login",
            user,
            { headers: this._getCommonPostHeaders() }
        ).pipe(
            map(response => response.json()),
            tap(data => {
                Config.token = data.token;
                console.log(`Token: ${Config.token}`);
            }),
            catchError(this._handleErrors)
        );
    }

    public getUser(): Observable<User> {
        const url = `${Config.apiUrl}/user`;
        return this.http.get(url, { headers: this._getCommonGetHeaders() })
            .pipe(
                map(response => response.json() as User)
            );
    }

    private _getCommonPostHeaders() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        return headers;
    }

    private _getCommonGetHeaders() {
        let headers = new Headers();
        headers.append("Authorization", Config.token);
        return headers;
    }

    private _handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}