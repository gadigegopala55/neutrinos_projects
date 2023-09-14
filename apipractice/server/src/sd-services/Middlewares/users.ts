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
export class users {
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
    this.serviceName = 'users';
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
      instance = new users(
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
      //appendnew_flow_users_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: users');

    let mw_user_middleware: Middleware = new Middleware(
      this.serviceName,
      'user_middleware',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_cSPlbFqN5SH4uQca(bh, parentSpanInst);
          //appendnew_next_sd_2X5I37AlZa57GiUy
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_2X5I37AlZa57GiUy');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['user_middleware'] =
      mw_user_middleware;
    //appendnew_flow_users_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: users');
    //appendnew_flow_users_HttpIn
  }
  //   service flows_users

  //appendnew_flow_users_start

  async sd_cSPlbFqN5SH4uQca(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cSPlbFqN5SH4uQca',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xJpFi8eZEzZU65uO(bh, parentSpanInst);
      //appendnew_next_sd_cSPlbFqN5SH4uQca
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cSPlbFqN5SH4uQca',
        spanInst,
        'sd_cSPlbFqN5SH4uQca'
      );
    }
  }

  async sd_xJpFi8eZEzZU65uO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xJpFi8eZEzZU65uO',
      parentSpanInst
    );
    try {
      bh.status = false;
      if (bh.session?.data?.users) {
        bh.status = true;
      } else {
        bh.result = {
          statusCode: 403,
          error: 'please login',
        };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_LWQ06FmLWtjiEUi3(bh, parentSpanInst);
      //appendnew_next_sd_xJpFi8eZEzZU65uO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xJpFi8eZEzZU65uO',
        spanInst,
        'sd_xJpFi8eZEzZU65uO'
      );
    }
  }

  async sd_LWQ06FmLWtjiEUi3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LWQ06FmLWtjiEUi3',
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
        bh = await this.sd_i2tqMQsAaCkfBMVH(bh, parentSpanInst);
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
        bh = await this.sd_2TgrHFGUykVs4iG7(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LWQ06FmLWtjiEUi3',
        spanInst,
        'sd_LWQ06FmLWtjiEUi3'
      );
    }
  }

  async sd_i2tqMQsAaCkfBMVH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_i2tqMQsAaCkfBMVH',
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
        'sd_i2tqMQsAaCkfBMVH',
        spanInst,
        'sd_i2tqMQsAaCkfBMVH'
      );
    }
  }

  async sd_2TgrHFGUykVs4iG7(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2TgrHFGUykVs4iG7');
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
  //appendnew_flow_users_Catch
}
