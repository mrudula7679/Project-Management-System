exports.isStudent = (req, res, next) => {
  if (req.session.user?.role === 'student') {
    return next();
  }
  req.flash('error', 'Access denied: Students only');
  res.redirect('/login');
};

exports.isGuide = (req, res, next) => {
  if (req.session.user?.role === 'guide') {
    return next();
  }
  req.flash('error', 'Access denied: Guides only');
  res.redirect('/login');
};

exports.isHOD = (req, res, next) => {
  if (req.session.user?.role === 'hod') {
    return next();
  }
  req.flash('error', 'Access denied: HOD only');
  res.redirect('/login');
};
