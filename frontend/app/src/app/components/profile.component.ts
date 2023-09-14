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
  selector: 'bh-profile',
  templateUrl: './profile.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class profileComponent {
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
      this.sd_EYdfdn1o7ZbUT0EQ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_EYdfdn1o7ZbUT0EQ(bh) {
    try {
      bh = this.sd_Y3b5vEOwmisy0wBW(bh);
      //appendnew_next_sd_EYdfdn1o7ZbUT0EQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EYdfdn1o7ZbUT0EQ');
    }
  }

  user_register(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_sAGOYgKA8tjieaW9(bh);
      //appendnew_next_user_register
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gDLeDRQJ4HnMRVmD');
    }
  }

  //appendnew_flow_profileComponent_start

  sd_Y3b5vEOwmisy0wBW(bh) {
    try {
      bh = this.sd_G3Ykgx9MpvgSfLpV(bh);
      //appendnew_next_sd_Y3b5vEOwmisy0wBW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Y3b5vEOwmisy0wBW');
    }
  }

  sd_G3Ykgx9MpvgSfLpV(bh) {
    try {
      this.page.fb = this.__page_injector__.get(FormBuilder);

      bh = this.sd_d43zNU09sQ3QupBk(bh);
      //appendnew_next_sd_G3Ykgx9MpvgSfLpV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_G3Ykgx9MpvgSfLpV');
    }
  }

  sd_d43zNU09sQ3QupBk(bh) {
    try {
      this.page.result = JSON.parse(localStorage.getItem('profileData'));

      bh = this.sd_Ih2g6ZCoPetDEiJu(bh);
      //appendnew_next_sd_d43zNU09sQ3QupBk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_d43zNU09sQ3QupBk');
    }
  }

  sd_Ih2g6ZCoPetDEiJu(bh) {
    try {
      const page = this.page;
      console.log(page.result);
      page.registerForm = page.fb.group({
        name: page.result.name,
        password: page.result.password,
        phone: page.result.phone,
        email: page.result.email,
        date: page.result.date,
      });

      //appendnew_next_sd_Ih2g6ZCoPetDEiJu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ih2g6ZCoPetDEiJu');
    }
  }

  sd_sAGOYgKA8tjieaW9(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Profile Updated Successfully', 'ok', {
          duration: 5000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });

      bh = this.sd_isHNj9TGEbYuYJxu(bh);
      //appendnew_next_sd_sAGOYgKA8tjieaW9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sAGOYgKA8tjieaW9');
    }
  }

  sd_isHNj9TGEbYuYJxu(bh) {
    try {
      localStorage.setItem(
        'profileData',
        JSON.stringify(this.page.registerForm.value)
      );

      bh = this.sd_yxiuFOWhcrcGEMmM(bh);
      //appendnew_next_sd_isHNj9TGEbYuYJxu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_isHNj9TGEbYuYJxu');
    }
  }

  async sd_yxiuFOWhcrcGEMmM(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);

      //appendnew_next_sd_yxiuFOWhcrcGEMmM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yxiuFOWhcrcGEMmM');
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
  //appendnew_flow_profileComponent_Catch
}
