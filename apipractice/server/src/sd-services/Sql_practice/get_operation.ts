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
export class get_operation {
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
    this.serviceName = 'get_operation';
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
      instance = new get_operation(
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
      //appendnew_flow_get_operation_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: get_operation');

    //appendnew_flow_get_operation_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: get_operation');

    this.app['get'](
      `${this.serviceBasePath}/get-operation`,
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
          bh = await this.sd_sL08D6gqQgindRuU(bh, parentSpanInst);
          //appendnew_next_sd_kICtRmTVaklc1NDt
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_kICtRmTVaklc1NDt');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_get_operation_HttpIn
  }
  //   service flows_get_operation

  //appendnew_flow_get_operation_start

  async sd_sL08D6gqQgindRuU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sL08D6gqQgindRuU',
      parentSpanInst
    );
    try {
      bh.query = 'SELECT id,name,email,phone from employee ORDER BY id';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_WwWY4BoZbShMX6AD(bh, parentSpanInst);
      //appendnew_next_sd_sL08D6gqQgindRuU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sL08D6gqQgindRuU',
        spanInst,
        'sd_sL08D6gqQgindRuU'
      );
    }
  }

  async sd_WwWY4BoZbShMX6AD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WwWY4BoZbShMX6AD',
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
      let params = [];
      params = params ? params : [];
      bh.response = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_N7FV2o0ucMG52Q8s(bh, parentSpanInst);
      //appendnew_next_sd_WwWY4BoZbShMX6AD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WwWY4BoZbShMX6AD',
        spanInst,
        'sd_WwWY4BoZbShMX6AD'
      );
    }
  }

  async sd_N7FV2o0ucMG52Q8s(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_N7FV2o0ucMG52Q8s');
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
  //appendnew_flow_get_operation_Catch
}
