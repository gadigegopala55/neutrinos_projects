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
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-dialog',
  templateUrl: './dialog.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dialogComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_xoUC6Am036LEwqSF(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_xoUC6Am036LEwqSF(bh) {
    try {
      bh = this.sd_veBkvyktcKx6aXr8(bh);
      //appendnew_next_sd_xoUC6Am036LEwqSF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xoUC6Am036LEwqSF');
    }
  }

  positiveAction(status = true, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { status: status };
      bh.local = {};

      bh = this.sd_3YSkajuRHz4sK12u(bh);
      //appendnew_next_positiveAction
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4mH4KnQln3RIEMFK');
    }
  }

  negativeAction(status = false, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { status: status };
      bh.local = {};

      bh = this.sd_3YSkajuRHz4sK12u(bh);
      //appendnew_next_negativeAction
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7SnGXWaGaRomBs0Z');
    }
  }

  //appendnew_flow_dialogComponent_start

  sd_veBkvyktcKx6aXr8(bh) {
    try {
      bh = this.sd_SEjGB16BWDokxETA(bh);
      //appendnew_next_sd_veBkvyktcKx6aXr8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_veBkvyktcKx6aXr8');
    }
  }

  sd_SEjGB16BWDokxETA(bh) {
    try {
      this.page.data = this.__page_injector__.get(MAT_DIALOG_DATA);

      //appendnew_next_sd_SEjGB16BWDokxETA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SEjGB16BWDokxETA');
    }
  }

  sd_3YSkajuRHz4sK12u(bh) {
    try {
      const page = this.page;
      console.log(bh.input.status);

      page.status = bh.input.status;

      bh = this.sd_vxhtcKqwpixPwt2Z(bh);
      //appendnew_next_sd_3YSkajuRHz4sK12u
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3YSkajuRHz4sK12u');
    }
  }

  sd_vxhtcKqwpixPwt2Z(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.status);

      //appendnew_next_sd_vxhtcKqwpixPwt2Z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vxhtcKqwpixPwt2Z');
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
  //appendnew_flow_dialogComponent_Catch
}
