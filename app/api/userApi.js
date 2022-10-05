const express = require('express');
const router = express.Router();
const user = require('./../controllers/user.controller');

router.post('/signup', function(req, res){
    user.add(req.body, function(err, user){
        if(err){
            res.status(404);
            res.json({
                error: 'User not created'
            })
        }else{
            res.json(user);
        }

    })
});

module.exports = router;