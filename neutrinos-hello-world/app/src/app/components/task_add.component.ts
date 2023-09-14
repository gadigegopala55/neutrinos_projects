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
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms'; //_splitter_
import { tasks } from 'app/sd-services/tasks'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { dialog_pendingComponent } from 'app/components/dialog_pending.component'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-task_add',
  templateUrl: './task_add.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class task_addComponent {
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
      this.sd_acz5OFnAK3APeQ1X(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_acz5OFnAK3APeQ1X(bh) {
    try {
      bh = this.sd_6RIsjF6eXWhUbrRv(bh);
      //appendnew_next_sd_acz5OFnAK3APeQ1X
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_acz5OFnAK3APeQ1X');
    }
  }

  addData(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_SKMOA39HdoOBsuoe(bh);
      //appendnew_next_addData
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Kzw5IJVlA9IOlnVG');
    }
  }

  logout(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_fFTr670jZZoRmBMG(bh);
      //appendnew_next_logout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hGAl8SfJY62ot4EP');
    }
  }

  languageChange(language: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { language: language };
      bh.local = {};

      bh = this.sd_8tycdbOMjNJuoRAk(bh);
      //appendnew_next_languageChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_B9r9NT5sm1xNPfv1');
    }
  }

  //appendnew_flow_task_addComponent_start

  sd_6RIsjF6eXWhUbrRv(bh) {
    try {
      bh = this.sd_HGmKjZ3W1bqiElhO(bh);
      //appendnew_next_sd_6RIsjF6eXWhUbrRv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6RIsjF6eXWhUbrRv');
    }
  }

  sd_HGmKjZ3W1bqiElhO(bh) {
    try {
      this.page.formControl = FormControl;
      this.page.formGroup = FormGroup;
      this.page.validators = Validators;

      bh = this.sd_lpfh5TNZnwUxnlLU(bh);
      //appendnew_next_sd_HGmKjZ3W1bqiElhO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HGmKjZ3W1bqiElhO');
    }
  }

  sd_lpfh5TNZnwUxnlLU(bh) {
    try {
      const page = this.page;
      page.priority = ['High', 'Medium', 'Low'];
      page.status_a = ['Pending', 'InProgress', 'Completed'];

      page.addForm = new page.formGroup({
        name: new page.formControl('', [
          page.validators.required,
          page.validators.minLength(3),
          page.validators.maxLength(30),
        ]),
        description: new page.formControl('', [
          page.validators.required,
          page.validators.minLength(3),
          page.validators.maxLength(30),
        ]),
        due_date: new page.formControl('', [page.validators.required]),
        priority: new page.formControl('', [page.validators.required]),
        status_a: new page.formControl('', [page.validators.required]),
      });

      console.log(page.locales);

      page.names = page.locales.keys;

      page.options = Object.entries(page.locales.languages);
      console.log(page.options);

      //appendnew_next_sd_lpfh5TNZnwUxnlLU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lpfh5TNZnwUxnlLU');
    }
  }

  sd_SKMOA39HdoOBsuoe(bh) {
    try {
      const page = this.page;
      page.dialogData = {
        header: 'Task Status Must be Pending',
        content: 'Dear Gopala Krishna, Welcome to the training',
        positiveAction: 'Yes',
        negativeAction: 'No',
        priority: 'welcome',
        allow: 'yes',
      };

      page.next_status = page.addForm.value.status_a;

      bh = this.sd_9xbjo2oLjqvdwKIu(bh);
      //appendnew_next_sd_SKMOA39HdoOBsuoe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SKMOA39HdoOBsuoe');
    }
  }

  async sd_9xbjo2oLjqvdwKIu(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          this.page.next_status,
          'Pending',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_YD16PVYJRogcdfCo(bh);
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
        bh = await this.sd_RaCSTCbaSKm4KxDr(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9xbjo2oLjqvdwKIu');
    }
  }

  async sd_YD16PVYJRogcdfCo(bh) {
    try {
      const tasksInstance: tasks = this.__page_injector__.get(tasks);

      let outputVariables = await tasksInstance.addTask(
        this.page.addForm.value
      );
      this.page.response = outputVariables.local.response;

      bh = this.sd_xTpNZdYMKPU8WQyo(bh);
      //appendnew_next_sd_YD16PVYJRogcdfCo
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YD16PVYJRogcdfCo');
    }
  }

  sd_xTpNZdYMKPU8WQyo(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(this.page.response, 'ok', {
        duration: 5000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });

      bh = this.sd_qoTOphWXYtnUmBkk(bh);
      //appendnew_next_sd_xTpNZdYMKPU8WQyo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xTpNZdYMKPU8WQyo');
    }
  }

  async sd_qoTOphWXYtnUmBkk(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/task-home/task-data');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_qoTOphWXYtnUmBkk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qoTOphWXYtnUmBkk');
    }
  }

  sd_RaCSTCbaSKm4KxDr(bh) {
    try {
      const dialog_pendingDialog = this.__page_injector__.get(MatDialog);
      const dialog_pendingDialogRef = dialog_pendingDialog.open(
        dialog_pendingComponent,
        { data: this.page.dialogData }
      );
      dialog_pendingDialogRef.afterClosed().subscribe((event) => {
        this.page.status_b = event;
        this.sd_MMLHmGgt6hJ3t2JN(bh);

        //appendnew_next_sd_RaCSTCbaSKm4KxDr;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RaCSTCbaSKm4KxDr');
    }
  }

  sd_MMLHmGgt6hJ3t2JN(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.status_b?.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_GVIRL9pb4mK5IjX9(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MMLHmGgt6hJ3t2JN');
    }
  }

  sd_GVIRL9pb4mK5IjX9(bh) {
    try {
      const page = this.page;
      if (page.status_b?.status_b === 'Pending') {
        bh.status = true;
      } else {
        bh.status = false;
      }

      bh = this.sd_fqlf6msmh0d2WL7s(bh);
      //appendnew_next_sd_GVIRL9pb4mK5IjX9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GVIRL9pb4mK5IjX9');
    }
  }

  async sd_fqlf6msmh0d2WL7s(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.status,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_YD16PVYJRogcdfCo(bh);
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
        bh = await this.sd_RaCSTCbaSKm4KxDr(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fqlf6msmh0d2WL7s');
    }
  }

  sd_fFTr670jZZoRmBMG(bh) {
    try {
      const page = this.page;
      bh.system.oauthService.logout();

      this.sd_MlZBsDYwyjqKjV1d(bh);
      //appendnew_next_sd_fFTr670jZZoRmBMG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fFTr670jZZoRmBMG');
    }
  }

  sd_MlZBsDYwyjqKjV1d(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.system);

      //appendnew_next_sd_MlZBsDYwyjqKjV1d
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MlZBsDYwyjqKjV1d');
    }
  }

  sd_8tycdbOMjNJuoRAk(bh) {
    try {
      const page = this.page;
      console.log(bh.input.language);

      page.locales.language = bh.input.language;

      //appendnew_next_sd_8tycdbOMjNJuoRAk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8tycdbOMjNJuoRAk');
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
  //appendnew_flow_task_addComponent_Catch
}
