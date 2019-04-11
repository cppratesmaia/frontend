import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";
import { TaskService } from "./shared/tasks/task.service";
import { UserService } from "./shared/user/user.service";
import { FloatBtnComponent } from "./float-btn.component";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptDateTimePickerModule } from "nativescript-datetimepicker/angular";
import { NativeScriptPickerModule } from "nativescript-picker/angular";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
    NativeScriptUIListViewModule,
    NativeScriptUICalendarModule,
    NativeScriptDateTimePickerModule,
    NativeScriptPickerModule
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