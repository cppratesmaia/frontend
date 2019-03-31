import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Task } from "../shared/tasks/task.model";
import { TaskService } from "../shared/tasks/task.service";
import { TextField } from "tns-core-modules/ui/text-field";



@Component({
    selector: "notes",
    providers: [TaskService],
    templateUrl: "notes/notes.component.html",
    styleUrls: ["notes/notes.component.css"]

})

export class NotesComponent implements OnInit { //
notesList: Array<Task> = []; //This array will hold the tasks added to the page
notes = "";
task: Task;

@ViewChild("notesTextField") notesTextField: ElementRef;

constructor(private taskService: TaskService) {

}

add() {
    if(this.notes.trim() === ""){
        alert("Enter a note");
        return;
    }
    //This will dismiss the keyboard
    let textField = <TextField>this.notesTextField.nativeElement;
    textField.dismissSoftInput();

    this.taskService.createTask(this.task); 
    

}



ngOnInit() { //These are sample notes
    //this.notesList.push({ name: "Here is the notes page"});
    //this.notesList.push({ name: "Here is an sample note"});
    //this.notesList.push({ name: "Here is another sample note"});
}




}