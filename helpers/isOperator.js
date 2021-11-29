module.exports = {
  isOperator : (req, res, next) => {
    if (req.isAuthenticated() && req.user.permissao <= 2) {
      return next()
      
    } else {
      req.flash("error_msg", "Use um login de operador para ter acesso.")
      res.redirect("/")
    }
  }
}