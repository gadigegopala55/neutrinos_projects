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
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import { GenericRDBMSOperations } from '../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class apis_testing {
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
    this.serviceName = 'apis_testing';
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
      instance = new apis_testing(
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
      //appendnew_flow_apis_testing_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: apis_testing');

    //appendnew_flow_apis_testing_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: apis_testing');

    this.app['get'](
      `${this.serviceBasePath}/get-task-data`,
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
          bh = await this.sd_ZD8am4uI0KVrW55Q(bh, parentSpanInst);
          //appendnew_next_sd_C2a8L6SPtWCB5nJk
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_C2a8L6SPtWCB5nJk');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/get-id-data`,
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
          bh = await this.sd_RxX6WaXU1LjDmbw9(bh, parentSpanInst);
          //appendnew_next_sd_YoZ9QrA7zriWWA26
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_YoZ9QrA7zriWWA26');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_apis_testing_HttpIn
  }
  //   service flows_apis_testing

  //appendnew_flow_apis_testing_start

  async sd_ZD8am4uI0KVrW55Q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZD8am4uI0KVrW55Q',
      parentSpanInst
    );
    try {
      bh.local.query = 'select * from task';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ER8swKgqqZ42MkiL(bh, parentSpanInst);
      //appendnew_next_sd_ZD8am4uI0KVrW55Q
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZD8am4uI0KVrW55Q',
        spanInst,
        'sd_ZD8am4uI0KVrW55Q'
      );
    }
  }

  async sd_ER8swKgqqZ42MkiL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ER8swKgqqZ42MkiL',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_f4nPAR7KNwtz5TC3'
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
      bh.local.response = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_OB2cBJRqzxlABb4w(bh, parentSpanInst);
      //appendnew_next_sd_ER8swKgqqZ42MkiL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ER8swKgqqZ42MkiL',
        spanInst,
        'sd_ER8swKgqqZ42MkiL'
      );
    }
  }

  async sd_OB2cBJRqzxlABb4w(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OB2cBJRqzxlABb4w');
    }
  }

  async sd_hr5vZchR9V40HFZo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hr5vZchR9V40HFZo',
      parentSpanInst
    );
    try {
      // console.log(bh.error);

      bh.response = {
        status: 'Failed',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_u8ELSTFUNuotM2am(bh, parentSpanInst);
      //appendnew_next_sd_hr5vZchR9V40HFZo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hr5vZchR9V40HFZo',
        spanInst,
        'sd_hr5vZchR9V40HFZo'
      );
    }
  }

  async sd_u8ELSTFUNuotM2am(bh, parentSpanInst) {
    try {
      bh.web.res.status(500).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_u8ELSTFUNuotM2am');
    }
  }

  async sd_RxX6WaXU1LjDmbw9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RxX6WaXU1LjDmbw9',
      parentSpanInst
    );
    try {
      bh.local.query = 'select * from task where id = $1';

      bh.local.params = [bh.input.query.id];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_mSpNJQgS1XTI4ghq(bh, parentSpanInst);
      //appendnew_next_sd_RxX6WaXU1LjDmbw9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RxX6WaXU1LjDmbw9',
        spanInst,
        'sd_RxX6WaXU1LjDmbw9'
      );
    }
  }

  async sd_mSpNJQgS1XTI4ghq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mSpNJQgS1XTI4ghq',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_f4nPAR7KNwtz5TC3'
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
      let params = bh.local.params;
      params = params ? params : [];
      bh.local.response = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_shGM54H20IqqxK3F(bh, parentSpanInst);
      //appendnew_next_sd_mSpNJQgS1XTI4ghq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mSpNJQgS1XTI4ghq',
        spanInst,
        'sd_mSpNJQgS1XTI4ghq'
      );
    }
  }

  async sd_shGM54H20IqqxK3F(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_shGM54H20IqqxK3F',
      parentSpanInst
    );
    try {
      if (bh.local.response.length === 0) {
        bh.result = {
          status: 'Failed',
          message: 'No data found',
        };
        bh.status_code = 404;
      } else {
        bh.result = bh.local.response;
        bh.status_code = 200;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_1TVHEJuXAmXo6Lyc(bh, parentSpanInst);
      //appendnew_next_sd_shGM54H20IqqxK3F
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_shGM54H20IqqxK3F',
        spanInst,
        'sd_shGM54H20IqqxK3F'
      );
    }
  }

  async sd_1TVHEJuXAmXo6Lyc(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status_code).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1TVHEJuXAmXo6Lyc');
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
      false ||
      (await this.sd_aSkWoC2cAsx62A5T(bh, parentSpanInst))
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
  async sd_aSkWoC2cAsx62A5T(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_hr5vZchR9V40HFZo', 'sd_u8ELSTFUNuotM2am'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_hr5vZchR9V40HFZo(bh, parentSpanInst);
    //appendnew_next_sd_aSkWoC2cAsx62A5T
    return true;
  }
  //appendnew_flow_apis_testing_Catch
}
