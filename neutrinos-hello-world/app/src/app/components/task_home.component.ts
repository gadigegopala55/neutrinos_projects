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
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-task_home',
  templateUrl: './task_home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class task_homeComponent {
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
      this.sd_uzzxINf0hL5x0WmH(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_uzzxINf0hL5x0WmH(bh) {
    try {
      bh = this.sd_9JDEvlf78wBVWfW2(bh);
      //appendnew_next_sd_uzzxINf0hL5x0WmH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uzzxINf0hL5x0WmH');
    }
  }

  navigatePage(path: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { path: path };
      bh.local = {};

      bh = this.sd_HC7fJ6SfiDYEUCqW(bh);
      //appendnew_next_navigatePage
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JAZuDJGwbWnKKgx0');
    }
  }

  //appendnew_flow_task_homeComponent_start

  sd_9JDEvlf78wBVWfW2(bh) {
    try {
      bh = this.sd_e1fZZR3ADCXIDM0v(bh);
      //appendnew_next_sd_9JDEvlf78wBVWfW2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9JDEvlf78wBVWfW2');
    }
  }

  sd_e1fZZR3ADCXIDM0v(bh) {
    try {
      const page = this.page;
      page.items = [
        {
          name: 'Add Task',
          path: 'task-home/task-add',
          icon: 'library_add',
        },
        {
          name: 'Task Data',
          path: 'task-home/task-data',
          icon: 'view_list',
        },
      ];

      console.log(bh.system);

      //appendnew_next_sd_e1fZZR3ADCXIDM0v
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e1fZZR3ADCXIDM0v');
    }
  }

  async sd_HC7fJ6SfiDYEUCqW(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj(bh.input.path);
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_HC7fJ6SfiDYEUCqW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HC7fJ6SfiDYEUCqW');
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
  //appendnew_flow_task_homeComponent_Catch
}
