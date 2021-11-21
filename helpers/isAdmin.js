
module.exports = {
  isAdmin : (req, res, next) => {
    if (req.isAuthenticated() && req.user.admin == 1 && req.user.permissao == 1) {
      return next()
      
    } else {
      req.flash("error_msg", "Use um login de administrador para ter acesso.")
      res.redirect("/")
    }

  }
}