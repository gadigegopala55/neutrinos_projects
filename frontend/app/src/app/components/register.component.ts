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
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-register',
  templateUrl: './register.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class registerComponent {
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
      this.sd_9Ea9DqvcHbjjS9A4(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_9Ea9DqvcHbjjS9A4(bh) {
    try {
      bh = this.sd_956CRtryiCvdbTP3(bh);
      //appendnew_next_sd_9Ea9DqvcHbjjS9A4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9Ea9DqvcHbjjS9A4');
    }
  }

  user_register(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_UndygyS9R5miEbuA(bh);
      //appendnew_next_user_register
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AK0neOFquZWv1Spp');
    }
  }

  //appendnew_flow_registerComponent_start

  sd_956CRtryiCvdbTP3(bh) {
    try {
      bh = this.sd_ffWBRfvHiN6Q4eSU(bh);
      //appendnew_next_sd_956CRtryiCvdbTP3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_956CRtryiCvdbTP3');
    }
  }

  sd_ffWBRfvHiN6Q4eSU(bh) {
    try {
      this.page.fb = this.__page_injector__.get(FormBuilder);

      bh = this.sd_TfSnUtZidZe9uVYI(bh);
      //appendnew_next_sd_ffWBRfvHiN6Q4eSU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ffWBRfvHiN6Q4eSU');
    }
  }

  sd_TfSnUtZidZe9uVYI(bh) {
    try {
      const page = this.page;
      page.registerForm = page.fb.group({
        name: [''],
        password: [''],
        phone: [''],
        email: [''],
        date: [''],
      });

      //appendnew_next_sd_TfSnUtZidZe9uVYI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TfSnUtZidZe9uVYI');
    }
  }

  sd_UndygyS9R5miEbuA(bh) {
    try {
      const page = this.page;
      console.log(page.registerForm.value);

      bh = this.sd_5doCEjACcHfg0p7t(bh);
      //appendnew_next_sd_UndygyS9R5miEbuA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UndygyS9R5miEbuA');
    }
  }

  sd_5doCEjACcHfg0p7t(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Registered successfully', 'ok', {
          duration: 5000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });

      bh = this.sd_UckfEkgWOrv0l3cF(bh);
      //appendnew_next_sd_5doCEjACcHfg0p7t
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5doCEjACcHfg0p7t');
    }
  }

  sd_UckfEkgWOrv0l3cF(bh) {
    try {
      localStorage.setItem(
        'profileData',
        JSON.stringify(this.page.registerForm.value)
      );

      bh = this.sd_KT12ia5vf9EfANS0(bh);
      //appendnew_next_sd_UckfEkgWOrv0l3cF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UckfEkgWOrv0l3cF');
    }
  }

  async sd_KT12ia5vf9EfANS0(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);

      //appendnew_next_sd_KT12ia5vf9EfANS0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KT12ia5vf9EfANS0');
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
  //appendnew_flow_registerComponent_Catch
}
