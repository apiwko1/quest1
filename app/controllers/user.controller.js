const User = require('./../models/User');
const bcrypt = require('bcrypt');
const { db } = require('./../models/User');

function userAdd(data, cb) {
    let newUser = new User(data);
    newUser.save(function (err, user) {
        if (err) {
            cb(err);
        } else {
            cb(null, user);
        }
    });
}

function userLogin(data, cb) {
    User.findOne({ username: data.username }, (err, user) => {
        if (err) {
            cb(err);
            return;
        }

        if (!user) {
            cb(null, user);
            return;
        }        
        bcrypt.compare(data.password, user.password, function (err, logged) {
            
            if (err) {
                cb(err)
            }
            if (logged) {
                
                const token = user.generateAuthToken();
                console.log(token);
                cb(null, token);

            } else {
                cb(null, null);
            }
        })

    })
}

module.exports = {
    add: userAdd,
    login: userLogin
}