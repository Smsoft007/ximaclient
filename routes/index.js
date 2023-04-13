var express = require("express");
var router = express.Router();
const sqlHelper = require("../lib/mssql-helper");
const tr = require("googletrans").default;
const lang_kr = require("../lib/lang-kr");
const lang_en = require("../lib/lang-en");
const lang_ch = require("../lib/lang-ch");
const lang_jp = require("../lib/lang-jp");

router.get("/", function (req, res, next) {
  const num = req.query.lang;
  if (num != undefined) {
    req.session.num = num;
  }
  res.render("signin");
});

router.post("/lang", function (req, res, next) {
  const num = req.query.num;
  if (num != undefined) {
    req.session.num = num;
  }
  res.send("lang");
});

// router.get("/translate", async function (req, res, next) {
//   let lang = {};
//   const keys = Object.keys(lang_en)
//   for (let i = 0; i < keys.length; i++) {
//     const key = keys[i];
//     try {
//       const result = await tr(lang_en[key], { from: "en", to: "zh-CN" });
//       lang[key] = result.text;
//       console.log((i+1),"/",keys.length);
//     } catch (error) {
//       console.log(error);
//       lang[key] = lang_en[key]
//     }
//   }

//   res.json(lang);
// });

router.get("/getWebOrg/:id/:isNo/:level/:sn", async function (req, res, next) {
  var result = "";
  var Params = {};

  Params["myuid"] = req.params.id;
  Params["gs_IP"] = " ";
  Params["gs_date1"] = " ";
  Params["gs_date2"] = " ";
  Params["gsuid"] = req.params.id;
  Params["gs_isSNo"] = req.params.isNo;
  Params["gnlevel"] = req.params.level;
  Params["SN"] = req.params.sn;

  result += '<link rel="stylesheet" href="/include/css/org/org.css">';
  result += '<link rel="stylesheet" href="/include/css/org/orgcharts.css">';
  result += '<link rel="stylesheet" href="/include/css/org/style.css">';
  result += '<link rel="stylesheet" href="/include/css/org/w3f.css">';

  var WEB_ORG = await sqlHelper.callProcedure("WEB_ORG", Params);
  WEB_ORG.recordset.forEach((element) => {
    result += element.con_list;
  });
  res.send(result);
});

router.get("*", function (req, res, next) {
  let urlName = req.url.replace("/", "");
  if (urlName.indexOf("?") != -1) {
    urlName = urlName.substring(0, urlName.indexOf("?"));
  }
  if (urlName.indexOf("signup") != -1) {
    const R_UID = req.query.recId ? req.query.recId : "";
    res.render("signup", {
      R_UID: R_UID,
    });
    return;
  }
  if (urlName.indexOf("findpass") != -1) {
    res.render("findpass");
    return;
  }
  if (urlName.indexOf("authtest") != -1) {
    res.render("authtest");
    return;
  }
  if (req.session.userInfo == undefined) {
    res.render("signin");
    return;
  }
  res.render(urlName);
});

module.exports = router;
