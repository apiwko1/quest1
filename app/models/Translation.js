const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/quest', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const schema = new mongoose.Schema({
    language: String,    
    content: String
})

module.exports = mongoose.model('Translation', schema);