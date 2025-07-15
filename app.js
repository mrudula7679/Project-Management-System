const express = require('express');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo');

const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');
const guideRoutes = require('./routes/guideRoutes');
const hodRoutes = require('./routes/hodRoutes');

const { isAuthenticated } = require('./middleware/authMiddleware');
require('dotenv').config();

const app = express();

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// Session Config
app.use(session({
  secret: process.env.SESSION_SECRET || 'secret123',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017/pms'
  }),
  cookie: { maxAge: 1000 * 60 * 60 * 2 } // 2 hours
}));

// Flash messages
app.use(flash());

// Custom middleware to make flash + user available in all views
app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.user = req.session.user || null;
  next();
});

// Routes
app.use('/', authRoutes);
app.use('/student', studentRoutes);
app.use('/guide', guideRoutes);
app.use('/hod', hodRoutes);

// Home Route
app.get('/', (req, res) => {
  res.render('home');
});

// 404 Page
app.use((req, res) => {
  res.status(404).send('<h2>404 Not Found</h2><p>The page you’re looking for doesn’t exist.</p>');
});

module.exports = app;
