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
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-periodicData',
  templateUrl: './periodicData.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class periodicDataComponent {
  @Input('perisodicdataFromParent')
  public perisodicdataFromParent: any = [];
  @Output('emitAddedElement')
  public emitAddedElement: any = new EventEmitter<any>();
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
      this.sd_Jj6GGAudatJvST3E(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Jj6GGAudatJvST3E(bh) {
    try {
      bh = this.sd_mVMkaTL5MGd4jWR0(bh);
      //appendnew_next_sd_Jj6GGAudatJvST3E
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Jj6GGAudatJvST3E');
    }
  }

  addedElement(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.notifyParams(bh);
      //appendnew_next_addedElement
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WvsByWChfmNP5Bxs');
    }
  }

  removeElement(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_gyhMXPtQjzirgx1B(bh);
      //appendnew_next_removeElement
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HmjEyzJ1ED51dICV');
    }
  }

  //appendnew_flow_periodicDataComponent_start

  sd_mVMkaTL5MGd4jWR0(bh) {
    try {
      bh = this.sd_lPD6nGFo1KX67VDZ(bh);
      //appendnew_next_sd_mVMkaTL5MGd4jWR0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mVMkaTL5MGd4jWR0');
    }
  }

  sd_lPD6nGFo1KX67VDZ(bh) {
    try {
      const page = this.page;
      page.receivedData = bh.pageInput.perisodicdataFromParent;

      //appendnew_next_sd_lPD6nGFo1KX67VDZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lPD6nGFo1KX67VDZ');
    }
  }

  notifyParams(bh) {
    try {
      const page = this.page;
      page.newElement = {
        position: 11,
        name: 'calcium',
        weight: 20.1797,
        symbol: 'Ca',
      };

      this.emitAddedElement.emit(page.newElement);

      //appendnew_next_notifyParams
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fvjVR60ASqrlFlk9');
    }
  }

  sd_gyhMXPtQjzirgx1B(bh) {
    try {
      const page = this.page;
      page.alertMessages = 'this data is received' + page.receivedData[0].name;

      console.log(page.receivedData);

      bh = this.sd_lGbqdR02HdA5SE97(bh);
      //appendnew_next_sd_gyhMXPtQjzirgx1B
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gyhMXPtQjzirgx1B');
    }
  }

  sd_lGbqdR02HdA5SE97(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(this.page.alertMessages, 'ok', {
          duration: 5000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });

      //appendnew_next_sd_lGbqdR02HdA5SE97
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lGbqdR02HdA5SE97');
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
  //appendnew_flow_periodicDataComponent_Catch
}
