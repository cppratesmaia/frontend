import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { Http, Headers } from '@angular/http';
import { Config } from '../config';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Affirmation } from './affirmation.model';
//
@Injectable()
export class TaskService {

    public taskListUpdates = new Subject<Task>();

    constructor(private _http: Http) { }

    // List all Tasks
    public listTasks(): Observable<Task[]> {
        const url = `${Config.apiUrl}/tasks`;
        return this._http.get(url, { headers: this._getHeaders() })
            .pipe(
                map(response => response.json() as Task[])
            );
    }

    // List Tasks by Due Date
    public listTasksByQuery(from: Date, to: Date): Observable<Task[]> {
        console.log(`querying tasks from ${from.toISOString()} to ${to.toISOString()}`)
        const url = `${Config.apiUrl}/tasks/search?due_date_from=${from.toISOString()}&due_date_to=${to.toISOString()}`;
        return this._http.get(url, { headers: this._getHeaders() })
            .pipe(
                map(response => response.json() as Task[])
            );

    }

    // Create new Task
    public createTask(task: Task): Observable<Task> {
        const url = `${Config.apiUrl}/tasks/create`;
        return this._http.post(url, task, { headers: this._getHeaders() })
            .pipe(
                map(response => {
                    const task = response.json() as Task;
                    this.taskListUpdates.next(task);
                    return task;
                })
            );
    }

    // Edit Task
    public editTask(task: Task): Observable<Task> {
        const url = `${Config.apiUrl}/tasks/${task._id}/edit`;
        return this._http.post(url, task, { headers: this._getHeaders() })
            .pipe(
                map(response => {
                    const task = response.json() as Task;
                    this.taskListUpdates.next(task);
                    return task;
                })
            );
    }

    // Delete Task
    public deleteTask(task: Task): Observable<any> {
        const url = `${Config.apiUrl}/tasks/${task._id}/delete`;
        return this._http.post(url, { headers: this._getHeaders() });
    }

    // Get Affirmation based on Task
    public getAffirmation(task: Task): Promise<Affirmation> {
        const url = `${Config.apiUrl}/tasks/${task._id}/assertion`;
        return this._http.get(url, { headers: this._getHeaders() })
            .pipe(
                map(response => response.json() as Affirmation)
            ).toPromise();
    }

    // Get User Token and pass it as authorization
    private _getHeaders(): Headers {
        let headers = new Headers();
        headers.append("Authorization", Config.token);
        return headers;
    }
}