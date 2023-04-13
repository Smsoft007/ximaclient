const express = require("express");
const router = express.Router();
const commonLib = require("../lib/commonLib");
const sqlHelper = require("../lib/mssql-helper");
const Response = require("../model/response");
const procedureNamse = require("../lib/procedure-info").procedureNames;
/* GET users listing. */

router.post("/signin", async (req, res, next) => {
  const param = commonLib.decryptAll(req);
  const urlName = req.url.replace("/", "");
  const respose = new Response();
  param["D_IP"] = commonLib.getClientIpAddress(req);
  param["sessionID"] = req.sessionID;
  const PROCEDDATA = await sqlHelper.callProcedure(
    procedureNamse[urlName].name,
    param
  );
  if (PROCEDDATA.recordset[0].RESULT === 0) {
    req.session.userInfo = {
      D_UID: param.D_UID,
      LOGIN: true,
      LANGNUM: 0
    };
  }
  respose.setName(procedureNamse[urlName].returnName);
  respose.setData(PROCEDDATA.recordset[0]);
  res.responseJson(respose);
});

router.post("/signout", async (req, res, next) => {
  const respose = new Response();
  req.session.userInfo = null;
  req.session.destroy()
  res.responseJson(respose);
});

router.post("*", async (req, res, next) => {
  const param = commonLib.decryptAll(req);
  const urlName = req.url.replace("/", "");
  const respose = new Response();
  param["inUser_IP"] = commonLib.getClientIpAddress(req);
  param["sessionID"] = req.sessionID;
  param["SESSION"] = req.sessionID;
  const PROCEDDATA = await sqlHelper.callProcedure(
    procedureNamse[urlName].name,
    param
  );
  if (PROCEDDATA) {
    respose.setData(PROCEDDATA.recordset[0]);
  }
  respose.setName(procedureNamse[urlName].returnName);
  res.responseJson(respose);
});

module.exports = router;
