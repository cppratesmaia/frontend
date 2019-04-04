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

  constructor(private _taskService: TaskService) { }

  getAffirmation(task: Task) {
    this._taskService.getAffirmation(task)
      .subscribe(
        (affirmation) => {
          alert(affirmation.assertion);
        });
  }

  ngOnInit(): void {
    // Load tasks on initialization. It's being used by ngFor in list.component.html
    this._taskService.listTasks().pipe().subscribe(tasks => this.taskList = tasks);
  }
}

