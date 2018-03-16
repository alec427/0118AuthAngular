const Trip           = require("../models/trip");
const router         = express.Router();

let newTrip  = new Trip({
    housing:req.body.housing,
    transport: req.body.transport,
    hours:req.body.hours,
    food:req.body.food
  });

  console.log(newTrip);


  newTrip.save()
    .then(user => {
      req.login(user, (err) => {
        if (err) { return res.status(500).json({ message: "Something went wrong" }); }
        res.status(200).json(req.user);
      })
    .catch(err => res.status(400).json({ message: "Something went wrong" }))
    });