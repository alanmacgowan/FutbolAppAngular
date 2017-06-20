const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const TeamSchema = new Schema({
  id          : { type : Number, required: true },
  name        : { type : String, required: true, trim: true },
  description : { type : String, required: true, trim: true },
  shirtColor  : { type : String, required: true, trim: true },
  address     : { type : String, required: true, trim: true },
  city        : { type : String, required: true, trim: true }
});

module.exports = mongoose.model('Team', TeamSchema, 'teams');
