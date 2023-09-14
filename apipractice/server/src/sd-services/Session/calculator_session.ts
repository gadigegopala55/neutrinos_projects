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
export class calculator_session {
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
    this.serviceName = 'calculator_session';
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
      instance = new calculator_session(
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
      //appendnew_flow_calculator_session_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: calculator_session');

    //appendnew_flow_calculator_session_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: calculator_session');

    this.app['post'](
      `${this.serviceBasePath}/calculator-login`,
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
          bh = await this.sd_cdnWKrnJxrVVt2u5(bh, parentSpanInst);
          //appendnew_next_sd_VVANtu3bHnte3SNG
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_VVANtu3bHnte3SNG');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_calculator_session_HttpIn
  }
  //   service flows_calculator_session

  //appendnew_flow_calculator_session_start

  async sd_cdnWKrnJxrVVt2u5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cdnWKrnJxrVVt2u5',
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
      bh = await this.sd_Mj27WEMyJugxKGSy(bh, parentSpanInst);
      //appendnew_next_sd_cdnWKrnJxrVVt2u5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cdnWKrnJxrVVt2u5',
        spanInst,
        'sd_cdnWKrnJxrVVt2u5'
      );
    }
  }

  async sd_Mj27WEMyJugxKGSy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Mj27WEMyJugxKGSy',
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
        bh = await this.sd_KDeaxkTPxUE8Vyen(bh, parentSpanInst);
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
        bh = await this.sd_UxNdk9prSenYV08g(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Mj27WEMyJugxKGSy',
        spanInst,
        'sd_Mj27WEMyJugxKGSy'
      );
    }
  }

  async sd_KDeaxkTPxUE8Vyen(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KDeaxkTPxUE8Vyen',
      parentSpanInst
    );
    try {
      bh.query = 'SELECT id from users where username=$1 and password = $2';

      bh.params = [bh.input.body.username, bh.input.body.password];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IAONYUM8wdAAHSEW(bh, parentSpanInst);
      //appendnew_next_sd_KDeaxkTPxUE8Vyen
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KDeaxkTPxUE8Vyen',
        spanInst,
        'sd_KDeaxkTPxUE8Vyen'
      );
    }
  }

  async sd_IAONYUM8wdAAHSEW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IAONYUM8wdAAHSEW',
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
      bh = await this.sd_A3WCNGy9RhLX9XNO(bh, parentSpanInst);
      //appendnew_next_sd_IAONYUM8wdAAHSEW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IAONYUM8wdAAHSEW',
        spanInst,
        'sd_IAONYUM8wdAAHSEW'
      );
    }
  }

  async sd_A3WCNGy9RhLX9XNO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_A3WCNGy9RhLX9XNO',
      parentSpanInst
    );
    try {
      if (bh.user_result.length == 0) {
        bh.status = false;
        bh.result = { message: 'invalid credentials' };
      } else {
        bh.session = {
          calculator: bh.input.body.username,
        };
        bh.result = { message: 'login successful' };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9u6MNOyB9NCT2bmn(bh, parentSpanInst);
      //appendnew_next_sd_A3WCNGy9RhLX9XNO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A3WCNGy9RhLX9XNO',
        spanInst,
        'sd_A3WCNGy9RhLX9XNO'
      );
    }
  }

  async sd_9u6MNOyB9NCT2bmn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9u6MNOyB9NCT2bmn',
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
        bh = await this.sd_xQNDUsRTQa1zH2Q5(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9u6MNOyB9NCT2bmn',
        spanInst,
        'sd_9u6MNOyB9NCT2bmn'
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
      await this.sd_op6ViGvukCMBt2fn(bh, parentSpanInst);
      //appendnew_next_mark_session
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ansz8OMaGVjObNcQ',
        spanInst,
        'mark_session'
      );
    }
  }

  async sd_op6ViGvukCMBt2fn(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_op6ViGvukCMBt2fn');
    }
  }

  async sd_xQNDUsRTQa1zH2Q5(bh, parentSpanInst) {
    try {
      bh.web.res.status(401).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xQNDUsRTQa1zH2Q5');
    }
  }

  async sd_UxNdk9prSenYV08g(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UxNdk9prSenYV08g');
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
  //appendnew_flow_calculator_session_Catch
}
