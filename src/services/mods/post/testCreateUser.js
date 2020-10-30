/**
 * @desc 接收formData参数并创建用户
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 联系电话 */
  concat;
  /** gender */
  gender;
  /** platformList */
  platformList;
  /** 姓名 */
  username;
}

let requestParams = 'params: Params, options?: any';
let paramsCode =
  'class Params {\n      \n      /** 联系电话 */\n      concat: string;\n      /** gender */\n      gender?: string;\n      /** platformList */\n      platformList?: Array<string>;\n      /** 姓名 */\n      username: string;\n    }\n  ';
let paramsList = [
  { paramKey: 'params', paramType: 'Params' },
  { paramKey: 'form', paramType: '' },
  { paramKey: 'body', paramType: '' },
  { paramKey: 'options', optional: true, paramType: 'any', initialValue: '{}' },
];
let getRequestContent =
  '{\n      method: "POST",\n      \n      \n      ...options,\n    }';
let getBodyParamsCode = '';
let inter = {
  consumes: ['application/json'],
  description: '接收formData参数并创建用户',
  name: 'testCreateUser',
  method: 'post',
  path: '/createUserByFormData',
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
      in: 'query',
      description: '联系电话',
      name: 'concat',
      required: true,
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
      name: 'gender',
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
      name: 'platformList',
      required: false,
      dataType: {
        typeArgs: [
          {
            typeArgs: [],
            typeName: 'string',
            isDefsType: false,
            templateIndex: -1,
            compileTemplateKeyword: '#/definitions/',
            enum: [],
            typeProperties: [],
          },
        ],
        typeName: 'Array',
        isDefsType: false,
        templateIndex: -1,
        compileTemplateKeyword: '#/definitions/',
        enum: [],
        typeProperties: [],
      },
    },
    {
      in: 'query',
      description: '姓名',
      name: 'username',
      required: true,
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
  ],
};

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/createUserByFormData', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
