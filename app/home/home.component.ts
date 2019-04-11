import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Task } from "~/shared/tasks/task.model";
import { TaskService } from "~/shared/tasks/task.service";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";
import { GestureEventData } from "tns-core-modules/ui/gestures/gestures";
import { first } from "rxjs/operators";
import { Subscription } from "rxjs";

@Component({
  selector: "home",
  templateUrl: "home/home.component.html",
  styleUrls: ["home/home.component.css"]
})

export class HomeComponent implements OnInit, OnDestroy {
  taskOfTheDay: TaskView;
  taskList: Task[] = [];
  task: Task;
  private _sub: Subscription;

  public tabSelectedIndex: number;
  public tabSelectedIndexResult: string;

  constructor(private router: Router, private _taskService: TaskService) {
    this.tabSelectedIndex = 0;
    this.tabSelectedIndexResult = "Profile Tab (tabSelectedIndex = 0 )";

    this._sub = this._taskService.taskListUpdates.subscribe(task => this.loadTasks());
  }

  async ngOnInit() {
    this.loadTasks();
  }

  public createTask() {
    this._taskService.createTask(this.task)
      .subscribe(
        () => this.router.navigate(["list"]),
        (error) => alert("Server error.")

      );
  }

  public onDateSelected(args) {
    this.router.navigate(["list"], { state: args.date });

  }

  public onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
    if (args.oldIndex !== -1) {
      const newIndex = args.newIndex;
      if (newIndex === 0) {
        this.tabSelectedIndexResult = "Profile Tab (tabSelectedIndex = 0 )";
        // alert("Changed");
      } else if (newIndex === 1) {
        this.tabSelectedIndexResult = "Stats Tab (tabSelectedIndex = 1 )";
      } else if (newIndex === 2) {
        this.tabSelectedIndexResult = "Settings Tab (tabSelectedIndex = 2 )";
      }
    }
  }

  public onTapCreate(args: GestureEventData) {
    console.log("tap");
  }

  private loadTasks() {
    // forces the date to be current and set to midnight
    const from = new Date();
    from.setHours(0, 0, 0, 0);
    const to = new Date();
    to.setHours(0, 0, 0, 0);
    to.setDate(from.getDate() + 1);

    // Load tasks on initialization. It's being used by ngFor in home.component.html
    this._taskService.listTasksByQuery(from, to).pipe(first()).subscribe(async tasks => {

      // check if tasks exist for this date
      if (tasks && tasks.length > 0) {

        // chou...
        const sortedTasks = tasks.sort((t1, t2) => {
          if (t1.priority.toLowerCase() === "high") {
            return -1;
          } else if (t1.priority.toLowerCase() === "medium" && t2.priority.toLowerCase() !== "high") {
            return -1;
          } else {
            return 1;
          }
        });

        const firstTask = sortedTasks[0];
        const aff = await this._taskService.getAffirmation(firstTask);
        this.taskOfTheDay = {
          title: firstTask.title,
          priority: firstTask.priority ? firstTask.priority.toLowerCase() : 'low',
          affirmation: aff.assertion
        }

        this.taskList = sortedTasks.slice(1);

      }
    });

  }


  ngOnDestroy() {
    this._sub.unsubscribe();
  }

}

class TaskView {
  title: string;
  priority: string;
  affirmation: string;
}