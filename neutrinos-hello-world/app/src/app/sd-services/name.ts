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
export class name {
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

  //   service flows_name

  async getMyName(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          name: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_9gZKTdJka03qRoIZ(bh);
      //appendnew_next_getMyName
      return (
        // formatting output variables
        {
          input: {},
          local: {
            name: bh.local.name,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RvnJKVT11GDVToLB');
    }
  }

  //appendnew_flow_name_start

  async sd_9gZKTdJka03qRoIZ(bh) {
    try {
      bh.local.name = 'gopal';

      //appendnew_next_sd_9gZKTdJka03qRoIZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9gZKTdJka03qRoIZ');
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
  //appendnew_flow_name_Catch
}
