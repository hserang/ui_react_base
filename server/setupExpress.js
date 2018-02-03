const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const i18next = require('i18next');
const i18nextMiddleware = require('i18next-express-middleware');
const Backend = require('i18next-node-fs-backend');

module.exports = function(express, app) {
  i18next
    .use(Backend)
    .use(i18nextMiddleware.LanguageDetector)
    .init({
      ns: ['translations'], // have a common namespace used around the full app
      defaultNS: 'translations',
      backend: {
        loadPath: path.resolve(__dirname, '..', 'public', 'locales/{{lng}}/{{ns}}.json')
      },
      fallbackLng: 'en',
      preload: ['en']
    });

  // security setup start
  // keep this on top of midelware chain
  app.use(helmet());
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'unsafe-inline'"],
        imgSrc: ["'self'"],
        connectSrc: ["'none'"],
        fontSrc: ["'self'"],
        objectSrc: ["'self'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'self'"]
      }
    })
  );
  // security setup end

  app.use(
    i18nextMiddleware.handle(i18next, {
      removeLngFromUrl: false
    })
  );

  app.use(cookieParser());
  app.use(
    session({ secret: 'choose_this_secret_key_wisely', resave: false, saveUninitialized: false })
  );
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));
  // json parser
  app.use(bodyParser.json());
  // Serve static assets
  app.use(express.static(path.join(__dirname, 'build')));
};
