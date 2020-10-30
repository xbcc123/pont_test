/**
 * @desc 接收JSON参数并创建用户
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

let requestParams = 'params: Params, body: defs.User, options?: any';
let paramsCode = 'class Params {\n      \n    }\n  ';
let paramsList = [
  { paramKey: 'params', paramType: 'Params' },
  { paramKey: 'form', paramType: '' },
  { paramKey: 'body', paramType: 'defs.User' },
  { paramKey: 'options', optional: true, paramType: 'any', initialValue: '{}' },
];
let getRequestContent =
  '{\n      method: "POST",\n      \n      body,\n      ...options,\n    }';
let getBodyParamsCode = 'defs.User';
let inter = {
  consumes: ['application/json'],
  description: '接收JSON参数并创建用户',
  name: 'testCreateUserByRequestBody',
  method: 'post',
  path: '/createUserByJson',
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
      in: 'body',
      description: 'user',
      name: 'user',
      required: true,
      dataType: {
        typeArgs: [],
        typeName: 'User',
        isDefsType: true,
        templateIndex: -1,
        compileTemplateKeyword: '#/definitions/',
        enum: [],
        typeProperties: [],
      },
    },
  ],
};

export const init = new defs.FrontResponse();

export function request(params, body, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/createUserByJson', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
