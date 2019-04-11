import { Component, ChangeDetectionStrategy, OnInit, SystemJsNgModuleLoader } from "@angular/core";
import { Task } from "../shared/tasks/task.model";
import { TaskService } from "../shared/tasks/task.service";
import { TextField } from "tns-core-modules/ui/text-field";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page"


@Component({
    selector: "tasklist",
    templateUrl:"tasklist/tasklist1.component.html",
    styleUrls: ["tasklist/tasklist.component.css"],
    providers: [TaskService]
})

export class TaskListComponent implements OnInit {
    TaskList: Task[] = []; //Array for Task objects we've imported
    Task: Task; //This is the task object we imported

constructor(private taskService: TaskService, private routerExtensions: RouterExtensions) {
    this.Task = new Task(); //Initializes a Task object when the page boots up

    this.TaskList.push({ title: "Hello and Welcome to the TaskList", complete: false, start_date: new Date });
    this.TaskList.push({ title: "Here is where you can keep track of your tasks", complete: false, start_date: new Date});
    this.TaskList.push({ title: "Try adding a Task of your choice", complete: false, start_date: new Date});

    this.getTasks(this.TaskList)
}

addTask() {
    this.Task.start_date = new Date(); //Gives the task start date the current date.
    console.log("Date Added: " + this.Task.start_date);
    
    this.taskService.createTask({
        title: this.Task.title,
        details: this.Task.details,
        priority: this.Task.priority,
        complete: false,
        due_date: this.Task.due_date,
        start_date: this.Task.start_date
    }).subscribe(  //This should push the Task to Backend
        (Task) => { console.log("A task has been created") },
        (error) => { alert("Unfortunately, the task could not be created.") }
    ); 
    this.TaskList.push(this.Task);
    console.log("Task has been added to the TaskList");    

    console.log("Task Title: " + this.Task.title);
    console.log("Task Details: " + this.Task.details);
    console.log("Task Priority: " + this.Task.priority);
    console.log("Task Due Date: " + this.Task.due_date)

}

ngOnInit() {

}

public getTasks(TaskList: Task[]) { //This function will call the backend and get the list from the back end.
    this.taskService.listTasks().subscribe(
        () => { 
            for (let i of TaskList) {
                
            }

        },
        (error) => { alert("Unfortunately, we could not retrieve your tasks.")}
    );
}

public goBack() { //function for the back button in the action bar.
    this.routerExtensions.backToPreviousPage();
    console.log("Returned to previous page");
}




}
   

   
