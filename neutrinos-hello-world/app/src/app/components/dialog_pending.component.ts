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
  selector: 'bh-dialog_pending',
  templateUrl: './dialog_pending.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dialog_pendingComponent {
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
      this.sd_EALw0ltZxiH03gLi(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_EALw0ltZxiH03gLi(bh) {
    try {
      bh = this.sd_1Bd3bZTJ4WpJWkZq(bh);
      //appendnew_next_sd_EALw0ltZxiH03gLi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EALw0ltZxiH03gLi');
    }
  }

  positiveAction(status = true, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { status: status };
      bh.local = {};

      bh = this.sd_yIlcVpAiiUOJlHnG(bh);
      //appendnew_next_positiveAction
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e9PQwRgddceGysVi');
    }
  }

  negativeAction(status = false, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { status: status };
      bh.local = {};

      bh = this.sd_yIlcVpAiiUOJlHnG(bh);
      //appendnew_next_negativeAction
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w3VDSnf8VRPfCpoG');
    }
  }

  //appendnew_flow_dialog_pendingComponent_start

  sd_1Bd3bZTJ4WpJWkZq(bh) {
    try {
      bh = this.sd_dpJ6aPojv0KiZ0zs(bh);
      //appendnew_next_sd_1Bd3bZTJ4WpJWkZq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1Bd3bZTJ4WpJWkZq');
    }
  }

  sd_dpJ6aPojv0KiZ0zs(bh) {
    try {
      const page = this.page;
      page.status_a = ['Pending', 'InProgress', 'Completed'];

      bh = this.sd_tEdD3X6E66080foQ(bh);
      //appendnew_next_sd_dpJ6aPojv0KiZ0zs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dpJ6aPojv0KiZ0zs');
    }
  }

  sd_tEdD3X6E66080foQ(bh) {
    try {
      this.page.data = this.__page_injector__.get(MAT_DIALOG_DATA);

      //appendnew_next_sd_tEdD3X6E66080foQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tEdD3X6E66080foQ');
    }
  }

  sd_yIlcVpAiiUOJlHnG(bh) {
    try {
      const page = this.page;
      console.log(bh.input.status);

      page.result = {
        status: bh.input.status,
        status_b: page.status_b,
      };
      // page.status = bh.input.status;

      console.log(page.result);

      bh = this.sd_k8MO2C8QYOf0SaGL(bh);
      //appendnew_next_sd_yIlcVpAiiUOJlHnG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yIlcVpAiiUOJlHnG');
    }
  }

  sd_k8MO2C8QYOf0SaGL(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.result);

      //appendnew_next_sd_k8MO2C8QYOf0SaGL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_k8MO2C8QYOf0SaGL');
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
  //appendnew_flow_dialog_pendingComponent_Catch
}
