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
import { commonService } from 'app/services/common/common.service'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-dashboard',
  templateUrl: './dashboard.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dashboardComponent {
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
      this.sd_imH3AoM9XGlQ5uE4(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_imH3AoM9XGlQ5uE4(bh) {
    try {
      bh = this.sd_QEeg4vhV6ENeW6wG(bh);
      //appendnew_next_sd_imH3AoM9XGlQ5uE4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_imH3AoM9XGlQ5uE4');
    }
  }

  logout(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_hFWmBcP0nFFc7Br3(bh);
      //appendnew_next_logout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RY3P8GIksGG36bCG');
    }
  }

  //appendnew_flow_dashboardComponent_start

  sd_QEeg4vhV6ENeW6wG(bh) {
    try {
      bh = this.sd_LNhQZROudzXjYNoV(bh);
      //appendnew_next_sd_QEeg4vhV6ENeW6wG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QEeg4vhV6ENeW6wG');
    }
  }

  sd_LNhQZROudzXjYNoV(bh) {
    try {
      this.page.profileData = JSON.parse(localStorage.getItem('profileData'));

      bh = this.sd_8B34EEwH45rbqHSU(bh);
      //appendnew_next_sd_LNhQZROudzXjYNoV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LNhQZROudzXjYNoV');
    }
  }

  sd_8B34EEwH45rbqHSU(bh) {
    try {
      const page = this.page;
      page.profileName = page.profileData.name;

      bh = this.sd_RVuoDJ6LPooRMX5H(bh);
      //appendnew_next_sd_8B34EEwH45rbqHSU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8B34EEwH45rbqHSU');
    }
  }

  sd_RVuoDJ6LPooRMX5H(bh) {
    try {
      this.page.services = this.__page_injector__.get(commonService);

      bh = this.sd_nCpQYtSpFhKAxJCk(bh);
      //appendnew_next_sd_RVuoDJ6LPooRMX5H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RVuoDJ6LPooRMX5H');
    }
  }

  sd_nCpQYtSpFhKAxJCk(bh) {
    try {
      const page = this.page;
      console.log(page.services);

      //appendnew_next_sd_nCpQYtSpFhKAxJCk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nCpQYtSpFhKAxJCk');
    }
  }

  sd_hFWmBcP0nFFc7Br3(bh) {
    try {
      localStorage.clear();

      bh = this.sd_aSE5l6SokitW1YQW(bh);
      //appendnew_next_sd_hFWmBcP0nFFc7Br3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hFWmBcP0nFFc7Br3');
    }
  }

  async sd_aSE5l6SokitW1YQW(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);

      //appendnew_next_sd_aSE5l6SokitW1YQW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aSE5l6SokitW1YQW');
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
  //appendnew_flow_dashboardComponent_Catch
}
