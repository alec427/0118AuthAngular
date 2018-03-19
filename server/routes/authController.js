const express        = require("express");
const authController = express.Router();
const passport       = require("passport");
const User           = require("../models/user");
const Trip           = require("../models/trip");
const bcrypt         = require("bcrypt");
const bcryptSalt     = 19;

authController.post("/signup", (req, res, next) => {
  if (!req.body.username || !req.body.password || !req.body.name || !req.body.email ) {
    res.status(400).json({ message: "Provide all the fields to sign up" });
  }

  User.findOne({ username:req.body.username }, "username", (err, user) => {
    if (user !== null) {
      res.status(400).json({ message: "The username already exists" });
      return;
    }
  User.findOne({ email:req.body.email }, "email", (err, email) => {
    if (email !== null) {
      res.status(400).json({ message: "The email address is already in use" });
      return;
    }
    console.log("entro!")
    let hashPass = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(9), null);
    

    let newUser  = new User({
      username:req.body.username,
      password: hashPass,
      name:req.body.name,
      email:req.body.email
    });

    newUser.save()
      .then(user => {
        req.login(user, (err) => {
          if (err) { return res.status(500).json({ message: "Something went wrong" }); }
          res.status(200).json(req.user);
        })
      .catch(err => res.status(400).json({ message: "Something went wrong" }))
      })


  });
 });
});

authController.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) { return res.status(401).json(err); }
    if (!user) { return res.status(401).json(info); }

    req.login(user, (err) => {
      if (err) { return res.status(500).json({ message: "Something went wrong" }); }
      return res.status(200).json(req.user);
    });
  })(req, res, next);
});

authController.post("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: "Success" });
});

authController.get("/loggedin", (req, res) => {
  if (req.isAuthenticated()) { return res.status(200).json(req.user); }
  return res.status(403).json({ message: "Unauthorized" });
});

authController.get("/private", (req, res) => {
  if (req.isAuthenticated()) { return res.json({ message: req.user.secret }); }
  return res.status(403).json({ message: "Unauthorized" });
});

authController.get("/delete/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id)
  .then(lists=>res.status(200).json(lists))
  .catch(e=>res.status(500).send(e));
});

authController.post("/update/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(list=>res.status(200).json(list))
  .catch(e=>res.status(500).send(e))
});

authController.post("/creator", (req, res, next) => {

  const newTrip  = new Trip({
    housing: req.body.housing,
    transport: req.body.transport,
    hours: req.body.hours,
    food: req.body.food
  });

  newTrip.save()
    .then(user => {
      req.login(user, (err) => {
        if (err) { return res.status(500).json({ message: "Something went wrong" }); }
        res.status(200).json(req.user);
      })
    .catch(err => res.status(400).json({ message: "Something went wrong" }))
    });
});

module.exports = authController;
