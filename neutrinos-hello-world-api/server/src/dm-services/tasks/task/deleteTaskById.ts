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
export class deleteTaskById {
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
    this.serviceName = 'deleteTaskById';
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
      instance = new deleteTaskById(
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
      //appendnew_flow_deleteTaskById_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: deleteTaskById');

    //appendnew_flow_deleteTaskById_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: deleteTaskById');

    this.app['post'](
      `${this.serviceBasePath}/dm/tasks/task/delete-by-id`,
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
          bh = await this.sd_BiFd5cIsjZ7t0dFK(bh, parentSpanInst);
          //appendnew_next_sd_7c35TgcBusaJ8e9K
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_7c35TgcBusaJ8e9K');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_deleteTaskById_HttpIn
  }
  //   service flows_deleteTaskById

  //appendnew_flow_deleteTaskById_start

  async sd_BiFd5cIsjZ7t0dFK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BiFd5cIsjZ7t0dFK',
      parentSpanInst
    );
    try {
      this.sdService.addDMPropertiesToBh(bh, bh.web.req, 'task');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_U4pJcep8POnELDbk(bh, parentSpanInst);
      //appendnew_next_sd_BiFd5cIsjZ7t0dFK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BiFd5cIsjZ7t0dFK',
        spanInst,
        'sd_BiFd5cIsjZ7t0dFK'
      );
    }
  }

  async sd_U4pJcep8POnELDbk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_U4pJcep8POnELDbk',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new dmUtils('sd_CBLIAWobuM7NxcGd');
      bh.result = await dmUtilsInst.delete('_EN_3hzaxfib2t', bh.filter);

      this.tracerService.sendData(spanInst, bh);
      await this.sd_IpUaU51q741upXgr(bh, parentSpanInst);
      //appendnew_next_sd_U4pJcep8POnELDbk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_U4pJcep8POnELDbk',
        spanInst,
        'sd_U4pJcep8POnELDbk'
      );
    }
  }

  async sd_IpUaU51q741upXgr(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Bg5l7Hbkz0F2scNM');
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
  //appendnew_flow_deleteTaskById_Catch
}
