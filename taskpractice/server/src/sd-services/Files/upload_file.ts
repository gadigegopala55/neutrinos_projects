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
import * as os from 'os'; //_splitter_
import { sep } from 'path'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class upload_file {
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
    this.serviceName = 'upload_file';
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
      instance = new upload_file(
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
      //appendnew_flow_upload_file_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: upload_file');

    //appendnew_flow_upload_file_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: upload_file');

    this.app['post'](
      `${this.serviceBasePath}/upload-file`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'files'.replace(/\\|\//g, sep),
        options: [{ name: 'krishna', maxCount: 3 }],
      }),

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
          bh = await this.sd_pCEZQgWoKC1llP9m(bh, parentSpanInst);
          //appendnew_next_sd_Nop1IZ7lsJrl3fv0
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Nop1IZ7lsJrl3fv0');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/download-file`,
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
          await this.sd_jPKOSqF1puo77Iga(bh, parentSpanInst);
          //appendnew_next_sd_tGJKL84oZdlsP3bp
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_tGJKL84oZdlsP3bp');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/upload-multiple-files`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'files'.replace(/\\|\//g, sep),
        options: [{ name: 'krishna', maxCount: 2 }],
      }),

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
          bh = await this.sd_gzZ6BDNui0986h9Q(bh, parentSpanInst);
          //appendnew_next_sd_zTrA3KVsDR6CTSRV
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_zTrA3KVsDR6CTSRV');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/testing`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'files'.replace(/\\|\//g, sep),
        options: [{ name: 'resume', maxCount: 2 }],
      }),

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
          bh = await this.sd_cA1t5WJFH0OpIx7c(bh, parentSpanInst);
          //appendnew_next_sd_war7C6t4zAbK4KkC
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_war7C6t4zAbK4KkC');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_upload_file_HttpIn
  }
  //   service flows_upload_file

  async file_upload_function(
    parentSpanInst,
    file_data: any = undefined,
    response: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'file_upload_function',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          file_data: file_data,
          response: response,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_tLk0TXp9sbRp9I2W(bh, parentSpanInst);
      //appendnew_next_file_upload_function
      return (
        // formatting output variables
        {
          input: {
            response: bh.input.response,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BZpss9c7brNaG8Ms',
        spanInst,
        'file_upload_function'
      );
    }
  }

  async file_upload_function1(
    parentSpanInst,
    file_path1: any = undefined,
    response1: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'file_upload_function1',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          file_path1: file_path1,
          response1: response1,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AWFryjarZUw6Up3i(bh, parentSpanInst);
      //appendnew_next_file_upload_function1
      return (
        // formatting output variables
        {
          input: {
            response1: bh.input.response1,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SnoREssOc48Zto1f',
        spanInst,
        'file_upload_function1'
      );
    }
  }

  async file_upload_function12(
    parentSpanInst,
    file_path2: any = undefined,
    response2: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'file_upload_function12',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {
          file_path2: file_path2,
          response2: response2,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IobD1sI2N0Tbh6wh(bh, parentSpanInst);
      //appendnew_next_file_upload_function12
      return (
        // formatting output variables
        {
          input: {
            response2: bh.input.response2,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AZ5pgho2IhqwcvaQ',
        spanInst,
        'file_upload_function12'
      );
    }
  }

  //appendnew_flow_upload_file_start

  async sd_pCEZQgWoKC1llP9m(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pCEZQgWoKC1llP9m',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_K5phy2EyIIMYtwAuInstance: upload_file =
        upload_file.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_K5phy2EyIIMYtwAuInstance.file_upload_function(
          spanInst,
          bh.input.files.krishna,
          bh.response
        )
      );

      bh.response = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FHHFCqV7wKjTvz0Y(bh, parentSpanInst);
      //appendnew_next_sd_pCEZQgWoKC1llP9m
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pCEZQgWoKC1llP9m',
        spanInst,
        'sd_pCEZQgWoKC1llP9m'
      );
    }
  }

  async sd_FHHFCqV7wKjTvz0Y(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FHHFCqV7wKjTvz0Y',
      parentSpanInst
    );
    try {
      bh.status = true;
      let data = bh.response[0].input.response.data;
      let values = '';
      for (let row of data) {
        if (Object.keys(row).length == 5) {
          values += `('${row.name}','${row.email}','${row.date_of_birth}','${row.phone_no}','${row.status}'),`;
        }
      }

      if (values == '') {
        bh.status = false;
        bh.result = { message: 'please add data' };
      } else {
        values = values.slice(0, -1);
        bh.query =
          'INSERT INTO user_data (name, email, date_of_birth, phone_no, status) values ' +
          values;
      }

      console.log(values);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IiImGRvuyYiN0q8K(bh, parentSpanInst);
      //appendnew_next_sd_FHHFCqV7wKjTvz0Y
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FHHFCqV7wKjTvz0Y',
        spanInst,
        'sd_FHHFCqV7wKjTvz0Y'
      );
    }
  }

  async sd_IiImGRvuyYiN0q8K(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IiImGRvuyYiN0q8K',
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
        bh = await this.sd_mCaKrc08FPKfJ7Cb(bh, parentSpanInst);
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
        bh = await this.sd_sMZ4kSwVKVOX3XtZ(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IiImGRvuyYiN0q8K',
        spanInst,
        'sd_IiImGRvuyYiN0q8K'
      );
    }
  }

  async sd_mCaKrc08FPKfJ7Cb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mCaKrc08FPKfJ7Cb',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_z1hHi1Sesg8SeX6u'
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
      let params = undefined;
      params = params ? params : [];
      bh.response = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_65NGDaP28C4fnZF9(bh, parentSpanInst);
      //appendnew_next_sd_mCaKrc08FPKfJ7Cb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mCaKrc08FPKfJ7Cb',
        spanInst,
        'sd_mCaKrc08FPKfJ7Cb'
      );
    }
  }

  async sd_65NGDaP28C4fnZF9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_65NGDaP28C4fnZF9',
      parentSpanInst
    );
    try {
      bh.result = { message: 'Data updated successfully' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_ajgvM8M335I3Ge9T(bh, parentSpanInst);
      //appendnew_next_sd_65NGDaP28C4fnZF9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_65NGDaP28C4fnZF9',
        spanInst,
        'sd_65NGDaP28C4fnZF9'
      );
    }
  }

  async sd_ajgvM8M335I3Ge9T(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ajgvM8M335I3Ge9T');
    }
  }

  async sd_sMZ4kSwVKVOX3XtZ(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sMZ4kSwVKVOX3XtZ');
    }
  }

  async sd_tLk0TXp9sbRp9I2W(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tLk0TXp9sbRp9I2W',
      parentSpanInst
    );
    try {
      await new Promise((r) => {
        const fs = require('fs');
        const XLSX = require('xlsx');
        let path = bh.input.file_data[0].path;
        fs.readFile(path, (err, data) => {
          if (err) throw err;
          let workbook = XLSX.read(data, { type: 'buffer' });
          let sheet_name_list = workbook.SheetNames;
          let result = XLSX.utils.sheet_to_json(
            workbook.Sheets[sheet_name_list[0]]
          );
          bh.input.response = { data: result };
          r();
        });
      });

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_tLk0TXp9sbRp9I2W
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tLk0TXp9sbRp9I2W',
        spanInst,
        'sd_tLk0TXp9sbRp9I2W'
      );
    }
  }

  async sd_jPKOSqF1puo77Iga(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).download('files/file2.xlsx');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jPKOSqF1puo77Iga');
    }
  }

  async sd_gzZ6BDNui0986h9Q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gzZ6BDNui0986h9Q',
      parentSpanInst
    );
    try {
      bh.file_path1 = bh.input.files.krishna[0].path;
      bh.file_path2 = bh.input.files.krishna[1].path;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_sKZ4010UdfeHmBuB(bh, parentSpanInst);
      //appendnew_next_sd_gzZ6BDNui0986h9Q
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gzZ6BDNui0986h9Q',
        spanInst,
        'sd_gzZ6BDNui0986h9Q'
      );
    }
  }

  async sd_sKZ4010UdfeHmBuB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sKZ4010UdfeHmBuB',
      parentSpanInst
    );
    try {
      let promiseArray = [];
      const SSD_SERVICE_ID_sd_K5phy2EyIIMYtwAuInstance: upload_file =
        upload_file.getInstance();
      promiseArray.push(
        SSD_SERVICE_ID_sd_K5phy2EyIIMYtwAuInstance.file_upload_function1(
          spanInst,
          bh.file_path1,
          bh.response1
        )
      );
      promiseArray.push(
        SSD_SERVICE_ID_sd_K5phy2EyIIMYtwAuInstance.file_upload_function12(
          spanInst,
          bh.file_path2,
          bh.response2
        )
      );

      bh.response = await Promise.all(promiseArray);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_YhUGPNG0659bVHOS(bh, parentSpanInst);
      //appendnew_next_sd_sKZ4010UdfeHmBuB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sKZ4010UdfeHmBuB',
        spanInst,
        'sd_sKZ4010UdfeHmBuB'
      );
    }
  }

  async sd_YhUGPNG0659bVHOS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YhUGPNG0659bVHOS',
      parentSpanInst
    );
    try {
      bh.status = true;
      let array1 = bh.response[0].input.response1;
      let array2 = bh.response[1].input.response2;
      let data = [...array1, ...array2];
      let values = '';
      for (let row of data) {
        if (Object.keys(row).length == 5) {
          values += `('${row.name}','${row.email}','${row.date_of_birth}','${row.phone_no}','${row.status}'),`;
        }
      }

      if (values == '') {
        bh.status = false;
        bh.result = { message: 'please add data' };
      } else {
        values = values.slice(0, -1);
        bh.query =
          'INSERT INTO user_data (name, email, date_of_birth, phone_no, status) values ' +
          values;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_b1lVfsHw69IpOOBJ(bh, parentSpanInst);
      //appendnew_next_sd_YhUGPNG0659bVHOS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YhUGPNG0659bVHOS',
        spanInst,
        'sd_YhUGPNG0659bVHOS'
      );
    }
  }

  async sd_b1lVfsHw69IpOOBJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_b1lVfsHw69IpOOBJ',
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
        bh = await this.sd_1COUv6KJ6rNDe0hE(bh, parentSpanInst);
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
        bh = await this.sd_Vbj14lNxIyeN93hi(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_b1lVfsHw69IpOOBJ',
        spanInst,
        'sd_b1lVfsHw69IpOOBJ'
      );
    }
  }

  async sd_1COUv6KJ6rNDe0hE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1COUv6KJ6rNDe0hE',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_z1hHi1Sesg8SeX6u'
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
      let params = undefined;
      params = params ? params : [];
      bh.response = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Bdpc0stHdd5Kbr08(bh, parentSpanInst);
      //appendnew_next_sd_1COUv6KJ6rNDe0hE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1COUv6KJ6rNDe0hE',
        spanInst,
        'sd_1COUv6KJ6rNDe0hE'
      );
    }
  }

  async sd_Bdpc0stHdd5Kbr08(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Bdpc0stHdd5Kbr08',
      parentSpanInst
    );
    try {
      bh.result = { message: 'Data updated successfully' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_u3UTSsNgGMyVTWPS(bh, parentSpanInst);
      //appendnew_next_sd_Bdpc0stHdd5Kbr08
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Bdpc0stHdd5Kbr08',
        spanInst,
        'sd_Bdpc0stHdd5Kbr08'
      );
    }
  }

  async sd_u3UTSsNgGMyVTWPS(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_u3UTSsNgGMyVTWPS');
    }
  }

  async sd_Vbj14lNxIyeN93hi(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Vbj14lNxIyeN93hi');
    }
  }

  async sd_AWFryjarZUw6Up3i(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AWFryjarZUw6Up3i',
      parentSpanInst
    );
    try {
      await new Promise((r) => {
        const fs = require('fs');
        const XLSX = require('xlsx');
        let path = bh.input.file_path1;
        fs.readFile(path, (err, data) => {
          if (err) throw err;
          let workbook = XLSX.read(data, { type: 'buffer' });
          let sheet_name_list = workbook.SheetNames;
          let result = XLSX.utils.sheet_to_json(
            workbook.Sheets[sheet_name_list[0]]
          );
          bh.input.response1 = result;
          r();
        });
      });
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_AWFryjarZUw6Up3i
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AWFryjarZUw6Up3i',
        spanInst,
        'sd_AWFryjarZUw6Up3i'
      );
    }
  }

  async sd_IobD1sI2N0Tbh6wh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IobD1sI2N0Tbh6wh',
      parentSpanInst
    );
    try {
      await new Promise((r) => {
        const fs = require('fs');
        const XLSX = require('xlsx');
        let path = bh.input.file_path2;
        fs.readFile(path, (err, data) => {
          if (err) throw err;
          let workbook = XLSX.read(data, { type: 'buffer' });
          let sheet_name_list = workbook.SheetNames;
          let result = XLSX.utils.sheet_to_json(
            workbook.Sheets[sheet_name_list[0]]
          );
          bh.input.response2 = result;
          r();
        });
      });
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_IobD1sI2N0Tbh6wh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IobD1sI2N0Tbh6wh',
        spanInst,
        'sd_IobD1sI2N0Tbh6wh'
      );
    }
  }

  async sd_cA1t5WJFH0OpIx7c(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cA1t5WJFH0OpIx7c',
      parentSpanInst
    );
    try {
      const fs = require('fs');
      let path = bh.input.files.resume[0].path;

      fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
        fs.readFileSync('resume.pdf', data);
      });

      this.tracerService.sendData(spanInst, bh);
      await this.sd_X0OHaqpWAKZDtxoj(bh, parentSpanInst);
      //appendnew_next_sd_cA1t5WJFH0OpIx7c
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cA1t5WJFH0OpIx7c',
        spanInst,
        'sd_cA1t5WJFH0OpIx7c'
      );
    }
  }

  async sd_X0OHaqpWAKZDtxoj(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send('Done');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_X0OHaqpWAKZDtxoj');
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
  //appendnew_flow_upload_file_Catch
}
