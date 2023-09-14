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
import { books } from 'app/sd-services/books'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Home',
  templateUrl: './Home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class HomeComponent {
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
      this.sd_ohE3a057puTOZJ7C(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ohE3a057puTOZJ7C(bh) {
    try {
      bh = this.sd_ajldUF8v4AT1gHmp(bh);
      //appendnew_next_sd_ohE3a057puTOZJ7C
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ohE3a057puTOZJ7C');
    }
  }

  onButtonClick(name: any = undefined, place: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { name: name, place: place };
      bh.local = {};

      this.sd_L7yZs3KwFuCTiquc(bh);
      //appendnew_next_onButtonClick
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ET5FzFHKQOs9ntXg');
    }
  }

  addNumber(
    num1: any = undefined,
    num2: any = undefined,
    sum: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { num1: num1, num2: num2, sum: sum };
      bh.local = {};

      bh = this.sd_5cn4y5lyiccD9eiy(bh);
      //appendnew_next_addNumber
      return bh.input.sum;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lMGek7SMKn9JopvM');
    }
  }

  navigate(path: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { path: path };
      bh.local = {};

      bh = this.sd_IwOrFMqUrEPijZYh(bh);
      //appendnew_next_navigate
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dW7K7KxGLhw6SoTa');
    }
  }

  callAddBooks(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_fvYbb8gKob5MNSsE(bh);
      //appendnew_next_callAddBooks
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yM754xu8EKpKN3al');
    }
  }

  //appendnew_flow_HomeComponent_start

  sd_ajldUF8v4AT1gHmp(bh) {
    try {
      this.page.username = 'Gopala Krishna';

      bh = this.sd_KrMKlluEeKZnN2uv(bh);
      //appendnew_next_sd_ajldUF8v4AT1gHmp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ajldUF8v4AT1gHmp');
    }
  }

  sd_KrMKlluEeKZnN2uv(bh) {
    try {
      const page = this.page;
      console.log('script node executed');
      console.log(page.username);

      page.email = 'gopal@heptagon.in';
      console.log(page.email);

      bh.place = 'bangalore';
      console.log(bh.place);

      bh.local.name = 'gopal';

      page.place = 'kurnool';

      page.name = 'gopala krishna';

      bh.local.num1 = 2;
      bh.local.num2 = 4;

      // page.books = [
      //     {
      //         "title": "mahabharatha",
      //         "description": "good book"
      //     },
      //     {
      //         "title": "ramayanam",
      //         "description": "very good book"
      //     },
      // ]

      bh = this.sd_54GefA1sbvDdOtGL(bh);
      //appendnew_next_sd_KrMKlluEeKZnN2uv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KrMKlluEeKZnN2uv');
    }
  }

  sd_54GefA1sbvDdOtGL(bh) {
    try {
      let outputVariables = this.addNumber(
        bh.local.num1,
        bh.local.num2,
        undefined
      );
      bh.local.sum = outputVariables;

      bh = this.callGetBooks(bh);
      //appendnew_next_sd_54GefA1sbvDdOtGL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_54GefA1sbvDdOtGL');
    }
  }

  async callGetBooks(bh) {
    try {
      const booksInstance: books = this.__page_injector__.get(books);

      let outputVariables = await booksInstance.getBook();
      this.page.books = outputVariables.local.books;

      bh = this.sd_GrDCsfWKT3IbLETX(bh);
      //appendnew_next_callGetBooks
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cLhz04YFlDr9gsWl');
    }
  }

  sd_GrDCsfWKT3IbLETX(bh) {
    try {
      const page = this.page;
      console.log(bh.local.sum);

      console.log(page.books);

      //appendnew_next_sd_GrDCsfWKT3IbLETX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GrDCsfWKT3IbLETX');
    }
  }

  sd_L7yZs3KwFuCTiquc(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.place);

      //appendnew_next_sd_L7yZs3KwFuCTiquc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L7yZs3KwFuCTiquc');
    }
  }

  sd_5cn4y5lyiccD9eiy(bh) {
    try {
      const page = this.page;
      console.log(bh.input.num1);
      console.log(bh.input.num2);

      bh.input.sum = bh.input.num1 + bh.input.num2;

      console.log(bh.input.sum);

      //appendnew_next_sd_5cn4y5lyiccD9eiy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5cn4y5lyiccD9eiy');
    }
  }

  sd_IwOrFMqUrEPijZYh(bh) {
    try {
      const page = this.page;
      bh.local.query = {
        username: 'gopala',
        place: 'kurnool',
      };

      // bh.local.path = '/login';

      bh = this.sd_YTUauVtKv9F2QoCM(bh);
      //appendnew_next_sd_IwOrFMqUrEPijZYh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IwOrFMqUrEPijZYh');
    }
  }

  async sd_YTUauVtKv9F2QoCM(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj(bh.input.path);
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, bh.local.query),
        });

      //appendnew_next_sd_YTUauVtKv9F2QoCM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YTUauVtKv9F2QoCM');
    }
  }

  async sd_fvYbb8gKob5MNSsE(bh) {
    try {
      const booksInstance: books = this.__page_injector__.get(books);

      let outputVariables = await booksInstance.addBooks();
      this.page.response = outputVariables.local.response;

      bh = this.sd_Yn61ZGtGu7SQws9M(bh);
      //appendnew_next_sd_fvYbb8gKob5MNSsE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fvYbb8gKob5MNSsE');
    }
  }

  sd_Yn61ZGtGu7SQws9M(bh) {
    try {
      const page = this.page;
      console.log(page.response.data.id);

      page.outputId = page.response.data.id;

      //appendnew_next_sd_Yn61ZGtGu7SQws9M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Yn61ZGtGu7SQws9M');
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
  //appendnew_flow_HomeComponent_Catch
}
