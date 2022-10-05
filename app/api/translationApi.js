const express = require("express");
const router = express.Router();

const translation = require('../controllers/translation.controller');


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

router.get('/add', function (req, res) {
    res.render('add_translation');
});

router.get('/update/:id', function (req, res) {

    translation.get(req.params.id, function (err, translation) {
        if (err) res.send(err);

        res.render('update_translation', translation);
    });

});

router.post('/update/:id', function (req, res) {

    translation.update(req.params.id, req.body, function (err, post) {
        if (err) res.send(err);
        res.redirect('/translation');
    });

})

router.get('/delete/:id', function (req, res) {

    translation.delete(req.params.id, function (err, translation) {
        if (err) res.send(err);

        res.redirect('/translation');
    });

});

router.get('/:id', function (req, res) {

    translation.get(req.params.id, (err, translation) => {
        if (err) {
            res.send(err);
        } else {
            res.render('translation', translation)
        }

    })
});

router.post('/translation/add', function (req, res) {

    translation.add(req.body, function (err, translation) {
        console.log(req.body);
        if (err) res.send(err);

        res.redirect('/translation')
    })
});

module.exports = router;