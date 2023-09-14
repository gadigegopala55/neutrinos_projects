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
export class books {
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
    this.serviceName = 'books';
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
      instance = new books(
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
      //appendnew_flow_books_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: books');

    //appendnew_flow_books_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: books');

    this.app['get'](
      `${this.serviceBasePath}/books`,
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
          bh = await this.sd_MeDSt8oVtUh72Xc0(bh, parentSpanInst);
          //appendnew_next_sd_8wEN63DK36uBBX0p
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_8wEN63DK36uBBX0p');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/book`,
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
          bh = await this.sd_ecUI88jXeKiTlbgK(bh, parentSpanInst);
          //appendnew_next_sd_AcMehBhw5pTG86m5
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_AcMehBhw5pTG86m5');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/book`,
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
          bh = await this.sd_Swj3iQBJFNKIro0J(bh, parentSpanInst);
          //appendnew_next_sd_VClLQNUQJRRpts3Q
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_VClLQNUQJRRpts3Q');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/rockets`,
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
          bh = await this.sd_OuauLF7CvjRNeqdC(bh, parentSpanInst);
          //appendnew_next_sd_uLqow7Q7o3B0TfTl
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_uLqow7Q7o3B0TfTl');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/ships`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'custom_sequence',
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
          bh = await this.sd_Af55h8uxE7i2b6gN(bh, parentSpanInst);
          //appendnew_next_sd_Vl0CwmPzKCAIiyu5
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Vl0CwmPzKCAIiyu5');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'custom_sequence',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/calc`,
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
          bh = await this.sd_HZiWadIWYIS2DqAw(bh, parentSpanInst);
          //appendnew_next_sd_qZDFEJ2il4qyiTYc
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_qZDFEJ2il4qyiTYc');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_books_HttpIn
  }
  //   service flows_books

  //appendnew_flow_books_start

  async sd_MeDSt8oVtUh72Xc0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MeDSt8oVtUh72Xc0',
      parentSpanInst
    );
    try {
      const books = [
        {
          title: 'Mahabharatha',
          description: 'very good book',
        },
        {
          title: 'Bible',
          description: 'good book',
        },
        {
          title: 'Book3',
          description: 'good book',
        },
        {
          title: 'Book4',
          description: 'good book',
        },
      ];

      bh.local.response = {
        message: 'Successful',
        data: books,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_GmcbxUovDPNXKX2l(bh, parentSpanInst);
      //appendnew_next_sd_MeDSt8oVtUh72Xc0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MeDSt8oVtUh72Xc0',
        spanInst,
        'sd_MeDSt8oVtUh72Xc0'
      );
    }
  }

  async sd_GmcbxUovDPNXKX2l(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GmcbxUovDPNXKX2l');
    }
  }

  async sd_ecUI88jXeKiTlbgK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ecUI88jXeKiTlbgK',
      parentSpanInst
    );
    try {
      let response = {
        id: bh.input.body.id,
      };

      bh.local.response = {
        message: 'Success',
        data: response,
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_II3lrkSpHALTlA93(bh, parentSpanInst);
      //appendnew_next_sd_ecUI88jXeKiTlbgK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ecUI88jXeKiTlbgK',
        spanInst,
        'sd_ecUI88jXeKiTlbgK'
      );
    }
  }

  async sd_II3lrkSpHALTlA93(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_II3lrkSpHALTlA93');
    }
  }

  async sd_Swj3iQBJFNKIro0J(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Swj3iQBJFNKIro0J',
      parentSpanInst
    );
    try {
      bh.local.query = `select * from book`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_vftzJ7HyCo5ZrpBQ(bh, parentSpanInst);
      //appendnew_next_sd_Swj3iQBJFNKIro0J
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Swj3iQBJFNKIro0J',
        spanInst,
        'sd_Swj3iQBJFNKIro0J'
      );
    }
  }

  async sd_vftzJ7HyCo5ZrpBQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vftzJ7HyCo5ZrpBQ',
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
      let params = undefined;
      params = params ? params : [];
      bh.local.response = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Pv3uIcnxLhOnVBPV(bh, parentSpanInst);
      //appendnew_next_sd_vftzJ7HyCo5ZrpBQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vftzJ7HyCo5ZrpBQ',
        spanInst,
        'sd_vftzJ7HyCo5ZrpBQ'
      );
    }
  }

  async sd_Pv3uIcnxLhOnVBPV(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Pv3uIcnxLhOnVBPV');
    }
  }

  async sd_OuauLF7CvjRNeqdC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OuauLF7CvjRNeqdC',
      parentSpanInst
    );
    try {
      bh.local.url = bh.system.environment.SPACE_X_URL;

      bh.local.url += 'rockets';

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1VUbCv3ccekQ2wSh(bh, parentSpanInst);
      //appendnew_next_sd_OuauLF7CvjRNeqdC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OuauLF7CvjRNeqdC',
        spanInst,
        'sd_OuauLF7CvjRNeqdC'
      );
    }
  }

  async sd_1VUbCv3ccekQ2wSh(bh, parentSpanInst) {
    try {
      let requestOptions = {
        url: bh.local.url,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: {},
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

      bh.local.response = responseMsg;

      await this.sd_GofpcTB2MUDiSYqg(bh, parentSpanInst);
      //appendnew_next_sd_1VUbCv3ccekQ2wSh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1VUbCv3ccekQ2wSh');
    }
  }

  async sd_GofpcTB2MUDiSYqg(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response.payload);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GofpcTB2MUDiSYqg');
    }
  }

  async sd_Af55h8uxE7i2b6gN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Af55h8uxE7i2b6gN',
      parentSpanInst
    );
    try {
      bh.local.url = bh.system.environment.SPACE_X_URL;

      bh.local.url += 'ships';

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nRFMtGUBBQ4Ygt3r(bh, parentSpanInst);
      //appendnew_next_sd_Af55h8uxE7i2b6gN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Af55h8uxE7i2b6gN',
        spanInst,
        'sd_Af55h8uxE7i2b6gN'
      );
    }
  }

  async sd_nRFMtGUBBQ4Ygt3r(bh, parentSpanInst) {
    try {
      let requestOptions = {
        url: bh.local.url,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: {},
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

      bh.web.req.response = responseMsg;

      await this.sd_eGkUQijsCPuIpcL8(bh, parentSpanInst);
      //appendnew_next_sd_nRFMtGUBBQ4Ygt3r
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nRFMtGUBBQ4Ygt3r');
    }
  }

  async sd_eGkUQijsCPuIpcL8(bh, parentSpanInst) {
    try {
      bh.web.next();
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eGkUQijsCPuIpcL8');
    }
  }

  async sd_HZiWadIWYIS2DqAw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HZiWadIWYIS2DqAw',
      parentSpanInst
    );
    try {
      bh.input.result = 45 + 45;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_uV8u9xAiHtPPrDJl(bh, parentSpanInst);
      //appendnew_next_sd_HZiWadIWYIS2DqAw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HZiWadIWYIS2DqAw',
        spanInst,
        'sd_HZiWadIWYIS2DqAw'
      );
    }
  }

  async sd_uV8u9xAiHtPPrDJl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uV8u9xAiHtPPrDJl',
      parentSpanInst
    );
    try {
      console.log(bh.input.result);

      bh.input.paylod = {
        response: bh.input.result,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_gIqTgC3aVX1R5XSo(bh, parentSpanInst);
      //appendnew_next_sd_uV8u9xAiHtPPrDJl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uV8u9xAiHtPPrDJl',
        spanInst,
        'sd_uV8u9xAiHtPPrDJl'
      );
    }
  }

  async sd_gIqTgC3aVX1R5XSo(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.input.paylod);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gIqTgC3aVX1R5XSo');
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
  //appendnew_flow_books_Catch
}
