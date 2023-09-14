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
export class login {
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
    this.serviceName = 'login';
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
      instance = new login(
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
      //appendnew_flow_login_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: login');

    //appendnew_flow_login_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: login');

    this.app['post'](
      `${this.serviceBasePath}/login`,
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
          bh = await this.sd_KrOD71Juy3KMlAIU(bh, parentSpanInst);
          //appendnew_next_sd_KrZ3vrFD4TxHsaqY
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_KrZ3vrFD4TxHsaqY');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/register`,
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
          bh = await this.sd_V6vKbOdNpNqxtB2T(bh, parentSpanInst);
          //appendnew_next_sd_VYqgiolHHAepguqi
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_VYqgiolHHAepguqi');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_login_HttpIn
  }
  //   service flows_login

  async login_validation(
    parentSpanInst,
    username: any = undefined,
    password: any = undefined,
    status = true,
    response: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'login_validation',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          username: username,
          password: password,
          status: status,
          response: response,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5pPzqvmSkFpkwEJv(bh, parentSpanInst);
      //appendnew_next_login_validation
      return (
        // formatting output variables
        {
          input: {
            status: bh.input.status,
            response: bh.input.response,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4xftJ2qpch8G0IKX',
        spanInst,
        'login_validation'
      );
    }
  }

  async register_validation(
    parentSpanInst,
    name: any = undefined,
    password: any = undefined,
    email: any = undefined,
    phone: any = undefined,
    date_of_birth: any = undefined,
    status = true,
    response: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'register_validation',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          name: name,
          password: password,
          email: email,
          phone: phone,
          date_of_birth: date_of_birth,
          status: status,
          response: response,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_l8Ny9x1m0fwJDqS1(bh, parentSpanInst);
      //appendnew_next_register_validation
      return (
        // formatting output variables
        {
          input: {
            status: bh.input.status,
            response: bh.input.response,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ud2F3oViZZxiklU7',
        spanInst,
        'register_validation'
      );
    }
  }

  //appendnew_flow_login_start

  async sd_5pPzqvmSkFpkwEJv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5pPzqvmSkFpkwEJv',
      parentSpanInst
    );
    try {
      if (!bh.input.username) {
        bh.input.status = false;
        bh.input.response = { message: 'username required' };
      } else if (!bh.input.password) {
        bh.input.status = false;
        bh.input.response = { message: 'password required' };
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_5pPzqvmSkFpkwEJv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5pPzqvmSkFpkwEJv',
        spanInst,
        'sd_5pPzqvmSkFpkwEJv'
      );
    }
  }

  async sd_KrOD71Juy3KMlAIU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KrOD71Juy3KMlAIU',
      parentSpanInst
    );
    try {
      let outputVariables = await this.login_validation(
        spanInst,
        bh.input.body.username,
        bh.input.body.password,
        undefined,
        undefined
      );
      bh.status = outputVariables.input.status;
      bh.response = outputVariables.input.response;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_RKbfqidCQMS1C2d8(bh, parentSpanInst);
      //appendnew_next_sd_KrOD71Juy3KMlAIU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KrOD71Juy3KMlAIU',
        spanInst,
        'sd_KrOD71Juy3KMlAIU'
      );
    }
  }

  async sd_RKbfqidCQMS1C2d8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RKbfqidCQMS1C2d8',
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
        bh = await this.sd_p0BOGHFN60a7WoKz(bh, parentSpanInst);
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
        bh = await this.sd_McSbkZabQ5cvPnDV(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RKbfqidCQMS1C2d8',
        spanInst,
        'sd_RKbfqidCQMS1C2d8'
      );
    }
  }

  async sd_p0BOGHFN60a7WoKz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_p0BOGHFN60a7WoKz',
      parentSpanInst
    );
    try {
      bh.query = 'select id from employee where email = $1 and password = $2';

      bh.params = [bh.input.body.username, bh.input.body.password];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_rmOSB2hg5ZfLIvdQ(bh, parentSpanInst);
      //appendnew_next_sd_p0BOGHFN60a7WoKz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_p0BOGHFN60a7WoKz',
        spanInst,
        'sd_p0BOGHFN60a7WoKz'
      );
    }
  }

  async sd_rmOSB2hg5ZfLIvdQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rmOSB2hg5ZfLIvdQ',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_fMF4aYEnvGUCOt7r'
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
      bh.response = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NigV20MPErT7GqjN(bh, parentSpanInst);
      //appendnew_next_sd_rmOSB2hg5ZfLIvdQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rmOSB2hg5ZfLIvdQ',
        spanInst,
        'sd_rmOSB2hg5ZfLIvdQ'
      );
    }
  }

  async sd_NigV20MPErT7GqjN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NigV20MPErT7GqjN',
      parentSpanInst
    );
    try {
      if (bh.response.length == 0) {
        bh.status = false;
        bh.response = { message: 'Invalid Credentials' };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_99mRVTdU8Lpn0cQS(bh, parentSpanInst);
      //appendnew_next_sd_NigV20MPErT7GqjN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NigV20MPErT7GqjN',
        spanInst,
        'sd_NigV20MPErT7GqjN'
      );
    }
  }

  async sd_99mRVTdU8Lpn0cQS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_99mRVTdU8Lpn0cQS',
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
        bh = await this.sd_v6teIBilcoq0WNCH(bh, parentSpanInst);
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
        bh = await this.sd_gVHGlQ0OEUeWBoW2(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_99mRVTdU8Lpn0cQS',
        spanInst,
        'sd_99mRVTdU8Lpn0cQS'
      );
    }
  }

  async sd_v6teIBilcoq0WNCH(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_v6teIBilcoq0WNCH');
    }
  }

  async sd_gVHGlQ0OEUeWBoW2(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gVHGlQ0OEUeWBoW2');
    }
  }

  async sd_McSbkZabQ5cvPnDV(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_McSbkZabQ5cvPnDV');
    }
  }

  async sd_l8Ny9x1m0fwJDqS1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_l8Ny9x1m0fwJDqS1',
      parentSpanInst
    );
    try {
      if (!bh.input.username) {
        bh.input.status = false;
        bh.input.response = { message: 'username required' };
      } else if (!bh.input.password) {
        bh.input.status = false;
        bh.input.response = { message: 'password required' };
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_l8Ny9x1m0fwJDqS1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_l8Ny9x1m0fwJDqS1',
        spanInst,
        'sd_l8Ny9x1m0fwJDqS1'
      );
    }
  }

  async sd_V6vKbOdNpNqxtB2T(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_V6vKbOdNpNqxtB2T',
      parentSpanInst
    );
    try {
      let outputVariables = await this.register_validation(
        spanInst,
        bh.input.body.name,
        bh.input.body.password,
        bh.input.body.email,
        bh.input,
        undefined,
        undefined,
        undefined
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KJIx5MnmMKtDSoKq(bh, parentSpanInst);
      //appendnew_next_sd_V6vKbOdNpNqxtB2T
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_V6vKbOdNpNqxtB2T',
        spanInst,
        'sd_V6vKbOdNpNqxtB2T'
      );
    }
  }

  async sd_KJIx5MnmMKtDSoKq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KJIx5MnmMKtDSoKq',
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
        bh = await this.sd_pc2l4xyCUg8ycaJI(bh, parentSpanInst);
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
        bh = await this.sd_hQls0lkUX4gjhCaj(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KJIx5MnmMKtDSoKq',
        spanInst,
        'sd_KJIx5MnmMKtDSoKq'
      );
    }
  }

  async sd_pc2l4xyCUg8ycaJI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pc2l4xyCUg8ycaJI',
      parentSpanInst
    );
    try {
      bh.query = 'select id from employee where email = $1 and password = $2';

      bh.params = [bh.input.body.username, bh.input.body.password];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_sEP2meqQYAxYVNlL(bh, parentSpanInst);
      //appendnew_next_sd_pc2l4xyCUg8ycaJI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pc2l4xyCUg8ycaJI',
        spanInst,
        'sd_pc2l4xyCUg8ycaJI'
      );
    }
  }

  async sd_sEP2meqQYAxYVNlL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sEP2meqQYAxYVNlL',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_fMF4aYEnvGUCOt7r'
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
      bh.response = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_EI0zW3GARgfDBt7C(bh, parentSpanInst);
      //appendnew_next_sd_sEP2meqQYAxYVNlL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sEP2meqQYAxYVNlL',
        spanInst,
        'sd_sEP2meqQYAxYVNlL'
      );
    }
  }

  async sd_EI0zW3GARgfDBt7C(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EI0zW3GARgfDBt7C');
    }
  }

  async sd_hQls0lkUX4gjhCaj(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hQls0lkUX4gjhCaj');
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
  //appendnew_flow_login_Catch
}
