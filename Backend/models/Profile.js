 
 // import
const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  gender: {
    type: String,
    required: true,
    
  },
  DOB: {
    type: Date,
    required: true,
    
  },
  About: {
    type: String,
    required: true,
    
  },
  contact: {
    type: Number,
    required: true,
  },
 
});


module.exports = mongoose.model("Profile",profileSchema);