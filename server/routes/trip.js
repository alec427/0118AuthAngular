const Trip           = require("../models/trip");
const router         = express.Router();

let newTrip  = new Trip({
    housing:req.body.housing,
    transport: req.body.transport,
    hours:req.body.hours,
    food:req.body.food
  });

  console.log(newTrip);


  