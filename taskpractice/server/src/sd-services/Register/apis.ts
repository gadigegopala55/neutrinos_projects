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
export class apis {
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
    this.serviceName = 'apis';
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
      instance = new apis(
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
      //appendnew_flow_apis_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: apis');

    //appendnew_flow_apis_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: apis');

    this.app['get'](
      `${this.serviceBasePath}/sf-test`,
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
          bh = await this.sd_IHAoyKiLuPEoW20s(bh, parentSpanInst);
          //appendnew_next_sd_D7ZIHTrDJv6DG8du
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_D7ZIHTrDJv6DG8du');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_apis_HttpIn
  }
  //   service flows_apis

  //appendnew_flow_apis_start

  async sd_IHAoyKiLuPEoW20s(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IHAoyKiLuPEoW20s',
      parentSpanInst
    );
    try {
      let queryParams = {
        grant_type: 'password',
        client_id:
          '3MVG9pRzvMkjMb6npUZ6ydD9sSbLf7.djsBM5L57o808i92QL96gX2ff3YMDYqqye7Qof6pq33ROht8hiLj3M',
        client_secret:
          'A5E02E779B6248CF3B8A33D58B8F1DE46E0F265B0BA4D9E8E55BC2AC942021FE',
        username: 'gadigegopalakrishna-t1fj@force.com',
        password:
          'Gopal@327IA9a6FrJq76mq4DfMCIDx0xsI' +
          '6Cel800D5j00000Cs1M28885j0000009kY6yCYajFIwG0BfbEnbS72wYQy9JbDjlY35L8oIvBxV4qo9SkcAN1GiMhDrwlDzsLy7j0fxWVV0',
        redirect_uri: 'http://localhost:8081/callback',
      };
      let requestOptions = {
        url: 'https://login.salesforce.com/services/oauth2/token',
        timeout: 30000,
        method: 'post',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: undefined,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: queryParams,
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
      bh.result = await this.sdService.httpRequest(
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
      if (bh.result.payload) {
        bh.result = bh.result.payload;
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_G7ul1lZv8Aa17iwx(bh, parentSpanInst);
      //appendnew_next_sd_IHAoyKiLuPEoW20s
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IHAoyKiLuPEoW20s',
        spanInst,
        'sd_IHAoyKiLuPEoW20s'
      );
    }
  }

  async sd_G7ul1lZv8Aa17iwx(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_G7ul1lZv8Aa17iwx');
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
  //appendnew_flow_apis_Catch
}
