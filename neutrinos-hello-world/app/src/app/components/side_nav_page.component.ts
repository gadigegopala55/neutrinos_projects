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
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-side_nav_page',
  templateUrl: './side_nav_page.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class side_nav_pageComponent {
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
      this.sd_yNPhdWkOt27WU7MK(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_yNPhdWkOt27WU7MK(bh) {
    try {
      bh = this.sd_pYpfB1RA9cpatFzi(bh);
      //appendnew_next_sd_yNPhdWkOt27WU7MK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yNPhdWkOt27WU7MK');
    }
  }

  submitdata(path: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { path: path };
      bh.local = {};

      bh = this.sd_54B1YI8jxEbq6HFG(bh);
      //appendnew_next_submitdata
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UZ0JkxyHYCvK0zi8');
    }
  }

  //appendnew_flow_side_nav_pageComponent_start

  sd_pYpfB1RA9cpatFzi(bh) {
    try {
      bh = this.sd_ZCyhaHsxxE5F5Swf(bh);
      //appendnew_next_sd_pYpfB1RA9cpatFzi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pYpfB1RA9cpatFzi');
    }
  }

  sd_ZCyhaHsxxE5F5Swf(bh) {
    try {
      const page = this.page;
      page.sidenavlist = [
        {
          name: 'card-task',
          value: 'side-nav-page/card-task',
          icon: 'list',
        },
        {
          name: 'create-book',
          value: 'side-nav-page/create-book',
          icon: 'add',
        },
      ];

      //appendnew_next_sd_ZCyhaHsxxE5F5Swf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZCyhaHsxxE5F5Swf');
    }
  }

  async sd_54B1YI8jxEbq6HFG(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj(bh.input.path);
      this.page.response = await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);

      //appendnew_next_sd_54B1YI8jxEbq6HFG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_54B1YI8jxEbq6HFG');
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
  //appendnew_flow_side_nav_pageComponent_Catch
}
