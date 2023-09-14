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
import { tasks } from 'app/sd-services/tasks'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { dialog_pendingComponent } from 'app/components/dialog_pending.component'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-task_data',
  templateUrl: './task_data.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class task_dataComponent implements AfterViewInit {
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
      this.sd_E2qV5YQ60xaghJFi(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_E2qV5YQ60xaghJFi(bh) {
    try {
      bh = this.sd_iNwNlKonTzT5WNRS(bh);
      //appendnew_next_sd_E2qV5YQ60xaghJFi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E2qV5YQ60xaghJFi');
    }
  }

  deleteclick(id: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { id: id };
      bh.local = {};

      bh = this.sd_eZrEi2ooo8pkW1GQ(bh);
      //appendnew_next_deleteclick
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SrKMw2oDyBjOgcOW');
    }
  }

  updateclick(id: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { id: id };
      bh.local = {};

      bh = this.sd_2ZFWmU6fqvm6gM1M(bh);
      //appendnew_next_updateclick
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GiYZfFqpXcHSy7Dt');
    }
  }

  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);

      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sD4xeRhmrio7OPJE');
    }
  }

  //appendnew_flow_task_dataComponent_start

  sd_iNwNlKonTzT5WNRS(bh) {
    try {
      bh = this.sd_HrzG498vCNxWilbF(bh);
      //appendnew_next_sd_iNwNlKonTzT5WNRS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iNwNlKonTzT5WNRS');
    }
  }

  async sd_HrzG498vCNxWilbF(bh) {
    try {
      const tasksInstance: tasks = this.__page_injector__.get(tasks);

      let outputVariables = await tasksInstance.gettask();
      this.page.response = outputVariables.local.response;

      //appendnew_next_sd_HrzG498vCNxWilbF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HrzG498vCNxWilbF');
    }
  }

  sd_eZrEi2ooo8pkW1GQ(bh) {
    try {
      const page = this.page;
      page.dialogData = {
        header: `Please confirm your deletion for id: ${bh.input.id}`,
        negativeAction: 'No',
        positiveAction: 'yes',
      };
      console.log('confirm');

      bh = this.sd_XXImOm2plPoHvby0(bh);
      //appendnew_next_sd_eZrEi2ooo8pkW1GQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eZrEi2ooo8pkW1GQ');
    }
  }

  sd_XXImOm2plPoHvby0(bh) {
    try {
      const dialog_pendingDialog = this.__page_injector__.get(MatDialog);
      const dialog_pendingDialogRef = dialog_pendingDialog.open(
        dialog_pendingComponent,
        { data: this.page.dialogData }
      );
      dialog_pendingDialogRef.afterClosed().subscribe((event) => {
        this.page.data = event;
        this.sd_MhyxjUXDoN0JzDKp(bh);

        //appendnew_next_sd_XXImOm2plPoHvby0;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XXImOm2plPoHvby0');
    }
  }

  sd_MhyxjUXDoN0JzDKp(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.data.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_tMRRiDKtqlwDjqM0(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MhyxjUXDoN0JzDKp');
    }
  }

  async sd_tMRRiDKtqlwDjqM0(bh) {
    try {
      const tasksInstance: tasks = this.__page_injector__.get(tasks);

      let outputVariables = await tasksInstance.deletetask(bh.input.id);

      bh = this.sd_q29Rp4ILDo3cLynk(bh);
      //appendnew_next_sd_tMRRiDKtqlwDjqM0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tMRRiDKtqlwDjqM0');
    }
  }

  sd_q29Rp4ILDo3cLynk(bh) {
    try {
      const page = this.page;
      location.reload();

      //appendnew_next_sd_q29Rp4ILDo3cLynk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_q29Rp4ILDo3cLynk');
    }
  }

  sd_2ZFWmU6fqvm6gM1M(bh) {
    try {
      const page = this.page;
      page.dialogData = {
        header: `Please select the Status to update for id: ${bh.input.id}`,
        negativeAction: 'No',
        positiveAction: 'Yes',
        allow: 'yes',
      };

      bh = this.sd_BzRXU32L6GmM2evS(bh);
      //appendnew_next_sd_2ZFWmU6fqvm6gM1M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2ZFWmU6fqvm6gM1M');
    }
  }

  sd_BzRXU32L6GmM2evS(bh) {
    try {
      const dialog_pendingDialog = this.__page_injector__.get(MatDialog);
      const dialog_pendingDialogRef = dialog_pendingDialog.open(
        dialog_pendingComponent,
        { data: this.page.dialogData }
      );
      dialog_pendingDialogRef.afterClosed().subscribe((event) => {
        this.page.data = event;
        this.sd_0o9QbLElZHxX5gpy(bh);

        //appendnew_next_sd_BzRXU32L6GmM2evS;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BzRXU32L6GmM2evS');
    }
  }

  sd_0o9QbLElZHxX5gpy(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.data.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_YHt2SmYBtwk4tExC(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0o9QbLElZHxX5gpy');
    }
  }

  async sd_YHt2SmYBtwk4tExC(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          this.page.data.status_b,
          'Completed',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_dD0pYxIKvtQVrzYk(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_BzRXU32L6GmM2evS(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YHt2SmYBtwk4tExC');
    }
  }

  async sd_dD0pYxIKvtQVrzYk(bh) {
    try {
      const tasksInstance: tasks = this.__page_injector__.get(tasks);

      let outputVariables = await tasksInstance.updatetask(bh.input.id);

      bh = this.sd_ptvB83fiFBdZ46t9(bh);
      //appendnew_next_sd_dD0pYxIKvtQVrzYk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dD0pYxIKvtQVrzYk');
    }
  }

  sd_ptvB83fiFBdZ46t9(bh) {
    try {
      const page = this.page;
      location.reload();
      //page.response = [];

      //appendnew_next_sd_ptvB83fiFBdZ46t9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ptvB83fiFBdZ46t9');
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
  //appendnew_flow_task_dataComponent_Catch
}
