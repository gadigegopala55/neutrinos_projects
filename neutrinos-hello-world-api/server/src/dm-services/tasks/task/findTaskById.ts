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
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../../middleware/Middleware'; //_splitter_
import * as settings from '../../../config/config'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import { dmUtils } from '../../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
export class findTaskById {
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
    this.serviceName = 'findTaskById';
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
      instance = new findTaskById(
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
      //appendnew_flow_findTaskById_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: findTaskById');

    //appendnew_flow_findTaskById_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: findTaskById');

    this.app['post'](
      `${this.serviceBasePath}/dm/tasks/task/find-by-id`,
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
          bh = await this.sd_0grguYfj00JSLkeH(bh, parentSpanInst);
          //appendnew_next_sd_uD9ePrk64xuD452E
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_uD9ePrk64xuD452E');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_findTaskById_HttpIn
  }
  //   service flows_findTaskById

  //appendnew_flow_findTaskById_start

  async sd_0grguYfj00JSLkeH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0grguYfj00JSLkeH',
      parentSpanInst
    );
    try {
      this.sdService.addDMPropertiesToBh(bh, bh.web.req, 'task');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_kgfZx4cN25vOKoVb(bh, parentSpanInst);
      //appendnew_next_sd_0grguYfj00JSLkeH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fv1vnDi1woVkMOY0',
        spanInst,
        'sd_0grguYfj00JSLkeH'
      );
    }
  }

  async sd_kgfZx4cN25vOKoVb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kgfZx4cN25vOKoVb',
      parentSpanInst
    );
    try {
      let dmUtilsInst = new dmUtils('sd_CBLIAWobuM7NxcGd');
      bh.result = await dmUtilsInst.find(
        '_EN_3hzaxfib2t',
        bh.filter,
        bh.offSet,
        bh.orderBy,
        bh.pageSize
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KMBz6QHvgFeygsLA(bh, parentSpanInst);
      //appendnew_next_sd_kgfZx4cN25vOKoVb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kgfZx4cN25vOKoVb',
        spanInst,
        'sd_kgfZx4cN25vOKoVb'
      );
    }
  }

  async sd_KMBz6QHvgFeygsLA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KMBz6QHvgFeygsLA',
      parentSpanInst
    );
    try {
      if (bh.result) {
        if (Array.isArray(bh.result) && bh.result.length) {
          bh.result = bh.result[0];
        }
      } else {
        throw new Error('Not found.');
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_IpUaU51q741upXgr(bh, parentSpanInst);
      //appendnew_next_sd_KMBz6QHvgFeygsLA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KMBz6QHvgFeygsLA',
        spanInst,
        'sd_KMBz6QHvgFeygsLA'
      );
    }
  }

  async sd_IpUaU51q741upXgr(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qqrgY143B2CKPkdD');
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
  //appendnew_flow_findTaskById_Catch
}
