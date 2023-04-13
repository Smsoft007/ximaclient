require("../env");
const express = require("express");
const router = express.Router();
const commonLib = require("../lib/commonLib");
const sqlHelper = require("../lib/mssql-helper");
const Response = require("../model/response");
const NodeCache = require("node-cache");
const coinHelper = require("../lib/coin-helper")
const procedureNamse = require("../lib/procedure-info").procedureNames;
const env = process.env;
const myCache = new NodeCache({ stdTTL: 300, checkperiod: 300 });

router.post("/getCoinRate", async (req, res, next) => {
  let returnData = null;
  const cacheKey = "COINRATE";
  const respose = new Response();
  returnData = myCache.get(cacheKey);
  if (!returnData) {
    returnData = {};
    const rate_btc = await commonLib.getApi(env.RATE_BTC);
    const rate_eth = await commonLib.getApi(env.RATE_ETH);
    const rate_ltc = await commonLib.getApi(env.RATE_LTC);
    returnData["BTC"] = rate_btc.USD;
    returnData["ETH"] = rate_eth.USD;
    returnData["LTC"] = rate_ltc.USD;

    myCache.set(cacheKey, returnData);
  }

  respose.setData(returnData);
  respose.setName("COINRATE");
  res.responseJson(respose);
});

router.post("/createAddr", async (req, res, next) => {
  const urlName = req.url.replace("/", "");
  const respose = new Response();
  const param = commonLib.decryptAll(req);

  if (
    req.session.userInfo == undefined &&
    req.rawHeaders.indexOf("/front") != -1
  ) {
    commonLib.loginCheck(req, res);
    return;
  }

  param["D_UID"] = req.session.userInfo["D_UID"];

  if (param.CURR === "CTAG") {
    param["ADDR"] = "CTAG"
  } else if (param.CURR === "TK") {
    param["ADDR"] = "TK"
  } else if (param.CURR === "BTC") {
    param["ADDR"] = "BTC"
  } else if (param.CURR === "ETH") {
    param["PASS"] = commonLib.getRandomPwd()
    param["ADDR"] = coinHelper.createEthAddress(param["PASS"])
  } else if (param.CURR === "LTC") {
    param["ADDR"] = "LTC"
  }
  
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

router.post("*", async (req, res, next) => {
  const returnData = {};
  const urlName = req.url.replace("/", "");
  const respose = new Response();
  const param = commonLib.decryptAll(req);
  param["SESSION"] = req.sessionID;
  try {
    param["D_UID"] =
      param["D_UID"] == null
        ? req.session.userInfo == undefined
          ? ""
          : req.session.userInfo["D_UID"]
        : param["D_UID"];
    param["B_UID"] = param["D_UID"];
    param["IP_NO"] = commonLib.getClientIpAddress(req);
  } catch (e) {
    console.log(e);
    commonLib.SystemErrorHandling(req, res);
    returnData["returnValue"] = 100;
    return;
  }
  if (param["TIME"]) {
    returnData["TIME"] = new Date();
  }
  if (
    req.session.userInfo == undefined &&
    req.rawHeaders.indexOf("/front") != -1
  ) {
    commonLib.loginCheck(req, res);
    return;
  }

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
