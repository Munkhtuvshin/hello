var mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

var eventSchema = new mongoose.Schema({
  id:Number,
  title: String,
  cover_url:String,
  start_at:String,
  end_at:String,
  beeco_start_at:String,
  beeco_end_at:String,
  coordinate: {
    lat: { type: String},
    lng:{type:String}
  }

})

var Event = mongoose.model('Event', eventSchema);

module.exports = Event