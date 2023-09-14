/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  ViewChild,
  ViewChildren,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-CreateBook',
  templateUrl: './CreateBook.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class CreateBookComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_N5lo0tGXc69EEuXB(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_N5lo0tGXc69EEuXB(bh) {
    try {
      bh = this.sd_FYmeVmCKoz3mMtFL(bh);
      //appendnew_next_sd_N5lo0tGXc69EEuXB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_N5lo0tGXc69EEuXB');
    }
  }

  printName(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      this.sd_PkGgTSK3u6xdUVPx(bh);
      //appendnew_next_printName
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yVT5zT5AdDOQIzwv');
    }
  }

  //appendnew_flow_CreateBookComponent_start

  sd_FYmeVmCKoz3mMtFL(bh) {
    try {
      //appendnew_next_sd_FYmeVmCKoz3mMtFL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FYmeVmCKoz3mMtFL');
    }
  }

  sd_PkGgTSK3u6xdUVPx(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.name);

      //appendnew_next_sd_PkGgTSK3u6xdUVPx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PkGgTSK3u6xdUVPx');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_CreateBookComponent_Catch
}
