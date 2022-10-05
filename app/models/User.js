const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://127.0.0.1:27017/quest', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const schema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

schema.pre('save', function (next) {
    let user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(Number(process.env.SALT), function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password,salt, function(err, hash){
            if (err) return next(err);
            user.password = hash;
            next();
        })

    })

});

schema.plugin(uniqueValidator);

module.exports = mongoose.model("User", schema);