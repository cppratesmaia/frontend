import { Component, ChangeDetectionStrategy, OnInit, SystemJsNgModuleLoader } from "@angular/core";
import { Task } from "../shared/tasks/task.model";
import { TaskService } from "../shared/tasks/task.service";
import { TextField } from "tns-core-modules/ui/text-field";
import { toDate } from "@angular/common/src/i18n/format_date";
import { DatePicker } from "tns-core-modules/ui/date-picker/date-picker";
import { RouterExtensions } from "nativescript-angular/router";

class task {
    name: string;
}


//let importantItems = ["Class", "math homework", "band", "geography homework", "group project", "programming homework"];

@Component({
    selector: "tasklist",
    templateUrl:"tasklist/tasklist.component.html",
    styleUrls: ["tasklist/tasklist.component.css"],
    providers: [TaskService]
})

export class TaskListComponent implements OnInit {
taskList: Array<task> = []; //Array for the task created in this class.
task: task; //This is the object we created in this class

TaskList: Array<Task> = []; //Array for Task objects we've imported
Task: Task; //This is the task object we imported

public textField: string = ""; //This is the string that will hold the information in the text field. 

public onTextChange(args) {
let textField = <TextField>args.object;

console.log("onTextChange");
this.textField = textField.text;
}

public onReturn(args) {
    let textField = <TextField>args.object;

        console.log("onReturn");
        this.textField = textField.text;
}
//
public showAlert(result) {
    alert("Text: " + result);
}

public submit(result) {
    alert("Text: " + result);
}

constructor(private taskService: TaskService, private routerExtensions: RouterExtensions) {
    /*this.task = new task(); */
    this.Task = new Task(); //Initializes a Task object when the page boots up
}

ngOnInit() {
    /*this.taskList.push({ name: "History Class" });
    this.taskList.push({ name: "Physics II Homework" });
    this.taskList.push({ name: "Physics Lab" });
    */

    this.TaskList.push({ title: "Hello and Welcome to the TaskList", complete: false, start_date: new Date });
    this.TaskList.push({ title: "Here is where you can keep track of your tasks", complete: false, start_date: new Date});
    this.TaskList.push({ title: "Try adding a Task of your choice", complete: false, start_date: new Date});
}

//ngOnInit() {
  //  this.TaskList.push();
   // this.TaskList.push( { title: "History assigned Reading", complete: false, start_date: });
//}


public goBack() { //function for the back button in the action bar.
    this.routerExtensions.backToPreviousPage();
}

add() { //code for the add button
    this.taskList.push({ name: this.textField });
}

addTask() {
       
    this.Task.title = this.textField; //the string passed into the textfield on the page becomes the Task's title
    console.log("Task Title: " + this.Task.title);

    this.Task.complete = false; //The tasks complete status is set to false
    console.log("An incomplete Task has been added.")

    this.Task.start_date = new Date();
    console.log("Date Added: " + this.Task.start_date);
    
    this.taskService.createTask(this.Task).subscribe(  //This should push the Task to Backend
        () => console.log("A task has been created"),
        (error) => alert("Unfortunately, the task could not be created.")
    ); 

    this.TaskList.push(this.Task);
    console.log("Task has been added to the TaskList");
    /*this.TaskList.push({ title: this.textField, complete: false, start_date: new Date});*/
    

}


}
   

   
