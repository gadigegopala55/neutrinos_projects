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
export class flows {
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
    this.serviceName = 'flows';
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
      instance = new flows(
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
      //appendnew_flow_flows_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: flows');

    //appendnew_flow_flows_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: flows');
    //appendnew_flow_flows_HttpIn
  }
  //   service flows_flows

  async student_function(
    parentSpanInst,
    name: any = undefined,
    roll_number: any = undefined,
    clas: any = undefined,
    section: any = undefined,
    status = true,
    result: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'student_function',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          name: name,
          roll_number: roll_number,
          clas: clas,
          section: section,
          status: status,
          result: result,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Y4YWt54LpyppsWA8(bh, parentSpanInst);
      //appendnew_next_student_function
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
        'sd_nm4dF8L6BfSPqxeu',
        spanInst,
        'student_function'
      );
    }
  }

  async subject_function(
    parentSpanInst,
    subject_name = '',
    status = true,
    result: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'subject_function',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          subject_name: subject_name,
          status: status,
          result: result,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_t62nIFWQWIK7h2Ss(bh, parentSpanInst);
      //appendnew_next_subject_function
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
        'sd_97bZ8xb4JyMo9ekZ',
        spanInst,
        'subject_function'
      );
    }
  }

  async exams_function(
    parentSpanInst,
    exam_name = '',
    status = true,
    result: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'exams_function',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          exam_name: exam_name,
          status: status,
          result: result,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OFMXXsDMqIb9Td30(bh, parentSpanInst);
      //appendnew_next_exams_function
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
        'sd_oHRKdA60EwsCMvCL',
        spanInst,
        'exams_function'
      );
    }
  }

  async marks_function(
    parentSpanInst,
    student_id: any = undefined,
    exam_id: any = undefined,
    subject_id: any = undefined,
    mark: any = undefined,
    status = true,
    result: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'marks_function',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          student_id: student_id,
          exam_id: exam_id,
          subject_id: subject_id,
          mark: mark,
          status: status,
          result: result,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_I373MzLNeVp7kPi5(bh, parentSpanInst);
      //appendnew_next_marks_function
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
        'sd_lylfaKeIKlIJ2WPL',
        spanInst,
        'marks_function'
      );
    }
  }

  async get_rank(
    parentSpanInst,
    exam_id: any = undefined,
    status = true,
    result: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan('get_rank', parentSpanInst);
    try {
      var bh: any = {
        input: {
          exam_id: exam_id,
          status: status,
          result: result,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BZQKnBXYDl24OnQx(bh, parentSpanInst);
      //appendnew_next_get_rank
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
        'sd_2A6JVkWHMryrHEyx',
        spanInst,
        'get_rank'
      );
    }
  }

  //appendnew_flow_flows_start

  async sd_Y4YWt54LpyppsWA8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Y4YWt54LpyppsWA8',
      parentSpanInst
    );
    try {
      if (!bh.input.name) {
        bh.input.status = false;
        bh.input.result = { message: 'name required' };
      } else if (!bh.input.roll_number) {
        bh.input.status = false;
        bh.input.result = { message: 'roll_number required' };
      } else if (!bh.input.clas) {
        bh.input.status = false;
        bh.input.result = { message: 'clas required' };
      } else if (!bh.input.section) {
        bh.input.status = false;
        bh.input.result = { message: 'section required' };
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_Y4YWt54LpyppsWA8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Y4YWt54LpyppsWA8',
        spanInst,
        'sd_Y4YWt54LpyppsWA8'
      );
    }
  }

  async sd_t62nIFWQWIK7h2Ss(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_t62nIFWQWIK7h2Ss',
      parentSpanInst
    );
    try {
      if (!bh.input.subject_name) {
        bh.input.status = false;
        bh.input.result = { message: 'subject_name required' };
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_t62nIFWQWIK7h2Ss
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_t62nIFWQWIK7h2Ss',
        spanInst,
        'sd_t62nIFWQWIK7h2Ss'
      );
    }
  }

  async sd_OFMXXsDMqIb9Td30(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OFMXXsDMqIb9Td30',
      parentSpanInst
    );
    try {
      if (!bh.input.exam_name) {
        bh.input.status = false;
        bh.input.result = { message: 'exam_name required' };
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_OFMXXsDMqIb9Td30
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OFMXXsDMqIb9Td30',
        spanInst,
        'sd_OFMXXsDMqIb9Td30'
      );
    }
  }

  async sd_I373MzLNeVp7kPi5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_I373MzLNeVp7kPi5',
      parentSpanInst
    );
    try {
      if (!bh.input.student_id) {
        bh.input.status = false;
        bh.input.result = { message: 'student_id required' };
      } else if (!bh.input.exam_id) {
        bh.input.status = false;
        bh.input.result = { message: 'exam_id required' };
      } else if (!bh.input.subject_id) {
        bh.input.status = false;
        bh.input.result = { message: 'subject_id required' };
      } else if (!bh.input.mark) {
        bh.input.status = false;
        bh.input.result = { message: 'mark required' };
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_I373MzLNeVp7kPi5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_I373MzLNeVp7kPi5',
        spanInst,
        'sd_I373MzLNeVp7kPi5'
      );
    }
  }

  async sd_BZQKnBXYDl24OnQx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BZQKnBXYDl24OnQx',
      parentSpanInst
    );
    try {
      if (!bh.input.exam_id) {
        bh.input.status = false;
        bh.input.result = { message: 'exam_id required' };
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_BZQKnBXYDl24OnQx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BZQKnBXYDl24OnQx',
        spanInst,
        'sd_BZQKnBXYDl24OnQx'
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
  //appendnew_flow_flows_Catch
}
