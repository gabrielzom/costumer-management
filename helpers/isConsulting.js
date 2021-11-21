module.exports = {
  isAdmin : (req, res, next) => {
    if (req.isAuthenticated() && req.user.permissao == 3) {
      return next()
    }

    req.flash("error_msg", "Use um login de administrador para ter acesso.")
    res.redirect("/")

  }
}