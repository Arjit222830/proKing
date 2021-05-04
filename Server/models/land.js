const mongoose =require('mongoose'); 

const LandSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
},{  timestamps: true });

const Land= mongoose.model('lands', LandSchema);

module.exports.Land= Land;