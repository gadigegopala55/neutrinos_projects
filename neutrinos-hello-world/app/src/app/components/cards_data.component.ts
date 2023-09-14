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
import { books } from 'app/sd-services/books'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-cards_data',
  templateUrl: './cards_data.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class cards_dataComponent {
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
      this.sd_g9hnv2ExJaXjQqyI(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_g9hnv2ExJaXjQqyI(bh) {
    try {
      bh = this.sd_QpCgmf1nPlQh0X3z(bh);
      //appendnew_next_sd_g9hnv2ExJaXjQqyI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_g9hnv2ExJaXjQqyI');
    }
  }

  //appendnew_flow_cards_dataComponent_start

  sd_QpCgmf1nPlQh0X3z(bh) {
    try {
      bh = this.sd_17WPiUzt6PgNxk7E(bh);
      //appendnew_next_sd_QpCgmf1nPlQh0X3z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QpCgmf1nPlQh0X3z');
    }
  }

  async sd_17WPiUzt6PgNxk7E(bh) {
    try {
      const booksInstance: books = this.__page_injector__.get(books);

      let outputVariables = await booksInstance.getShips();
      this.page.response = outputVariables.local.response;

      //appendnew_next_sd_17WPiUzt6PgNxk7E
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_17WPiUzt6PgNxk7E');
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
  //appendnew_flow_cards_dataComponent_Catch
}
