import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { Task } from "../shared/tasks/task.model";
import { TaskService } from "../shared/tasks/task.service";
import { TextField } from "tns-core-modules/ui/text-field"; 


class task {
    name: string;
}


//let importantItems = ["Class", "math homework", "band", "geography homework", "group project", "programming homework"];

@Component({
    selector: "tasklist",
    templateUrl:"tasklist/tasklist.component.html",
    styleUrls: ["tasklist/tasklist.component.css"],
})

export class TaskListComponent implements OnInit {
taskList: Array<task> = [];
task: task;
public textField: string = "";

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

public showAlert(result) {
    alert("Text: " + result);
}

public submit(result) {
    alert("Text: " + result);
}

constructor() {
    this.task = new task();
}

ngOnInit() {
    this.taskList.push({ name: "History Class" });
    this.taskList.push({ name: "Physics II Homework" });
    this.taskList.push({ name: "Physics Lab" });
}


add() { 
    this.taskList.push({ name: this.textField });
}

}
   

   
