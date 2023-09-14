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
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import { GenericRDBMSOperations } from '../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class tasks {
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
    this.serviceName = 'tasks';
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
      instance = new tasks(
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
      //appendnew_flow_tasks_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: tasks');

    //appendnew_flow_tasks_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: tasks');

    this.app['post'](
      `${this.serviceBasePath}/add-task`,
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
          bh = await this.sd_DqREhYrPLC83dSuB(bh, parentSpanInst);
          //appendnew_next_sd_8EIKAO2LGFVhJu5W
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_8EIKAO2LGFVhJu5W');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-task`,
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
          bh = await this.sd_q6hVWcfwo9KHedJr(bh, parentSpanInst);
          //appendnew_next_sd_17LVJLZT6fGr4ZaH
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_17LVJLZT6fGr4ZaH');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/update-task`,
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
          bh = await this.sd_Df15JmFXKFO2VGhr(bh, parentSpanInst);
          //appendnew_next_sd_0E8XROcqxMYqsL5r
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_0E8XROcqxMYqsL5r');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_tasks_HttpIn
  }
  //   service flows_tasks

  //appendnew_flow_tasks_start

  async sd_DqREhYrPLC83dSuB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DqREhYrPLC83dSuB',
      parentSpanInst
    );
    try {
      bh.local.query = `with rows as (select count(*) as count from task) insert into task (name, description, due_date, priority, status) select $1, $2, $3, $4, $5 where (select count from rows) < 10 returning id`;

      bh.local.params = [
        bh.input.body.name,
        bh.input.body.description,
        bh.input.body.due_date,
        bh.input.body.priority,
        'Pending',
      ];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_mXCxhPMQ2yr2HYGT(bh, parentSpanInst);
      //appendnew_next_sd_DqREhYrPLC83dSuB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DqREhYrPLC83dSuB',
        spanInst,
        'sd_DqREhYrPLC83dSuB'
      );
    }
  }

  async sd_mXCxhPMQ2yr2HYGT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mXCxhPMQ2yr2HYGT',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_CBLIAWobuM7NxcGd'
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
      let params = bh.local.params;
      params = params ? params : [];
      bh.local.response = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_wpiKlIVkJWVvKcbR(bh, parentSpanInst);
      //appendnew_next_sd_mXCxhPMQ2yr2HYGT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mXCxhPMQ2yr2HYGT',
        spanInst,
        'sd_mXCxhPMQ2yr2HYGT'
      );
    }
  }

  async sd_wpiKlIVkJWVvKcbR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wpiKlIVkJWVvKcbR',
      parentSpanInst
    );
    try {
      if (bh.local.response.length == 0) {
        bh.local.response = {
          message: 'Tasks adding Maximum limit Exceded',
        };
        bh.local.status_code = 400;
      } else {
        bh.local.response = {
          message: 'Data added successfully',
        };
        bh.local.status_code = 200;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_ghjL6mT7Qm74KqWL(bh, parentSpanInst);
      //appendnew_next_sd_wpiKlIVkJWVvKcbR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wpiKlIVkJWVvKcbR',
        spanInst,
        'sd_wpiKlIVkJWVvKcbR'
      );
    }
  }

  async sd_ghjL6mT7Qm74KqWL(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.status_code).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ghjL6mT7Qm74KqWL');
    }
  }

  async sd_q6hVWcfwo9KHedJr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_q6hVWcfwo9KHedJr',
      parentSpanInst
    );
    try {
      bh.local.query = `select * from task`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BKoqZqdhd7B3WaNz(bh, parentSpanInst);
      //appendnew_next_sd_q6hVWcfwo9KHedJr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_q6hVWcfwo9KHedJr',
        spanInst,
        'sd_q6hVWcfwo9KHedJr'
      );
    }
  }

  async sd_BKoqZqdhd7B3WaNz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BKoqZqdhd7B3WaNz',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_CBLIAWobuM7NxcGd'
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
      let params = [];
      params = params ? params : [];
      bh.local.response = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_fCY0nAF82HPDj3lZ(bh, parentSpanInst);
      //appendnew_next_sd_BKoqZqdhd7B3WaNz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BKoqZqdhd7B3WaNz',
        spanInst,
        'sd_BKoqZqdhd7B3WaNz'
      );
    }
  }

  async sd_fCY0nAF82HPDj3lZ(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fCY0nAF82HPDj3lZ');
    }
  }

  async sd_Df15JmFXKFO2VGhr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Df15JmFXKFO2VGhr',
      parentSpanInst
    );
    try {
      bh.local.query = `update task set status=$1 where id=$2`;

      bh.local.params = ['Completed', bh.input.body.id];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zoZwdbpiDrK8HKkc(bh, parentSpanInst);
      //appendnew_next_sd_Df15JmFXKFO2VGhr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Df15JmFXKFO2VGhr',
        spanInst,
        'sd_Df15JmFXKFO2VGhr'
      );
    }
  }

  async sd_zoZwdbpiDrK8HKkc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zoZwdbpiDrK8HKkc',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_CBLIAWobuM7NxcGd'
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
      let params = bh.local.params;
      params = params ? params : [];
      bh.local.response = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NX0u1g7ffvOQ3Naa(bh, parentSpanInst);
      //appendnew_next_sd_zoZwdbpiDrK8HKkc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zoZwdbpiDrK8HKkc',
        spanInst,
        'sd_zoZwdbpiDrK8HKkc'
      );
    }
  }

  async sd_NX0u1g7ffvOQ3Naa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NX0u1g7ffvOQ3Naa',
      parentSpanInst
    );
    try {
      bh.local.response = {
        message: 'data updated successfully',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_8YpYsIZQhQerUU20(bh, parentSpanInst);
      //appendnew_next_sd_NX0u1g7ffvOQ3Naa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NX0u1g7ffvOQ3Naa',
        spanInst,
        'sd_NX0u1g7ffvOQ3Naa'
      );
    }
  }

  async sd_8YpYsIZQhQerUU20(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8YpYsIZQhQerUU20');
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
  //appendnew_flow_tasks_Catch
}
