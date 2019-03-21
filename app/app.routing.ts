import { LoginComponent } from "./login/login.component";
import { ListComponent } from "./list/list.component";
import { HomeComponent } from "./home/home.component";

 
export const routes = [
    { path: "", component: LoginComponent },
    { path: "list", component: ListComponent },
    { path: "home", component: HomeComponent }
    
];

export const navigatableComponents = [
    LoginComponent,
    ListComponent,
    HomeComponent
];