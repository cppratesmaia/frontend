//main.ts is where the app starts when it opens in an emulator.
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { enableProdMode } from "@angular/core";

import { AppModule } from "./app.module";

enableProdMode();
platformNativeScriptDynamic().bootstrapModule(AppModule);