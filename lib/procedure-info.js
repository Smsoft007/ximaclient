'use strict';
const sql = require('mssql');
const procedureNames = {};

function ProcedureInfo() {}
ProcedureInfo.prototype.setProcedureInfo = (procedureName, procedureInfo) => {
  this[procedureName] = procedureInfo;
};

ProcedureInfo.prototype.getProcedureInfo = procedureName => {
  return this[procedureName];
};
const procedureInfo = new ProcedureInfo();

let currentName = 'SA_LOGIN_PROCESS';
let currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'D_PASS',
      type: sql.NVarChar(150),
      required: true,
    },
    {
      name: 'D_IP',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'D_BROWSER',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'D_OS',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'D_COUNTRY',
      type: sql.NVarChar(50),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['signin'] = {
  name: currentName,
  returnName: 'SIGNIN',
};

currentName = 'SP_DISTRIBU_ADD';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_COUNTRY',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_PASS',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_NAME',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_CENCODE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_CODE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_IDNO',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_OWNER',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_EMAIL',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_SID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_RID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_HP',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_POST',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_ADDR1',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_ADDR2',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CAREER',
      type: sql.NText,
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['signup'] = {
  name: currentName,
  returnName: 'SIGNUP',
};
currentName = 'SP_MY_DESPOSIT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'GUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'SNAME',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'STAN_COIN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'SELL_KEY',
      type: sql.Int,
      required: true,
    },
    {
      name: 'BUY_KEY',
      type: sql.Int,
      required: true,
    },
    {
      name: 'FILE_PATH',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['deposit'] = {
  name: currentName,
  returnName: 'DEPOSIT',
};

currentName = 'SP_MY_INFO';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['userinfo'] = {
  name: currentName,
  returnName: 'USERINFO',
};

currentName = 'SP_MY_INFOR_UPDATE';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_PASS2',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_COUNTRY',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_NAME',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_EMAIL',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['updateUserInfo'] = {
  name: currentName,
  returnName: 'UPDATEUSERINFO',
};

currentName = 'SP_PW2_CHAGNE';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CUR_PW',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'NEW_PW',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['updatePass2'] = {
  name: currentName,
  returnName: 'UPDATEPASS2',
};

currentName = 'SP_PRODUCT';
currentInfo = {
  usingCache: false,
  params: [],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['getProduct'] = {
  name: currentName,
  returnName: 'PRODUCT',
};

currentName = 'SP_SALE_ADD';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_CODE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'QTY',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'TXID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['addSale'] = {
  name: currentName,
  returnName: 'ADDSALE',
};

currentName = 'SA_MY_DASHBOARD';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['getMyDash'] = {
  name: currentName,
  returnName: 'MYDASH',
};

currentName = 'SP_DIDNO_CHAGNE';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'DIDNO',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['setDidno'] = {
  name: currentName,
  returnName: 'SETDIDNO',
};

currentName = 'SP_ID_SEARCH_P';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SEARCH_ID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['searchP'] = {
  name: currentName,
  returnName: 'SEARCHP',
};

currentName = 'SP_ID_SEARCH_S';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SEARCH_ID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['searchS'] = {
  name: currentName,
  returnName: 'SEARCHS',
};

currentName = 'SP_ID_SEARCH2';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'P_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['search2'] = {
  name: currentName,
  returnName: 'SEARCH2',
};

currentName = 'SP_KRW_BALANCE';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['getKRWBalance'] = {
  name: currentName,
  returnName: 'KRWBALANCE',
};

currentName = 'SP_KSP_BALANCE';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['getKSPBalance'] = {
  name: currentName,
  returnName: 'KSPBALANCE',
};

currentName = 'SP_MY_WITHDRAW_AMOUNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_AMOUNT',
      type: sql.Float,
      required: true,
    },

    {
      name: 'D_TYPE',
      type: sql.NVARCHAR(1),
      required: true,
    },
    {
      name: 'D_PASS2',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_REMARKS',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['withdrawAmount'] = {
  name: currentName,
  returnName: 'WITHDRAWAMOUNT',
};

