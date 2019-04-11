import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";


import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";
import { TaskService } from "./shared/tasks/task.service";
import { UserService } from "./shared/user/user.service";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
    NativeScriptUIListViewModule,
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],
  providers: [
    TaskService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }