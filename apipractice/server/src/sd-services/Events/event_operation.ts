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
import { pubsubUtil } from '../../utils/ndefault-pub-sub/listen/listen'; //_splitter_
//append_imports_end
export class event_operation {
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
    this.serviceName = 'event_operation';
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
      instance = new event_operation(
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
      pubsubUtil
        .getInstance()
        .on('event_trigger', async (data, spanInst) =>
          this.listen_1(spanInst, data)
        );
      pubsubUtil
        .getInstance()
        .on('event_trigger', async (data, spanInst) =>
          this.listen_2(spanInst, data)
        );
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_event_operation_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: event_operation');

    //appendnew_flow_event_operation_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: event_operation');

    this.app['get'](
      `${this.serviceBasePath}/event-operation`,
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
          bh = await this.sd_zidq6a2NRuqKKE28(bh, parentSpanInst);
          //appendnew_next_sd_VWZzm7P1lfNSKTP7
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_VWZzm7P1lfNSKTP7');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_event_operation_HttpIn
  }
  //   service flows_event_operation

  async listen_1(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan('listen_1', parentSpanInst);
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_LodTUcfiKN3Kqjth(bh, parentSpanInst);
      //appendnew_next_listen_1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4KtCo4GUKC2GX1Oc',
        spanInst,
        'listen_1'
      );
    }
  }

  async listen_2(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan('listen_2', parentSpanInst);
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VbA8WMQ03ZfY3jHI(bh, parentSpanInst);
      //appendnew_next_listen_2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_We1RBaBpknsxk2mv',
        spanInst,
        'listen_2'
      );
    }
  }

  //appendnew_flow_event_operation_start

  async sd_zidq6a2NRuqKKE28(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zidq6a2NRuqKKE28',
      parentSpanInst
    );
    try {
      let pubsubInstance = pubsubUtil.getInstance();
      pubsubInstance.emit('event_trigger', bh, spanInst);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Ljudd931iN3JnbmJ(bh, parentSpanInst);
      //appendnew_next_sd_zidq6a2NRuqKKE28
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zidq6a2NRuqKKE28',
        spanInst,
        'sd_zidq6a2NRuqKKE28'
      );
    }
  }

  async sd_Ljudd931iN3JnbmJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ljudd931iN3JnbmJ',
      parentSpanInst
    );
    try {
      bh.response = { message: 'Event triggered successfully' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Rl5SP1PvWxI0FJGJ(bh, parentSpanInst);
      //appendnew_next_sd_Ljudd931iN3JnbmJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ljudd931iN3JnbmJ',
        spanInst,
        'sd_Ljudd931iN3JnbmJ'
      );
    }
  }

  async sd_Rl5SP1PvWxI0FJGJ(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Rl5SP1PvWxI0FJGJ');
    }
  }

  async sd_LodTUcfiKN3Kqjth(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LodTUcfiKN3Kqjth',
      parentSpanInst
    );
    try {
      for (let i = 1; i <= 100; i++) {
        console.log(i);
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_LodTUcfiKN3Kqjth
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LodTUcfiKN3Kqjth',
        spanInst,
        'sd_LodTUcfiKN3Kqjth'
      );
    }
  }

  async sd_VbA8WMQ03ZfY3jHI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VbA8WMQ03ZfY3jHI',
      parentSpanInst
    );
    try {
      for (let i = 101; i <= 200; i++) {
        console.log(i);
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_VbA8WMQ03ZfY3jHI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VbA8WMQ03ZfY3jHI',
        spanInst,
        'sd_VbA8WMQ03ZfY3jHI'
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
  //appendnew_flow_event_operation_Catch
}
