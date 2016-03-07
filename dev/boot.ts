///<reference path="../typings/browser.d.ts"/>

import { bootstrap } from "angular2/platform/browser";
import { RootComponent } from "./root.component";

bootstrap(RootComponent, [])
  .catch(err => console.error(err));
