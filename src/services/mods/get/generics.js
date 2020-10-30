/**
     * @desc 示例接口
传入名称即可
     */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 姓名 */
  name;
  /** names */
  names;
}

let requestParams = 'params: Params, options?: any';
let paramsCode =
  'class Params {\n      \n      /** 姓名 */\n      name: string;\n      /** names */\n      names?: string;\n    }\n  ';
let paramsList = [
  { paramKey: 'params', paramType: 'Params' },
  { paramKey: 'form', paramType: '' },
  { paramKey: 'body', paramType: '' },
  { paramKey: 'options', optional: true, paramType: 'any', initialValue: '{}' },
];
let getRequestContent =
  '{\n      method: "GET",\n      \n      \n      ...options,\n    }';
let getBodyParamsCode = '';
let inter = {
  description: '示例接口\n传入名称即可',
  name: 'generics',
  method: 'get',
  path: '/generics',
  response: {
    typeArgs: [],
    typeName: 'string',
    isDefsType: false,
    templateIndex: -1,
    compileTemplateKeyword: '#/definitions/',
    enum: [],
    typeProperties: [],
  },
  parameters: [
    {
      in: 'query',
      description: '姓名',
      name: 'name',
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
      description: 'names',
      name: 'names',
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
  ],
};

export const init = '';

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/generics', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
