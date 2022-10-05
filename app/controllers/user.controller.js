const User = require('./../models/User');

function userAdd(data, cb){
    let newUser = new User(data);
    newUser.save(function(err, user){
        if(err){
            cb(err);
        }else{
            cb(null, user);
        }
    });
}

module.exports = {
    add: userAdd
}