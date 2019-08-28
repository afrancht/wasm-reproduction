// using require because import syntax is part of ES2015 not supported by Node/Express
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const keys = require('./config/keys');
require('./models/User');
require('./models/Transaction');

// passport doesn't return anything thus no need to assign.
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
const dev = process.env.NODE_ENV !== 'production';

// Here go the middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: keys.cookieKey,
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/txRoutes')(app);
require('./routes/userRoutes')(app);
require('./routes/browserRoutes')(app);

const devProxy = {
  '/dashboard': {
    target: 'http://localhost:3000',
    changeOrigin: true,
  },

  '/api/logout': {
    target: 'http://localhost:3000',
    changeOrigin: true,
  },
};

if (dev && devProxy) {
  const proxyMiddleware = require('http-proxy-middleware');
  Object.keys(devProxy).forEach(context => {
    app.use(proxyMiddleware(context, devProxy[context]));
  });
}

if (process.env.NODE_ENV === 'production') {
  console.log('we are in prod baby');
  // Ensure express can give our build files to the browser to display front end.
  // If there is no route defined in our server, try loking in the folder front-end/build to see if there is something there.
  app.use(express.static('front-end/build'));

  // Ensure that express can give the index.html file to the browser if it does not recognise a server route.
  const path = require('path');
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'front-end', 'build', 'index.html'));
  });
}
// Environment variables past by deploying service. Heroku might have more than
// one server per user thus we need to listen on a specific port. This is called
// dynamic port binding.
const PORT = process.env.PORT || 5000;
// Express tells node to listen for port 5000.
app.listen(PORT);
