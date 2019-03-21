import { Component, OnInit } from "@angular/core";
import { User } from "../shared/user/user.model";
import { UserService } from "../shared/user/user.service";
import { Router } from "@angular/router";

@Component({
    selector: "login",
    providers: [UserService],
    templateUrl: "login/login.component.html",
    styleUrls: ["login/login.component.css"]
})
export class LoginComponent {
    user: User;
    email;
    isLoggingIn = true;
   
    constructor(private router: Router, private userService: UserService) {
        this.user = new User();
        //this.user.email = "mylogintest!@nativescript.org";
        //this.user.password = "mypassword";
    }

    

    ngOnInit() { }


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
            () => this.router.navigate(["home"]),
            (error) => alert("Unfortunately we could not find your account.")
          );
      }

    signUp() {
        this.userService.register(this.user)
            .subscribe(
                () => { //Success
                    alert("Your account was successfully created.");
                    this.toggleDisplay();
                }, //Failure
                () => alert("Unfortunately we were unable to create your account.")
            );
    }


}