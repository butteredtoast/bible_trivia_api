'use strict';

var db = require('../db').db;

var express = require('express');
var router  = express.Router();

// generic GET function
function get(url, handler) {
    router.get(url, (req, res) => {
        handler(req)
            .then(data => {
                res.json({ success: true, data });
            })
            .catch(error => {
                res.json({ success: false, error: error.message || error });
            });
    });
}

// middleware that is specific to this api
/*router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
*/

// define the about route
router.route('/about')
    .get((req, res) => {
        res.json({success:true, message:`Bible trivia API | Author:Remy | Email:jeremywandui@gmail.com`});
    });

// get all questions:
get('/', () => db.questions.all());

// get total count of questions:
get('/total', () => db.questions.total());

// get a random question
get('/random', () => db.questions.random());

// get a random question, given a tag ID
get('/tag/random/id=:id', req => db.questions.randomByID(+req.params.id));

// find a question by id:
get('/find/id=:id', req => db.questions.findById(+req.params.id));

// find all questions relating to Hebrews
get('/tag/hebrews', req => db.questions.findHebrews());

// find all questions that have the given tag id:
get('/tag/find/id=:id', req => db.questions.findByTagId(+req.params.id));

module.exports = router;