const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const tripSchema = new Schema({
  //name: String,
  housing: String,
  transport: String,
  hours: String,
  food: String,
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});


const Trip = mongoose.model("Trip", tripSchema);
module.exports = Trip;
