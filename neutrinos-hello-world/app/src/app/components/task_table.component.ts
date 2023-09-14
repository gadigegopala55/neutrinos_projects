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
import { books } from 'app/sd-services/books'; //_splitter_
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-task_table',
  templateUrl: './task_table.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class task_tableComponent implements AfterViewInit {
  @ViewChild(MatSort)
  public MatSort: any = null;
  @ViewChild(MatPaginator)
  public MatPaginator: any = null;
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
      this.sd_Urjr8oNTjiT5tI6x(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Urjr8oNTjiT5tI6x(bh) {
    try {
      bh = this.sd_eGTEmpZkEHSp7tHd(bh);
      //appendnew_next_sd_Urjr8oNTjiT5tI6x
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Urjr8oNTjiT5tI6x');
    }
  }

  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);

      bh = this.sd_xKCCTWKzvgDN0rx7_1(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Tw6Dyfr66HHVOr5r');
    }
  }

  onFilter_3(filterEvent: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { filterEvent: filterEvent };
      bh.local = {};

      bh = this.sd_iBlFYTlpoczCmWts_3(bh);
      //appendnew_next_onFilter_3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xWqaldnSgnmIoQEw');
    }
  }

  //appendnew_flow_task_tableComponent_start

  sd_eGTEmpZkEHSp7tHd(bh) {
    try {
      bh = this.sd_eJuzOUTYKNgXaqdz_1(bh);
      //appendnew_next_sd_eGTEmpZkEHSp7tHd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eGTEmpZkEHSp7tHd');
    }
  }

  sd_eJuzOUTYKNgXaqdz_1(bh) {
    try {
      const page = this.page;
      bh.local.dataSource = new MatTableDataSource([
        {
          position: 1,
          name: 'Hydrogen',
          weight: 1.0079,
          symbol: 'H',
        },
        {
          position: 2,
          name: 'Helium',
          weight: 4.0026,
          symbol: 'He',
        },
        {
          position: 3,
          name: 'Lithium',
          weight: 6.941,
          symbol: 'Li',
        },
        {
          position: 4,
          name: 'Beryllium',
          weight: 9.0122,
          symbol: 'Be',
        },
        {
          position: 5,
          name: 'Boron',
          weight: 10.811,
          symbol: 'B',
        },
        {
          position: 6,
          name: 'Carbon',
          weight: 12.0107,
          symbol: 'C',
        },
        {
          position: 7,
          name: 'Nitrogen',
          weight: 14.0067,
          symbol: 'N',
        },
        {
          position: 8,
          name: 'Oxygen',
          weight: 15.9994,
          symbol: 'O',
        },
        {
          position: 9,
          name: 'Fluorine',
          weight: 18.9984,
          symbol: 'F',
        },
        {
          position: 10,
          name: 'Neon',
          weight: 20.1797,
          symbol: 'Ne',
        },
      ]);

      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sd_eJuzOUTYKNgXaqdz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_t6tJV7XlYF7nvR9u');
    }
  }

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = bh.local.dataSource;

      bh = this.sd_fmK3w4bwhyWBBihB(bh);
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kls2fB0W3FrBuVTu');
    }
  }

  async sd_fmK3w4bwhyWBBihB(bh) {
    try {
      const booksInstance: books = this.__page_injector__.get(books);

      let outputVariables = await booksInstance.getRockets();
      this.page.response = outputVariables.local.response;

      bh = this.sd_CQe3CzlFSfPuJpbV(bh);
      //appendnew_next_sd_fmK3w4bwhyWBBihB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fmK3w4bwhyWBBihB');
    }
  }

  sd_CQe3CzlFSfPuJpbV(bh) {
    try {
      const page = this.page;
      bh.local.dataSource = new MatTableDataSource(page.response);

      this.page.tableData.paginator = this.MatPaginator;

      bh = this.page2(bh);
      //appendnew_next_sd_CQe3CzlFSfPuJpbV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CQe3CzlFSfPuJpbV');
    }
  }

  page2(bh) {
    try {
      this.page.tableData = bh.local.dataSource;

      //appendnew_next_page2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YqqyeUafvQxpfPk4');
    }
  }

  sd_xKCCTWKzvgDN0rx7_1(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatSort: this.MatSort,
      });

      bh = this.sd_2VNGqvcKee34lvOz_1(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OzYThNABfBs6bhFS');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.tableData.sort = this.MatSort;

      bh = this.sd_xKCCTWKzvgDN0rx7_2(bh);
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oAl6zMKxWpbKpZPk');
    }
  }

  sd_xKCCTWKzvgDN0rx7_2(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatPaginator: this.MatPaginator,
      });

      bh = this.sd_2VNGqvcKee34lvOz_2(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bcuNHfXdRHrTxLSq');
    }
  }

  sd_2VNGqvcKee34lvOz_2(bh) {
    try {
      const page = this.page;
      this.page.tableData.paginator = this.MatPaginator;

      //appendnew_next_sd_2VNGqvcKee34lvOz_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WgOWudOj9kbQUZbn');
    }
  }

  sd_iBlFYTlpoczCmWts_3(bh) {
    try {
      const page = this.page;
      console.log(bh.input.filterEvent);
      const filterValue = (bh.input.filterEvent.target as HTMLInputElement)
        .value;
      this.page.tableData.filter = filterValue.trim().toLowerCase();

      //appendnew_next_sd_iBlFYTlpoczCmWts_3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vFnukBc3E7WgsFw8');
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
  //appendnew_flow_task_tableComponent_Catch
}
