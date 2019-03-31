import { Component, OnInit } from "@angular/core";
import { TaskService } from "~/shared/tasks/task.service";
import { first } from "rxjs/operators";
import { Task } from "~/shared/tasks/task.model";

@Component({
  selector: "List",
  templateUrl: "list/list.component.html",
  styleUrls: ["list/list.component.css"]
})
export class ListComponent implements OnInit {//

  taskList: Task[] = []; //array for holding tasks

  constructor(private _taskService: TaskService) { }

  create() {
    // Create task is hardcoded for test purposes
    console.log("creating"); // Test
    this._taskService.createTask({
      title: "walk outside",
      details: "out",
      priority: "high",
      complete: true,
      due_date: new Date(),
      start_date: new Date()
    }).subscribe((task) => {
      console.log(task); // Test
    });
  }

  ngOnInit(): void {
    // Load tasks on initialization. It's being used on ngFor in html
    this._taskService.listTasks().pipe(first()).subscribe(
      tasks => this.taskList = tasks);
  }

}