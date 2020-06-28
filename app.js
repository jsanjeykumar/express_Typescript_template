const express = require('express')
const app = express();
conSt PORT = process.env.PORT || 8000
const router = express.Router()

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time - -  ', Date.now())
    next()
})
// define the home page route
router.get('/routerE', function (req, res) {
    res.send('router ex api')
})
app.use(router);

app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.get('/heroku', (req, res) => {
    res.send('Hello heroku!')
});

app.listen(PORT, () => { console.log('Example app listening on port 8000!') });

app.route('/Angular').get(function (req, res) {
    res.send("Tutorial on Angular");
});


const msg = 'express server is running!!!'
