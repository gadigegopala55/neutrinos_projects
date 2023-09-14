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
//append_imports_end
export class calculator {
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
    this.serviceName = 'calculator';
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
      instance = new calculator(
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
      //appendnew_flow_calculator_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: calculator');

    let mw_calculator_middleware: Middleware = new Middleware(
      this.serviceName,
      'calculator_middleware',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_cW01CHOkm2dYGTfV(bh, parentSpanInst);
          //appendnew_next_sd_YB5WrfRrkkGZyzy5
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_YB5WrfRrkkGZyzy5');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['calculator_middleware'] =
      mw_calculator_middleware;
    //appendnew_flow_calculator_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: calculator');
    //appendnew_flow_calculator_HttpIn
  }
  //   service flows_calculator

  //appendnew_flow_calculator_start

  async sd_cW01CHOkm2dYGTfV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cW01CHOkm2dYGTfV',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Juol5GVWW8JD4KH8(bh, parentSpanInst);
      //appendnew_next_sd_cW01CHOkm2dYGTfV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cW01CHOkm2dYGTfV',
        spanInst,
        'sd_cW01CHOkm2dYGTfV'
      );
    }
  }

  async sd_Juol5GVWW8JD4KH8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Juol5GVWW8JD4KH8',
      parentSpanInst
    );
    try {
      bh.status = false;
      if (bh.session?.data?.calculator) {
        bh.status = true;
      } else {
        bh.result = {
          statusCode: 403,
          error: 'please login',
        };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_vkGOvxMrMW7l7FPW(bh, parentSpanInst);
      //appendnew_next_sd_Juol5GVWW8JD4KH8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Juol5GVWW8JD4KH8',
        spanInst,
        'sd_Juol5GVWW8JD4KH8'
      );
    }
  }

  async sd_vkGOvxMrMW7l7FPW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vkGOvxMrMW7l7FPW',
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
        bh = await this.sd_QAs9vILB9zliUAzJ(bh, parentSpanInst);
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
        bh = await this.sd_5dCdEC3ISN1MCZB1(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vkGOvxMrMW7l7FPW',
        spanInst,
        'sd_vkGOvxMrMW7l7FPW'
      );
    }
  }

  async sd_QAs9vILB9zliUAzJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QAs9vILB9zliUAzJ',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QAs9vILB9zliUAzJ',
        spanInst,
        'sd_QAs9vILB9zliUAzJ'
      );
    }
  }

  async sd_5dCdEC3ISN1MCZB1(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5dCdEC3ISN1MCZB1');
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
  //appendnew_flow_calculator_Catch
}
