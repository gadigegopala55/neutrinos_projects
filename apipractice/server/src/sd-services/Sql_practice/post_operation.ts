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
export class post_operation {
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
    this.serviceName = 'post_operation';
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
      instance = new post_operation(
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
      //appendnew_flow_post_operation_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: post_operation');

    //appendnew_flow_post_operation_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: post_operation');

    this.app['post'](
      `${this.serviceBasePath}/post-operation`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'user_sequence',
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
          bh = await this.sd_oVkKXEBan4Tfo50E(bh, parentSpanInst);
          //appendnew_next_sd_y7X9nkmxvn6brhSH
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_y7X9nkmxvn6brhSH');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'user_sequence',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_post_operation_HttpIn
  }
  //   service flows_post_operation

  async create_function(
    parentSpanInst,
    name: any = undefined,
    email: any = undefined,
    phone: any = undefined,
    status = true,
    result: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'create_function',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          name: name,
          email: email,
          phone: phone,
          status: status,
          result: result,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3dz59erhoPJbldGF(bh, parentSpanInst);
      //appendnew_next_create_function
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
        'sd_vUF1TfwroTNWXO6y',
        spanInst,
        'create_function'
      );
    }
  }

  //appendnew_flow_post_operation_start

  async sd_3dz59erhoPJbldGF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3dz59erhoPJbldGF',
      parentSpanInst
    );
    try {
      if (!bh.input.name) {
        bh.input.status = false;
        bh.input.result = { message: 'name required' };
      } else if (!bh.input.email) {
        bh.input.status = false;
        bh.input.result = { message: 'email required' };
      } else if (!bh.input.phone) {
        bh.input.status = false;
        bh.input.result = { message: 'phone required' };
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_3dz59erhoPJbldGF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3dz59erhoPJbldGF',
        spanInst,
        'sd_3dz59erhoPJbldGF'
      );
    }
  }

  async sd_oVkKXEBan4Tfo50E(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oVkKXEBan4Tfo50E',
      parentSpanInst
    );
    try {
      let outputVariables = await this.create_function(
        spanInst,
        bh.input.body.name,
        bh.input.body.email,
        bh.input.body.phone,
        undefined,
        undefined
      );
      bh.status = outputVariables.input.status;
      bh.result = outputVariables.input.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gjL8kRWgwZ6g6Owu(bh, parentSpanInst);
      //appendnew_next_sd_oVkKXEBan4Tfo50E
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oVkKXEBan4Tfo50E',
        spanInst,
        'sd_oVkKXEBan4Tfo50E'
      );
    }
  }

  async sd_gjL8kRWgwZ6g6Owu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gjL8kRWgwZ6g6Owu',
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
        bh = await this.sd_NzJUILQGZfwaYmm2(bh, parentSpanInst);
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
        bh = await this.sd_050QkPXkktKX72TI(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gjL8kRWgwZ6g6Owu',
        spanInst,
        'sd_gjL8kRWgwZ6g6Owu'
      );
    }
  }

  async sd_NzJUILQGZfwaYmm2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NzJUILQGZfwaYmm2',
      parentSpanInst
    );
    try {
      bh.query = 'INSERT INTO employee (name,email,phone) VALUES ($1,$2,$3)';

      bh.params = [
        bh.input.body.name,
        bh.input.body.email,
        bh.input.body.phone,
      ];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_YYgSjrHQrjR0TMi9(bh, parentSpanInst);
      //appendnew_next_sd_NzJUILQGZfwaYmm2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NzJUILQGZfwaYmm2',
        spanInst,
        'sd_NzJUILQGZfwaYmm2'
      );
    }
  }

  async sd_YYgSjrHQrjR0TMi9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YYgSjrHQrjR0TMi9',
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
      bh = await this.sd_UtQkP6izzTHaolKB(bh, parentSpanInst);
      //appendnew_next_sd_YYgSjrHQrjR0TMi9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YYgSjrHQrjR0TMi9',
        spanInst,
        'sd_YYgSjrHQrjR0TMi9'
      );
    }
  }

  async sd_UtQkP6izzTHaolKB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UtQkP6izzTHaolKB',
      parentSpanInst
    );
    try {
      bh.result = { message: 'Data uploaded successfully' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_kljO34faT2ym42L8(bh, parentSpanInst);
      //appendnew_next_sd_UtQkP6izzTHaolKB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UtQkP6izzTHaolKB',
        spanInst,
        'sd_UtQkP6izzTHaolKB'
      );
    }
  }

  async sd_kljO34faT2ym42L8(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kljO34faT2ym42L8');
    }
  }

  async sd_050QkPXkktKX72TI(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_050QkPXkktKX72TI');
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
  //appendnew_flow_post_operation_Catch
}
