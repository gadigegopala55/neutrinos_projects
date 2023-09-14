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
export class post_middleware {
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
    this.serviceName = 'post_middleware';
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
      instance = new post_middleware(
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
      //appendnew_flow_post_middleware_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: post_middleware');

    let mw_post_auth: Middleware = new Middleware(
      this.serviceName,
      'post_auth',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_LM6nqSomFZjE2Gc5(bh, parentSpanInst);
          //appendnew_next_sd_ONzEqgeLfDSVyrL4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ONzEqgeLfDSVyrL4');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['post_auth'] = mw_post_auth;
    //appendnew_flow_post_middleware_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: post_middleware');
    //appendnew_flow_post_middleware_HttpIn
  }
  //   service flows_post_middleware

  //appendnew_flow_post_middleware_start

  async sd_LM6nqSomFZjE2Gc5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LM6nqSomFZjE2Gc5',
      parentSpanInst
    );
    try {
      console.log('post_auth_called');
      this.tracerService.sendData(spanInst, bh);
      await this.sd_4mZESnbtFhmam8KH(bh, parentSpanInst);
      //appendnew_next_sd_LM6nqSomFZjE2Gc5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LM6nqSomFZjE2Gc5',
        spanInst,
        'sd_LM6nqSomFZjE2Gc5'
      );
    }
  }

  async sd_4mZESnbtFhmam8KH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4mZESnbtFhmam8KH',
      parentSpanInst
    );
    try {
      bh.web.res.status(200).send(bh.web.req.response);
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4mZESnbtFhmam8KH',
        spanInst,
        'sd_4mZESnbtFhmam8KH'
      );
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
  //appendnew_flow_post_middleware_Catch
}
