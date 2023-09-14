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
export class calc_operation {
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
    this.serviceName = 'calc_operation';
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
      instance = new calc_operation(
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
      //appendnew_flow_calc_operation_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: calc_operation');

    //appendnew_flow_calc_operation_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: calc_operation');

    this.app['post'](
      `${this.serviceBasePath}/calculator-operation`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'calculator_sequence',
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
          bh = await this.sd_mcrzUQ2P2uU3mCiw(bh, parentSpanInst);
          //appendnew_next_sd_T7W15WWF2FRiSGqF
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_T7W15WWF2FRiSGqF');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'calculator_sequence',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_calc_operation_HttpIn
  }
  //   service flows_calc_operation

  async validate_calc_input(
    parentSpanInst,
    a = 0,
    b = 0,
    operation: any = undefined,
    status = true,
    result: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'validate_calc_input',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          a: a,
          b: b,
          operation: operation,
          status: status,
          result: result,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_x3wwYkaK7wN5OPIa(bh, parentSpanInst);
      //appendnew_next_validate_calc_input
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
        'sd_cCijLEzkU6au1CKg',
        spanInst,
        'validate_calc_input'
      );
    }
  }

  //appendnew_flow_calc_operation_start

  async sd_x3wwYkaK7wN5OPIa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_x3wwYkaK7wN5OPIa',
      parentSpanInst
    );
    try {
      if (!bh.input.a) {
        bh.input.status = false;
        bh.input.result = { message: 'a value is required' };
      } else if (!bh.input.b) {
        bh.input.status = false;
        bh.input.result = { result: 'b value is required' };
      } else if (!bh.input.operation) {
        bh.input.status = false;
        bh.input.result = { result: 'operation is required' };
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_x3wwYkaK7wN5OPIa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_x3wwYkaK7wN5OPIa',
        spanInst,
        'sd_x3wwYkaK7wN5OPIa'
      );
    }
  }

  async sd_mcrzUQ2P2uU3mCiw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mcrzUQ2P2uU3mCiw',
      parentSpanInst
    );
    try {
      let outputVariables = await this.validate_calc_input(
        spanInst,
        bh.input.body.a,
        bh.input.body.b,
        bh.input.body.operation,
        undefined,
        undefined
      );
      bh.status = outputVariables.input.status;
      bh.result = outputVariables.input.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nIjGR2rLfVenC1Xz(bh, parentSpanInst);
      //appendnew_next_sd_mcrzUQ2P2uU3mCiw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mcrzUQ2P2uU3mCiw',
        spanInst,
        'sd_mcrzUQ2P2uU3mCiw'
      );
    }
  }

  async sd_nIjGR2rLfVenC1Xz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nIjGR2rLfVenC1Xz',
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
        bh = await this.sd_cYTUGq6F04uZ98AB(bh, parentSpanInst);
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
        bh = await this.sd_EFxtkWVNDZ8NzkaU(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nIjGR2rLfVenC1Xz',
        spanInst,
        'sd_nIjGR2rLfVenC1Xz'
      );
    }
  }

  async sd_cYTUGq6F04uZ98AB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cYTUGq6F04uZ98AB',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['eq'](
          bh.input.body.operation,
          'add',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_2SsB9V79YuJksvLp(bh, parentSpanInst);
        otherwiseFlag = false;
      } else if (
        this.sdService.operators['eq'](
          bh.input.body.operation,
          'subtract',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_gbJj5dPndXoVcIKH(bh, parentSpanInst);
        otherwiseFlag = false;
      } else if (
        this.sdService.operators['eq'](
          bh.input.body.operation,
          'divide',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_veLNitvwupYKPaFx(bh, parentSpanInst);
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
        bh = await this.sd_aN12OX4PFmlP67UH(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cYTUGq6F04uZ98AB',
        spanInst,
        'sd_cYTUGq6F04uZ98AB'
      );
    }
  }

  async sd_2SsB9V79YuJksvLp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2SsB9V79YuJksvLp',
      parentSpanInst
    );
    try {
      bh.result = { result: bh.input.body.a + bh.input.body.b };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_gvmGpmjKfBo72K8l(bh, parentSpanInst);
      //appendnew_next_sd_2SsB9V79YuJksvLp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2SsB9V79YuJksvLp',
        spanInst,
        'sd_2SsB9V79YuJksvLp'
      );
    }
  }

  async sd_gvmGpmjKfBo72K8l(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gvmGpmjKfBo72K8l');
    }
  }

  async sd_gbJj5dPndXoVcIKH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gbJj5dPndXoVcIKH',
      parentSpanInst
    );
    try {
      bh.result = { result: bh.input.body.a - bh.input.body.b };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_gvmGpmjKfBo72K8l(bh, parentSpanInst);
      //appendnew_next_sd_gbJj5dPndXoVcIKH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gbJj5dPndXoVcIKH',
        spanInst,
        'sd_gbJj5dPndXoVcIKH'
      );
    }
  }

  async sd_veLNitvwupYKPaFx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_veLNitvwupYKPaFx',
      parentSpanInst
    );
    try {
      bh.result = { result: bh.input.body.a / bh.input.body.b };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_gvmGpmjKfBo72K8l(bh, parentSpanInst);
      //appendnew_next_sd_veLNitvwupYKPaFx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_veLNitvwupYKPaFx',
        spanInst,
        'sd_veLNitvwupYKPaFx'
      );
    }
  }

  async sd_aN12OX4PFmlP67UH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aN12OX4PFmlP67UH',
      parentSpanInst
    );
    try {
      bh.result = { result: 'give correct operation' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_juO34GiNt4KKwkjj(bh, parentSpanInst);
      //appendnew_next_sd_aN12OX4PFmlP67UH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aN12OX4PFmlP67UH',
        spanInst,
        'sd_aN12OX4PFmlP67UH'
      );
    }
  }

  async sd_juO34GiNt4KKwkjj(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_juO34GiNt4KKwkjj');
    }
  }

  async sd_EFxtkWVNDZ8NzkaU(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EFxtkWVNDZ8NzkaU');
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
  //appendnew_flow_calc_operation_Catch
}
