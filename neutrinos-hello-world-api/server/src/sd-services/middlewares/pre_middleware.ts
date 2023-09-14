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
export class pre_middleware {
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
    this.serviceName = 'pre_middleware';
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
      instance = new pre_middleware(
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
      //appendnew_flow_pre_middleware_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: pre_middleware');

    let mw_pre_auth: Middleware = new Middleware(
      this.serviceName,
      'pre_auth',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_KVsGCxiUfu8UbdAy(bh, parentSpanInst);
          //appendnew_next_sd_92dGeaVVBHJMtDtD
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_92dGeaVVBHJMtDtD');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['pre_auth'] = mw_pre_auth;
    //appendnew_flow_pre_middleware_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: pre_middleware');
    //appendnew_flow_pre_middleware_HttpIn
  }
  //   service flows_pre_middleware

  //appendnew_flow_pre_middleware_start

  async sd_KVsGCxiUfu8UbdAy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KVsGCxiUfu8UbdAy',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AyIqkCcH5CB5ctre(bh, parentSpanInst);
      //appendnew_next_sd_KVsGCxiUfu8UbdAy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KVsGCxiUfu8UbdAy',
        spanInst,
        'sd_KVsGCxiUfu8UbdAy'
      );
    }
  }

  async sd_AyIqkCcH5CB5ctre(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AyIqkCcH5CB5ctre',
      parentSpanInst
    );
    try {
      console.log('pre_auth_called');

      console.log(bh.local.session);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7PxQyydz7V5hTmrR(bh, parentSpanInst);
      //appendnew_next_sd_AyIqkCcH5CB5ctre
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AyIqkCcH5CB5ctre',
        spanInst,
        'sd_AyIqkCcH5CB5ctre'
      );
    }
  }

  async sd_7PxQyydz7V5hTmrR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7PxQyydz7V5hTmrR',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['nnull'](
          bh.local.session.data,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_NnViosNsvigR7DmE(bh, parentSpanInst);
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
        bh = await this.sd_Bv0D0QTR6WVyqa7M(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7PxQyydz7V5hTmrR',
        spanInst,
        'sd_7PxQyydz7V5hTmrR'
      );
    }
  }

  async sd_NnViosNsvigR7DmE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NnViosNsvigR7DmE',
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
        'sd_NnViosNsvigR7DmE',
        spanInst,
        'sd_NnViosNsvigR7DmE'
      );
    }
  }

  async sd_Bv0D0QTR6WVyqa7M(bh, parentSpanInst) {
    try {
      bh.web.res.status(401).send('Invalid Authorization User');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Bv0D0QTR6WVyqa7M');
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
  //appendnew_flow_pre_middleware_Catch
}
