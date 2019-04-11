import { Component, OnInit } from "@angular/core";
import { TaskService } from "~/shared/tasks/task.service";
import { first } from "rxjs/operators";
import { Task } from "~/shared/tasks/task.model";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { dayProperty } from "tns-core-modules/ui/date-picker/date-picker";

@Component({
  selector: "List",
  templateUrl: "list/list.component.html",
  styleUrls: ["list/list.component.css"]
})
export class ListComponent implements OnInit {
  currentDate;
  taskList: Task[] = [];

  constructor(private router: Router, private routerExtensions: RouterExtensions, private _taskService: TaskService) {
    this.currentDate = this.router.getCurrentNavigation().extras.state;
  }

  // getAffirmation(task: Task) {
  //   this._taskService.getAffirmation(task)
  //     .subscribe(
  //       (affirmation) => {
  //         alert(affirmation.assertion);
  //       });
  // }

  ngOnInit(): void {
    // Load tasks on initialization. It's being used by ngFor in list.component.html
    const from = new Date(this.currentDate);
    from.setHours(0, 0, 0, 0);
    const to = new Date(this.currentDate);
    to.setHours(0, 0, 0, 0);
    to.setDate(from.getDate() + 1);

    this._taskService.listTasksByQuery(from, to).pipe(first()).subscribe(tasks => this.taskList = tasks);

    // this._taskService.listTasks().pipe(first()).subscribe(tasks => this.taskList = tasks);
    // this.currentDate;
  }

  // Function for the back button in the action bar.
  public goBack() {
    this.routerExtensions.backToPreviousPage();
    console.log("Returned to previous page");
  }
}

