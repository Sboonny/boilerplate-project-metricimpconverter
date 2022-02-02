'use strict';

import { json } from 'body-parser';
import { expect } from 'chai';
import ConvertHandler from '../controllers/convertHandler.js';

export default function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('api/convert')
   .get(function (req, res) {
     const input = req.query.input;
     const initNum = convertHandler.getNum(input);
     const initUnit = convertHandler.getUnit(input);
     const returnNum = convertHandler.convert(initNum, initUnit);
     const returnUnit = convertHandler.getReturnUnit(initUnit);
     const getString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
     
     const json = {
      initNum : initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: getString
     }

     (!initNum && !initUnit)? json = "invalid number and unit" : (!initUnit)? json = "invalid unit":(!initNum)? json = " invalid number" : null
     res.json(json)
   })
};
