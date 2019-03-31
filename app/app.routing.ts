import { LoginComponent } from "./login/login.component";
import { ListComponent } from "./list/list.component";
import { HomeComponent } from "./home/home.component";
import { NotesComponent } from "./notes/notes.component";
import { TaskListComponent } from "./tasklist/tasklist.component";

 
export const routes = [
    { path: "", component: LoginComponent },
    { path: "home", component: HomeComponent },
    { path: "list", component: ListComponent },
    { path: "notes", component: NotesComponent },
    { path: "tasklist", component: TaskListComponent }
    
];

export const navigatableComponents = [
    LoginComponent,
    ListComponent,
    HomeComponent,
    NotesComponent,
    TaskListComponent
];