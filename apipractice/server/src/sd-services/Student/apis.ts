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
import * as SSD_SERVICE_ID_sd_UanDwIBRhhyg5YOz from './flows'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class apis {
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
    this.serviceName = 'apis';
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
      instance = new apis(
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
      //appendnew_flow_apis_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: apis');

    //appendnew_flow_apis_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: apis');

    this.app['post'](
      `${this.serviceBasePath}/add-student`,
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
          bh = await this.sd_fCQtZpwZMzqNiaJq(bh, parentSpanInst);
          //appendnew_next_sd_DfcMcvodT7iImPek
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_DfcMcvodT7iImPek');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/add-subject`,
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
          bh = await this.sd_jFoIHVvSHd5Xpvdc(bh, parentSpanInst);
          //appendnew_next_sd_bxpdwWHF8r0cgiPX
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_bxpdwWHF8r0cgiPX');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/add-exam`,
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
          bh = await this.sd_rLKmdpW6ofOGNiaB(bh, parentSpanInst);
          //appendnew_next_sd_vOrHgWBUpOPEDmp5
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_vOrHgWBUpOPEDmp5');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/add-mark`,
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
          bh = await this.sd_Ju2ntw3vEPUfr7SL(bh, parentSpanInst);
          //appendnew_next_sd_YdmXFMc1zn5jFTf2
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_YdmXFMc1zn5jFTf2');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/get-rank`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'marks_sequence',
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
          bh = await this.sd_lGVyrzPQ6gl7CfAV(bh, parentSpanInst);
          //appendnew_next_sd_6XC3ux2qQAJaHSxb
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_6XC3ux2qQAJaHSxb');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'marks_sequence',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_apis_HttpIn
  }
  //   service flows_apis

  //appendnew_flow_apis_start

  async sd_fCQtZpwZMzqNiaJq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fCQtZpwZMzqNiaJq',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_UanDwIBRhhyg5YOzInstance: SSD_SERVICE_ID_sd_UanDwIBRhhyg5YOz.flows =
        SSD_SERVICE_ID_sd_UanDwIBRhhyg5YOz.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_UanDwIBRhhyg5YOzInstance.student_function(
          spanInst,
          bh.input.body.name,
          bh.input.body.roll_number,
          bh.input.body.clas,
          bh.input.body.section,
          undefined,
          undefined
        );
      bh.status = outputVariables.input.status;
      bh.result = outputVariables.input.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jmQT7qllpLwXxGE4(bh, parentSpanInst);
      //appendnew_next_sd_fCQtZpwZMzqNiaJq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fCQtZpwZMzqNiaJq',
        spanInst,
        'sd_fCQtZpwZMzqNiaJq'
      );
    }
  }

  async sd_jmQT7qllpLwXxGE4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jmQT7qllpLwXxGE4',
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
        bh = await this.sd_WXOJ0Sp79vYO9efM(bh, parentSpanInst);
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
        bh = await this.sd_q8kN6TNnJOOurooT(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jmQT7qllpLwXxGE4',
        spanInst,
        'sd_jmQT7qllpLwXxGE4'
      );
    }
  }

  async sd_WXOJ0Sp79vYO9efM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WXOJ0Sp79vYO9efM',
      parentSpanInst
    );
    try {
      bh.query =
        'INSERT INTO students (name,roll_number,class,section) VALUES ($1,$2,$3,$4) RETURNING id';

      bh.params = [
        bh.input.body.name,
        bh.input.body.roll_number,
        bh.input.body.clas,
        bh.input.body.section,
      ];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NW4Ukerbdk5wAa0v(bh, parentSpanInst);
      //appendnew_next_sd_WXOJ0Sp79vYO9efM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WXOJ0Sp79vYO9efM',
        spanInst,
        'sd_WXOJ0Sp79vYO9efM'
      );
    }
  }

  async sd_NW4Ukerbdk5wAa0v(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NW4Ukerbdk5wAa0v',
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
      bh.resultId = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FJXbK6xvKOyi6U9u(bh, parentSpanInst);
      //appendnew_next_sd_NW4Ukerbdk5wAa0v
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NW4Ukerbdk5wAa0v',
        spanInst,
        'sd_NW4Ukerbdk5wAa0v'
      );
    }
  }

  async sd_FJXbK6xvKOyi6U9u(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FJXbK6xvKOyi6U9u',
      parentSpanInst
    );
    try {
      bh.result = {
        data: {
          id: bh.resultId[0].id,
          name: bh.input.body.name,
          roll_number: bh.input.body.roll_number,
          class: bh.input.body.clas,
          section: bh.input.body.section,
        },
        message: 'Student data added successfully',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_mFkQ1gd61riZS42I(bh, parentSpanInst);
      //appendnew_next_sd_FJXbK6xvKOyi6U9u
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FJXbK6xvKOyi6U9u',
        spanInst,
        'sd_FJXbK6xvKOyi6U9u'
      );
    }
  }

  async sd_mFkQ1gd61riZS42I(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mFkQ1gd61riZS42I');
    }
  }

  async sd_q8kN6TNnJOOurooT(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_q8kN6TNnJOOurooT');
    }
  }

  async sd_jFoIHVvSHd5Xpvdc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jFoIHVvSHd5Xpvdc',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_UanDwIBRhhyg5YOzInstance: SSD_SERVICE_ID_sd_UanDwIBRhhyg5YOz.flows =
        SSD_SERVICE_ID_sd_UanDwIBRhhyg5YOz.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_UanDwIBRhhyg5YOzInstance.subject_function(
          spanInst,
          bh.input.body.subject_name,
          undefined,
          undefined
        );
      bh.status = outputVariables.input.status;
      bh.result = outputVariables.input.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_63zdhlza9m6eccWf(bh, parentSpanInst);
      //appendnew_next_sd_jFoIHVvSHd5Xpvdc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jFoIHVvSHd5Xpvdc',
        spanInst,
        'sd_jFoIHVvSHd5Xpvdc'
      );
    }
  }

  async sd_63zdhlza9m6eccWf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_63zdhlza9m6eccWf',
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
        bh = await this.sd_1w7jqyHlOab7qLfR(bh, parentSpanInst);
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
        bh = await this.sd_1bqi57dtCX3vyYg6(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_63zdhlza9m6eccWf',
        spanInst,
        'sd_63zdhlza9m6eccWf'
      );
    }
  }

  async sd_1w7jqyHlOab7qLfR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1w7jqyHlOab7qLfR',
      parentSpanInst
    );
    try {
      bh.query = `INSERT INTO subjects (subject_name) SELECT $1 WHERE NOT EXISTS (SELECT id,subject_name from subjects WHERE subject_name = $2) RETURNING id`;

      bh.params = [bh.input.body.subject_name, bh.input.body.subject_name];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1pAVWO52o3eLNesq(bh, parentSpanInst);
      //appendnew_next_sd_1w7jqyHlOab7qLfR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1w7jqyHlOab7qLfR',
        spanInst,
        'sd_1w7jqyHlOab7qLfR'
      );
    }
  }

  async sd_1pAVWO52o3eLNesq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1pAVWO52o3eLNesq',
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
      bh.resultId = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_wmwz6iTg1EbmK49C(bh, parentSpanInst);
      //appendnew_next_sd_1pAVWO52o3eLNesq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1pAVWO52o3eLNesq',
        spanInst,
        'sd_1pAVWO52o3eLNesq'
      );
    }
  }

  async sd_wmwz6iTg1EbmK49C(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wmwz6iTg1EbmK49C',
      parentSpanInst
    );
    try {
      if (bh.resultId.length == 0) {
        (bh.status = false),
          (bh.result = { message: 'Subject already exists' });
      } else {
        bh.result = {
          data: {
            id: bh.resultId[0].id,
            subject_name: bh.input.body.subject_name,
          },
          message: 'Subject added successfully',
        };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qrDOQW4WKmlBpqgc(bh, parentSpanInst);
      //appendnew_next_sd_wmwz6iTg1EbmK49C
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wmwz6iTg1EbmK49C',
        spanInst,
        'sd_wmwz6iTg1EbmK49C'
      );
    }
  }

  async sd_qrDOQW4WKmlBpqgc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qrDOQW4WKmlBpqgc',
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
        bh = await this.sd_3xbKTOwdF47tWtJh(bh, parentSpanInst);
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
        bh = await this.sd_GGMUg7LktxcB08yr(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qrDOQW4WKmlBpqgc',
        spanInst,
        'sd_qrDOQW4WKmlBpqgc'
      );
    }
  }

  async sd_3xbKTOwdF47tWtJh(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3xbKTOwdF47tWtJh');
    }
  }

  async sd_GGMUg7LktxcB08yr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GGMUg7LktxcB08yr',
      parentSpanInst
    );
    try {
      bh.query = `SELECT id from subjects where subject_name = $1`;

      bh.params = [bh.input.body.subject_name];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AQhwcvYcKAbiSHia(bh, parentSpanInst);
      //appendnew_next_sd_GGMUg7LktxcB08yr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GGMUg7LktxcB08yr',
        spanInst,
        'sd_GGMUg7LktxcB08yr'
      );
    }
  }

  async sd_AQhwcvYcKAbiSHia(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AQhwcvYcKAbiSHia',
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
      bh.resultId = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HM1R2aZaw2E7OT7e(bh, parentSpanInst);
      //appendnew_next_sd_AQhwcvYcKAbiSHia
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AQhwcvYcKAbiSHia',
        spanInst,
        'sd_AQhwcvYcKAbiSHia'
      );
    }
  }

  async sd_HM1R2aZaw2E7OT7e(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HM1R2aZaw2E7OT7e',
      parentSpanInst
    );
    try {
      bh.result = {
        data: {
          id: bh.resultId[0].id,
          subject_name: bh.input.body.subject_name,
        },
        message:
          'Subject already exists , you can check the details in the data',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Wjn7oj11M84lGz7V(bh, parentSpanInst);
      //appendnew_next_sd_HM1R2aZaw2E7OT7e
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HM1R2aZaw2E7OT7e',
        spanInst,
        'sd_HM1R2aZaw2E7OT7e'
      );
    }
  }

  async sd_Wjn7oj11M84lGz7V(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Wjn7oj11M84lGz7V');
    }
  }

  async sd_1bqi57dtCX3vyYg6(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1bqi57dtCX3vyYg6');
    }
  }

  async sd_rLKmdpW6ofOGNiaB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rLKmdpW6ofOGNiaB',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_UanDwIBRhhyg5YOzInstance: SSD_SERVICE_ID_sd_UanDwIBRhhyg5YOz.flows =
        SSD_SERVICE_ID_sd_UanDwIBRhhyg5YOz.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_UanDwIBRhhyg5YOzInstance.exams_function(
          spanInst,
          bh.input.body.exam_name,
          undefined,
          undefined
        );
      bh.status = outputVariables.input.status;
      bh.result = outputVariables.input.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IjNwX2StWo79wG9g(bh, parentSpanInst);
      //appendnew_next_sd_rLKmdpW6ofOGNiaB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rLKmdpW6ofOGNiaB',
        spanInst,
        'sd_rLKmdpW6ofOGNiaB'
      );
    }
  }

  async sd_IjNwX2StWo79wG9g(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IjNwX2StWo79wG9g',
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
        bh = await this.sd_PJjvZzk7KGzaKYb4(bh, parentSpanInst);
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
        bh = await this.sd_fR96RUCJcXWTDvsC(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IjNwX2StWo79wG9g',
        spanInst,
        'sd_IjNwX2StWo79wG9g'
      );
    }
  }

  async sd_PJjvZzk7KGzaKYb4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PJjvZzk7KGzaKYb4',
      parentSpanInst
    );
    try {
      bh.query = `INSERT INTO exams (exam_name) SELECT $1 WHERE NOT EXISTS (SELECT id,exam_name from exams WHERE exam_name = $2) RETURNING id`;

      bh.params = [bh.input.body.exam_name, bh.input.body.exam_name];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VurlnTJHWBjCdMca(bh, parentSpanInst);
      //appendnew_next_sd_PJjvZzk7KGzaKYb4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PJjvZzk7KGzaKYb4',
        spanInst,
        'sd_PJjvZzk7KGzaKYb4'
      );
    }
  }

  async sd_VurlnTJHWBjCdMca(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VurlnTJHWBjCdMca',
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
      bh.resultId = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xlOhZNxsZDytyzAA(bh, parentSpanInst);
      //appendnew_next_sd_VurlnTJHWBjCdMca
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VurlnTJHWBjCdMca',
        spanInst,
        'sd_VurlnTJHWBjCdMca'
      );
    }
  }

  async sd_xlOhZNxsZDytyzAA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xlOhZNxsZDytyzAA',
      parentSpanInst
    );
    try {
      if (bh.resultId.length == 0) {
        (bh.status = false),
          (bh.result = { message: 'exam_name already exists' });
      } else {
        bh.result = {
          data: {
            id: bh.resultId[0].id,
            subject_name: bh.input.body.exam_name,
          },
          message: 'exam_name added successfully',
        };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nEdBDs9mYv1sx6Jw(bh, parentSpanInst);
      //appendnew_next_sd_xlOhZNxsZDytyzAA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xlOhZNxsZDytyzAA',
        spanInst,
        'sd_xlOhZNxsZDytyzAA'
      );
    }
  }

  async sd_nEdBDs9mYv1sx6Jw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nEdBDs9mYv1sx6Jw',
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
        bh = await this.sd_Cc96rNjYMMMW4p7Q(bh, parentSpanInst);
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
        bh = await this.sd_jWzaTVbj5NIq6eWk(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nEdBDs9mYv1sx6Jw',
        spanInst,
        'sd_nEdBDs9mYv1sx6Jw'
      );
    }
  }

  async sd_Cc96rNjYMMMW4p7Q(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Cc96rNjYMMMW4p7Q');
    }
  }

  async sd_jWzaTVbj5NIq6eWk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jWzaTVbj5NIq6eWk',
      parentSpanInst
    );
    try {
      bh.query = `SELECT id from exams where exam_name = $1`;

      bh.params = [bh.input.body.exam_name];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1GT6U1QkTlmFCL7C(bh, parentSpanInst);
      //appendnew_next_sd_jWzaTVbj5NIq6eWk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jWzaTVbj5NIq6eWk',
        spanInst,
        'sd_jWzaTVbj5NIq6eWk'
      );
    }
  }

  async sd_1GT6U1QkTlmFCL7C(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1GT6U1QkTlmFCL7C',
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
      bh.resultId = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_EwUX63uTr6KS7MjY(bh, parentSpanInst);
      //appendnew_next_sd_1GT6U1QkTlmFCL7C
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1GT6U1QkTlmFCL7C',
        spanInst,
        'sd_1GT6U1QkTlmFCL7C'
      );
    }
  }

  async sd_EwUX63uTr6KS7MjY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EwUX63uTr6KS7MjY',
      parentSpanInst
    );
    try {
      bh.result = {
        data: {
          id: bh.resultId[0].id,
          exam_name: bh.input.body.exam_name,
        },
        message:
          'exam_name already exists , you can check the details in the data',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_ap3tsXk8gtCUg5Ag(bh, parentSpanInst);
      //appendnew_next_sd_EwUX63uTr6KS7MjY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EwUX63uTr6KS7MjY',
        spanInst,
        'sd_EwUX63uTr6KS7MjY'
      );
    }
  }

  async sd_ap3tsXk8gtCUg5Ag(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ap3tsXk8gtCUg5Ag');
    }
  }

  async sd_fR96RUCJcXWTDvsC(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fR96RUCJcXWTDvsC');
    }
  }

  async sd_Ju2ntw3vEPUfr7SL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ju2ntw3vEPUfr7SL',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_UanDwIBRhhyg5YOzInstance: SSD_SERVICE_ID_sd_UanDwIBRhhyg5YOz.flows =
        SSD_SERVICE_ID_sd_UanDwIBRhhyg5YOz.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_UanDwIBRhhyg5YOzInstance.marks_function(
          spanInst,
          bh.input.body.student_id,
          bh.input.body.exam_id,
          bh.input.body.subject_id,
          bh.input.body.mark,
          undefined,
          undefined
        );
      bh.status = outputVariables.input.status;
      bh.result = outputVariables.input.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_kDqJvwFIavweynmc(bh, parentSpanInst);
      //appendnew_next_sd_Ju2ntw3vEPUfr7SL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ju2ntw3vEPUfr7SL',
        spanInst,
        'sd_Ju2ntw3vEPUfr7SL'
      );
    }
  }

  async sd_kDqJvwFIavweynmc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kDqJvwFIavweynmc',
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
        bh = await this.sd_80UjFELlBDuzpsE0(bh, parentSpanInst);
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
        bh = await this.sd_q0MVS6KiUEnbkQm6(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kDqJvwFIavweynmc',
        spanInst,
        'sd_kDqJvwFIavweynmc'
      );
    }
  }

  async sd_80UjFELlBDuzpsE0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_80UjFELlBDuzpsE0',
      parentSpanInst
    );
    try {
      bh.query = `INSERT INTO marks (student_id,exam_id,subject_id,mark) SELECT $1,$2,$3,$4 WHERE NOT EXISTS (SELECT id from marks WHERE student_id = $1 AND exam_id = $2 AND subject_id = $3) RETURNING id`;

      bh.params = [
        bh.input.body.student_id,
        bh.input.body.exam_id,
        bh.input.body.subject_id,
        bh.input.body.mark,
      ];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.add_marks_sql(bh, parentSpanInst);
      //appendnew_next_sd_80UjFELlBDuzpsE0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_80UjFELlBDuzpsE0',
        spanInst,
        'sd_80UjFELlBDuzpsE0'
      );
    }
  }

  async add_marks_sql(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'add_marks_sql',
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
      bh.resultId = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_e6oLfjyQkXowGBk3(bh, parentSpanInst);
      //appendnew_next_add_marks_sql
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_77cVZ4uotbJleHB7',
        spanInst,
        'add_marks_sql'
      );
    }
  }

  async sd_e6oLfjyQkXowGBk3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_e6oLfjyQkXowGBk3',
      parentSpanInst
    );
    try {
      if (bh.resultId.length == 0) {
        (bh.status = false),
          (bh.result = {
            message: 'marks for the given combination already exists',
          });
      } else {
        bh.result = {
          data: {
            id: bh.resultId[0].id,
            student_id: bh.input.body.student_id,
            exam_id: bh.input.body.exam_id,
            subject_id: bh.input.body.subject_id,
            mark: bh.input.body.mark,
          },
          message: 'marks added successfully',
        };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OlDBx3NgOjHGU02u(bh, parentSpanInst);
      //appendnew_next_sd_e6oLfjyQkXowGBk3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_e6oLfjyQkXowGBk3',
        spanInst,
        'sd_e6oLfjyQkXowGBk3'
      );
    }
  }

  async sd_OlDBx3NgOjHGU02u(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OlDBx3NgOjHGU02u',
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
        bh = await this.sd_OSuk1tomgqcj2wwO(bh, parentSpanInst);
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
        bh = await this.sd_kbjbF0JVGZR3Gwkb(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OlDBx3NgOjHGU02u',
        spanInst,
        'sd_OlDBx3NgOjHGU02u'
      );
    }
  }

  async sd_OSuk1tomgqcj2wwO(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OSuk1tomgqcj2wwO');
    }
  }

  async sd_kbjbF0JVGZR3Gwkb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kbjbF0JVGZR3Gwkb',
      parentSpanInst
    );
    try {
      bh.query = `SELECT id,mark from marks where student_id = $1 AND exam_id = $2 AND subject_id = $3`;

      bh.params = [
        bh.input.body.student_id,
        bh.input.body.exam_id,
        bh.input.body.subject_id,
      ];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_yc3hfyNq4RJL6BGE(bh, parentSpanInst);
      //appendnew_next_sd_kbjbF0JVGZR3Gwkb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kbjbF0JVGZR3Gwkb',
        spanInst,
        'sd_kbjbF0JVGZR3Gwkb'
      );
    }
  }

  async sd_yc3hfyNq4RJL6BGE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yc3hfyNq4RJL6BGE',
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
      bh.resultId = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_27l02VCVWelxei9j(bh, parentSpanInst);
      //appendnew_next_sd_yc3hfyNq4RJL6BGE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yc3hfyNq4RJL6BGE',
        spanInst,
        'sd_yc3hfyNq4RJL6BGE'
      );
    }
  }

  async sd_27l02VCVWelxei9j(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_27l02VCVWelxei9j',
      parentSpanInst
    );
    try {
      bh.result = {
        data: {
          id: bh.resultId[0].id,
          student_id: bh.input.body.student_id,
          exam_id: bh.input.body.exam_id,
          subject_id: bh.input.body.subject_id,
          mark: bh.resultId[0].mark,
        },
        message:
          'marks for the given combination already exists , you can check the details in the data',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_mEtFXZxl7SColQmg(bh, parentSpanInst);
      //appendnew_next_sd_27l02VCVWelxei9j
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_27l02VCVWelxei9j',
        spanInst,
        'sd_27l02VCVWelxei9j'
      );
    }
  }

  async sd_mEtFXZxl7SColQmg(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mEtFXZxl7SColQmg');
    }
  }

  async sd_q0MVS6KiUEnbkQm6(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_q0MVS6KiUEnbkQm6');
    }
  }

  async sd_DxYUnxftkOOFnken(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DxYUnxftkOOFnken',
      parentSpanInst
    );
    try {
      bh.result = { message: bh.error.driverError.detail };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_fa6dBxG3DUl3dHqN(bh, parentSpanInst);
      //appendnew_next_sd_DxYUnxftkOOFnken
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DxYUnxftkOOFnken',
        spanInst,
        'sd_DxYUnxftkOOFnken'
      );
    }
  }

  async sd_fa6dBxG3DUl3dHqN(bh, parentSpanInst) {
    try {
      bh.web.res.status(500).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fa6dBxG3DUl3dHqN');
    }
  }

  async sd_lGVyrzPQ6gl7CfAV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lGVyrzPQ6gl7CfAV',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_UanDwIBRhhyg5YOzInstance: SSD_SERVICE_ID_sd_UanDwIBRhhyg5YOz.flows =
        SSD_SERVICE_ID_sd_UanDwIBRhhyg5YOz.flows.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_UanDwIBRhhyg5YOzInstance.get_rank(
          spanInst,
          bh.input.body.exam_id,
          undefined,
          undefined
        );
      bh.status = outputVariables.input.status;
      bh.result = outputVariables.input.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TwRt2y1UqHTTxa1o(bh, parentSpanInst);
      //appendnew_next_sd_lGVyrzPQ6gl7CfAV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lGVyrzPQ6gl7CfAV',
        spanInst,
        'sd_lGVyrzPQ6gl7CfAV'
      );
    }
  }

  async sd_TwRt2y1UqHTTxa1o(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TwRt2y1UqHTTxa1o',
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
        bh = await this.sd_PLxon917wxJ5Q2fP(bh, parentSpanInst);
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
        bh = await this.sd_pLxupwq1w6WKeC1B(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TwRt2y1UqHTTxa1o',
        spanInst,
        'sd_TwRt2y1UqHTTxa1o'
      );
    }
  }

  async sd_PLxon917wxJ5Q2fP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PLxon917wxJ5Q2fP',
      parentSpanInst
    );
    try {
      bh.query =
        'WITH total_marks AS (select student_id, sum(mark) as total_marks from marks where exam_id = $1 group by student_id) select s.name, t.total_marks, RANK() OVER (order by t.total_marks desc) as rank from total_marks t JOIN students s ON t.student_id = s.id order by rank;';

      bh.params = [bh.input.body.exam_id];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_G3fNuu0VYgURoZqf(bh, parentSpanInst);
      //appendnew_next_sd_PLxon917wxJ5Q2fP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PLxon917wxJ5Q2fP',
        spanInst,
        'sd_PLxon917wxJ5Q2fP'
      );
    }
  }

  async sd_G3fNuu0VYgURoZqf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_G3fNuu0VYgURoZqf',
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
      bh.resultId = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_bmF3n5MQP0uGJdOR(bh, parentSpanInst);
      //appendnew_next_sd_G3fNuu0VYgURoZqf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_G3fNuu0VYgURoZqf',
        spanInst,
        'sd_G3fNuu0VYgURoZqf'
      );
    }
  }

  async sd_bmF3n5MQP0uGJdOR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bmF3n5MQP0uGJdOR',
      parentSpanInst
    );
    try {
      if (bh.resultId.length == 0) {
        (bh.status = false),
          (bh.result = { message: 'data not found with the given exam_id' });
      } else {
        bh.result = {
          Ranks: bh.resultId,
        };
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KCV36iT8sr9DVhK7(bh, parentSpanInst);
      //appendnew_next_sd_bmF3n5MQP0uGJdOR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bmF3n5MQP0uGJdOR',
        spanInst,
        'sd_bmF3n5MQP0uGJdOR'
      );
    }
  }

  async sd_KCV36iT8sr9DVhK7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KCV36iT8sr9DVhK7',
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
        bh = await this.sd_rfS8pSJ6HlQdqLFU(bh, parentSpanInst);
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
        bh = await this.sd_pLxupwq1w6WKeC1B(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KCV36iT8sr9DVhK7',
        spanInst,
        'sd_KCV36iT8sr9DVhK7'
      );
    }
  }

  async sd_rfS8pSJ6HlQdqLFU(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rfS8pSJ6HlQdqLFU');
    }
  }

  async sd_pLxupwq1w6WKeC1B(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pLxupwq1w6WKeC1B');
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
      false ||
      (await this.sd_kMslcX39esDkpzHK(bh, parentSpanInst))
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
  async sd_kMslcX39esDkpzHK(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_DxYUnxftkOOFnken', 'sd_fa6dBxG3DUl3dHqN'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_DxYUnxftkOOFnken(bh, parentSpanInst);
    //appendnew_next_sd_kMslcX39esDkpzHK
    return true;
  }
  //appendnew_flow_apis_Catch
}
