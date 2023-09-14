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
export class async_operation {
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
    this.serviceName = 'async_operation';
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
      instance = new async_operation(
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
      //appendnew_flow_async_operation_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: async_operation');

    //appendnew_flow_async_operation_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: async_operation');

    this.app['get'](
      `${this.serviceBasePath}/async-operation`,
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
          bh = await this.sd_Mrwvs1PvSNsOXKRC(bh, parentSpanInst);
          //appendnew_next_sd_LSRlVnIgCKqxTGma
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_LSRlVnIgCKqxTGma');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/sync-operation`,
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
          bh = await this.sd_2AIiS6nYUcGEJdH3(bh, parentSpanInst);
          //appendnew_next_sd_lm8tdegfFyhssMEN
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_lm8tdegfFyhssMEN');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_async_operation_HttpIn
  }
  //   service flows_async_operation

  async flow1(parentSpanInst, result: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan('flow1', parentSpanInst);
    try {
      var bh: any = {
        input: {
          result: result,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_oBa8TkJ01dOtyPEM(bh, parentSpanInst);
      //appendnew_next_flow1
      return (
        // formatting output variables
        {
          input: {
            result: bh.input.result,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qd9WgsDZuViXsxnC',
        spanInst,
        'flow1'
      );
    }
  }

  async flow2(parentSpanInst, result: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan('flow2', parentSpanInst);
    try {
      var bh: any = {
        input: {
          result: result,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ZMrKM9GGyVRFgzf8(bh, parentSpanInst);
      //appendnew_next_flow2
      return (
        // formatting output variables
        {
          input: {
            result: bh.input.result,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vsJe6CP1JoPJgCif',
        spanInst,
        'flow2'
      );
    }
  }

  //appendnew_flow_async_operation_start

  async sd_Mrwvs1PvSNsOXKRC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Mrwvs1PvSNsOXKRC',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_FCPRS36ptzxheqKIInstance: async_operation =
        async_operation.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_FCPRS36ptzxheqKIInstance.flow1(
          spanInst,
          bh.flow_result1
        )
      );
      promiseArray.push(
        SSD_SERVICE_ID_sd_FCPRS36ptzxheqKIInstance.flow2(
          spanInst,
          bh.flow_result2
        )
      );

      bh.result = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_LIeY9T5SZUthMh3O(bh, parentSpanInst);
      //appendnew_next_sd_Mrwvs1PvSNsOXKRC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Mrwvs1PvSNsOXKRC',
        spanInst,
        'sd_Mrwvs1PvSNsOXKRC'
      );
    }
  }

  async sd_LIeY9T5SZUthMh3O(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LIeY9T5SZUthMh3O',
      parentSpanInst
    );
    try {
      bh.result = { message: 'Asynchronous function executed' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_TaeU6RmLFuPWwoqH(bh, parentSpanInst);
      //appendnew_next_sd_LIeY9T5SZUthMh3O
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LIeY9T5SZUthMh3O',
        spanInst,
        'sd_LIeY9T5SZUthMh3O'
      );
    }
  }

  async sd_TaeU6RmLFuPWwoqH(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TaeU6RmLFuPWwoqH');
    }
  }

  async sd_oBa8TkJ01dOtyPEM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oBa8TkJ01dOtyPEM',
      parentSpanInst
    );
    try {
      await new Promise((r) => {
        setTimeout(() => {
          for (let i = 1; i <= 100; i++) {
            console.log(i);
          }
          r();
        }, 3000);
      });

      bh.input.result = { message: 'flow1' };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_oBa8TkJ01dOtyPEM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oBa8TkJ01dOtyPEM',
        spanInst,
        'sd_oBa8TkJ01dOtyPEM'
      );
    }
  }

  async sd_ZMrKM9GGyVRFgzf8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZMrKM9GGyVRFgzf8',
      parentSpanInst
    );
    try {
      await new Promise((r) => {
        setTimeout(() => {
          for (let i = 101; i <= 200; i++) {
            console.log(i);
          }
          r();
        }, 3000);
      });

      bh.input.result = { message: 'flow2' };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_ZMrKM9GGyVRFgzf8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZMrKM9GGyVRFgzf8',
        spanInst,
        'sd_ZMrKM9GGyVRFgzf8'
      );
    }
  }

  async sd_2AIiS6nYUcGEJdH3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2AIiS6nYUcGEJdH3',
      parentSpanInst
    );
    try {
      let outputVariables = await this.flow1(spanInst, bh.flow_result1);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_H614ya9I4LLP2p5m(bh, parentSpanInst);
      //appendnew_next_sd_2AIiS6nYUcGEJdH3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2AIiS6nYUcGEJdH3',
        spanInst,
        'sd_2AIiS6nYUcGEJdH3'
      );
    }
  }

  async sd_H614ya9I4LLP2p5m(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_H614ya9I4LLP2p5m',
      parentSpanInst
    );
    try {
      let outputVariables = await this.flow2(spanInst, bh.flow_result2);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ALC73veY3o1BZpmW(bh, parentSpanInst);
      //appendnew_next_sd_H614ya9I4LLP2p5m
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_H614ya9I4LLP2p5m',
        spanInst,
        'sd_H614ya9I4LLP2p5m'
      );
    }
  }

  async sd_ALC73veY3o1BZpmW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ALC73veY3o1BZpmW',
      parentSpanInst
    );
    try {
      bh.result = { message: 'Synchronous function executed' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_WZmKh2pbwjFa5Q0s(bh, parentSpanInst);
      //appendnew_next_sd_ALC73veY3o1BZpmW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ALC73veY3o1BZpmW',
        spanInst,
        'sd_ALC73veY3o1BZpmW'
      );
    }
  }

  async sd_WZmKh2pbwjFa5Q0s(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WZmKh2pbwjFa5Q0s');
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
  //appendnew_flow_async_operation_Catch
}
