const Project = require('../models/Project');
const GuidePreference = require('../models/GuidePreference');

// Dashboard
exports.dashboard = (req, res) => {
  res.render('student/dashboard', { user: req.session.user });
};

// Submit guide preference
exports.submitGuidePreference = async (req, res) => {
  const { preferences } = req.body;

  try {
    await GuidePreference.create({
      student: req.session.user.id,
      preferences,
    });
    req.flash('success', 'Preferences submitted');
    res.redirect('/student/dashboard');
  } catch (err) {
    console.error(err);
    req.flash('error', 'Failed to submit preferences');
    res.redirect('/student/guide-preference');
  }
};

// Submit project
exports.submitProject = async (req, res) => {
  const { title, problemStatement } = req.body;

  try {
    await Project.create({
      student: req.session.user.id,
      title,
      problemStatement,
      status: 'Pending',
    });
    req.flash('success', 'Project submitted');
    res.redirect('/student/dashboard');
  } catch (err) {
    console.error(err);
    req.flash('error', 'Failed to submit project');
    res.redirect('/student/project-submission');
  }
};
