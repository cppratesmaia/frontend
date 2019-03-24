export class Task {
    _id?: string;
    title: string;
    details?: string;
    priority?: string;
    start_date: Date;
    due_date?: Date;
    complete: Boolean;
}