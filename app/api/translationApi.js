const express = require("express");
const router = express.Router();

const translation = require('../controllers/translation.controller');
auth = require('./../middlewares/auth');


router.get('/all', (req, res) => {
    translation.list((err, translations) => {
        if (err) {
            res.status(404);
            res.json({
                error: 'translation not found'
            });
        } else {
            res.json(translations);
        }

    })
})


router.put('/update/:id', function (req, res) {

    translation.update(req.params.id, req.body, function (err, data) {
        if(err) {
            res.status(404);
            res.json({
                error: "translation not found"
            });
        } else {
            res.json(data);
        }
    });

})

router.delete('/delete/:id', function (req, res) {

    translation.delete(req.params.id, function (err, data) {
        if(err) {
            res.status(404);
            res.json({
                error: "Post not found"
            });
        } else {
            res.json(data);
        }
    });

});

router.get('/:id', function (req, res) {

    translation.get(req.params.id, (err, translation) => {
        if (err) {
            res.status(404);
            res.json({
                error: 'translation not found'
            });
        } else {
            res.json(translation);
        }

    })
});

router.post('/add', auth,  function (req, res) {
   
    translation.add(req.body, function (err, translation) {
        if(err) {
            res.status(404);
            res.json({
                error: "Translation not created"
            });
        } else {
            res.json(translation);
        }
    })
});

module.exports = router;