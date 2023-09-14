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
import { login } from 'app/sd-services/login'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-login',
  templateUrl: './login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loginComponent {
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
      this.sd_bbuuIY1MzVFKwsuL(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_bbuuIY1MzVFKwsuL(bh) {
    try {
      bh = this.sd_AKSZvDSUEuzEFnzg(bh);
      //appendnew_next_sd_bbuuIY1MzVFKwsuL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bbuuIY1MzVFKwsuL');
    }
  }

  user_login(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_LuBfMvQA7YF1UzUF(bh);
      //appendnew_next_user_login
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ouai0bQgSSydK3Ej');
    }
  }

  //appendnew_flow_loginComponent_start

  sd_AKSZvDSUEuzEFnzg(bh) {
    try {
      bh = this.sd_dlbaOrw8Z9e0cN0u(bh);
      //appendnew_next_sd_AKSZvDSUEuzEFnzg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AKSZvDSUEuzEFnzg');
    }
  }

  sd_dlbaOrw8Z9e0cN0u(bh) {
    try {
      this.page.fb = this.__page_injector__.get(FormBuilder);

      bh = this.sd_ZCbAKAbWGRtmuXMc(bh);
      //appendnew_next_sd_dlbaOrw8Z9e0cN0u
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dlbaOrw8Z9e0cN0u');
    }
  }

  sd_ZCbAKAbWGRtmuXMc(bh) {
    try {
      const page = this.page;
      page.loginForm = page.fb.group({
        username: [''],
        password: [''],
      });

      //appendnew_next_sd_ZCbAKAbWGRtmuXMc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZCbAKAbWGRtmuXMc');
    }
  }

  sd_LuBfMvQA7YF1UzUF(bh) {
    try {
      const page = this.page;
      console.log(page.loginForm.value);

      bh = this.sd_U8iWEyL85JkwwpL0(bh);
      //appendnew_next_sd_LuBfMvQA7YF1UzUF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LuBfMvQA7YF1UzUF');
    }
  }

  async sd_U8iWEyL85JkwwpL0(bh) {
    try {
      const loginInstance: login = this.__page_injector__.get(login);

      let outputVariables = await loginInstance.login(
        this.page.loginForm.value.username,
        this.page.loginForm.value.password,
        undefined
      );
      bh.response = outputVariables.input.response;

      bh = this.sd_V1PdmcqPHSMECTa9(bh);
      //appendnew_next_sd_U8iWEyL85JkwwpL0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_U8iWEyL85JkwwpL0');
    }
  }

  sd_V1PdmcqPHSMECTa9(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Login successful', 'ok', {
        duration: 5000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });

      bh = this.sd_7SG16pWVv2XRacoD(bh);
      //appendnew_next_sd_V1PdmcqPHSMECTa9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_V1PdmcqPHSMECTa9');
    }
  }

  async sd_7SG16pWVv2XRacoD(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);

      //appendnew_next_sd_7SG16pWVv2XRacoD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7SG16pWVv2XRacoD');
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
  //appendnew_flow_loginComponent_Catch
}
