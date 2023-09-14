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
//append_imports_end
export class switch_operation {
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
    this.serviceName = 'switch_operation';
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
      instance = new switch_operation(
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
      //appendnew_flow_switch_operation_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: switch_operation');

    //appendnew_flow_switch_operation_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: switch_operation');

    this.app['post'](
      `${this.serviceBasePath}/switch-operation`,
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
          bh = await this.sd_mjMEd9V7GkI8vLTi(bh, parentSpanInst);
          //appendnew_next_sd_45AZoYn1WG8BBMSn
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_45AZoYn1WG8BBMSn');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_switch_operation_HttpIn
  }
  //   service flows_switch_operation

  async validate_input(
    parentSpanInst,
    mark: any = undefined,
    status = true,
    result: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'validate_input',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          mark: mark,
          status: status,
          result: result,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AP9FvSCPdxVBCeXB(bh, parentSpanInst);
      //appendnew_next_validate_input
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
        'sd_Sdj9B8sCZDAghuMr',
        spanInst,
        'validate_input'
      );
    }
  }

  //appendnew_flow_switch_operation_start

  async sd_mjMEd9V7GkI8vLTi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mjMEd9V7GkI8vLTi',
      parentSpanInst
    );
    try {
      let outputVariables = await this.validate_input(
        spanInst,
        bh.input.body.mark,
        undefined,
        undefined
      );
      bh.status = outputVariables.input.status;
      bh.result = outputVariables.input.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4N3MludfZ284qw5d(bh, parentSpanInst);
      //appendnew_next_sd_mjMEd9V7GkI8vLTi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mjMEd9V7GkI8vLTi',
        spanInst,
        'sd_mjMEd9V7GkI8vLTi'
      );
    }
  }

  async sd_4N3MludfZ284qw5d(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4N3MludfZ284qw5d',
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
        bh = await this.sd_Xgr3d8za2mFyntuo(bh, parentSpanInst);
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
        bh = await this.sd_F1W0zR4EASAKpFjY(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4N3MludfZ284qw5d',
        spanInst,
        'sd_4N3MludfZ284qw5d'
      );
    }
  }

  async sd_Xgr3d8za2mFyntuo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Xgr3d8za2mFyntuo',
      parentSpanInst
    );
    try {
      bh.marks = bh.input.body.mark;
      console.log(bh.marks);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_x2S6sJIgUOOgTuqU(bh, parentSpanInst);
      //appendnew_next_sd_Xgr3d8za2mFyntuo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Xgr3d8za2mFyntuo',
        spanInst,
        'sd_Xgr3d8za2mFyntuo'
      );
    }
  }

  async sd_x2S6sJIgUOOgTuqU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_x2S6sJIgUOOgTuqU',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (this.sdService.operators['gte'](bh.marks, 90, undefined, undefined)) {
        bh = await this.sd_JMPs4osqQ87IPzrb(bh, parentSpanInst);
        otherwiseFlag = false;
      } else if (
        this.sdService.operators['gte'](bh.marks, 80, undefined, undefined)
      ) {
        bh = await this.sd_r2gglVfcmZMYWqa0(bh, parentSpanInst);
        otherwiseFlag = false;
      } else if (
        this.sdService.operators['gte'](bh.marks, 70, undefined, undefined)
      ) {
        bh = await this.sd_j0NeS23UlVuhbS66(bh, parentSpanInst);
        otherwiseFlag = false;
      } else if (
        this.sdService.operators['gte'](bh.marks, 60, undefined, undefined)
      ) {
        bh = await this.sd_RA4XWkRKwTliHkKK(bh, parentSpanInst);
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
        bh = await this.sd_gWcYjWe1C4uV2qD9(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_x2S6sJIgUOOgTuqU',
        spanInst,
        'sd_x2S6sJIgUOOgTuqU'
      );
    }
  }

  async sd_JMPs4osqQ87IPzrb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JMPs4osqQ87IPzrb',
      parentSpanInst
    );
    try {
      bh.result = { Result: 'Grade A' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_XH30s9ssviTowOgR(bh, parentSpanInst);
      //appendnew_next_sd_JMPs4osqQ87IPzrb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JMPs4osqQ87IPzrb',
        spanInst,
        'sd_JMPs4osqQ87IPzrb'
      );
    }
  }

  async sd_XH30s9ssviTowOgR(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XH30s9ssviTowOgR');
    }
  }

  async sd_r2gglVfcmZMYWqa0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_r2gglVfcmZMYWqa0',
      parentSpanInst
    );
    try {
      bh.result = { Result: 'Grade B' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_XH30s9ssviTowOgR(bh, parentSpanInst);
      //appendnew_next_sd_r2gglVfcmZMYWqa0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_r2gglVfcmZMYWqa0',
        spanInst,
        'sd_r2gglVfcmZMYWqa0'
      );
    }
  }

  async sd_j0NeS23UlVuhbS66(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_j0NeS23UlVuhbS66',
      parentSpanInst
    );
    try {
      bh.result = { Result: 'Grade C' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_XH30s9ssviTowOgR(bh, parentSpanInst);
      //appendnew_next_sd_j0NeS23UlVuhbS66
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_j0NeS23UlVuhbS66',
        spanInst,
        'sd_j0NeS23UlVuhbS66'
      );
    }
  }

  async sd_RA4XWkRKwTliHkKK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RA4XWkRKwTliHkKK',
      parentSpanInst
    );
    try {
      bh.result = { Result: 'Grade D' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_XH30s9ssviTowOgR(bh, parentSpanInst);
      //appendnew_next_sd_RA4XWkRKwTliHkKK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RA4XWkRKwTliHkKK',
        spanInst,
        'sd_RA4XWkRKwTliHkKK'
      );
    }
  }

  async sd_gWcYjWe1C4uV2qD9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gWcYjWe1C4uV2qD9',
      parentSpanInst
    );
    try {
      bh.result = { Result: 'Fail' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_XH30s9ssviTowOgR(bh, parentSpanInst);
      //appendnew_next_sd_gWcYjWe1C4uV2qD9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gWcYjWe1C4uV2qD9',
        spanInst,
        'sd_gWcYjWe1C4uV2qD9'
      );
    }
  }

  async sd_F1W0zR4EASAKpFjY(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_F1W0zR4EASAKpFjY');
    }
  }

  async sd_AP9FvSCPdxVBCeXB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AP9FvSCPdxVBCeXB',
      parentSpanInst
    );
    try {
      if (!bh.input.mark) {
        bh.input.status = false;
        bh.input.result = { message: 'mark field is required' };
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_AP9FvSCPdxVBCeXB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AP9FvSCPdxVBCeXB',
        spanInst,
        'sd_AP9FvSCPdxVBCeXB'
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
  //appendnew_flow_switch_operation_Catch
}
