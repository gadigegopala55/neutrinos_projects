import * as fs from "fs-extra";
import * as FormData from "form-data";
import axios from "axios";
import * as qs from "qs";

export class idpmethods {
  constructor() {}
  async generateBearerToken(bodyObject) {
    const config = {
      method: "post",
      url: "https://ids.neutrinos.co/token" || process.env.IDP_TOKEN,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(bodyObject),
    };
    const r = await axios(config);
    return r.data;
  }
  async createJob(payload: any, Bearer: any, tenant: any) {
    const config = {
      method: "post",
      url: `${process.env.IDP_URL}job`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Bearer}`,
        tenant: tenant,
      },
      data: payload,
    };
    const r = await axios(config);
    return r.data[0]._id;
  }

  createFormData(filename, mimetype, job_id, stream) {
    const form = new FormData();
    form.append("files", stream, {
      contentType: mimetype,
      filename,
    });
    form.append("job_id", job_id);
    return form;
  }

  async uploadFiles(payload: any, Bearer: any, tenant: any) {
    let dataArray = {
      success: [],
      failures: [],
    };
    let files = payload.files;
    let pdfFiles = [];
    let pathExists = fs.pathExistsSync(files);
    if (pathExists) {
      let stats = fs.statSync(files);
      if (stats.isDirectory()) {
        const dirFiles = fs.readdirSync(files);
        for (let i of dirFiles) {
          if (i.match(/.*\.(pdf?)/gi)) {
            pdfFiles.push({
              path: `${files}/${i}`,
              originalname: i,
              mimetype: "application/pdf",
            });
          }
        }
      }
      files = pdfFiles;
    }
    let job_id = payload.job_id;
    if (Array.isArray(files)) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        let stream;
        if (file.path) {
          stream = fs.createReadStream(file.path);
          const form = this.createFormData(
            file.originalname,
            file.mimetype,
            job_id,
            stream
          );
          let r;
          try {
            r = await axios({
              method: "post",
              url: `${process.env.IDP_URL}job/documents/upload`,
              headers: {
                ...form.getHeaders(),
                Authorization: `Bearer ${Bearer}`,
                tenant: tenant,
              },
              data: form,
            });
            console.log(
              `Uploaded ${i + 1} of ${files.length}`,
              new Date().toString()
            );
            dataArray.success.push({
              file_id: r?.data,
              fileName: file?.originalname,
            });
          } catch (error) {
            dataArray.failures.push({
              fileName: file?.originalname,
              error: error,
            });
          }
        }
      }
    }
    return dataArray;
  }

  async startDocAnalysis(payload: any, Bearer: any, tenant: any) {
    const config = {
      method: "post",
      url: `${process.env.IDP_URL}job/start-doc-analysis`,
      headers: {
        Authorization: `Bearer ${Bearer}`,
        tenant: tenant,
        "Content-Type": "application/json",
      },
      data: payload,
    };
    const r = await axios(config);
    return r.data;
  }
  async getJobDocuments(payload: any, Bearer: any, tenant: any) {
    const config = {
      method: "get",
      url: `${process.env.IDP_URL}job/${payload.job_id}/documents`,
      headers: {
        Authorization: `Bearer ${Bearer}`,
        tenant: tenant,
        "Content-Type": "application/json",
      },
    };
    const r = await axios(config);
    return r.data;
  }
  async getDocumentResult(payload: any, Bearer: any, tenant: any) {
    const config = {
      method: "get",
      url: `${process.env.IDP_URL}job/${payload.job_id}/file/${payload.file_id}/result`,
      headers: {
        Authorization: `Bearer ${Bearer}`,
        tenant: tenant,
        "Content-Type": "application/json",
      },
    };
    const r = await axios(config);
    return r.data;
  }
  async getJobMetada(payload: any, Bearer: any, tenant: any) {
    let config = {
      method: "post",
      url: `${process.env.IDP_URL}job/info`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Bearer}`,
        tenant: tenant,
      },
      data: payload,
    };
    const r = await axios(config);
    return r.data;
  }
}
