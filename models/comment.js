const mongoose = require('mongoose');
mongoose.promise= global.promise;


var commentSchema= new mongoose.Schema({

    quizid: Number,
    comments:[{
        username: String,
        comment:String
    }]
});

module.exports = mongoose.model('comments',commentSchema); 