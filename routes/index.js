var express = require('express');
var router = express.Router();
var jade = require('jade');
var dbclient = require('../js/dbclient');

var sampleDwarf = {
    headshotSrc: 'img/dwarf.jpg',
    name: 'Gimli',
    skills: 'Slaying orcs, Eating salted pork',
    jobs: 'Going on long quests to save the world',
    details: 'Gimli, son of Gloin, hails from the House of Durin born in the year 2879 of the Third Age.\n\nHe enjoys friendly competition with elves, and loves to engage in gluttonous banter with other dwarves.\n\nGimli is the perfect worker for your job!',
    drink: 'Mead',
    game: 'Monopoly',
    fear: 'Balrog',
    love: 'Anything edible',
    contact: {
        address: '1 Misty Mountain Way, Erebor, Middle Earth',
        number: '999-LUV-PORK',
        email: 'gimli@theonering.com'
    }
};

var dwarves = [sampleDwarf, sampleDwarf, sampleDwarf];

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res) {
    res.render('home')
});

router.get('/inventory', function(req, res) {
    function after(dwarves) {
        var partial = jade.renderFile('views/inventory.jade', {dwarves: dwarves});
        res.send(partial);
    }

    dbclient.getAllDwarves(after);
});

router.get('/profile', function(req, res) {
    function after(dwarf) {
        var partial = jade.renderFile('views/profile.jade', {dwarf: dwarf});
        res.send(partial);
    }

    dbclient.getAllDwarfByName(req._parsedUrl.query, after);
});

module.exports = router;
