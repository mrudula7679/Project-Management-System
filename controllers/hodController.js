const User = require('../models/User');
const Project = require('../models/Project');

// Dashboard
exports.dashboard = (req, res) => {
  res.render('hod/dashboard', { user: req.session.user });
};

// Assign guides
exports.assignGuide = async (req, res) => {
  const { studentId, guideId } = req.body;

  try {
    await Project.findOneAndUpdate({ student: studentId }, { guide: guideId });
    req.flash('success', 'Guide assigned successfully');
    res.redirect('/hod/dashboard');
  } catch (err) {
    console.error(err);
    req.flash('error', 'Guide assignment failed');
    res.redirect('/hod/dashboard');
  }
};

// Final approval
exports.finalApproval = async (req, res) => {
  const { projectId, status } = req.body;

  try {
    await Project.findByIdAndUpdate(projectId, { finalStatus: status });
    req.flash('success', 'Final decision recorded');
    res.redirect('/hod/dashboard');
  } catch (err) {
    console.error(err);
    req.flash('error', 'Failed to update status');
    res.redirect('/hod/dashboard');
  }
};
