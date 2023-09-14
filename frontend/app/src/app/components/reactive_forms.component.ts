/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-reactive_forms',
  templateUrl: './reactive_forms.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class reactive_formsComponent {
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
      this.sd_4eVTQ5FuJ1mw6meh(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_4eVTQ5FuJ1mw6meh(bh) {
    try {
      bh = this.sd_Emw4bx2BQQqdgjk1(bh);
      //appendnew_next_sd_4eVTQ5FuJ1mw6meh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4eVTQ5FuJ1mw6meh');
    }
  }

  formSubmit(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_uekKrAzS8TUN1eQJ(bh);
      //appendnew_next_formSubmit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z4uhoLwdVfLXXDgy');
    }
  }

  //appendnew_flow_reactive_formsComponent_start

  sd_Emw4bx2BQQqdgjk1(bh) {
    try {
      bh = this.form(bh);
      //appendnew_next_sd_Emw4bx2BQQqdgjk1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Emw4bx2BQQqdgjk1');
    }
  }

  form(bh) {
    try {
      this.page.fb = this.__page_injector__.get(FormBuilder);

      bh = this.sd_fScgYPt0I6LccCaR(bh);
      //appendnew_next_form
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_swf6mfkkYCtmX8en');
    }
  }

  sd_fScgYPt0I6LccCaR(bh) {
    try {
      const page = this.page;
      page.registrationform = page.fb.group({
        firstName: [''],
        lastName: [''],
      });

      //appendnew_next_sd_fScgYPt0I6LccCaR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fScgYPt0I6LccCaR');
    }
  }

  sd_uekKrAzS8TUN1eQJ(bh) {
    try {
      const page = this.page;
      console.log(page.registrationform.valid);

      bh = this.sd_f6pK5BjeskMK584K(bh);
      //appendnew_next_sd_uekKrAzS8TUN1eQJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uekKrAzS8TUN1eQJ');
    }
  }

  sd_f6pK5BjeskMK584K(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Registration successfull', 'ok', {
          duration: 5000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });

      //appendnew_next_sd_f6pK5BjeskMK584K
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f6pK5BjeskMK584K');
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
  //appendnew_flow_reactive_formsComponent_Catch
}
