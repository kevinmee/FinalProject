var express = require('express');
var router = express.Router();
var jade = require('jade');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res) {
    res.render('home')
});

router.get('/profile', function(req, res) {
    var partial = jade.renderFile('views/profile.jade',
        {
            headshotSrc: 'img/dwarf.jpg',
            personalInfo: 'This is an example of text on a dwarf page',
            dwarf: {
                name: 'Gimli',
                skills: 'Slaying orcs, Eating salted pork',
                jobs: 'Going on long quests to save the world'
            }
        });
    res.send(partial);
});

module.exports = router;
