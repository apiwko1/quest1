const express = require('express');
const router = express.Router();
const user = require('./../controllers/user.controller');
// const auth = require('./../middlewares/auth');

router.post('/signup', function (req, res) {
    user.add(req.body, function (err, user) {
        if (err) {
            res.status(404);
            res.json({
                error: 'User not created'
            })
        } else {
            res.json(user);
        }

    })
});

router.post('/login', (req, res) => {
    user.login(req.body, function (err, token) {
        console.log(req.body);
        if (err) {
            res.status(404);
            res.json({
                error: 'user not logged'
            });
        } else if (token) {
            res.json({
                success: true,
                jwt: token
            })
        } else {
            res.json({
                success: false,
                message: 'username and pwd do not match'
            });
        }
    })
})

module.exports = router;