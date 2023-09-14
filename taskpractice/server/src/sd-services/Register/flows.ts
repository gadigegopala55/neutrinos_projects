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
import { EmailOutService } from '../../utils/ndefault-email/EmailOut/EmailOutService'; //_splitter_
//append_imports_end
export class flows {
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
    this.serviceName = 'flows';
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
      instance = new flows(
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
      //appendnew_flow_flows_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: flows');

    //appendnew_flow_flows_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: flows');

    this.app['get'](
      `${this.serviceBasePath}/sending-email`,
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
          bh = await this.sd_ia2MmqiWN3JSWlTy(bh, parentSpanInst);
          //appendnew_next_sd_jyZlp8zFz0CeDT3B
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_jyZlp8zFz0CeDT3B');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_flows_HttpIn
  }
  //   service flows_flows

  async register_flow(
    parentSpanInst,
    name: any = undefined,
    email: any = undefined,
    status = true,
    result: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'register_flow',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          name: name,
          email: email,
          status: status,
          result: result,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NMPe8lajeGQuYxeb(bh, parentSpanInst);
      //appendnew_next_register_flow
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
        'sd_NA8tGXsxCbYkpgzA',
        spanInst,
        'register_flow'
      );
    }
  }

  //appendnew_flow_flows_start

  async sd_NMPe8lajeGQuYxeb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NMPe8lajeGQuYxeb',
      parentSpanInst
    );
    try {
      if (!bh.input.name) {
        bh.input.status = false;
        bh.input.result = { message: 'Name field required' };
      } else if (!bh.input.email) {
        bh.input.status = false;
        bh.input.result = { message: 'email field required' };
      }

      if (bh.input.email) {
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_NMPe8lajeGQuYxeb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NMPe8lajeGQuYxeb',
        spanInst,
        'sd_NMPe8lajeGQuYxeb'
      );
    }
  }

  async sd_ia2MmqiWN3JSWlTy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ia2MmqiWN3JSWlTy',
      parentSpanInst
    );
    try {
      let mailConfigObj = this.sdService.getConfigObj(
        'emailout-config',
        'sd_RPVwySyFdRxV15nL'
      );
      let server = mailConfigObj.server;
      let port = mailConfigObj.port;
      let secure = mailConfigObj.secure;
      let tls = mailConfigObj.tls;
      let userid = mailConfigObj.userid;
      let password = mailConfigObj.password;
      let emailServiceInstance = EmailOutService.getInstance();
      bh.response = await emailServiceInstance.sendEmail(
        {
          server,
          port,
          secure,
          tls,
        },
        {
          userid,
          password,
          to: 'gadigegopala55@gmail.com',
          subject: 'testing',
          body: 'mail received successfully',
          cc: undefined,
          bcc: undefined,
          from: 'demomail224@gmail.com',
          html: undefined,
          iCal: undefined,
          routingOptions: undefined,
          contentOptions: undefined,
          securityOptions: undefined,
          headerOptions: undefined,
          attachments: [],
        }
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_wweDZ4S9VEDDIIpZ(bh, parentSpanInst);
      //appendnew_next_sd_ia2MmqiWN3JSWlTy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ia2MmqiWN3JSWlTy',
        spanInst,
        'sd_ia2MmqiWN3JSWlTy'
      );
    }
  }

  async sd_wweDZ4S9VEDDIIpZ(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wweDZ4S9VEDDIIpZ');
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
  //appendnew_flow_flows_Catch
}
