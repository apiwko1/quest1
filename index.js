const express = require('express');
const app = express();
app.use(express.static('public'));
const hbs = require('express-handlebars');
const path = require('path');
const translationRouter = require('./app/routes/translationRouter');
const translationApiRouter = require('./app/api/translationApi');
	
app.use(express.urlencoded({ extended: true }));

app.engine('hbs', hbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './views'));

app.use('/translation', translationRouter);

app.use('/api/translation', translationApiRouter);


app.listen(8080, () => {
    console.log('start ');
})