const Project = require('../models/Project');

// Dashboard
exports.dashboard = (req, res) => {
  res.render('guide/dashboard', { user: req.session.user });
};

// View and approve/reject projects
exports.getProjectsToReview = async (req, res) => {
  try {
    const projects = await Project.find({ guide: req.session.user.id });
    res.render('guide/project-approvals', { projects });
  } catch (err) {
    console.error(err);
    req.flash('error', 'Could not fetch projects');
    res.redirect('/guide/dashboard');
  }
};

exports.updateProjectStatus = async (req, res) => {
  const { projectId, status } = req.body;

  try {
    await Project.findByIdAndUpdate(projectId, { status });
    req.flash('success', 'Project status updated');
    res.redirect('/guide/dashboard');
  } catch (err) {
    console.error(err);
    req.flash('error', 'Failed to update project status');
    res.redirect('/guide/dashboard');
  }
};
