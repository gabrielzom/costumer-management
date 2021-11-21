module.exports = {
  isAdmin : (req, res, next) => {
    if (req.isAuthenticated() && req.user.permissao == 1) {
      return next()
    }

    req.flash("error_msg", "Use um login de gerente para ter acesso.")
    res.redirect("/")

  }
}