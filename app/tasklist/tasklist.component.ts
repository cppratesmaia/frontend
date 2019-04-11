import { Component, ChangeDetectionStrategy, OnInit, SystemJsNgModuleLoader } from "@angular/core";
import { Task } from "../shared/tasks/task.model";
import { TaskService } from "../shared/tasks/task.service";
import { TextField } from "tns-core-modules/ui/text-field";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page"


@Component({
    selector: "tasklist",
    templateUrl: "tasklist/tasklist1.component.html",
    styleUrls: ["tasklist/tasklist.component.css"],
})

export class TaskListComponent implements OnInit {
    task: Task; //This is the task object we imported

    currentDay: number = new Date().getDate();
    currentMonth: number = new Date().getMonth() + 1;
    currentYear: number = new Date().getFullYear();

    listPickerPriority: Array<string> = ["Low", "Medium", "High"];

    constructor(private taskService: TaskService, private routerExtensions: RouterExtensions) {
        this.task = new Task(); //Initializes a Task object when the page boots up
    }

    public addTask() {
        this.taskService.createTask({
            title: this.task.title,
            details: this.task.details,
            priority: this.task.priority.toLowerCase(),
            complete: false,
            due_date: this.task.due_date,
            start_date: this.task.start_date
        }).subscribe(  //This should push the Task to Backend
            (Task) => { console.log("A task has been created") },
            (error) => { alert("Unfortunately, the task could not be created.") }
        );
        console.log("Task has been added to the TaskList");
        console.log("Task Title: " + this.task.title);
        console.log("Task Details: " + this.task.details);
        console.log("Task Priority: " + this.task.priority);
        console.log("Date Start: " + this.task.start_date);
        console.log("Task Due Date: " + this.task.due_date);
    }

    ngOnInit() { }

    public goBack() { //function for the back button in the action bar.
        this.routerExtensions.backToPreviousPage();
        console.log("Returned to previous page");
    }
}



