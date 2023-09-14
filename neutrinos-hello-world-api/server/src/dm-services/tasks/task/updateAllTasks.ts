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
export class updateAllTasks {
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
    this.serviceName = 'updateAllTasks';
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
      instance = new updateAllTasks(
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
      //appendnew_flow_updateAllTasks_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: updateAllTasks');

    //appendnew_flow_updateAllTasks_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: updateAllTasks');

    this.app['post'](
      `${this.serviceBasePath}/dm/tasks/task/update-all`,
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
          bh = await this.sd_4d5L0Sub6LC7l73k(bh, parentSpanInst);
          //appendnew_next_sd_Mi4XiSXvvzG2XklP
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Mi4XiSXvvzG2XklP');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_updateAllTasks_HttpIn
  }
  //   service flows_updateAllTasks

  //appendnew_flow_updateAllTasks_start

  async sd_4d5L0Sub6LC7l73k(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4d5L0Sub6LC7l73k',
      parentSpanInst
    );
    try {
      this.sdService.addDMPropertiesToBh(bh, bh.web.req, 'task');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8R9kDyRFeBfyGmoi(bh, parentSpanInst);
      //appendnew_next_sd_4d5L0Sub6LC7l73k
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4d5L0Sub6LC7l73k',
        spanInst,
        'sd_4d5L0Sub6LC7l73k'
      );
    }
  }

  async sd_8R9kDyRFeBfyGmoi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8R9kDyRFeBfyGmoi',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new dmUtils('sd_CBLIAWobuM7NxcGd');
      bh.result = await dmUtilsInst.updateByFilter(
        '_EN_3hzaxfib2t',
        bh.filter,
        bh.input.body.task
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_IpUaU51q741upXgr(bh, parentSpanInst);
      //appendnew_next_sd_8R9kDyRFeBfyGmoi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JvdCm8QK1QbSvP8g',
        spanInst,
        'sd_8R9kDyRFeBfyGmoi'
      );
    }
  }

  async sd_IpUaU51q741upXgr(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HGTTQKB4JxnYg5MM');
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
  //appendnew_flow_updateAllTasks_Catch
}
