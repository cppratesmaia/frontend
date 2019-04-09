import { Component, ChangeDetectionStrategy, OnInit, SystemJsNgModuleLoader } from "@angular/core";
import { Task } from "../shared/tasks/task.model";
import { TaskService } from "../shared/tasks/task.service";
import { TextField } from "tns-core-modules/ui/text-field";
import { RouterExtensions } from "nativescript-angular/router";


@Component({
    selector: "tasklist",
    templateUrl:"tasklist/tasklist1.component.html",
    styleUrls: ["tasklist/tasklist.component.css"],
    providers: [TaskService]
})

export class TaskListComponent implements OnInit {
    TaskList: Array<Task> = []; //Array for Task objects we've imported
    Task: Task; //This is the task object we imported

    tasklist: Task[] = []; //This array should hold the tasks for the list

    public taskTitleTextField: string = ""; //This is the string that will hold the information in the text field. 

    public detailsTextField: string = "";

    public priorityTextField: string = "";

    public dueDateTextField: string = "";

public onTextChange(args) {
let textField = <TextField>args.object;

let taskTitleTextField = <TextField>args.object;
let detailsTextField = <TextField>args.object;
let priorityTextField = <TextField>args.object;
let dueDateTextField = <TextField>args.object;


console.log("onTextChange");
this.taskTitleTextField = textField.text;
}

public onReturn(args) {
    let textField = <TextField>args.object;

        console.log("onReturn");
        this.taskTitleTextField = textField.text;
}

public showAlert(result) {
    alert("Text: " + result);
}

public submit(result) {
    alert("Text: " + result);
}

constructor(private taskService: TaskService, private routerExtensions: RouterExtensions) {
    /*this.task = new task(); */
    this.Task = new Task(); //Initializes a Task object when the page boots up
    this.TaskList.push({ title: "Hello and Welcome to the TaskList", complete: false, start_date: new Date });
    this.TaskList.push({ title: "Here is where you can keep track of your tasks", complete: false, start_date: new Date});
    this.TaskList.push({ title: "Try adding a Task of your choice", complete: false, start_date: new Date});

}

addTask() {
    this.Task = new Task(); //initializes a new Task object

    this.Task.title = this.taskTitleTextField; //the string passed into the textfield on the page becomes the Task's title
    console.log("Task Title: " + this.Task.title);
    /*
    this.Task.complete = false; //The tasks complete status is set to false
    console.log("An incomplete Task has been added.")
    */
    this.Task.start_date = new Date(); //Gives the task start date the current date.
    console.log("Date Added: " + this.Task.start_date);
    
    this.taskService.createTask({
        title: this.taskTitleTextField,
        details: "",
        priority: "low",
        complete: false,
        due_date: null,
        start_date: new Date()
    }).subscribe(  //This should push the Task to Backend
        () => console.log("A task has been created"),
        (error) => alert("Unfortunately, the task could not be created.")
    ); 
    this.TaskList.push(this.Task);
    console.log("Task has been added to the TaskList");    

}

ngOnInit() {


}

public getTasks(TaskList: Array<Task> = []) { //This function will call the backend and get the list from the back end.
  
}

public goBack() { //function for the back button in the action bar.
    this.routerExtensions.backToPreviousPage();
    console.log("Returned to previous page");
}




}
   

   
