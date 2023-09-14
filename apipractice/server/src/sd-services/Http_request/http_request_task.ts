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
export class http_request_task {
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
    this.serviceName = 'http_request_task';
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
      instance = new http_request_task(
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
      //appendnew_flow_http_request_task_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: http_request_task');

    //appendnew_flow_http_request_task_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: http_request_task');

    this.app['post'](
      `${this.serviceBasePath}/request-operation`,
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
          bh = await this.sd_hXkFu6HexbdKltXB(bh, parentSpanInst);
          //appendnew_next_sd_lMxV6hDoOQWY8doz
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_lMxV6hDoOQWY8doz');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_http_request_task_HttpIn
  }
  //   service flows_http_request_task

  async http_request_function(
    parentSpanInst,
    name: any = undefined,
    email: any = undefined,
    gender: any = undefined,
    state: any = undefined,
    token: any = undefined,
    status = true,
    result: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'http_request_function',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          name: name,
          email: email,
          gender: gender,
          state: state,
          token: token,
          status: status,
          result: result,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iU6rVI6xEvp5qHoU(bh, parentSpanInst);
      //appendnew_next_http_request_function
      return (
        // formatting output variables
        {
          input: {
            status: bh.input.status,
            result: bh.input.result,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HNWVKTo7JNIiEB3z',
        spanInst,
        'http_request_function'
      );
    }
  }

  //appendnew_flow_http_request_task_start

  async sd_hXkFu6HexbdKltXB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hXkFu6HexbdKltXB',
      parentSpanInst
    );
    try {
      let outputVariables = await this.http_request_function(
        spanInst,
        bh.input.body.name,
        bh.input.body.email,
        bh.input.body.gender,
        bh.input.body.state,
        bh.input.headers.token,
        undefined,
        undefined
      );
      bh.status = outputVariables.input.status;
      bh.result = outputVariables.input.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_d49zIn7gZIUMUDze(bh, parentSpanInst);
      //appendnew_next_sd_hXkFu6HexbdKltXB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hXkFu6HexbdKltXB',
        spanInst,
        'sd_hXkFu6HexbdKltXB'
      );
    }
  }

  async sd_d49zIn7gZIUMUDze(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_d49zIn7gZIUMUDze',
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
        bh = await this.sd_H0gTNz2Q1dmKpLxU(bh, parentSpanInst);
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
        bh = await this.sd_pyLXzEvaHAduOp7L(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_d49zIn7gZIUMUDze',
        spanInst,
        'sd_d49zIn7gZIUMUDze'
      );
    }
  }

  async sd_H0gTNz2Q1dmKpLxU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_H0gTNz2Q1dmKpLxU',
      parentSpanInst
    );
    try {
      bh.url = bh.system.environment.HTTP_REQUEST_URL + '/users';

      bh.headers = {
        Authorization: 'Bearer ' + bh.input.headers.token,
      };

      bh.body = {
        name: bh.input.body.name,
        email: bh.input.body.email,
        gender: bh.input.body.gender,
        status: bh.input.body.state,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.http_request_node(bh, parentSpanInst);
      //appendnew_next_sd_H0gTNz2Q1dmKpLxU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_H0gTNz2Q1dmKpLxU',
        spanInst,
        'sd_H0gTNz2Q1dmKpLxU'
      );
    }
  }

  async http_request_node(bh, parentSpanInst) {
    try {
      let requestOptions = {
        url: bh.url,
        timeout: 30000,
        method: 'post',
        headers: bh.headers,
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.body,
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

      bh.result = responseMsg;

      bh = await this.sd_4NiJjqKsmxLH30Kk(bh, parentSpanInst);
      //appendnew_next_http_request_node
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eUWjY62iuDFMyF8e');
    }
  }

  async sd_4NiJjqKsmxLH30Kk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4NiJjqKsmxLH30Kk',
      parentSpanInst
    );
    try {
      bh.result = {
        data: bh.result.payload,
        status_code: bh.result.statusCode,
        message: 'Data added Successfully',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_byoZ2akR95RTRS5j(bh, parentSpanInst);
      //appendnew_next_sd_4NiJjqKsmxLH30Kk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4NiJjqKsmxLH30Kk',
        spanInst,
        'sd_4NiJjqKsmxLH30Kk'
      );
    }
  }

  async sd_byoZ2akR95RTRS5j(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_byoZ2akR95RTRS5j');
    }
  }

  async sd_pyLXzEvaHAduOp7L(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pyLXzEvaHAduOp7L');
    }
  }

  async sd_iU6rVI6xEvp5qHoU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iU6rVI6xEvp5qHoU',
      parentSpanInst
    );
    try {
      if (!bh.input.name) {
        bh.input.status = false;
        bh.input.result = { message: 'Name Required' };
      } else if (!bh.input.email) {
        bh.input.status = false;
        bh.input.result = { message: 'Email Required' };
      } else if (!bh.input.gender) {
        bh.input.status = false;
        bh.input.result = { message: 'Gender Required' };
      } else if (!bh.input.state) {
        bh.input.status = false;
        bh.input.result = { message: 'state Required' };
      } else if (!bh.input.token) {
        (bh.input.status = false),
          (bh.input.result = {
            message: 'token required in header for Authorization',
          });
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_iU6rVI6xEvp5qHoU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iU6rVI6xEvp5qHoU',
        spanInst,
        'sd_iU6rVI6xEvp5qHoU'
      );
    }
  }

  async sd_8PNZ1YxOlrerPo8P(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8PNZ1YxOlrerPo8P',
      parentSpanInst
    );
    try {
      bh.error = { error: bh.error.name };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_VY2DITQVkNqHmTN6(bh, parentSpanInst);
      //appendnew_next_sd_8PNZ1YxOlrerPo8P
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8PNZ1YxOlrerPo8P',
        spanInst,
        'sd_8PNZ1YxOlrerPo8P'
      );
    }
  }

  async sd_VY2DITQVkNqHmTN6(bh, parentSpanInst) {
    try {
      bh.web.res.status(500).send(bh.error);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VY2DITQVkNqHmTN6');
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
      (await this.sd_Je6FgWrIVgzebtKv(bh, parentSpanInst))
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
  async sd_Je6FgWrIVgzebtKv(bh, parentSpanInst) {
    const nodes = ['sd_eUWjY62iuDFMyF8e'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_8PNZ1YxOlrerPo8P(bh, parentSpanInst);
      //appendnew_next_sd_Je6FgWrIVgzebtKv
      return true;
    }
    return false;
  }
  //appendnew_flow_http_request_task_Catch
}
