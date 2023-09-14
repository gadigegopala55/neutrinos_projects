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
export class login {
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

  //   service flows_login

  async login(
    username: any = undefined,
    password: any = undefined,
    response: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          username: username,
          password: password,
          response: response,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_UtLJorbmAT1TlSu1(bh);
      //appendnew_next_login
      return (
        // formatting output variables
        {
          input: {
            response: bh.input.response,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jc9NxSKPJRZ7Ow9m');
    }
  }

  //appendnew_flow_login_start

  async sd_UtLJorbmAT1TlSu1(bh) {
    try {
      bh.url = `http://localhost:8081/api/login`;

      bh.body = {
        username: bh.input.username,
        password: bh.input.password,
      };

      console.log(bh.body);

      bh = await this.sd_06kpHSjV3jt8TtgT(bh);
      //appendnew_next_sd_UtLJorbmAT1TlSu1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UtLJorbmAT1TlSu1');
    }
  }

  async sd_06kpHSjV3jt8TtgT(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      bh.response = await this.sdService.nHttpRequest(requestOptions);

      bh = await this.sd_nGSuMeDrzLrNUYO9(bh);
      //appendnew_next_sd_06kpHSjV3jt8TtgT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_06kpHSjV3jt8TtgT');
    }
  }

  async sd_nGSuMeDrzLrNUYO9(bh) {
    try {
      console.log(bh.response);

      //appendnew_next_sd_nGSuMeDrzLrNUYO9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nGSuMeDrzLrNUYO9');
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
  //appendnew_flow_login_Catch
}
