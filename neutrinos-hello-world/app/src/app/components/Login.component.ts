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
import { ActivatedRoute, Router } from '@angular/router'; //_splitter_
import { name } from 'app/sd-services/name'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Login',
  templateUrl: './Login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class LoginComponent {
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
      this.sd_OhCfMA33S78Exkc6(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_OhCfMA33S78Exkc6(bh) {
    try {
      bh = this.sd_YG9IAyr62PNvLvDi(bh);
      //appendnew_next_sd_OhCfMA33S78Exkc6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OhCfMA33S78Exkc6');
    }
  }

  navigateHome(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_e64KbvINlmwXq3iJ(bh);
      //appendnew_next_navigateHome
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_r8ocQf6FSHqVyIYX');
    }
  }

  callGetMyName(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_K9Q2yPpmPECCeZ2s(bh);
      //appendnew_next_callGetMyName
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hUDPJCKB2xrc3bbX');
    }
  }

  //appendnew_flow_LoginComponent_start

  sd_YG9IAyr62PNvLvDi(bh) {
    try {
      bh = this.sd_BEc0b0gDs9dfYbuI(bh);
      //appendnew_next_sd_YG9IAyr62PNvLvDi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YG9IAyr62PNvLvDi');
    }
  }

  sd_BEc0b0gDs9dfYbuI(bh) {
    try {
      const route = this.__page_injector__.get(ActivatedRoute);
      bh.local.query = route.snapshot.queryParams;

      bh = this.sd_xADQlpZHFKLSuVia(bh);
      //appendnew_next_sd_BEc0b0gDs9dfYbuI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BEc0b0gDs9dfYbuI');
    }
  }

  sd_xADQlpZHFKLSuVia(bh) {
    try {
      const page = this.page;
      console.log(bh.local.query);

      //appendnew_next_sd_xADQlpZHFKLSuVia
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xADQlpZHFKLSuVia');
    }
  }

  async sd_e64KbvINlmwXq3iJ(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);

      //appendnew_next_sd_e64KbvINlmwXq3iJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_e64KbvINlmwXq3iJ');
    }
  }

  async sd_K9Q2yPpmPECCeZ2s(bh) {
    try {
      const nameInstance: name = this.__page_injector__.get(name);

      let outputVariables = await nameInstance.getMyName();
      this.page.name = outputVariables.local.name;

      //appendnew_next_sd_K9Q2yPpmPECCeZ2s
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_K9Q2yPpmPECCeZ2s');
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
  //appendnew_flow_LoginComponent_Catch
}