currentName = 'SP_KRW_TRANSFER';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'R_UID',
      type: sql.Float,
      required: true,
    },
    {
      name: 'AMOUNT',
      type: sql.Decimal(18, 8),
      required: true,
    },
    {
      name: 'D_PASS2',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['transferAmount'] = {
  name: currentName,
  returnName: 'TRANSFERAMOUNT',
};

currentName = 'SP_COUNTRY';
currentInfo = {
  usingCache: false,
  params: [],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['getCountry'] = {
  name: currentName,
  returnName: 'GETCOUNTRY',
};

currentName = 'SP_CENTER_LIST';
currentInfo = {
  usingCache: false,
  params: [],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['getCenterList'] = {
  name: currentName,
  returnName: 'CENTERLIST',
};

currentName = 'SP_PW_CHAGNE';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CUR_PW',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'NEW_PW',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_IDX',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['passwodChange'] = {
  name: currentName,
  returnName: 'PASSWODCHANGE',
};

currentName = 'SP_COIN_ORDER';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CON_TYPE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'STAN_COIN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'ORDER_COIN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'RATE_TYPE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'RATE',
      type: sql.Decimal(18, 2),
      required: true,
    },
    {
      name: 'QTY',
      type: sql.Decimal(18, 2),
      required: true,
    },
    {
      name: 'AMOUNT',
      type: sql.Decimal(18, 2),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['coinOrder'] = {
  name: currentName,
  returnName: 'COINORDER',
};

currentName = 'SP_COIN_ADDR_LIST';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['addrlist'] = {
  name: currentName,
  returnName: 'ADDRLIST',
};

currentName = 'SP_BANK_LIST';
currentInfo = {
  usingCache: false,
  params: [],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['getBankList'] = {
  name: currentName,
  returnName: 'BANKLIST',
};

currentName = 'SP_BUY_LIST';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SNAME',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'STAN_COIN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'QGUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'TORDER',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'ORDER',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['buyList'] = {
  name: currentName,
  returnName: 'BUYLIST',
};

currentName = 'SP_SELL_LIST';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'SNAME',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'STAN_COIN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'QGUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'TORDER',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'ORDER',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['sellList'] = {
  name: currentName,
  returnName: 'sellList',
};

currentName = 'SP_MY_COIN_SELL';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'B_SEQ',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'BUY_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'SELL_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'SNAME',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'STAN_SNAME',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['myCoinSell'] = {
  name: currentName,
  returnName: 'MYCOINSELL',
};

currentName = 'SP_MY_COIN_BUY';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'S_SEQ',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'BUY_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'SELL_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'SNAME',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'STAN_SNAME',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['myCoinBuy'] = {
  name: currentName,
  returnName: 'MYCOINBUY',
};

currentName = 'SP_BOARD_MAIN_VIEW';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'B_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_GUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_IDX',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['boardView'] = {
  name: currentName,
  returnName: 'BOARDVIEW',
};

currentName = 'SP_MY_TRADE_LIST';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_STATUS',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'T_GUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['myTradeList'] = {
  name: currentName,
  returnName: 'MYTRADELIST',
};

currentName = 'SP_MY_PASS2_RESULT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'PASS',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['myPass2Result'] = {
  name: currentName,
  returnName: 'MYPASS1RESULT',
};

currentName = 'SP_MY_MAIN_BS2';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['getMyMainBS2'] = {
  name: currentName,
  returnName: 'BS2',
};

currentName = 'SP_MY_MAIN_BS3';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['getMyMainBS3'] = {
  name: currentName,
  returnName: 'BS3',
};

currentName = 'SP_MY_MAIN_BS1';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['getMyMainBS1'] = {
  name: currentName,
  returnName: 'BS1',
};

currentName = 'SP_MY_MAIN_BS2';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['getMyMainBS2'] = {
  name: currentName,
  returnName: 'BS2',
};


currentName = 'SP_MY_MAIN_BS3';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['getMyMainBS3'] = {
  name: currentName,
  returnName: 'BS3',
};

currentName = 'SP_MY_MAIN_BS4';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['getMyMainBS4'] = {
  name: currentName,
  returnName: 'BS4',
};


currentName = 'SP_MY_MAIN_BS5';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['getMyMainBS'] = {
  name: currentName,
  returnName: 'BS5',
};


currentName = 'SP_MY_MAIN_BS6';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['getMyMainB6'] = {
  name: currentName,
  returnName: 'BS6',
};


currentName = 'SP_MY_MAIN_BS7';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['getMyMainB7'] = {
  name: currentName,
  returnName: 'BS7',
};


currentName = 'SP_PW1_CHAGNE';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CUR_PW',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'NEW_PW',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['myPass1Change'] = {
  name: currentName,
  returnName: 'MYPASS1CHANGE',
};

currentName = 'SP_BOARD_MAIN_LIST';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'B_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_GUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'IP_NO',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_SDATE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_EDATE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
    {
      name: 'MY_NOTICE',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['boardList'] = {
  name: currentName,
  returnName: 'BOARDLIST',
};

currentName = 'SP_BOARD_MAIN_LIST_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'B_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_GUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'IP_NO',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_SDATE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_EDATE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'MY_NOTICE',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SP_MY_SALE_LIST';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'GS_ID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'ALL_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['myList'] = {
  name: currentName,
  returnName: 'MYLIST',
};

currentName = 'SP_MY_SALE_LIST_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'GS_ID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
currentName = 'SP_MY_BS1';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'ALL_PAGING',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['myBS1'] = {
  name: currentName,
  returnName: 'MYBS1',
};


currentName = 'SP_MY_BS1_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);




currentName = 'SP_MY_BS2';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'ALL_PAGING',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['myBS2'] = {
  name: currentName,
  returnName: 'MYBS2',
};


currentName = 'SP_MY_BS2_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);



currentName = 'SP_MY_BS3';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'ALL_PAGING',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['myBS3'] = {
  name: currentName,
  returnName: 'MYBS3',
};


currentName = 'SP_MY_BS3_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);




currentName = 'SP_MY_BS4';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'ALL_PAGING',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['myBS4'] = {
  name: currentName,
  returnName: 'MYBS4',
};


currentName = 'SP_MY_BS4_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);



currentName = 'SP_MY_BS5';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'ALL_PAGING',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['myBS5'] = {
  name: currentName,
  returnName: 'MYBS5',
};


currentName = 'SP_MY_BS5_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);



currentName = 'SP_MY_BS6';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'ALL_PAGING',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['myBS6'] = {
  name: currentName,
  returnName: 'MYBS6',
};


currentName = 'SP_MY_BS6_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);





currentName = 'SP_MY_BS6';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'ALL_PAGING',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['myBS7'] = {
  name: currentName,
  returnName: 'MYBS7',
};


currentName = 'SP_MY_BS7_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);



currentName = 'SP_MY_SUMMRY';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'ALL_PAGING',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['my_summry'] = {
  name: currentName,
  returnName: 'MYSUMMRY',
};

currentName = 'SP_MY_SUMMRY_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SP_MY_BS1_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SP_KRW_WALLET_LIST_LIST';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['krwwalletList'] = {
  name: currentName,
  returnName: 'KRWWALLETLIST',
};

currentName = 'SP_KRW_WALLET_LIST_LIST_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SP_MY_BS2';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'ALL_PAGING',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['myBS2'] = {
  name: currentName,
  returnName: 'MYBS2',
};

currentName = 'SP_MY_BS2_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SP_MY_BS3';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'ALL_PAGING',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['myBS3'] = {
  name: currentName,
  returnName: 'MYBS3',
};

currentName = 'SP_MY_BS3_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SP_MY_WALLET_INOUT_LIST';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_GUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_SDATE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_EDATE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CUR_PAGING',
      type: sql.Int,
      required: true,
    },
    {
      name: 'PAGING_NO',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['walletList'] = {
  name: currentName,
  returnName: 'WALLETLIST',
};

currentName = 'SP_MY_WALLET_INOUT_LIST_CNT';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_GUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_SDATE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'D_EDATE',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

currentName = 'SP_BOARD_USER_WRITE';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'B_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_GUBUN',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_TITLE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_CONTENTS',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'IP_NO',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_FILE_PATH1',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_FILE_PATH2',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_FILE_PATH3',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_FILE_PATH4',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_FILE_PATH5',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['writeBoard'] = {
  name: currentName,
  returnName: 'WRITEBOARD',
};

currentName = 'SP_COIN_ADDR_CREATE';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'CURR',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'BOWNER',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'B_CODE',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'ADDR',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'PASS',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'MEMO',
      type: sql.Text,
      required: true,
    },
    {
      name: 'PATH',
      type: sql.NVarChar(100),
      required: true,
    },
    {
      name: 'FILENAME',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['createAddr'] = {
  name: currentName,
  returnName: 'CREATEADDR',
};

currentName = 'SP_MY_COIN_BALANCE';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'D_UID',
      type: sql.NVarChar(100),
      required: true,
    },
  ],
};
procedureInfo.setProcedureInfo(currentName, currentInfo);
procedureNames['getCoinBalance'] = {
  name: currentName,
  returnName: 'GETCOINBALANCE',
};

currentName = 'WEB_ORG';
currentInfo = {
  usingCache: false,
  params: [
    {
      name: 'myuid',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'gs_IP',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'gs_date1',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'gs_date2',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'gsuid',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'gs_isSNo',
      type: sql.NVarChar(50),
      required: true,
    },
    {
      name: 'gnlevel',
      type: sql.Int,
      required: true,
    },
  ],
};
procedureNames['getWebOrg'] = {
  name: currentName,
  returnName: 'WEBORG',
};
procedureInfo.setProcedureInfo(currentName, currentInfo);

exports.procedureInfo = procedureInfo;
exports.procedureNames = procedureNames;
