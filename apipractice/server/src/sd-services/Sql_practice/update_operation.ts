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
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class update_operation {
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
    this.serviceName = 'update_operation';
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
      instance = new update_operation(
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
      //appendnew_flow_update_operation_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: update_operation');

    //appendnew_flow_update_operation_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: update_operation');

    this.app['put'](
      `${this.serviceBasePath}/put-operation`,
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
          bh = await this.sd_4nd8BkjQmEpKnUxY(bh, parentSpanInst);
          //appendnew_next_sd_CAEFn7MOm68deY6Q
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_CAEFn7MOm68deY6Q');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_update_operation_HttpIn
  }
  //   service flows_update_operation

  async update_function(
    parentSpanInst,
    id: any = undefined,
    name: any = undefined,
    status = true,
    result: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'update_function',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          id: id,
          name: name,
          status: status,
          result: result,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_t9TaJpUmlOdadRGO(bh, parentSpanInst);
      //appendnew_next_update_function
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
        'sd_9GLDb0V7cLxNH1GV',
        spanInst,
        'update_function'
      );
    }
  }

  //appendnew_flow_update_operation_start

  async sd_t9TaJpUmlOdadRGO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_t9TaJpUmlOdadRGO',
      parentSpanInst
    );
    try {
      if (!bh.input.id) {
        bh.input.status = false;
        bh.input.result = { message: 'id required' };
      } else if (!bh.input.name) {
        bh.input.status = false;
        bh.input.result = { message: 'name required' };
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_t9TaJpUmlOdadRGO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_t9TaJpUmlOdadRGO',
        spanInst,
        'sd_t9TaJpUmlOdadRGO'
      );
    }
  }

  async sd_4nd8BkjQmEpKnUxY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4nd8BkjQmEpKnUxY',
      parentSpanInst
    );
    try {
      let outputVariables = await this.update_function(
        spanInst,
        bh.input.body.id,
        bh.input.body.name,
        undefined,
        undefined
      );
      bh.status = outputVariables.input.status;
      bh.result = outputVariables.input.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CJeVIPF63VSjEPn3(bh, parentSpanInst);
      //appendnew_next_sd_4nd8BkjQmEpKnUxY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4nd8BkjQmEpKnUxY',
        spanInst,
        'sd_4nd8BkjQmEpKnUxY'
      );
    }
  }

  async sd_CJeVIPF63VSjEPn3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CJeVIPF63VSjEPn3',
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
        bh = await this.sd_6olRvAa0hXXOJ6hF(bh, parentSpanInst);
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
        bh = await this.sd_Je6zDBP9h9mcCMw8(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CJeVIPF63VSjEPn3',
        spanInst,
        'sd_CJeVIPF63VSjEPn3'
      );
    }
  }

  async sd_6olRvAa0hXXOJ6hF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6olRvAa0hXXOJ6hF',
      parentSpanInst
    );
    try {
      bh.getQuery = 'SELECT name from employee where id = $1';

      bh.getParams = [bh.input.body.id];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gqmiB3xxaaZTLaJK(bh, parentSpanInst);
      //appendnew_next_sd_6olRvAa0hXXOJ6hF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6olRvAa0hXXOJ6hF',
        spanInst,
        'sd_6olRvAa0hXXOJ6hF'
      );
    }
  }

  async sd_gqmiB3xxaaZTLaJK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gqmiB3xxaaZTLaJK',
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
      let params = bh.getParams;
      params = params ? params : [];
      bh.getResult = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.getQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_wDgxfXbpADSeQU3C(bh, parentSpanInst);
      //appendnew_next_sd_gqmiB3xxaaZTLaJK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gqmiB3xxaaZTLaJK',
        spanInst,
        'sd_gqmiB3xxaaZTLaJK'
      );
    }
  }

  async sd_wDgxfXbpADSeQU3C(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wDgxfXbpADSeQU3C',
      parentSpanInst
    );
    try {
      if (bh.getResult.length == 0) {
        bh.status = false;
        bh.result = { message: 'employee details not exists for the given id' };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_WwMl0960e9FUS1M4(bh, parentSpanInst);
      //appendnew_next_sd_wDgxfXbpADSeQU3C
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wDgxfXbpADSeQU3C',
        spanInst,
        'sd_wDgxfXbpADSeQU3C'
      );
    }
  }

  async sd_WwMl0960e9FUS1M4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WwMl0960e9FUS1M4',
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
        bh = await this.sd_vMiDwaF7x0Pijcu5(bh, parentSpanInst);
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
        bh = await this.sd_Je6zDBP9h9mcCMw8(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WwMl0960e9FUS1M4',
        spanInst,
        'sd_WwMl0960e9FUS1M4'
      );
    }
  }

  async sd_vMiDwaF7x0Pijcu5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vMiDwaF7x0Pijcu5',
      parentSpanInst
    );
    try {
      bh.query = 'UPDATE employee SET name=$2 WHERE id=$1';

      bh.params = [bh.input.body.id, bh.input.body.name];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IS1rZ0A7M9XcRe2u(bh, parentSpanInst);
      //appendnew_next_sd_vMiDwaF7x0Pijcu5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vMiDwaF7x0Pijcu5',
        spanInst,
        'sd_vMiDwaF7x0Pijcu5'
      );
    }
  }

  async sd_IS1rZ0A7M9XcRe2u(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IS1rZ0A7M9XcRe2u',
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
      bh.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cIZdXfsWdwmqxvP0(bh, parentSpanInst);
      //appendnew_next_sd_IS1rZ0A7M9XcRe2u
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IS1rZ0A7M9XcRe2u',
        spanInst,
        'sd_IS1rZ0A7M9XcRe2u'
      );
    }
  }

  async sd_cIZdXfsWdwmqxvP0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cIZdXfsWdwmqxvP0',
      parentSpanInst
    );
    try {
      bh.result = { message: 'Data updated successfully' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_JTacDYDOmnpmCsQr(bh, parentSpanInst);
      //appendnew_next_sd_cIZdXfsWdwmqxvP0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cIZdXfsWdwmqxvP0',
        spanInst,
        'sd_cIZdXfsWdwmqxvP0'
      );
    }
  }

  async sd_JTacDYDOmnpmCsQr(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JTacDYDOmnpmCsQr');
    }
  }

  async sd_Je6zDBP9h9mcCMw8(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Je6zDBP9h9mcCMw8');
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
  //appendnew_flow_update_operation_Catch
}
