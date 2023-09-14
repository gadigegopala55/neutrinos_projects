let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../middleware/Middleware'; //_splitter_
import * as settings from '../../config/config'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class delete_operation {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'delete_operation';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new delete_operation(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_delete_operation_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: delete_operation');

    //appendnew_flow_delete_operation_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: delete_operation');

    this.app['delete'](
      `${this.serviceBasePath}/delete-operation`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_MDiTF1aZsf0acdHF(bh, parentSpanInst);
          //appendnew_next_sd_OqRUl700EIcqaXHc
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_OqRUl700EIcqaXHc');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_delete_operation_HttpIn
  }
  //   service flows_delete_operation

  async delete_function(
    parentSpanInst,
    id: any = undefined,
    status = true,
    result: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'delete_function',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          id: id,
          status: status,
          result: result,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NNhAHebw5SPmvKAs(bh, parentSpanInst);
      //appendnew_next_delete_function
      return (
        // formatting output variables
        {
          input: {
            status: bh.input.status,
            result: bh.input.result,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dQJYgfrjTc0riiJb',
        spanInst,
        'delete_function'
      );
    }
  }

  //appendnew_flow_delete_operation_start

  async sd_NNhAHebw5SPmvKAs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NNhAHebw5SPmvKAs',
      parentSpanInst
    );
    try {
      if (!bh.input.id) {
        bh.input.status = false;
        bh.input.result = { message: 'id required' };
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_NNhAHebw5SPmvKAs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NNhAHebw5SPmvKAs',
        spanInst,
        'sd_NNhAHebw5SPmvKAs'
      );
    }
  }

  async sd_MDiTF1aZsf0acdHF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MDiTF1aZsf0acdHF',
      parentSpanInst
    );
    try {
      let outputVariables = await this.delete_function(
        spanInst,
        bh.input.body.id,
        undefined,
        undefined
      );
      bh.status = outputVariables.input.status;
      bh.result = outputVariables.input.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Uf9yhMeRDTedi993(bh, parentSpanInst);
      //appendnew_next_sd_MDiTF1aZsf0acdHF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MDiTF1aZsf0acdHF',
        spanInst,
        'sd_MDiTF1aZsf0acdHF'
      );
    }
  }

  async sd_Uf9yhMeRDTedi993(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Uf9yhMeRDTedi993',
      parentSpanInst
    );
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
        bh = await this.sd_YQ20YyF9IJq71BWa(bh, parentSpanInst);
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
        bh = await this.sd_VQx91AlZq4nJyXKD(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Uf9yhMeRDTedi993',
        spanInst,
        'sd_Uf9yhMeRDTedi993'
      );
    }
  }

  async sd_YQ20YyF9IJq71BWa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YQ20YyF9IJq71BWa',
      parentSpanInst
    );
    try {
      bh.getQuery = 'SELECT name from employee where id = $1';

      bh.getParams = [bh.input.body.id];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_YMuz81Omv93msq9m(bh, parentSpanInst);
      //appendnew_next_sd_YQ20YyF9IJq71BWa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YQ20YyF9IJq71BWa',
        spanInst,
        'sd_YQ20YyF9IJq71BWa'
      );
    }
  }

  async sd_YMuz81Omv93msq9m(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YMuz81Omv93msq9m',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_xDzx3dxKbrMOh8oE'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.getParams;
      params = params ? params : [];
      bh.getResult = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.getQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GmsfybLC083TW0NI(bh, parentSpanInst);
      //appendnew_next_sd_YMuz81Omv93msq9m
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YMuz81Omv93msq9m',
        spanInst,
        'sd_YMuz81Omv93msq9m'
      );
    }
  }

  async sd_GmsfybLC083TW0NI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GmsfybLC083TW0NI',
      parentSpanInst
    );
    try {
      if (bh.getResult.length == 0) {
        bh.status = false;
        bh.result = { message: 'employee details not exists for the given id' };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Jpmd8vl6sya0WKan(bh, parentSpanInst);
      //appendnew_next_sd_GmsfybLC083TW0NI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GmsfybLC083TW0NI',
        spanInst,
        'sd_GmsfybLC083TW0NI'
      );
    }
  }

  async sd_Jpmd8vl6sya0WKan(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Jpmd8vl6sya0WKan',
      parentSpanInst
    );
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
        bh = await this.sd_6qTV0dxcPVQi87tX(bh, parentSpanInst);
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
        bh = await this.sd_VQx91AlZq4nJyXKD(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Jpmd8vl6sya0WKan',
        spanInst,
        'sd_Jpmd8vl6sya0WKan'
      );
    }
  }

  async sd_6qTV0dxcPVQi87tX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6qTV0dxcPVQi87tX',
      parentSpanInst
    );
    try {
      bh.query = 'DELETE FROM employee WHERE id=$1';

      bh.params = [bh.input.body.id];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_B2JXvOjVGjU0Y0C2(bh, parentSpanInst);
      //appendnew_next_sd_6qTV0dxcPVQi87tX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6qTV0dxcPVQi87tX',
        spanInst,
        'sd_6qTV0dxcPVQi87tX'
      );
    }
  }

  async sd_B2JXvOjVGjU0Y0C2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_B2JXvOjVGjU0Y0C2',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_xDzx3dxKbrMOh8oE'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.params;
      params = params ? params : [];
      bh.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BqstNBVTxTxlJCt0(bh, parentSpanInst);
      //appendnew_next_sd_B2JXvOjVGjU0Y0C2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B2JXvOjVGjU0Y0C2',
        spanInst,
        'sd_B2JXvOjVGjU0Y0C2'
      );
    }
  }

  async sd_BqstNBVTxTxlJCt0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BqstNBVTxTxlJCt0',
      parentSpanInst
    );
    try {
      bh.result = { message: 'Data deleted successfully' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_e3mUZRMPIETBfhri(bh, parentSpanInst);
      //appendnew_next_sd_BqstNBVTxTxlJCt0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BqstNBVTxTxlJCt0',
        spanInst,
        'sd_BqstNBVTxTxlJCt0'
      );
    }
  }

  async sd_e3mUZRMPIETBfhri(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_e3mUZRMPIETBfhri');
    }
  }

  async sd_VQx91AlZq4nJyXKD(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VQx91AlZq4nJyXKD');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src, parentSpanInst?, functionName?) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_delete_operation_Catch
}
