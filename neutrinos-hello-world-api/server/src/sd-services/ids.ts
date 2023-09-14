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
import * as sd_p6O4djQoUmhBm5O4 from './idsutil'; //_splitter_
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
          bh = await this.sd_A98RJ4H8JFFrpob9(bh, parentSpanInst);
          //appendnew_next_sd_mQJTibS8UyotWdL3
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_mQJTibS8UyotWdL3');
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
          bh = await this.sd_am56HuVosXkSHcgB(bh, parentSpanInst);
          //appendnew_next_sd_RxcNN8rfMWkvVPkv
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_RxcNN8rfMWkvVPkv');
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
          bh = await this.sd_K1RDrI4zZrIjTjli(bh, parentSpanInst);
          //appendnew_next_sd_mTIalL6yfOSQb63B
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_mTIalL6yfOSQb63B');
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
          bh = await this.sd_GTxLL7BSgflmmAnU(bh, parentSpanInst);
          //appendnew_next_sd_P5uAUkErzx6am4PO
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_P5uAUkErzx6am4PO');
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
          bh = await this.sd_6GGXBoeKOEKamoKP(bh, parentSpanInst);
          //appendnew_next_sd_g14MH6wGCr3JUXTT
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_g14MH6wGCr3JUXTT');
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
          bh = await this.sd_qStc4ol0OADlRV5x(bh, parentSpanInst);
          //appendnew_next_sd_XOZzrwXN8cbuNlEZ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_XOZzrwXN8cbuNlEZ');
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
          bh = await this.sd_OwHA5wPyERgOoaXJ(bh, parentSpanInst);
          //appendnew_next_sd_Wt1Ao2gumnczNeIF
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Wt1Ao2gumnczNeIF');
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

  async sd_K1RDrI4zZrIjTjli(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_K1RDrI4zZrIjTjli',
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
      bh = await this.sd_qz8liOL2fh9jfFPZ(bh, parentSpanInst);
      //appendnew_next_sd_K1RDrI4zZrIjTjli
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_K1RDrI4zZrIjTjli',
        spanInst,
        'sd_K1RDrI4zZrIjTjli'
      );
    }
  }

  async sd_qz8liOL2fh9jfFPZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qz8liOL2fh9jfFPZ',
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
        bh = await this.sd_f8yfKtkXeJa5PGVd(bh, parentSpanInst);
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
        bh = await this.sd_DFp6ct4CdJHvJjZK(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qz8liOL2fh9jfFPZ',
        spanInst,
        'sd_qz8liOL2fh9jfFPZ'
      );
    }
  }

  async sd_f8yfKtkXeJa5PGVd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_f8yfKtkXeJa5PGVd',
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
      bh = await this.sd_S6tIrTjnOZFaZuIo(bh, parentSpanInst);
      //appendnew_next_sd_f8yfKtkXeJa5PGVd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_f8yfKtkXeJa5PGVd',
        spanInst,
        'sd_f8yfKtkXeJa5PGVd'
      );
    }
  }

  async sd_S6tIrTjnOZFaZuIo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_S6tIrTjnOZFaZuIo',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7OvZNDO1hy3y0RG9(bh, parentSpanInst);
      //appendnew_next_sd_S6tIrTjnOZFaZuIo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S6tIrTjnOZFaZuIo',
        spanInst,
        'sd_S6tIrTjnOZFaZuIo'
      );
    }
  }

  async sd_7OvZNDO1hy3y0RG9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7OvZNDO1hy3y0RG9',
      parentSpanInst
    );
    try {
      const sd_p6O4djQoUmhBm5O4Instance: sd_p6O4djQoUmhBm5O4.idsutil =
        sd_p6O4djQoUmhBm5O4.idsutil.getInstance();
      let outputVariables =
        await sd_p6O4djQoUmhBm5O4Instance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4v1dg3spWsfGqHl9(bh, parentSpanInst);
      //appendnew_next_sd_7OvZNDO1hy3y0RG9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7OvZNDO1hy3y0RG9',
        spanInst,
        'sd_7OvZNDO1hy3y0RG9'
      );
    }
  }

  async sd_4v1dg3spWsfGqHl9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4v1dg3spWsfGqHl9',
      parentSpanInst
    );
    try {
      const sd_p6O4djQoUmhBm5O4Instance: sd_p6O4djQoUmhBm5O4.idsutil =
        sd_p6O4djQoUmhBm5O4.idsutil.getInstance();
      let outputVariables =
        await sd_p6O4djQoUmhBm5O4Instance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_X08KBaIgQJSUxSqG(bh, parentSpanInst);
      //appendnew_next_sd_4v1dg3spWsfGqHl9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4v1dg3spWsfGqHl9',
        spanInst,
        'sd_4v1dg3spWsfGqHl9'
      );
    }
  }

  async sd_X08KBaIgQJSUxSqG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_X08KBaIgQJSUxSqG',
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
      await this.sd_1Avd4AL6cMmhVWTS(bh, parentSpanInst);
      //appendnew_next_sd_X08KBaIgQJSUxSqG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_X08KBaIgQJSUxSqG',
        spanInst,
        'sd_X08KBaIgQJSUxSqG'
      );
    }
  }

  async sd_1Avd4AL6cMmhVWTS(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1Avd4AL6cMmhVWTS');
    }
  }

  async sd_DFp6ct4CdJHvJjZK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DFp6ct4CdJHvJjZK',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_EGalldojM9cPtLWl(bh, parentSpanInst);
      //appendnew_next_sd_DFp6ct4CdJHvJjZK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DFp6ct4CdJHvJjZK',
        spanInst,
        'sd_DFp6ct4CdJHvJjZK'
      );
    }
  }

  async sd_EGalldojM9cPtLWl(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EGalldojM9cPtLWl');
    }
  }

  async sd_A98RJ4H8JFFrpob9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_A98RJ4H8JFFrpob9',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_55kfXHhKyLYnUNA1(bh, parentSpanInst);
      //appendnew_next_sd_A98RJ4H8JFFrpob9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A98RJ4H8JFFrpob9',
        spanInst,
        'sd_A98RJ4H8JFFrpob9'
      );
    }
  }

  async sd_55kfXHhKyLYnUNA1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_55kfXHhKyLYnUNA1',
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
        'sd_55kfXHhKyLYnUNA1',
        spanInst,
        'sd_55kfXHhKyLYnUNA1'
      );
    }
  }

  async sd_GTxLL7BSgflmmAnU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GTxLL7BSgflmmAnU',
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
      bh = await this.sd_9UWxnY5gkOFC9iUO(bh, parentSpanInst);
      //appendnew_next_sd_GTxLL7BSgflmmAnU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GTxLL7BSgflmmAnU',
        spanInst,
        'sd_GTxLL7BSgflmmAnU'
      );
    }
  }

  async sd_9UWxnY5gkOFC9iUO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9UWxnY5gkOFC9iUO',
      parentSpanInst
    );
    try {
      const sd_p6O4djQoUmhBm5O4Instance: sd_p6O4djQoUmhBm5O4.idsutil =
        sd_p6O4djQoUmhBm5O4.idsutil.getInstance();
      let outputVariables =
        await sd_p6O4djQoUmhBm5O4Instance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_kjszlcJoUzPJSX2M(bh, parentSpanInst);
      //appendnew_next_sd_9UWxnY5gkOFC9iUO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9UWxnY5gkOFC9iUO',
        spanInst,
        'sd_9UWxnY5gkOFC9iUO'
      );
    }
  }

  async sd_kjszlcJoUzPJSX2M(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kjszlcJoUzPJSX2M',
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

      console.log(bh.local.userDetails.userInfo);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MPxYSwxDXfZuz9eT(bh, parentSpanInst);
      //appendnew_next_sd_kjszlcJoUzPJSX2M
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kjszlcJoUzPJSX2M',
        spanInst,
        'sd_kjszlcJoUzPJSX2M'
      );
    }
  }

  async sd_MPxYSwxDXfZuz9eT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MPxYSwxDXfZuz9eT',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_k7K2tzxGUvFc86Mv(bh, parentSpanInst);
      //appendnew_next_sd_MPxYSwxDXfZuz9eT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MPxYSwxDXfZuz9eT',
        spanInst,
        'sd_MPxYSwxDXfZuz9eT'
      );
    }
  }

  async sd_k7K2tzxGUvFc86Mv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_k7K2tzxGUvFc86Mv',
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
        bh = await this.sd_lu26B3U4wCgDlEo6(bh, parentSpanInst);
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
        bh = await this.sd_RkpeFNrvdq1F13Kd(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_k7K2tzxGUvFc86Mv',
        spanInst,
        'sd_k7K2tzxGUvFc86Mv'
      );
    }
  }

  async sd_lu26B3U4wCgDlEo6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lu26B3U4wCgDlEo6',
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
      await this.sd_wRSliPR4YzX6CUQB(bh, parentSpanInst);
      //appendnew_next_sd_lu26B3U4wCgDlEo6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lu26B3U4wCgDlEo6',
        spanInst,
        'sd_lu26B3U4wCgDlEo6'
      );
    }
  }

  async sd_wRSliPR4YzX6CUQB(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wRSliPR4YzX6CUQB');
    }
  }

  async sd_RkpeFNrvdq1F13Kd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RkpeFNrvdq1F13Kd',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_shglOSe4fQl81bmF(bh, parentSpanInst);
      //appendnew_next_sd_RkpeFNrvdq1F13Kd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RkpeFNrvdq1F13Kd',
        spanInst,
        'sd_RkpeFNrvdq1F13Kd'
      );
    }
  }

  async sd_shglOSe4fQl81bmF(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_shglOSe4fQl81bmF');
    }
  }

  async sd_6GGXBoeKOEKamoKP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6GGXBoeKOEKamoKP',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_ncWmCPpZ1PLHZhk8(bh, parentSpanInst);
      //appendnew_next_sd_6GGXBoeKOEKamoKP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6GGXBoeKOEKamoKP',
        spanInst,
        'sd_6GGXBoeKOEKamoKP'
      );
    }
  }

  async sd_ncWmCPpZ1PLHZhk8(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ncWmCPpZ1PLHZhk8');
    }
  }

  async sd_6RsoVepglStFa3tp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6RsoVepglStFa3tp',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_6RsoVepglStFa3tp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6RsoVepglStFa3tp',
        spanInst,
        'sd_6RsoVepglStFa3tp'
      );
    }
  }

  async sd_qStc4ol0OADlRV5x(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qStc4ol0OADlRV5x',
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
      bh = await this.sd_VNdAlHerSQZCFxoG(bh, parentSpanInst);
      //appendnew_next_sd_qStc4ol0OADlRV5x
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qStc4ol0OADlRV5x',
        spanInst,
        'sd_qStc4ol0OADlRV5x'
      );
    }
  }

  async sd_VNdAlHerSQZCFxoG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VNdAlHerSQZCFxoG',
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
      bh = await this.sd_BSxlleStZckCNgg8(bh, parentSpanInst);
      //appendnew_next_sd_VNdAlHerSQZCFxoG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VNdAlHerSQZCFxoG',
        spanInst,
        'sd_VNdAlHerSQZCFxoG'
      );
    }
  }

  async sd_BSxlleStZckCNgg8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BSxlleStZckCNgg8',
      parentSpanInst
    );
    try {
      const sd_p6O4djQoUmhBm5O4Instance: sd_p6O4djQoUmhBm5O4.idsutil =
        sd_p6O4djQoUmhBm5O4.idsutil.getInstance();
      let outputVariables =
        await sd_p6O4djQoUmhBm5O4Instance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0XhANCl5GJw51ExJ(bh, parentSpanInst);
      //appendnew_next_sd_BSxlleStZckCNgg8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BSxlleStZckCNgg8',
        spanInst,
        'sd_BSxlleStZckCNgg8'
      );
    }
  }

  async sd_0XhANCl5GJw51ExJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0XhANCl5GJw51ExJ',
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
        bh = await this.sd_lPzpaqJiwxhXkOwh(bh, parentSpanInst);
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
        bh = await this.sd_Xtp5XRKjziU0678o(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0XhANCl5GJw51ExJ',
        spanInst,
        'sd_0XhANCl5GJw51ExJ'
      );
    }
  }

  async sd_lPzpaqJiwxhXkOwh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lPzpaqJiwxhXkOwh',
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
      //appendnew_next_sd_lPzpaqJiwxhXkOwh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lPzpaqJiwxhXkOwh',
        spanInst,
        'sd_lPzpaqJiwxhXkOwh'
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
      await this.sd_CIMORkw8tEJnca4f(bh, parentSpanInst);
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

  async sd_CIMORkw8tEJnca4f(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CIMORkw8tEJnca4f');
    }
  }

  async sd_Xtp5XRKjziU0678o(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Xtp5XRKjziU0678o',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_CIMORkw8tEJnca4f(bh, parentSpanInst);
      //appendnew_next_sd_Xtp5XRKjziU0678o
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Xtp5XRKjziU0678o',
        spanInst,
        'sd_Xtp5XRKjziU0678o'
      );
    }
  }

  async sd_OwHA5wPyERgOoaXJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OwHA5wPyERgOoaXJ',
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
      bh = await this.sd_CP3TRyEXpfZl05c8(bh, parentSpanInst);
      //appendnew_next_sd_OwHA5wPyERgOoaXJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OwHA5wPyERgOoaXJ',
        spanInst,
        'sd_OwHA5wPyERgOoaXJ'
      );
    }
  }

  async sd_CP3TRyEXpfZl05c8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CP3TRyEXpfZl05c8',
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
      bh = await this.sd_4bx3LT6gUYvt8Yt4(bh, parentSpanInst);
      //appendnew_next_sd_CP3TRyEXpfZl05c8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CP3TRyEXpfZl05c8',
        spanInst,
        'sd_CP3TRyEXpfZl05c8'
      );
    }
  }

  async sd_4bx3LT6gUYvt8Yt4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4bx3LT6gUYvt8Yt4',
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
        bh = await this.sd_41jbGD804BDEYwnm(bh, parentSpanInst);
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
        bh = await this.sd_kQPRV285ftCDwb1R(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4bx3LT6gUYvt8Yt4',
        spanInst,
        'sd_4bx3LT6gUYvt8Yt4'
      );
    }
  }

  async sd_41jbGD804BDEYwnm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_41jbGD804BDEYwnm',
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
      await this.sd_OdTC2FSpLmYxLj38(bh, parentSpanInst);
      //appendnew_next_sd_41jbGD804BDEYwnm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_41jbGD804BDEYwnm',
        spanInst,
        'sd_41jbGD804BDEYwnm'
      );
    }
  }

  async sd_OdTC2FSpLmYxLj38(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OdTC2FSpLmYxLj38');
    }
  }

  async sd_kQPRV285ftCDwb1R(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kQPRV285ftCDwb1R',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_CsiWBI9SAEUsmHlZ(bh, parentSpanInst);
      //appendnew_next_sd_kQPRV285ftCDwb1R
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kQPRV285ftCDwb1R',
        spanInst,
        'sd_kQPRV285ftCDwb1R'
      );
    }
  }

  async sd_CsiWBI9SAEUsmHlZ(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CsiWBI9SAEUsmHlZ');
    }
  }

  async sd_am56HuVosXkSHcgB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_am56HuVosXkSHcgB',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Fq9rVSjUwqsiAgkw(bh, parentSpanInst);
      //appendnew_next_sd_am56HuVosXkSHcgB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_am56HuVosXkSHcgB',
        spanInst,
        'sd_am56HuVosXkSHcgB'
      );
    }
  }

  async sd_Fq9rVSjUwqsiAgkw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Fq9rVSjUwqsiAgkw',
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
      bh = await this.sd_HrWgH4u7dvjTen0Q(bh, parentSpanInst);
      //appendnew_next_sd_Fq9rVSjUwqsiAgkw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Fq9rVSjUwqsiAgkw',
        spanInst,
        'sd_Fq9rVSjUwqsiAgkw'
      );
    }
  }

  async sd_HrWgH4u7dvjTen0Q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HrWgH4u7dvjTen0Q',
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
      bh = await this.sd_aLscPEoSZCUoqacZ(bh, parentSpanInst);
      //appendnew_next_sd_HrWgH4u7dvjTen0Q
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HrWgH4u7dvjTen0Q',
        spanInst,
        'sd_HrWgH4u7dvjTen0Q'
      );
    }
  }

  async sd_aLscPEoSZCUoqacZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aLscPEoSZCUoqacZ',
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
        bh = await this.sd_zpefc8Kqb8cjJ1VL(bh, parentSpanInst);
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
        bh = await this.sd_X35GUiP7gN5BTorp(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aLscPEoSZCUoqacZ',
        spanInst,
        'sd_aLscPEoSZCUoqacZ'
      );
    }
  }

  async sd_zpefc8Kqb8cjJ1VL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zpefc8Kqb8cjJ1VL',
      parentSpanInst
    );
    try {
      const sd_p6O4djQoUmhBm5O4Instance: sd_p6O4djQoUmhBm5O4.idsutil =
        sd_p6O4djQoUmhBm5O4.idsutil.getInstance();
      let outputVariables = await sd_p6O4djQoUmhBm5O4Instance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MhP6GdGAfcaE9EcF(bh, parentSpanInst);
      //appendnew_next_sd_zpefc8Kqb8cjJ1VL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zpefc8Kqb8cjJ1VL',
        spanInst,
        'sd_zpefc8Kqb8cjJ1VL'
      );
    }
  }

  async sd_MhP6GdGAfcaE9EcF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MhP6GdGAfcaE9EcF',
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
        bh = await this.sd_krcwnTPZnCy8JZVa(bh, parentSpanInst);
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
        bh = await this.sd_A9X34K9suBpWZ1Z0(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MhP6GdGAfcaE9EcF',
        spanInst,
        'sd_MhP6GdGAfcaE9EcF'
      );
    }
  }

  async sd_krcwnTPZnCy8JZVa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_krcwnTPZnCy8JZVa',
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
      bh = await this.sd_7t1dEkg7cWm0re8P(bh, parentSpanInst);
      //appendnew_next_sd_krcwnTPZnCy8JZVa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_krcwnTPZnCy8JZVa',
        spanInst,
        'sd_krcwnTPZnCy8JZVa'
      );
    }
  }

  async sd_7t1dEkg7cWm0re8P(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7t1dEkg7cWm0re8P',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_PFnjdCmrQfb0MCA1(bh, parentSpanInst);
      //appendnew_next_sd_7t1dEkg7cWm0re8P
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7t1dEkg7cWm0re8P',
        spanInst,
        'sd_7t1dEkg7cWm0re8P'
      );
    }
  }

  async sd_PFnjdCmrQfb0MCA1(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PFnjdCmrQfb0MCA1');
    }
  }

  async sd_A9X34K9suBpWZ1Z0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_A9X34K9suBpWZ1Z0',
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
        bh = await this.sd_QhlMMJJRCXZqziMQ(bh, parentSpanInst);
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
        bh = await this.sd_GKlaHYP4PQRL5OCr(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A9X34K9suBpWZ1Z0',
        spanInst,
        'sd_A9X34K9suBpWZ1Z0'
      );
    }
  }

  async sd_QhlMMJJRCXZqziMQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QhlMMJJRCXZqziMQ',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zMHBXMgo6wj7sFbO(bh, parentSpanInst);
      //appendnew_next_sd_QhlMMJJRCXZqziMQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QhlMMJJRCXZqziMQ',
        spanInst,
        'sd_QhlMMJJRCXZqziMQ'
      );
    }
  }

  async sd_zMHBXMgo6wj7sFbO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zMHBXMgo6wj7sFbO',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_GKlaHYP4PQRL5OCr(bh, parentSpanInst);
      //appendnew_next_sd_zMHBXMgo6wj7sFbO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zMHBXMgo6wj7sFbO',
        spanInst,
        'sd_zMHBXMgo6wj7sFbO'
      );
    }
  }

  async sd_GKlaHYP4PQRL5OCr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GKlaHYP4PQRL5OCr',
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
        'sd_GKlaHYP4PQRL5OCr',
        spanInst,
        'sd_GKlaHYP4PQRL5OCr'
      );
    }
  }

  async sd_X35GUiP7gN5BTorp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_X35GUiP7gN5BTorp',
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
        bh = await this.sd_TgV8wtUNnfLMSVMB(bh, parentSpanInst);
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
        bh = await this.sd_LG14yU1sOSfdBIEC(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_X35GUiP7gN5BTorp',
        spanInst,
        'sd_X35GUiP7gN5BTorp'
      );
    }
  }

  async sd_TgV8wtUNnfLMSVMB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TgV8wtUNnfLMSVMB',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_PFnjdCmrQfb0MCA1(bh, parentSpanInst);
      //appendnew_next_sd_TgV8wtUNnfLMSVMB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TgV8wtUNnfLMSVMB',
        spanInst,
        'sd_TgV8wtUNnfLMSVMB'
      );
    }
  }

  async sd_LG14yU1sOSfdBIEC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LG14yU1sOSfdBIEC',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_PFnjdCmrQfb0MCA1(bh, parentSpanInst);
      //appendnew_next_sd_LG14yU1sOSfdBIEC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LG14yU1sOSfdBIEC',
        spanInst,
        'sd_LG14yU1sOSfdBIEC'
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
      (await this.sd_grOr55gguP36A9pi(bh, parentSpanInst)) ||
      (await this.sd_5LHpi6prqQS1cdVJ(bh, parentSpanInst))
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
  async sd_grOr55gguP36A9pi(bh, parentSpanInst) {
    const nodes = [
      'sd_4v1dg3spWsfGqHl9',
      'sd_P5uAUkErzx6am4PO',
      'sd_9UWxnY5gkOFC9iUO',
      'sd_kjszlcJoUzPJSX2M',
      'sd_GTxLL7BSgflmmAnU',
      'sd_k7K2tzxGUvFc86Mv',
      'sd_lu26B3U4wCgDlEo6',
      'sd_RkpeFNrvdq1F13Kd',
      'sd_wRSliPR4YzX6CUQB',
      'sd_shglOSe4fQl81bmF',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_6RsoVepglStFa3tp(bh, parentSpanInst);
      //appendnew_next_sd_grOr55gguP36A9pi
      return true;
    }
    return false;
  }
  async sd_5LHpi6prqQS1cdVJ(bh, parentSpanInst) {
    const nodes = ['sd_zpefc8Kqb8cjJ1VL'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_7t1dEkg7cWm0re8P(bh, parentSpanInst);
      //appendnew_next_sd_5LHpi6prqQS1cdVJ
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
