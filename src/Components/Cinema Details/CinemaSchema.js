import MONGOOSE from 'mongoose';
const SCHEMA = MONGOOSE.SCHEMA;

const CinemaSchema = new SCHEMA({

    name: {
        type: String,
        requied: true
    },
    address: {
        type: String,
        required:true
    },
    opening_times: [{
        Mon: [{
            start: String,
            end: String
        }],
        Tue: [{
            start:String,
            end: String
        }],
        Wed: [{
            start:String,
            end: String
        }],
        Thurs: [{
            start:String,
            end: String
        }],
        Fri: [{
            start:String,
            end: String
        }],
        Sat: [{
            start:String,
            end: String
        }],
        Sun: [{
            start:String,
            end: String
        }]
    }],
    type: String



});

module.exports=MONGOOSE.model("QAC_db",CinemaSchema );