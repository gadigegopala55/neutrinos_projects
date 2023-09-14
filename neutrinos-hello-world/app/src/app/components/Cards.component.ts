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
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms'; //_splitter_
import { books } from 'app/sd-services/books'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Cards',
  templateUrl: './Cards.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class CardsComponent {
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
      this.sd_sGVN05S8N3a2lYsA(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_sGVN05S8N3a2lYsA(bh) {
    try {
      bh = this.sd_jrRYuJyyPXWfCP3w(bh);
      //appendnew_next_sd_sGVN05S8N3a2lYsA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sGVN05S8N3a2lYsA');
    }
  }

  onSubmit(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      this.sd_bUDIOjrIZK3ProHr(bh);
      //appendnew_next_onSubmit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Th9oYDxiGf0qHku1');
    }
  }

  formSubmit(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_Rsz1eB4edTnGHV8U(bh);
      //appendnew_next_formSubmit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ouMrtTZTGpIGaTyU');
    }
  }

  //appendnew_flow_CardsComponent_start

  sd_jrRYuJyyPXWfCP3w(bh) {
    try {
      bh = this.use1(bh);
      //appendnew_next_sd_jrRYuJyyPXWfCP3w
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jrRYuJyyPXWfCP3w');
    }
  }

  use1(bh) {
    try {
      this.page.formControl = FormControl;
      this.page.formGroup = FormGroup;
      this.page.validators = Validators;

      bh = this.sd_gJxgSuluZ5QItDzX(bh);
      //appendnew_next_use1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1Re9AOmyyMEyayq5');
    }
  }

  sd_gJxgSuluZ5QItDzX(bh) {
    try {
      const page = this.page;
      page.categories = ['maths', 'science'];

      page.book = {
        title: '',
        category: '',
        date: '',
      };

      page.numLength = 3;

      page.books = new page.formGroup({
        bookTitle: new page.formControl('', [
          page.validators.required,
          page.validators.minLength(3),
        ]),
        bookSelect: new page.formControl(''),
        bookDate: new page.formControl(''),
      });

      //appendnew_next_sd_gJxgSuluZ5QItDzX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gJxgSuluZ5QItDzX');
    }
  }

  sd_bUDIOjrIZK3ProHr(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.book);

      //appendnew_next_sd_bUDIOjrIZK3ProHr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bUDIOjrIZK3ProHr');
    }
  }

  async sd_Rsz1eB4edTnGHV8U(bh) {
    try {
      const booksInstance: books = this.__page_injector__.get(books);

      let outputVariables = await booksInstance.postTitle(
        this.page.books.value
      );
      this.page.response = outputVariables.local.response;

      bh = this.sd_ntw6SMKAzrXAzABA(bh);
      //appendnew_next_sd_Rsz1eB4edTnGHV8U
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Rsz1eB4edTnGHV8U');
    }
  }

  sd_ntw6SMKAzrXAzABA(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Data received successfully', 'ok', {
          duration: 5000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });

      this.sd_bk7f48UHbuCx3e4q(bh);
      //appendnew_next_sd_ntw6SMKAzrXAzABA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ntw6SMKAzrXAzABA');
    }
  }

  sd_bk7f48UHbuCx3e4q(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.response);

      //appendnew_next_sd_bk7f48UHbuCx3e4q
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bk7f48UHbuCx3e4q');
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
  //appendnew_flow_CardsComponent_Catch
}
