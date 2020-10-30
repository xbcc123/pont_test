/**
 * @desc 文件上传
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 用户名 */
  name;
  /** 1 */
  xxxx;
}

let requestParams = 'params: Params, form: FormData, options?: any';
let paramsCode =
  'class Params {\n      \n      /** 用户名 */\n      name?: string;\n      /** 1 */\n      xxxx?: number;\n    }\n  ';
let paramsList = [
  { paramKey: 'params', paramType: 'Params' },
  { paramKey: 'form', paramType: 'FormData' },
  { paramKey: 'body', paramType: '' },
  { paramKey: 'options', optional: true, paramType: 'any', initialValue: '{}' },
];
let getRequestContent =
  '{\n      method: "POST",\n      body: form,\n      \n      ...options,\n    }';
let getBodyParamsCode = '';
let inter = {
  consumes: ['multipart/form-data'],
  description: '文件上传',
  name: 'testUploadFile',
  method: 'post',
  path: '/uploadFile',
  response: {
    typeArgs: [],
    typeName: 'FrontResponse',
    isDefsType: true,
    templateIndex: -1,
    compileTemplateKeyword: '#/definitions/',
    enum: [],
    typeProperties: [],
  },
  parameters: [
    {
      in: 'formData',
      description: '文件对象',
      name: 'file',
      required: true,
      dataType: {
        typeArgs: [],
        typeName: 'File',
        isDefsType: false,
        templateIndex: -1,
        compileTemplateKeyword: '#/definitions/',
        enum: [],
        typeProperties: [],
      },
    },
    {
      in: 'query',
      description: '用户名',
      name: 'name',
      required: false,
      dataType: {
        typeArgs: [],
        typeName: 'string',
        isDefsType: false,
        templateIndex: -1,
        compileTemplateKeyword: '#/definitions/',
        enum: [],
        typeProperties: [],
      },
    },
    {
      in: 'query',
      description: '1',
      name: 'xxxx',
      required: false,
      dataType: {
        typeArgs: [],
        typeName: 'number',
        isDefsType: false,
        templateIndex: -1,
        compileTemplateKeyword: '#/definitions/',
        enum: [],
        typeProperties: [],
      },
    },
  ],
};

export const init = new defs.FrontResponse();

export function request(params, form, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/uploadFile', params, 'POST'), {
    method: 'POST',
    body: form,

    ...options,
  });
}
