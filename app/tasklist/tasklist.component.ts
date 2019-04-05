import { Component, ChangeDetectionStrategy, OnInit, SystemJsNgModuleLoader } from "@angular/core";
import { Task } from "../shared/tasks/task.model";
import { TaskService } from "../shared/tasks/task.service";
import { TextField } from "tns-core-modules/ui/text-field";
import { toDate } from "@angular/common/src/i18n/format_date";
import { DatePicker } from "tns-core-modules/ui/date-picker/date-picker";

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
taskList: Array<task> = [];
task: task;

TaskList: Array<Task> = []; //Array for Task objects we've imported
Task: Task; //This this the task object we import



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

constructor(taskService: TaskService) {
    this.task = new task();
}

ngOnInit() {
    this.taskList.push({ name: "History Class" });
    this.taskList.push({ name: "Physics II Homework" });
    this.taskList.push({ name: "Physics Lab" });
}

//ngOnInit() {
  //  this.TaskList.push();
   // this.TaskList.push( { title: "History assigned Reading", complete: false, start_date: });
//}

add() { 
    this.taskList.push({ name: this.textField });
}

}
   

   
