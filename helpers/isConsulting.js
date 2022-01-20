module.exports = {
  isConsulting : (req, res, next) => {
    if (req.isAuthenticated() && req.user.permissao <= 3) {
      return next()

    } else {
      req.flash("error_msg", "Use um login de consultor para ter acesso.")
      res.redirect("/usuario/login")
    }
  }
}