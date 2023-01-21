
export const configAuthRouter = (authRouter, upload, passport) => {
    authRouter
      .post(
        "/login",
        passport.authenticate("login", {
          successRedirect: "http://localhost:3000/",
          failureRedirect: "/login?error",
        })
      )
      .post(
        "/register",
        upload.single("avatar"),
        passport.authenticate("signup", {
          successRedirect: "http://localhost:3000/",
          failureRedirect: "/signup?error",
        })
      )
    .get("/", (req, res) => {
res.send({user: req.user })


})
  };
  