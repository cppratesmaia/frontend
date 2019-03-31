import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Task } from "~/shared/tasks/task.model";
import { TaskService } from "~/shared/tasks/task.service";
import { Affirmation } from "~/shared/tasks/affirmation.model";

@Component({
  selector: "Home",
  providers: [TaskService],
  templateUrl: "home/home.component.html",
  styleUrls: ["home/home.component.css"]
})

export class HomeComponent implements OnInit {

  ngOnInit(): void {
    this.getAllTasks();
  }

  affirmation: Affirmation;
  task: Task;
  title: string;
  taskList: Task[];

  constructor(private router: Router, private _taskService: TaskService) {
    this.task = new Task();
    this.affirmation = new Affirmation();
  }

  getAffirmation() {
    this._taskService.createTask(this.task)
      .subscribe(
        () => this.router.navigate(["list"]),
        (error) => alert("On It Bot is busy. Come back later.")
      );

    this.getAllTasks();
    console.log(this.task._id);
  }

  getAllTasks() {
    this._taskService.listTasks().pipe().subscribe(tasks => this.taskList = tasks);
  }



}