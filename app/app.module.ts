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
import { FloatBtnComponent } from "./float-btn.component";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
    NativeScriptUIListViewModule,
    NativeScriptUICalendarModule
  ],
  declarations: [
    AppComponent,
    FloatBtnComponent,
    ...navigatableComponents
  ],
  providers: [
    TaskService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }