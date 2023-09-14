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
export class user_session {
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
    this.serviceName = 'user_session';
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
      instance = new user_session(
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
      //appendnew_flow_user_session_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: user_session');

    //appendnew_flow_user_session_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: user_session');

    this.app['post'](
      `${this.serviceBasePath}/user-login`,
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
          bh = await this.sd_kmRCgbfGKD7wa4Ob(bh, parentSpanInst);
          //appendnew_next_sd_x2qAmx4Er6fKbdVZ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_x2qAmx4Er6fKbdVZ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/user-logout`,
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
          bh = await this.sd_QFv3IY1CybmDSgJX(bh, parentSpanInst);
          //appendnew_next_sd_UaZf7VaoIf3QZPoO
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_UaZf7VaoIf3QZPoO');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_user_session_HttpIn
  }
  //   service flows_user_session

  async user_validation_function(
    parentSpanInst,
    username: any = undefined,
    password: any = undefined,
    status = true,
    result: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'user_validation_function',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          username: username,
          password: password,
          status: status,
          result: result,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TPoh0fBCGUlrhKLe(bh, parentSpanInst);
      //appendnew_next_user_validation_function
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
        'sd_G6kBbkDmADUfkQAA',
        spanInst,
        'user_validation_function'
      );
    }
  }

  //appendnew_flow_user_session_start

  async sd_kmRCgbfGKD7wa4Ob(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kmRCgbfGKD7wa4Ob',
      parentSpanInst
    );
    try {
      let outputVariables = await this.user_validation_function(
        spanInst,
        bh.input.body.username,
        bh.input.body.password,
        undefined,
        undefined
      );
      bh.status = outputVariables.input.status;
      bh.result = outputVariables.input.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VwfkJROtdVHppJad(bh, parentSpanInst);
      //appendnew_next_sd_kmRCgbfGKD7wa4Ob
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kmRCgbfGKD7wa4Ob',
        spanInst,
        'sd_kmRCgbfGKD7wa4Ob'
      );
    }
  }

  async sd_VwfkJROtdVHppJad(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VwfkJROtdVHppJad',
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
        bh = await this.sd_mMCrATtvIDxDrJ88(bh, parentSpanInst);
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
        bh = await this.sd_REcNwDYSIOofE142(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VwfkJROtdVHppJad',
        spanInst,
        'sd_VwfkJROtdVHppJad'
      );
    }
  }

  async sd_mMCrATtvIDxDrJ88(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mMCrATtvIDxDrJ88',
      parentSpanInst
    );
    try {
      bh.query = 'SELECT id from users where username=$1 and password = $2';

      bh.params = [bh.input.body.username, bh.input.body.password];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2jHdwxG0f4Bk41G4(bh, parentSpanInst);
      //appendnew_next_sd_mMCrATtvIDxDrJ88
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mMCrATtvIDxDrJ88',
        spanInst,
        'sd_mMCrATtvIDxDrJ88'
      );
    }
  }

  async sd_2jHdwxG0f4Bk41G4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2jHdwxG0f4Bk41G4',
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
      bh = await this.sd_MaV83GLAyqZPahQu(bh, parentSpanInst);
      //appendnew_next_sd_2jHdwxG0f4Bk41G4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2jHdwxG0f4Bk41G4',
        spanInst,
        'sd_2jHdwxG0f4Bk41G4'
      );
    }
  }

  async sd_MaV83GLAyqZPahQu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MaV83GLAyqZPahQu',
      parentSpanInst
    );
    try {
      if (bh.user_result.length == 0) {
        bh.status = false;
        bh.result = { message: 'invalid credentials' };
      } else {
        bh.session = {
          users: bh.input.body.username,
        };
        bh.result = { message: 'login successful' };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_bZSq3YckVRK3T929(bh, parentSpanInst);
      //appendnew_next_sd_MaV83GLAyqZPahQu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MaV83GLAyqZPahQu',
        spanInst,
        'sd_MaV83GLAyqZPahQu'
      );
    }
  }

  async sd_bZSq3YckVRK3T929(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bZSq3YckVRK3T929',
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
        bh = await this.user_session(bh, parentSpanInst);
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
        bh = await this.sd_Mlkx8VkfBDAHIdzX(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bZSq3YckVRK3T929',
        spanInst,
        'sd_bZSq3YckVRK3T929'
      );
    }
  }

  async user_session(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'user_session',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.session;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_wSko3mqeQzfO5BgA(bh, parentSpanInst);
      //appendnew_next_user_session
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ReL3CCbrmGRfSadq',
        spanInst,
        'user_session'
      );
    }
  }

  async sd_wSko3mqeQzfO5BgA(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wSko3mqeQzfO5BgA');
    }
  }

  async sd_Mlkx8VkfBDAHIdzX(bh, parentSpanInst) {
    try {
      bh.web.res.status(401).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Mlkx8VkfBDAHIdzX');
    }
  }

  async sd_REcNwDYSIOofE142(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_REcNwDYSIOofE142');
    }
  }

  async sd_TPoh0fBCGUlrhKLe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TPoh0fBCGUlrhKLe',
      parentSpanInst
    );
    try {
      if (!bh.input.username) {
        bh.input.status = false;
        bh.input.result = { message: 'username required' };
      } else if (!bh.input.password) {
        bh.input.status = false;
        bh.input.result = { message: 'password required' };
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_TPoh0fBCGUlrhKLe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TPoh0fBCGUlrhKLe',
        spanInst,
        'sd_TPoh0fBCGUlrhKLe'
      );
    }
  }

  async sd_QFv3IY1CybmDSgJX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QFv3IY1CybmDSgJX',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_XECdqwxr53j9mQeU(bh, parentSpanInst);
      //appendnew_next_sd_QFv3IY1CybmDSgJX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QFv3IY1CybmDSgJX',
        spanInst,
        'sd_QFv3IY1CybmDSgJX'
      );
    }
  }

  async sd_XECdqwxr53j9mQeU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XECdqwxr53j9mQeU',
      parentSpanInst
    );
    try {
      bh.result = {
        message: 'Logout successfully',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_UOnhftd5LBYBN1aX(bh, parentSpanInst);
      //appendnew_next_sd_XECdqwxr53j9mQeU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XECdqwxr53j9mQeU',
        spanInst,
        'sd_XECdqwxr53j9mQeU'
      );
    }
  }

  async sd_UOnhftd5LBYBN1aX(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UOnhftd5LBYBN1aX');
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
  //appendnew_flow_user_session_Catch
}
