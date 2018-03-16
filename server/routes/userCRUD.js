const User = require("../models/user");

exports.patchUser = (req,res,next)=>{
  User.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(list=>res.status(200).json(list))
  .catch(e=>res.status(500).send(e));
}