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
export class books {
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

  //   service flows_books

  async getBooks(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          books: undefined,
          book: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_EnX74eNiokzS7wwp(bh);
      //appendnew_next_getBooks
      return (
        // formatting output variables
        {
          input: {},
          local: {
            books: bh.local.books,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OABkN6DgLpiXaNub');
    }
  }

  async addBooks(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          response: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_JVbDeKTSYgRAvDjN(bh);
      //appendnew_next_addBooks
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
      return await this.errorHandler(bh, e, 'sd_t4V9Vcn9u6iCEp3e');
    }
  }

  async postTitle(inputValues: any = undefined, ...others) {
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

      bh = await this.sd_2UBk2k7jWwAzMeEl(bh);
      //appendnew_next_postTitle
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
      return await this.errorHandler(bh, e, 'sd_qwoDyNeJc5JIDEUB');
    }
  }

  async getBook(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          books: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_MdlfXNZToPypACqw(bh);
      //appendnew_next_getBook
      return (
        // formatting output variables
        {
          input: {},
          local: {
            books: bh.local.books,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_g5pkBCmQ1ANqfj0A');
    }
  }

  async getRockets(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          response: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_QQ2JYUTJKWYxm8xl(bh);
      //appendnew_next_getRockets
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
      return await this.errorHandler(bh, e, 'sd_YOKFcUDikkMFNKsN');
    }
  }

  async getShips(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          response: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_iB8PRdtbWdGZliC8(bh);
      //appendnew_next_getShips
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
      return await this.errorHandler(bh, e, 'sd_CZqura2MQIknmUoQ');
    }
  }

  //appendnew_flow_books_start

  async sd_EnX74eNiokzS7wwp(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/books',
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);

      bh = await this.sd_FYBzuL3ZsvjgO2Ab(bh);
      //appendnew_next_sd_EnX74eNiokzS7wwp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EnX74eNiokzS7wwp');
    }
  }

  async sd_FYBzuL3ZsvjgO2Ab(bh) {
    try {
      bh.local.books = bh.local.response.data || [];

      //appendnew_next_sd_FYBzuL3ZsvjgO2Ab
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FYBzuL3ZsvjgO2Ab');
    }
  }

  async sd_JVbDeKTSYgRAvDjN(bh) {
    try {
      bh.local.url = `http://localhost:8081/api/book`;

      bh.local.body = {
        id: 20,
      };

      bh = await this.sd_2uhbK8ZqP0bSB6Sp(bh);
      //appendnew_next_sd_JVbDeKTSYgRAvDjN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JVbDeKTSYgRAvDjN');
    }
  }

  async sd_2uhbK8ZqP0bSB6Sp(bh) {
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

      bh = await this.sd_BwXiKMajEVycd391(bh);
      //appendnew_next_sd_2uhbK8ZqP0bSB6Sp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2uhbK8ZqP0bSB6Sp');
    }
  }

  async sd_BwXiKMajEVycd391(bh) {
    try {
      console.log(bh.local.response);

      //appendnew_next_sd_BwXiKMajEVycd391
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BwXiKMajEVycd391');
    }
  }

  async sd_2UBk2k7jWwAzMeEl(bh) {
    try {
      bh.local.url = `http://localhost:8081/api/dm/books/book/create`;

      bh.local.body = {
        book: {
          title: bh.input.inputValues.bookTitle,
          category: bh.input.inputValues.bookSelect,
          published_date: bh.input.inputValues.bookDate,
        },
      };

      bh = await this.sd_mnN7Ixz5UW4IPXgq(bh);
      //appendnew_next_sd_2UBk2k7jWwAzMeEl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2UBk2k7jWwAzMeEl');
    }
  }

  async sd_mnN7Ixz5UW4IPXgq(bh) {
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

      //appendnew_next_sd_mnN7Ixz5UW4IPXgq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mnN7Ixz5UW4IPXgq');
    }
  }

  async sd_MdlfXNZToPypACqw(bh) {
    try {
      bh.local.url = `http://localhost:8081/api/book`;

      bh = await this.sd_SCZuEby3KqOYKHqO(bh);
      //appendnew_next_sd_MdlfXNZToPypACqw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MdlfXNZToPypACqw');
    }
  }

  async sd_SCZuEby3KqOYKHqO(bh) {
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

      bh = await this.sd_pnRAQSS6J9QI6aBP(bh);
      //appendnew_next_sd_SCZuEby3KqOYKHqO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SCZuEby3KqOYKHqO');
    }
  }

  async sd_pnRAQSS6J9QI6aBP(bh) {
    try {
      bh.local.books = bh.local.response || [];

      //appendnew_next_sd_pnRAQSS6J9QI6aBP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pnRAQSS6J9QI6aBP');
    }
  }

  async sd_QQ2JYUTJKWYxm8xl(bh) {
    try {
      bh.local.url = bh.system.environment.properties.SPACE_X_URL;

      bh = await this.sd_8SecdDcvv3uoPXgL(bh);
      //appendnew_next_sd_QQ2JYUTJKWYxm8xl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QQ2JYUTJKWYxm8xl');
    }
  }

  async sd_8SecdDcvv3uoPXgL(bh) {
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

      //appendnew_next_sd_8SecdDcvv3uoPXgL
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8SecdDcvv3uoPXgL');
    }
  }

  async sd_iB8PRdtbWdGZliC8(bh) {
    try {
      bh.local.url = bh.system.environment.properties.SHIPS_X_URL;

      bh = await this.sd_n8qrSt22DQqR7wxi(bh);
      //appendnew_next_sd_iB8PRdtbWdGZliC8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iB8PRdtbWdGZliC8');
    }
  }

  async sd_n8qrSt22DQqR7wxi(bh) {
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

      //appendnew_next_sd_n8qrSt22DQqR7wxi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_n8qrSt22DQqR7wxi');
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
  //appendnew_flow_books_Catch
}
