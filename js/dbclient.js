var inspect = require('util').inspect;
var jade = require('jade');
var Client = require('mariasql');

exports.getDwarves = function(req, res) {

    var dwarf = [];

    var c = new Client();

    c.connect({
        host: '127.0.0.1',
        user: 'afortier',
        password: 'afortier_pw',
        db: "afortier_db"
    })

    c.on('connect', function() { console.log('Client is connected!'); })
        .on('error', function(err) { console.log('Client error: ' + err); })
        .on('close', function(hadError) { console.log('Client closed'); });

    c.query('SELECT * FROM dwarves')
        .on('result', function(res) {
            res.on('row', function(row) { dwarf.push(row); })
                .on('error', function(err) { console.log('Result error: ' + err); })
                .on('end', function(info) { console.log('Results'); });
        })
        .on('end', function() {
            console.log('Done with all results');

            for (var i = 0; i < dwarf.length; i++) {
                dwarf[i].contact = { address: dwarf[i].address,
                                    number: dwarf[i].number,
                                    email: dwarf[i].email}
                delete dwarf[i].address;
                delete dwarf[i].number;
                delete dwarf[i].email;
            }

            console.log(dwarf);

            jade.renderFile('views/profile.jade', {dwarf: dwarf});
        });

    c.end();

}

exports.addDwarf = function(req, res) {
    var headshotSrc = req.query.headshotSrc;
    var name = req.query.name;
    var skills = req.query.skills;
    var jobs = req.query.jobs;
    var details = req.query.jobs;
    var drink = req.query.drink;
    var game = req.query.game;
    var fear = req.query.fear;
    var love = req.query.love;
    var address = req.query.address;
    var number = req.query.number;
    var email = req.query.email;

    var c = new Client();

    c.connect({
        host: '127.0.0.1',
        user: 'afortier',
        password: 'afortier_pw',
        db: "afortier_db"
    })

    c.on('connect', function() { console.log('Client is connected!'); })
        .on('error', function(err) { console.log('Client error: ' + err); })
        .on('close', function(hadError) { console.log('Client closed'); });

    c.query('INSERT INTO dwarves VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [headshotSrc, name, skills, jobs, details, drink, game, fear, love, address, number, email])
        .on('result', function(res) {
            res.on('error', function(err) { console.log('Result error: ' + err); })
                .on('end', function(info) { console.log('Results: ' + info); });
        })
        .on('end', function() {
            //res.render('index', { title: "Snacks in the U.S."});
        });

    c.end();
}