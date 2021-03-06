import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule, XSRFStrategy, CookieXSRFStrategy } from '@angular/http';

import { DataService } from './data.service';
import { EnsureModuleLoadedOnceGuard } from "../shared/ensureModuleLoadedOnceGuard";
import { DataFilterService } from "./data-filter.service";
import { TrackByService } from "./trackby.service";
import { Sorter } from "./sorter";
import { ToastModule } from "./toast/toast.module";
import { ExceptionService } from "./index";
import { SpinnerModule } from "./spinner/spinner.module";

@NgModule({
  imports: [ HttpModule, ToastModule, SpinnerModule ],
  exports: [ ToastModule, SpinnerModule ],
  providers: [
    DataService,
    DataFilterService,
    Sorter,
    TrackByService,
    ExceptionService]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    //Ensure that CoreModule is only loaded into AppModule

  //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }  

}



