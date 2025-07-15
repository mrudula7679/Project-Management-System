const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const { isAuthenticated } = require('../middleware/authMiddleware');
const { isStudent } = require('../middleware/roleMiddleware');

// Dashboard
router.get('/dashboard', isAuthenticated, isStudent, studentController.dashboard);

// Guide preference form
router.get('/guide-preference', isAuthenticated, isStudent, (req, res) => {
  res.render('student/guide-preference');
});
router.post('/guide-preference', isAuthenticated, isStudent, studentController.submitGuidePreference);

// Project submission form
router.get('/project-submission', isAuthenticated, isStudent, (req, res) => {
  res.render('student/project-submission');
});
router.post('/project-submission', isAuthenticated, isStudent, studentController.submitProject);

module.exports = router;
