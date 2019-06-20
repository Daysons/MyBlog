export function checkLogin(req, res, next) {
  if (!req.seeeion.user) {
    req.flash("error", "尚未登录");
    return res.redirect("/signin");
  }
  next();
}

export function checkNotLogin(req, res, next) {
  if (req.seeeion.user) {
    res.flash("error", "已经登录");
    return res.redirect("back");
  }
  next();
}
