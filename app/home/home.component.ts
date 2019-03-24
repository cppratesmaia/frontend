import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Task } from "~/shared/tasks/task.model";
import { Affirmation } from "~/shared/tasks/affirmation.model";

@Component({
  selector: "Home",
  templateUrl: "home/home.component.html",
  styleUrls: ["home/home.component.css"]
})

export class HomeComponent {

  constructor(private router: Router) { }

  goToList() {
    this.router.navigate(["List"]);
  }
}