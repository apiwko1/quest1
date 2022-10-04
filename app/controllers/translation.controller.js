
const Translation = require('../models/Translation');

function translationList(cb) {
    Translation.find().lean().exec((err, translations) => {
        if (err) {
            cb(err);
        } else {
            cb(null, translations);
        }
    })
}

function translationGet(id, cb) {
    Translation.findById(id).lean().exec((err, translation) => {
        if (err) {
            cb(err)
        } else {
            cb(null, translation)
        }
    })
}

function translationAdd(data, cb) {
    let newTranslation = new Translation(data);

    newTranslation.save(function (err, translation) {

        if (err) {
            cb(err);
        } else {
            cb(null, translation);
        }

    });
}

function translationUpdate(id, data, cb) {
    Translation.updateOne({ _id: id }, data, function (err, post) {
        if (err) {
            cb(err);
        } else {
            cb(null, post);
        }
    });
}

function translationDelete(id, cb) {
    Translation.deleteOne({_id: id},function (err, translation) {
        if (err) {
            cb(err);
        } else {
            cb(null, translation);
        }
    });
}

module.exports = {
    list: translationList,
    get: translationGet,
    add: translationAdd, 
    update: translationUpdate, 
    delete: translationDelete
}