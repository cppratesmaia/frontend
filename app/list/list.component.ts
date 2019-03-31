import { Component, OnInit } from "@angular/core";
import { TaskService } from "~/shared/tasks/task.service";
import { first } from "rxjs/operators";
import { Task } from "~/shared/tasks/task.model";
import { Affirmation } from "~/shared/tasks/affirmation.model";

@Component({
  selector: "List",
  templateUrl: "list/list.component.html",
  styleUrls: ["list/list.component.css"]
})
export class ListComponent implements OnInit {

  taskList: Task[] = [];
  task: Task;
  affirmation: Affirmation;

  constructor(private _taskService: TaskService) {
    this.task = new Task();
    this.affirmation = new Affirmation();
  }

  getAffirmation(task: Task) {
    console.log(task._id);
    this._taskService.getAffirmation(task, (data) => {
      // const response = JSON.parse(data._body.toString());
      alert(data._body.assertion);
      console.log(data._body.assertion);
    });
    // .subscribe(
    //   () => { //Success
    //     alert(this.task.title);
    //   }, //Failure
    //   () => alert("I take good care of my body.")
    // );
  }

  ngOnInit(): void {
    // Load tasks on initialization. It's being used on ngFor in list.component.html
    this._taskService.listTasks().pipe().subscribe(tasks => this.taskList = tasks);
  }
}
// create() {
  //   // Create task is hardcoded for test purposes
  //   console.log("creating"); // Test
  //   this._taskService.createTask({
  //     title: "walk outside",
  //     details: "out",
  //     priority: "high",
  //     complete: true,
  //     due_date: new Date(),
  //     start_date: new Date()
  //   }).subscribe((task) => {
  //     console.log(task); // Test
  //   });
  // }
