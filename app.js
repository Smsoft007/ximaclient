const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('./lib/logger');
const session = require('express-session');
const fileUpload = require('express-fileupload');
const appRoot = require('app-root-path');
const lang_kr = require('./lib/lang-kr');
const lang_en = require('./lib/lang-en');
const lang_ch = require('./lib/lang-ch');
const lang_jp = require('./lib/lang-jp');
const checkRSAKey = require('./middleware/check-rsa');
const urlFilter = require('./middleware/url-filter');
const responseJson = require('./middleware/responseJson');
const commonLib = require('./lib/commonLib.js');
const app = express();
const render = express.response.render;
const sessionStore = commonLib.getSessionStore();
const csrf = require('csurf');

const indexRouter = require('./routes/index');
const commonRouter = require('./routes/common');
const listRouter = require('./routes/list');
const usersRouter = require('./routes/users');
const ftpRouter = require('./routes/ftp');

const lang = [lang_kr, lang_en, lang_ch, lang_jp];
app.use(
  session({
    secret: 'secreateKKKEY',
    resave: false,
    store: sessionStore,
    key: 'express.sid',
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
    saveUninitialized: false,
  })
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(urlFilter);
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  '/include/',
  express.static(__dirname + '/views/include/', {
    maxAge: 1 * 24 * 60 * 60 * 1000,
  })
);
app.use(
  '/img/',
  express.static(__dirname + '/views/img/', {
    maxAge: 1 * 24 * 60 * 60 * 1000,
  })
);
app.use(
  '/scripts/',
  express.static(__dirname + '/views/scripts/', {
    maxAge: 1 * 24 * 60 * 60 * 1000,
  })
);
app.use(
  '/upload/',
  express.static(__dirname + '/temp/', {
    maxAge: 1 * 24 * 60 * 60 * 1000,
  })
);
app.use(checkRSAKey);
app.use(responseJson);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: `${appRoot}/temp`,
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

app.use('/api/ftp', ftpRouter);

app.use(
  csrf({
    cookie: true,
  })
);

app.use('/', indexRouter);
app.use('/api/user', usersRouter);
app.use('/api/common', commonRouter);
app.use('/api/list', listRouter);

express.response.render = function (view, options, callback) {
  if (commonLib.isNull(options)) {
    options = {};
  }
  var req = this.req;
  options['csrfToken'] = req.csrfToken();

  if (req.session.publickey == undefined) {
    options['publicKey'] = '';
  } else {
    options['publicKey'] = req.session.publickey;
  }

  if (req.session.num == undefined) {
    req.session.num = 0;
  }

  if (req.session.userInfo == undefined) {
    options['LOGIN'] = false;
  } else {
    options['LOGIN'] = req.session.userInfo['LOGIN'];
    options['D_UID'] = req.session.userInfo['D_UID'];
  }
  options['LANG'] = lang[req.session.num];

  render.call(this, view, options, callback);
};

process.on('uncaughtException', function (err) {
  console.log(' UNCAUGHT EXCEPTION ');
  console.log("[Inside 'uncaughtException' event] " + err.stack || err.message);
  logger.error(err);
});

module.exports = app;
