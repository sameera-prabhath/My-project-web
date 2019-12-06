const mongoose = require('mongoose');


var themeSchema = new mongoose.Schema({
    theme: {
        type: String,

    },
    color: {
        type: String,

    },
    statusbarcolor: {
        type: String,


    },
    sbox:{
        type:Boolean
    }

});





mongoose.model('Theme', themeSchema);