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
import { validateRequest } from '../../../middleware/SchemaValidator'; //_splitter_
import { dmUtils } from '../../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
export class createAllBook {
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
    this.serviceName = 'createAllBook';
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
      instance = new createAllBook(
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
      //appendnew_flow_createAllBook_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: createAllBook');

    //appendnew_flow_createAllBook_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: createAllBook');

    this.app['post'](
      `${this.serviceBasePath}/dm/books/book/create-all`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      validateRequest(),
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
          //appendnew_next_sd_rq1rrFinzLdjhXJU
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_rq1rrFinzLdjhXJU');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_createAllBook_HttpIn
  }
  //   service flows_createAllBook

  //appendnew_flow_createAllBook_start

  async sd_0grguYfj00JSLkeH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0grguYfj00JSLkeH',
      parentSpanInst
    );
    try {
      this.sdService.addDMPropertiesToBh(bh, bh.web.req, 'book');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_I2q42yFaJmhkekNk(bh, parentSpanInst);
      //appendnew_next_sd_0grguYfj00JSLkeH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bmjDoh2pQuC9W77k',
        spanInst,
        'sd_0grguYfj00JSLkeH'
      );
    }
  }

  async sd_I2q42yFaJmhkekNk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_I2q42yFaJmhkekNk',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new dmUtils('sd_f4nPAR7KNwtz5TC3');
      bh.result = await dmUtilsInst.insert(
        '_EN_c83pxvywl4',
        bh.input.body.book
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_IpUaU51q741upXgr(bh, parentSpanInst);
      //appendnew_next_sd_I2q42yFaJmhkekNk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_I2q42yFaJmhkekNk',
        spanInst,
        'sd_I2q42yFaJmhkekNk'
      );
    }
  }

  async sd_IpUaU51q741upXgr(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tnbGz1rnd8guOBm3');
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
  //appendnew_flow_createAllBook_Catch
}
