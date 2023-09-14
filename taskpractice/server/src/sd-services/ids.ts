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
import * as sd_6npBeNwjSkNS1DPL from './idsutil'; //_splitter_
//append_imports_end
export class ids {
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
    this.serviceName = 'ids';
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
      instance = new ids(
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
      //appendnew_flow_ids_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');

    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_4lA65fyVuBkViotg(bh, parentSpanInst);
          //appendnew_next_sd_hCYuUJPa6unllb1s
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_hCYuUJPa6unllb1s');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_uNt6yinVv7DnBgFC(bh, parentSpanInst);
          //appendnew_next_sd_91B1iFnHIL4JaEqH
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_91B1iFnHIL4JaEqH');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    this.app['get'](
      `${this.serviceBasePath}/login`,
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
          bh = await this.sd_WSBsNiR2tpPvAENw(bh, parentSpanInst);
          //appendnew_next_sd_1DWw8h1k6KIqTixB
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_1DWw8h1k6KIqTixB');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
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
          bh = await this.sd_ELTQFzXYsgKgpDxo(bh, parentSpanInst);
          //appendnew_next_sd_gsOBk8994DiyRxNz
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_gsOBk8994DiyRxNz');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/user/info`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
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
          bh = await this.sd_9ZX2dTTA3qLsECoD(bh, parentSpanInst);
          //appendnew_next_sd_l2ewyf0dhm0lvQz3
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_l2ewyf0dhm0lvQz3');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout`,
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
          bh = await this.sd_cPhdvXIZGbl4ihBI(bh, parentSpanInst);
          //appendnew_next_sd_l64oKadK8TLpij5U
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_l64oKadK8TLpij5U');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
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
          bh = await this.sd_P1D8tgxP1d5gxet2(bh, parentSpanInst);
          //appendnew_next_sd_AgHRh0Re6Zld9yqw
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_AgHRh0Re6Zld9yqw');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_start

  async sd_WSBsNiR2tpPvAENw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WSBsNiR2tpPvAENw',
      parentSpanInst
    );
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NMgXJZ0oUzSpJhuW(bh, parentSpanInst);
      //appendnew_next_sd_WSBsNiR2tpPvAENw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WSBsNiR2tpPvAENw',
        spanInst,
        'sd_WSBsNiR2tpPvAENw'
      );
    }
  }

  async sd_NMgXJZ0oUzSpJhuW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NMgXJZ0oUzSpJhuW',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_2GHsHmw3nXtd5Ced(bh, parentSpanInst);
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
        bh = await this.sd_9cNgnGvw2c9Q8JQT(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NMgXJZ0oUzSpJhuW',
        spanInst,
        'sd_NMgXJZ0oUzSpJhuW'
      );
    }
  }

  async sd_2GHsHmw3nXtd5Ced(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2GHsHmw3nXtd5Ced',
      parentSpanInst
    );
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2MXxzziCfxAT9eXW(bh, parentSpanInst);
      //appendnew_next_sd_2GHsHmw3nXtd5Ced
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2GHsHmw3nXtd5Ced',
        spanInst,
        'sd_2GHsHmw3nXtd5Ced'
      );
    }
  }

  async sd_2MXxzziCfxAT9eXW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2MXxzziCfxAT9eXW',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0Oomyd9sTEITod4j(bh, parentSpanInst);
      //appendnew_next_sd_2MXxzziCfxAT9eXW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2MXxzziCfxAT9eXW',
        spanInst,
        'sd_2MXxzziCfxAT9eXW'
      );
    }
  }

  async sd_0Oomyd9sTEITod4j(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0Oomyd9sTEITod4j',
      parentSpanInst
    );
    try {
      const sd_6npBeNwjSkNS1DPLInstance: sd_6npBeNwjSkNS1DPL.idsutil =
        sd_6npBeNwjSkNS1DPL.idsutil.getInstance();
      let outputVariables =
        await sd_6npBeNwjSkNS1DPLInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8APuruVgFWdoUV20(bh, parentSpanInst);
      //appendnew_next_sd_0Oomyd9sTEITod4j
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0Oomyd9sTEITod4j',
        spanInst,
        'sd_0Oomyd9sTEITod4j'
      );
    }
  }

  async sd_8APuruVgFWdoUV20(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8APuruVgFWdoUV20',
      parentSpanInst
    );
    try {
      const sd_6npBeNwjSkNS1DPLInstance: sd_6npBeNwjSkNS1DPL.idsutil =
        sd_6npBeNwjSkNS1DPL.idsutil.getInstance();
      let outputVariables =
        await sd_6npBeNwjSkNS1DPLInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6BM4UPCDn3AQemAX(bh, parentSpanInst);
      //appendnew_next_sd_8APuruVgFWdoUV20
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8APuruVgFWdoUV20',
        spanInst,
        'sd_8APuruVgFWdoUV20'
      );
    }
  }

  async sd_6BM4UPCDn3AQemAX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6BM4UPCDn3AQemAX',
      parentSpanInst
    );
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0],
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest),
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_t2cuhQxvVK7ZmayH(bh, parentSpanInst);
      //appendnew_next_sd_6BM4UPCDn3AQemAX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6BM4UPCDn3AQemAX',
        spanInst,
        'sd_6BM4UPCDn3AQemAX'
      );
    }
  }

  async sd_t2cuhQxvVK7ZmayH(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_t2cuhQxvVK7ZmayH');
    }
  }

  async sd_9cNgnGvw2c9Q8JQT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9cNgnGvw2c9Q8JQT',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_B8rsRrYq8A1Z7weu(bh, parentSpanInst);
      //appendnew_next_sd_9cNgnGvw2c9Q8JQT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9cNgnGvw2c9Q8JQT',
        spanInst,
        'sd_9cNgnGvw2c9Q8JQT'
      );
    }
  }

  async sd_B8rsRrYq8A1Z7weu(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_B8rsRrYq8A1Z7weu');
    }
  }

  async sd_4lA65fyVuBkViotg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4lA65fyVuBkViotg',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_rVkbVwlKcZY2gbSj(bh, parentSpanInst);
      //appendnew_next_sd_4lA65fyVuBkViotg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4lA65fyVuBkViotg',
        spanInst,
        'sd_4lA65fyVuBkViotg'
      );
    }
  }

  async sd_rVkbVwlKcZY2gbSj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rVkbVwlKcZY2gbSj',
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
        'sd_rVkbVwlKcZY2gbSj',
        spanInst,
        'sd_rVkbVwlKcZY2gbSj'
      );
    }
  }

  async sd_ELTQFzXYsgKgpDxo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ELTQFzXYsgKgpDxo',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_V3T4xxcQi2y75jmM(bh, parentSpanInst);
      //appendnew_next_sd_ELTQFzXYsgKgpDxo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ELTQFzXYsgKgpDxo',
        spanInst,
        'sd_ELTQFzXYsgKgpDxo'
      );
    }
  }

  async sd_V3T4xxcQi2y75jmM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_V3T4xxcQi2y75jmM',
      parentSpanInst
    );
    try {
      const sd_6npBeNwjSkNS1DPLInstance: sd_6npBeNwjSkNS1DPL.idsutil =
        sd_6npBeNwjSkNS1DPL.idsutil.getInstance();
      let outputVariables =
        await sd_6npBeNwjSkNS1DPLInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_axVdmroYNYNESTPn(bh, parentSpanInst);
      //appendnew_next_sd_V3T4xxcQi2y75jmM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_V3T4xxcQi2y75jmM',
        spanInst,
        'sd_V3T4xxcQi2y75jmM'
      );
    }
  }

  async sd_axVdmroYNYNESTPn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_axVdmroYNYNESTPn',
      parentSpanInst
    );
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state,
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token']),
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ZtE2wCBUmjemv6fq(bh, parentSpanInst);
      //appendnew_next_sd_axVdmroYNYNESTPn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_axVdmroYNYNESTPn',
        spanInst,
        'sd_axVdmroYNYNESTPn'
      );
    }
  }

  async sd_ZtE2wCBUmjemv6fq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZtE2wCBUmjemv6fq',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_n8ylh0ss0W9VKr0H(bh, parentSpanInst);
      //appendnew_next_sd_ZtE2wCBUmjemv6fq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZtE2wCBUmjemv6fq',
        spanInst,
        'sd_ZtE2wCBUmjemv6fq'
      );
    }
  }

  async sd_n8ylh0ss0W9VKr0H(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_n8ylh0ss0W9VKr0H',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_vQxtlrcWB9jw2c5N(bh, parentSpanInst);
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
        bh = await this.sd_TseSmF34bZhemKI8(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_n8ylh0ss0W9VKr0H',
        spanInst,
        'sd_n8ylh0ss0W9VKr0H'
      );
    }
  }

  async sd_vQxtlrcWB9jw2c5N(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vQxtlrcWB9jw2c5N',
      parentSpanInst
    );
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_k3BLRbNXvPEy6O1k(bh, parentSpanInst);
      //appendnew_next_sd_vQxtlrcWB9jw2c5N
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vQxtlrcWB9jw2c5N',
        spanInst,
        'sd_vQxtlrcWB9jw2c5N'
      );
    }
  }

  async sd_k3BLRbNXvPEy6O1k(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_k3BLRbNXvPEy6O1k');
    }
  }

  async sd_TseSmF34bZhemKI8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TseSmF34bZhemKI8',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_J1aTW63nnJpK69jY(bh, parentSpanInst);
      //appendnew_next_sd_TseSmF34bZhemKI8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TseSmF34bZhemKI8',
        spanInst,
        'sd_TseSmF34bZhemKI8'
      );
    }
  }

  async sd_J1aTW63nnJpK69jY(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_J1aTW63nnJpK69jY');
    }
  }

  async sd_9ZX2dTTA3qLsECoD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9ZX2dTTA3qLsECoD',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_9mLaf4GNy5ShZAzY(bh, parentSpanInst);
      //appendnew_next_sd_9ZX2dTTA3qLsECoD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9ZX2dTTA3qLsECoD',
        spanInst,
        'sd_9ZX2dTTA3qLsECoD'
      );
    }
  }

  async sd_9mLaf4GNy5ShZAzY(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9mLaf4GNy5ShZAzY');
    }
  }

  async sd_FDlafXp0sOF10BmO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FDlafXp0sOF10BmO',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_FDlafXp0sOF10BmO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FDlafXp0sOF10BmO',
        spanInst,
        'sd_FDlafXp0sOF10BmO'
      );
    }
  }

  async sd_cPhdvXIZGbl4ihBI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cPhdvXIZGbl4ihBI',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KU32UnAghsQpmltn(bh, parentSpanInst);
      //appendnew_next_sd_cPhdvXIZGbl4ihBI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cPhdvXIZGbl4ihBI',
        spanInst,
        'sd_cPhdvXIZGbl4ihBI'
      );
    }
  }

  async sd_KU32UnAghsQpmltn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KU32UnAghsQpmltn',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_p1LLmal5zqgfX0Ra(bh, parentSpanInst);
      //appendnew_next_sd_KU32UnAghsQpmltn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KU32UnAghsQpmltn',
        spanInst,
        'sd_KU32UnAghsQpmltn'
      );
    }
  }

  async sd_p1LLmal5zqgfX0Ra(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_p1LLmal5zqgfX0Ra',
      parentSpanInst
    );
    try {
      const sd_6npBeNwjSkNS1DPLInstance: sd_6npBeNwjSkNS1DPL.idsutil =
        sd_6npBeNwjSkNS1DPL.idsutil.getInstance();
      let outputVariables =
        await sd_6npBeNwjSkNS1DPLInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Ede5oi3kjEw8zPBh(bh, parentSpanInst);
      //appendnew_next_sd_p1LLmal5zqgfX0Ra
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_p1LLmal5zqgfX0Ra',
        spanInst,
        'sd_p1LLmal5zqgfX0Ra'
      );
    }
  }

  async sd_Ede5oi3kjEw8zPBh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ede5oi3kjEw8zPBh',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_hoWqhlYPIdil49gw(bh, parentSpanInst);
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
        bh = await this.sd_Hi9Eqxi56D8B0zSi(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ede5oi3kjEw8zPBh',
        spanInst,
        'sd_Ede5oi3kjEw8zPBh'
      );
    }
  }

  async sd_hoWqhlYPIdil49gw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hoWqhlYPIdil49gw',
      parentSpanInst
    );
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined,
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id'],
              },
            }
          )
        ),
        sessionExists: true,
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst);
      //appendnew_next_sd_hoWqhlYPIdil49gw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hoWqhlYPIdil49gw',
        spanInst,
        'sd_hoWqhlYPIdil49gw'
      );
    }
  }

  async sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dCWCI7Lqpk6tk1KJ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_oKOrgQk19HRl8iQw(bh, parentSpanInst);
      //appendnew_next_sd_dCWCI7Lqpk6tk1KJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dCWCI7Lqpk6tk1KJ',
        spanInst,
        'sd_dCWCI7Lqpk6tk1KJ'
      );
    }
  }

  async sd_oKOrgQk19HRl8iQw(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oKOrgQk19HRl8iQw');
    }
  }

  async sd_Hi9Eqxi56D8B0zSi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Hi9Eqxi56D8B0zSi',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_oKOrgQk19HRl8iQw(bh, parentSpanInst);
      //appendnew_next_sd_Hi9Eqxi56D8B0zSi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Hi9Eqxi56D8B0zSi',
        spanInst,
        'sd_Hi9Eqxi56D8B0zSi'
      );
    }
  }

  async sd_P1D8tgxP1d5gxet2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_P1D8tgxP1d5gxet2',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_UqkbeGWedxCdSN7c(bh, parentSpanInst);
      //appendnew_next_sd_P1D8tgxP1d5gxet2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P1D8tgxP1d5gxet2',
        spanInst,
        'sd_P1D8tgxP1d5gxet2'
      );
    }
  }

  async sd_UqkbeGWedxCdSN7c(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UqkbeGWedxCdSN7c',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NGDVRLausAsZ5pV7(bh, parentSpanInst);
      //appendnew_next_sd_UqkbeGWedxCdSN7c
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UqkbeGWedxCdSN7c',
        spanInst,
        'sd_UqkbeGWedxCdSN7c'
      );
    }
  }

  async sd_NGDVRLausAsZ5pV7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NGDVRLausAsZ5pV7',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_T87Eeh7yMEKLoAJx(bh, parentSpanInst);
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
        bh = await this.sd_9hjDpdpt772icR9E(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NGDVRLausAsZ5pV7',
        spanInst,
        'sd_NGDVRLausAsZ5pV7'
      );
    }
  }

  async sd_T87Eeh7yMEKLoAJx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_T87Eeh7yMEKLoAJx',
      parentSpanInst
    );
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_6rcmDar3w04OJDGs(bh, parentSpanInst);
      //appendnew_next_sd_T87Eeh7yMEKLoAJx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_T87Eeh7yMEKLoAJx',
        spanInst,
        'sd_T87Eeh7yMEKLoAJx'
      );
    }
  }

  async sd_6rcmDar3w04OJDGs(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6rcmDar3w04OJDGs');
    }
  }

  async sd_9hjDpdpt772icR9E(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9hjDpdpt772icR9E',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_J1ykDIQzZVWDk87g(bh, parentSpanInst);
      //appendnew_next_sd_9hjDpdpt772icR9E
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9hjDpdpt772icR9E',
        spanInst,
        'sd_9hjDpdpt772icR9E'
      );
    }
  }

  async sd_J1ykDIQzZVWDk87g(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_J1ykDIQzZVWDk87g');
    }
  }

  async sd_uNt6yinVv7DnBgFC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uNt6yinVv7DnBgFC',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_usuorIpS13nKd1Wg(bh, parentSpanInst);
      //appendnew_next_sd_uNt6yinVv7DnBgFC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uNt6yinVv7DnBgFC',
        spanInst,
        'sd_uNt6yinVv7DnBgFC'
      );
    }
  }

  async sd_usuorIpS13nKd1Wg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_usuorIpS13nKd1Wg',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Y2GoJCcu6VbwAEtX(bh, parentSpanInst);
      //appendnew_next_sd_usuorIpS13nKd1Wg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_usuorIpS13nKd1Wg',
        spanInst,
        'sd_usuorIpS13nKd1Wg'
      );
    }
  }

  async sd_Y2GoJCcu6VbwAEtX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Y2GoJCcu6VbwAEtX',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_r8sVRY4iz7PcFR2Q(bh, parentSpanInst);
      //appendnew_next_sd_Y2GoJCcu6VbwAEtX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Y2GoJCcu6VbwAEtX',
        spanInst,
        'sd_Y2GoJCcu6VbwAEtX'
      );
    }
  }

  async sd_r8sVRY4iz7PcFR2Q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_r8sVRY4iz7PcFR2Q',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_kh6EdZQuN7u3CIqp(bh, parentSpanInst);
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
        bh = await this.sd_IgYmlaw61Sr9WnbV(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_r8sVRY4iz7PcFR2Q',
        spanInst,
        'sd_r8sVRY4iz7PcFR2Q'
      );
    }
  }

  async sd_kh6EdZQuN7u3CIqp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kh6EdZQuN7u3CIqp',
      parentSpanInst
    );
    try {
      const sd_6npBeNwjSkNS1DPLInstance: sd_6npBeNwjSkNS1DPL.idsutil =
        sd_6npBeNwjSkNS1DPL.idsutil.getInstance();
      let outputVariables = await sd_6npBeNwjSkNS1DPLInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_E6bAuWBpPBottNvp(bh, parentSpanInst);
      //appendnew_next_sd_kh6EdZQuN7u3CIqp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kh6EdZQuN7u3CIqp',
        spanInst,
        'sd_kh6EdZQuN7u3CIqp'
      );
    }
  }

  async sd_E6bAuWBpPBottNvp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_E6bAuWBpPBottNvp',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_l1a5DvhYFKSkGeQ8(bh, parentSpanInst);
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
        bh = await this.sd_5H5stOyYN99ozr4G(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_E6bAuWBpPBottNvp',
        spanInst,
        'sd_E6bAuWBpPBottNvp'
      );
    }
  }

  async sd_l1a5DvhYFKSkGeQ8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_l1a5DvhYFKSkGeQ8',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_uuGhqjcts1eZ2kZZ(bh, parentSpanInst);
      //appendnew_next_sd_l1a5DvhYFKSkGeQ8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_l1a5DvhYFKSkGeQ8',
        spanInst,
        'sd_l1a5DvhYFKSkGeQ8'
      );
    }
  }

  async sd_uuGhqjcts1eZ2kZZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uuGhqjcts1eZ2kZZ',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Ufx5i4pxnqIWufsy(bh, parentSpanInst);
      //appendnew_next_sd_uuGhqjcts1eZ2kZZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uuGhqjcts1eZ2kZZ',
        spanInst,
        'sd_uuGhqjcts1eZ2kZZ'
      );
    }
  }

  async sd_Ufx5i4pxnqIWufsy(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ufx5i4pxnqIWufsy');
    }
  }

  async sd_5H5stOyYN99ozr4G(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5H5stOyYN99ozr4G',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_LNLcfBRRc1aBDjsq(bh, parentSpanInst);
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
        bh = await this.sd_FPJNhLAl8zvb0o3a(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5H5stOyYN99ozr4G',
        spanInst,
        'sd_5H5stOyYN99ozr4G'
      );
    }
  }

  async sd_LNLcfBRRc1aBDjsq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LNLcfBRRc1aBDjsq',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_a6oM3TPlGosQtjui(bh, parentSpanInst);
      //appendnew_next_sd_LNLcfBRRc1aBDjsq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LNLcfBRRc1aBDjsq',
        spanInst,
        'sd_LNLcfBRRc1aBDjsq'
      );
    }
  }

  async sd_a6oM3TPlGosQtjui(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a6oM3TPlGosQtjui',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_FPJNhLAl8zvb0o3a(bh, parentSpanInst);
      //appendnew_next_sd_a6oM3TPlGosQtjui
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a6oM3TPlGosQtjui',
        spanInst,
        'sd_a6oM3TPlGosQtjui'
      );
    }
  }

  async sd_FPJNhLAl8zvb0o3a(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FPJNhLAl8zvb0o3a',
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
        'sd_FPJNhLAl8zvb0o3a',
        spanInst,
        'sd_FPJNhLAl8zvb0o3a'
      );
    }
  }

  async sd_IgYmlaw61Sr9WnbV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IgYmlaw61Sr9WnbV',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_S0jyVScmUkZfPq3q(bh, parentSpanInst);
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
        bh = await this.sd_F0QMEt5ZYkAatKdw(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IgYmlaw61Sr9WnbV',
        spanInst,
        'sd_IgYmlaw61Sr9WnbV'
      );
    }
  }

  async sd_S0jyVScmUkZfPq3q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_S0jyVScmUkZfPq3q',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Ufx5i4pxnqIWufsy(bh, parentSpanInst);
      //appendnew_next_sd_S0jyVScmUkZfPq3q
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S0jyVScmUkZfPq3q',
        spanInst,
        'sd_S0jyVScmUkZfPq3q'
      );
    }
  }

  async sd_F0QMEt5ZYkAatKdw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_F0QMEt5ZYkAatKdw',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Ufx5i4pxnqIWufsy(bh, parentSpanInst);
      //appendnew_next_sd_F0QMEt5ZYkAatKdw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_F0QMEt5ZYkAatKdw',
        spanInst,
        'sd_F0QMEt5ZYkAatKdw'
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
      false ||
      (await this.sd_LkQeXlnLoYUCul5F(bh, parentSpanInst)) ||
      (await this.sd_eZtWaDB2y3B6s2CP(bh, parentSpanInst))
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
  async sd_LkQeXlnLoYUCul5F(bh, parentSpanInst) {
    const nodes = [
      'sd_8APuruVgFWdoUV20',
      'sd_gsOBk8994DiyRxNz',
      'sd_V3T4xxcQi2y75jmM',
      'sd_axVdmroYNYNESTPn',
      'sd_ELTQFzXYsgKgpDxo',
      'sd_n8ylh0ss0W9VKr0H',
      'sd_vQxtlrcWB9jw2c5N',
      'sd_TseSmF34bZhemKI8',
      'sd_k3BLRbNXvPEy6O1k',
      'sd_J1aTW63nnJpK69jY',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_FDlafXp0sOF10BmO(bh, parentSpanInst);
      //appendnew_next_sd_LkQeXlnLoYUCul5F
      return true;
    }
    return false;
  }
  async sd_eZtWaDB2y3B6s2CP(bh, parentSpanInst) {
    const nodes = ['sd_kh6EdZQuN7u3CIqp'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_uuGhqjcts1eZ2kZZ(bh, parentSpanInst);
      //appendnew_next_sd_eZtWaDB2y3B6s2CP
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
