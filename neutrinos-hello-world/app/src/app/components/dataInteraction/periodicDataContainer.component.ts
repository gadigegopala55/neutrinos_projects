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
import { periodicDataComponent } from 'app/components/dataInteraction/periodicData.component'; //_splitter_
import { ActivatedRoute } from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-periodicDataContainer',
  templateUrl: './periodicDataContainer.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class periodicDataContainerComponent implements AfterViewInit {
  @ViewChild(periodicDataComponent)
  public periodicDataComponent: any = null;
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
      this.sd_FLmxFzsSHLk5nkoC(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_FLmxFzsSHLk5nkoC(bh) {
    try {
      bh = this.sd_KtECDrkZowq0Bm5f(bh);
      bh = this.sd_VurPTILKQ6ekTmIQ(bh);
      //appendnew_next_sd_FLmxFzsSHLk5nkoC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FLmxFzsSHLk5nkoC');
    }
  }

  emittedElementFromChild(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};

      bh = this.displaynotification(bh);
      //appendnew_next_emittedElementFromChild
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hd3ythvF1m51RAS3');
    }
  }

  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);

      bh = this.viewPeriodicTable(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SHTwsElWkqt2x15l');
    }
  }

  removeElementPeriodicTable(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.triggerFunctionChild(bh);
      //appendnew_next_removeElementPeriodicTable
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_irIczRnATC1ysXRA');
    }
  }

  //appendnew_flow_periodicDataContainerComponent_start

  sd_KtECDrkZowq0Bm5f(bh) {
    try {
      bh = this.sd_chk49o5iCKms5QHo(bh);
      //appendnew_next_sd_KtECDrkZowq0Bm5f
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KtECDrkZowq0Bm5f');
    }
  }

  sd_chk49o5iCKms5QHo(bh) {
    try {
      const page = this.page;
      page.initialData = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      ];

      bh = this.referencePeriodicTable(bh);
      //appendnew_next_sd_chk49o5iCKms5QHo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_chk49o5iCKms5QHo');
    }
  }

  referencePeriodicTable(bh) {
    try {
      //appendnew_next_referencePeriodicTable
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_64jOGTRg6UJNd5Qg');
    }
  }

  sd_VurPTILKQ6ekTmIQ(bh) {
    try {
      const route = this.__page_injector__.get(ActivatedRoute);
      this.page.routerData = route.snapshot.data;

      bh = this.sd_tY4OM8MuMmlgrxWl(bh);
      //appendnew_next_sd_VurPTILKQ6ekTmIQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VurPTILKQ6ekTmIQ');
    }
  }

  sd_tY4OM8MuMmlgrxWl(bh) {
    try {
      const page = this.page;
      page.routerDisplayData = page.routerData.display;

      console.log(page.routerData);

      bh = this.sd_NLjhxTsvWKjyk5Nq(bh);
      //appendnew_next_sd_tY4OM8MuMmlgrxWl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tY4OM8MuMmlgrxWl');
    }
  }

  sd_NLjhxTsvWKjyk5Nq(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(this.page.routerDisplayData, 'ok', {
          duration: 5000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });

      //appendnew_next_sd_NLjhxTsvWKjyk5Nq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NLjhxTsvWKjyk5Nq');
    }
  }

  displaynotification(bh) {
    try {
      const page = this.page;
      page.receivedNewItem = bh.input.event.name;

      bh = this.sd_MVb0UdBUOmgC6pGF(bh);
      //appendnew_next_displaynotification
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FUHTjvN5iRDx54vn');
    }
  }

  sd_MVb0UdBUOmgC6pGF(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(this.page.receivedNewItem, 'ok', {
          duration: 5000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });

      //appendnew_next_sd_MVb0UdBUOmgC6pGF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MVb0UdBUOmgC6pGF');
    }
  }

  viewPeriodicTable(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        periodicDataComponent: this.periodicDataComponent,
      });

      //appendnew_next_viewPeriodicTable
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Khq3YWU5ypPvXPYm');
    }
  }

  triggerFunctionChild(bh) {
    try {
      const page = this.page;
      this.periodicDataComponent.removeElement();

      //appendnew_next_triggerFunctionChild
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YkmL2RmABlk1xDSb');
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
  //appendnew_flow_periodicDataContainerComponent_Catch
}
