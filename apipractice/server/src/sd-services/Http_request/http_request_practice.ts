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
export class http_request_practice {
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
    this.serviceName = 'http_request_practice';
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
      instance = new http_request_practice(
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
      //appendnew_flow_http_request_practice_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: http_request_practice');

    //appendnew_flow_http_request_practice_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: http_request_practice');

    this.app['get'](
      `${this.serviceBasePath}/request-practice`,
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
          bh = await this.sd_Lv89XicfqdoXTkVj(bh, parentSpanInst);
          //appendnew_next_sd_JLTOS2N2n0frfnYI
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_JLTOS2N2n0frfnYI');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_http_request_practice_HttpIn
  }
  //   service flows_http_request_practice

  //appendnew_flow_http_request_practice_start

  async sd_Lv89XicfqdoXTkVj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Lv89XicfqdoXTkVj',
      parentSpanInst
    );
    try {
      bh.url = bh.system.environment.REQUEST_URL + '/users?page=1';

      console.log(bh.url);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.request_node(bh, parentSpanInst);
      //appendnew_next_sd_Lv89XicfqdoXTkVj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Lv89XicfqdoXTkVj',
        spanInst,
        'sd_Lv89XicfqdoXTkVj'
      );
    }
  }

  async request_node(bh, parentSpanInst) {
    try {
      let requestOptions = {
        url: bh.url,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: undefined,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        rejectUnauthorized: undefined,
        useQuerystring: false,
      };
      if (!false) {
        requestOptions.rejectUnauthorized = false;
      }
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.response = responseMsg;

      bh = await this.sd_T5myG09uzB8M4lWn(bh, parentSpanInst);
      //appendnew_next_request_node
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WyXJSLWNw8dariZO');
    }
  }

  async sd_T5myG09uzB8M4lWn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_T5myG09uzB8M4lWn',
      parentSpanInst
    );
    try {
      bh.result = {
        data: bh.response.payload.data,
        status_code: bh.response.statusCode,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_IPW1v441iRmvt4lQ(bh, parentSpanInst);
      //appendnew_next_sd_T5myG09uzB8M4lWn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_T5myG09uzB8M4lWn',
        spanInst,
        'sd_T5myG09uzB8M4lWn'
      );
    }
  }

  async sd_IPW1v441iRmvt4lQ(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IPW1v441iRmvt4lQ');
    }
  }

  async sd_KbZzxTJSHW2WsB4w(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KbZzxTJSHW2WsB4w',
      parentSpanInst
    );
    try {
      bh.error = {
        Error_Name: bh.error.name,
        Error_Code: bh.error.code,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_iPy5IxpSyhOz9mIo(bh, parentSpanInst);
      //appendnew_next_sd_KbZzxTJSHW2WsB4w
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KbZzxTJSHW2WsB4w',
        spanInst,
        'sd_KbZzxTJSHW2WsB4w'
      );
    }
  }

  async sd_iPy5IxpSyhOz9mIo(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.error);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iPy5IxpSyhOz9mIo');
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
      (await this.sd_GuyEWzOlwwqcUzHc(bh, parentSpanInst))
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
  async sd_GuyEWzOlwwqcUzHc(bh, parentSpanInst) {
    const nodes = ['sd_WyXJSLWNw8dariZO'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_KbZzxTJSHW2WsB4w(bh, parentSpanInst);
      //appendnew_next_sd_GuyEWzOlwwqcUzHc
      return true;
    }
    return false;
  }
  //appendnew_flow_http_request_practice_Catch
}
