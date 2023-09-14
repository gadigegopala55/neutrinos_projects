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
export class marks {
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
    this.serviceName = 'marks';
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
      instance = new marks(
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
      //appendnew_flow_marks_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: marks');

    let mw_marks_middleware: Middleware = new Middleware(
      this.serviceName,
      'marks_middleware',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_S1HZE0iJkIea1Wcx(bh, parentSpanInst);
          //appendnew_next_sd_1a40aXx9sItHO5Tp
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_1a40aXx9sItHO5Tp');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['marks_middleware'] =
      mw_marks_middleware;
    //appendnew_flow_marks_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: marks');
    //appendnew_flow_marks_HttpIn
  }
  //   service flows_marks

  //appendnew_flow_marks_start

  async sd_S1HZE0iJkIea1Wcx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_S1HZE0iJkIea1Wcx',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nbBaZXzLslLgDTz3(bh, parentSpanInst);
      //appendnew_next_sd_S1HZE0iJkIea1Wcx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S1HZE0iJkIea1Wcx',
        spanInst,
        'sd_S1HZE0iJkIea1Wcx'
      );
    }
  }

  async sd_nbBaZXzLslLgDTz3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nbBaZXzLslLgDTz3',
      parentSpanInst
    );
    try {
      bh.status = false;
      if (bh.session?.data?.marks) {
        bh.status = true;
      } else {
        bh.result = {
          statusCode: 403,
          error: 'please login',
        };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_W1qkJH0k5cA9MdGq(bh, parentSpanInst);
      //appendnew_next_sd_nbBaZXzLslLgDTz3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nbBaZXzLslLgDTz3',
        spanInst,
        'sd_nbBaZXzLslLgDTz3'
      );
    }
  }

  async sd_W1qkJH0k5cA9MdGq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_W1qkJH0k5cA9MdGq',
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
        bh = await this.sd_dyxAE5FaGqkpOhhI(bh, parentSpanInst);
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
        bh = await this.sd_BJittjXnCxnIXfRe(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_W1qkJH0k5cA9MdGq',
        spanInst,
        'sd_W1qkJH0k5cA9MdGq'
      );
    }
  }

  async sd_dyxAE5FaGqkpOhhI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dyxAE5FaGqkpOhhI',
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
        'sd_dyxAE5FaGqkpOhhI',
        spanInst,
        'sd_dyxAE5FaGqkpOhhI'
      );
    }
  }

  async sd_BJittjXnCxnIXfRe(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BJittjXnCxnIXfRe');
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
  //appendnew_flow_marks_Catch
}
