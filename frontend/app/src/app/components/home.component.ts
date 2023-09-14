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
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
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
      this.sd_RIoaVfkrcZrxbmoP(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_RIoaVfkrcZrxbmoP(bh) {
    try {
      bh = this.sd_GgcaGXIiKMUf5pAI(bh);
      //appendnew_next_sd_RIoaVfkrcZrxbmoP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RIoaVfkrcZrxbmoP');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_GgcaGXIiKMUf5pAI(bh) {
    try {
      this.page.hidePerson = false;
      this.page.persons = this.page.persons;

      bh = this.sd_FlEaTyzv0KkfZPV8(bh);
      //appendnew_next_sd_GgcaGXIiKMUf5pAI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GgcaGXIiKMUf5pAI');
    }
  }

  sd_FlEaTyzv0KkfZPV8(bh) {
    try {
      const page = this.page;
      page.persons = [
        { name: 'gopal', email: 'gopal@gmail.com' },
        { name: 'krishna', email: 'krishna@gmail.com' },
        { name: 'user1', email: 'user1@gmail.com' },
      ];

      //appendnew_next_sd_FlEaTyzv0KkfZPV8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FlEaTyzv0KkfZPV8');
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
  //appendnew_flow_homeComponent_Catch
}
