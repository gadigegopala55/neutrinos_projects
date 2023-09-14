/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class tasks {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_tasks

  async addTask(inputValues: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          inputValues: inputValues,
        },
        local: {
          response: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_Ib7KUTwkKz1C8qx6(bh);
      //appendnew_next_addTask
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_h6RuJ9MLShEAskVS');
    }
  }

  async gettask(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          response: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_O15QqFVmpLmqBz3n(bh);
      //appendnew_next_gettask
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_z3Pn07zR0MKXSO3t');
    }
  }

  async deletetask(id: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          id: id,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_wgH2ZfUEgV6DQZ6e(bh);
      //appendnew_next_deletetask
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JlO15pEZmgr82GY3');
    }
  }

  async updatetask(id: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          id: id,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_eGxKIygPCDgtALNw(bh);
      //appendnew_next_updatetask
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6nFSrMZPRnc7ECOZ');
    }
  }

  //appendnew_flow_tasks_start

  async sd_Ib7KUTwkKz1C8qx6(bh) {
    try {
      (bh.local.url = `http://localhost:8081/api/add-task`),
        (bh.local.body = {
          name: bh.input.inputValues.name,
          description: bh.input.inputValues.description,
          due_date: bh.input.inputValues.due_date,
          priority: bh.input.inputValues.priority,
        });

      bh = await this.sd_oE4eu2oWm7DD9GKV(bh);
      //appendnew_next_sd_Ib7KUTwkKz1C8qx6
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ib7KUTwkKz1C8qx6');
    }
  }

  async sd_oE4eu2oWm7DD9GKV(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.body,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);

      bh = await this.sd_ZhjQFcbcj4ausiEy(bh);
      //appendnew_next_sd_oE4eu2oWm7DD9GKV
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oE4eu2oWm7DD9GKV');
    }
  }

  async sd_ZhjQFcbcj4ausiEy(bh) {
    try {
      bh.local.response = bh.local.response.message || [];

      //appendnew_next_sd_ZhjQFcbcj4ausiEy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZhjQFcbcj4ausiEy');
    }
  }

  async sd_O15QqFVmpLmqBz3n(bh) {
    try {
      bh.local.url = `http://localhost:8081/api/get-task`;

      bh = await this.sd_KsDf5Epfa1lcMPrQ(bh);
      //appendnew_next_sd_O15QqFVmpLmqBz3n
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_O15QqFVmpLmqBz3n');
    }
  }

  async sd_KsDf5Epfa1lcMPrQ(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);

      //appendnew_next_sd_KsDf5Epfa1lcMPrQ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KsDf5Epfa1lcMPrQ');
    }
  }

  async sd_wgH2ZfUEgV6DQZ6e(bh) {
    try {
      bh.local.url = `http://localhost:8081/api/dm/tasks/task/delete-by-id`;

      bh.local.body = {
        filter: {
          id: bh.input.id,
        },
      };

      bh = await this.sd_0muo5iXtTjvXpiir(bh);
      //appendnew_next_sd_wgH2ZfUEgV6DQZ6e
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wgH2ZfUEgV6DQZ6e');
    }
  }

  async sd_0muo5iXtTjvXpiir(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.body,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);

      //appendnew_next_sd_0muo5iXtTjvXpiir
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0muo5iXtTjvXpiir');
    }
  }

  async sd_eGxKIygPCDgtALNw(bh) {
    try {
      bh.local.url = `http://localhost:8081/api/update-task`;

      bh.local.body = {
        id: bh.input.id,
      };

      bh = await this.sd_W8IW2NkQrt5K3xCe(bh);
      //appendnew_next_sd_eGxKIygPCDgtALNw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eGxKIygPCDgtALNw');
    }
  }

  async sd_W8IW2NkQrt5K3xCe(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.body,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);

      //appendnew_next_sd_W8IW2NkQrt5K3xCe
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_W8IW2NkQrt5K3xCe');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
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
  //appendnew_flow_tasks_Catch
}
