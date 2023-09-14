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
import * as SSD_SERVICE_ID_sd_DAYsUO068kNZ9veI from './user_session'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class mark_session {
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
    this.serviceName = 'mark_session';
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
      instance = new mark_session(
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
      //appendnew_flow_mark_session_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: mark_session');

    //appendnew_flow_mark_session_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: mark_session');

    this.app['post'](
      `${this.serviceBasePath}/mark-login`,
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
          bh = await this.sd_F8qCOohlsj9Vw9Pd(bh, parentSpanInst);
          //appendnew_next_sd_3sjeH2c1GDKa2KwD
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_3sjeH2c1GDKa2KwD');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_mark_session_HttpIn
  }
  //   service flows_mark_session

  //appendnew_flow_mark_session_start

  async sd_F8qCOohlsj9Vw9Pd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_F8qCOohlsj9Vw9Pd',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_DAYsUO068kNZ9veIInstance: SSD_SERVICE_ID_sd_DAYsUO068kNZ9veI.user_session =
        SSD_SERVICE_ID_sd_DAYsUO068kNZ9veI.user_session.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_DAYsUO068kNZ9veIInstance.user_validation_function(
          spanInst,
          bh.input.body.username,
          bh.input.body.password,
          undefined,
          undefined
        );
      bh.status = outputVariables.input.status;
      bh.result = outputVariables.input.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qseDaYAYeTORdt3w(bh, parentSpanInst);
      //appendnew_next_sd_F8qCOohlsj9Vw9Pd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_F8qCOohlsj9Vw9Pd',
        spanInst,
        'sd_F8qCOohlsj9Vw9Pd'
      );
    }
  }

  async sd_qseDaYAYeTORdt3w(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qseDaYAYeTORdt3w',
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
        bh = await this.sd_19I4TXW14AmLz8G9(bh, parentSpanInst);
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
        bh = await this.sd_FbGqU8mTF2m4OuJv(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qseDaYAYeTORdt3w',
        spanInst,
        'sd_qseDaYAYeTORdt3w'
      );
    }
  }

  async sd_19I4TXW14AmLz8G9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_19I4TXW14AmLz8G9',
      parentSpanInst
    );
    try {
      bh.query = 'SELECT id from users where username=$1 and password = $2';

      bh.params = [bh.input.body.username, bh.input.body.password];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iLHeekiI6BmWAPvY(bh, parentSpanInst);
      //appendnew_next_sd_19I4TXW14AmLz8G9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_19I4TXW14AmLz8G9',
        spanInst,
        'sd_19I4TXW14AmLz8G9'
      );
    }
  }

  async sd_iLHeekiI6BmWAPvY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iLHeekiI6BmWAPvY',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_xDzx3dxKbrMOh8oE'
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
      let params = bh.params;
      params = params ? params : [];
      bh.user_result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_z656fRHIHf77sdkQ(bh, parentSpanInst);
      //appendnew_next_sd_iLHeekiI6BmWAPvY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iLHeekiI6BmWAPvY',
        spanInst,
        'sd_iLHeekiI6BmWAPvY'
      );
    }
  }

  async sd_z656fRHIHf77sdkQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_z656fRHIHf77sdkQ',
      parentSpanInst
    );
    try {
      if (bh.user_result.length == 0) {
        bh.status = false;
        bh.result = { message: 'invalid credentials' };
      } else {
        bh.session = {
          marks: bh.input.body.username,
        };
        bh.result = { message: 'login successful' };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7sHirURYOI4s7RH4(bh, parentSpanInst);
      //appendnew_next_sd_z656fRHIHf77sdkQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_z656fRHIHf77sdkQ',
        spanInst,
        'sd_z656fRHIHf77sdkQ'
      );
    }
  }

  async sd_7sHirURYOI4s7RH4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7sHirURYOI4s7RH4',
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
        bh = await this.mark_session(bh, parentSpanInst);
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
        bh = await this.sd_xqKUgGgJicJAT4yA(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7sHirURYOI4s7RH4',
        spanInst,
        'sd_7sHirURYOI4s7RH4'
      );
    }
  }

  async mark_session(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'mark_session',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.session;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_8kfI9R3Zx4u916cb(bh, parentSpanInst);
      //appendnew_next_mark_session
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EHk3fhnlWEZXVee0',
        spanInst,
        'mark_session'
      );
    }
  }

  async sd_8kfI9R3Zx4u916cb(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8kfI9R3Zx4u916cb');
    }
  }

  async sd_xqKUgGgJicJAT4yA(bh, parentSpanInst) {
    try {
      bh.web.res.status(401).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xqKUgGgJicJAT4yA');
    }
  }

  async sd_FbGqU8mTF2m4OuJv(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FbGqU8mTF2m4OuJv');
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
  //appendnew_flow_mark_session_Catch
}
