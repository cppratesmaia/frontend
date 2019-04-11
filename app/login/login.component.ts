import { Component, OnInit } from "@angular/core";
import { User } from "../shared/user/user.model";
import { UserService } from "../shared/user/user.service";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";//

@Component({
    selector: "Login",
    providers: [UserService],
    templateUrl: "login/login.component.html",
    styleUrls: ["login/login.component.css"]
})
export class LoginComponent implements OnInit {
    user: User;
    isLoggingIn = true;

    constructor(private router: Router, private userService: UserService, private page: Page) {
        this.user = new User();
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        // automatic login
        // this.user.email = "user@email.com.br";
        // this.user.password = "abc";
        // this.user.email = "email@e.com";
        // this.user.password = "pwd";
        // this.login();
        // automatic login
    }

    submit() {
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }

    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    login() {
        this.userService.login(this.user)
            .subscribe(
                () => {
                    this.router.navigate(["home"])
                },
                (error) => alert("Unfortunately we could not find your account.")
            );
    }

    signUp() {
        this.userService.register(this.user)
            .subscribe(
                () => { //Success
                    alert("Your account was successfully created."); //
                    this.toggleDisplay();
                }, //Failure
                () => alert("Unfortunately we were unable to create your account.")
            );
    }


}