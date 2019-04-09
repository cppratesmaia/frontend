export class Task { //
    _id?: string;
    title: string; //title of the task
    details?: string;
    priority?: string;
    start_date: Date; //The task's start date
    due_date?: Date;
    complete: Boolean; //Boolean that determines if the task is complete or not.

}