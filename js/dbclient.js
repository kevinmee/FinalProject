var jade = require('jade');
var Client = require('mariasql');

exports.getAllDwarves = function(after) {

    var dwarf = [];

    var c = new Client();

    c.connect({
        host: '127.0.0.1',
        user: 'afortier',
        password: 'afortier_pw',
        db: "afortier_db"
    });

    c.on('connect', function() { })
        .on('error', function(err) { console.log('Client error: ' + err); })
        .on('close', function(hadError) {  });

    c.query('SELECT * FROM dwarves')
        .on('result', function(res) {
            res.on('row', function(row) { dwarf.push(row); })
                .on('error', function(err) { console.log('Result error: ' + err); })
                .on('end', function(info) {  });
        })
        .on('end', function() {

            for (var i = 0; i < dwarf.length; i++) {
                dwarf[i].contact = { address: dwarf[i].address,
                                    number: dwarf[i].number,
                                    email: dwarf[i].email}
                delete dwarf[i].address;
                delete dwarf[i].number;
                delete dwarf[i].email;
            }

            after(dwarf);
        });

    c.end();
};

exports.getAllDwarfByName = function(name, after) {

    var dwarf = [];
    console.log(name);

    var c = new Client();

    c.connect({
        host: '127.0.0.1',
        user: 'afortier',
        password: 'afortier_pw',
        db: "afortier_db"
    });

    c.on('connect', function() {  })
        .on('error', function(err) { console.log('Client error: ' + err); })
        .on('close', function(hadError) {  });

    c.query('SELECT * FROM dwarves WHERE name = ?', [name])
        .on('result', function(res) {
            res.on('row', function(row) { dwarf.push(row); })
                .on('error', function(err) { console.log('Result error: ' + err); })
                .on('end', function(info) {  });
        })
        .on('end', function() {
            for (var i = 0; i < dwarf.length; i++) {
                dwarf[i].contact = { address: dwarf[i].address,
                    number: dwarf[i].number,
                    email: dwarf[i].email}
                delete dwarf[i].address;
                delete dwarf[i].number;
                delete dwarf[i].email;
            }

            after(dwarf[0]);
        });

    c.end();

};

exports.addDwarf = function(req, res) {
    var headshotSrc = req.body.headshotSrc || 'img/HireHo.png';
    var name = req.body.name || 'No name';
    var skills = req.body.skills || 'No skills';
    var jobs = req.body.jobs || 'No preferred jobs';
    var detail = req.body.detail || 'No further information';
    var drink = req.body.drink || 'N/A';
    var game = req.body.game || 'N/A';
    var fear = req.body.fear || 'N/A';
    var love = req.body.love || 'N/A';
    var address = req.body.address || 'None given';
    var number = req.body.number || 'None given';
    var email = req.body.email || 'None given';

    var c = new Client();

    c.connect({
        host: '127.0.0.1',
        user: 'afortier',
        password: 'afortier_pw',
        db: "afortier_db"
    });

    c.on('connect', function() {  })
        .on('error', function(err) { console.log('Client error: ' + err); })
        .on('close', function(hadError) {  });

    c.query('INSERT INTO dwarves VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [headshotSrc, name, skills, jobs, detail, drink, game, fear, love, address, number, email])
        .on('result', function(res) {
            res.on('error', function(err) { console.log('Result error: ' + err); })
                .on('end', function(info) { console.log('Results: ' + info); });
        })
        .on('end', function() {
        });

    c.end();

    res.render('home');
};

exports.getProductivity = function(req, res) {

    var rows = [];
    var outputArr = [];

    var c = new Client();

    c.connect({
        host: '127.0.0.1',
        user: 'afortier',
        password: 'afortier_pw',
        db: "afortier_db"
    });

    c.on('connect', function () {

    })
        .on('error', function (err) {
            console.log('Client error: ' + err);
        })
        .on('close', function (hadError) {

        });

    c.query('SELECT * FROM productivity')
        .on('result', function (res) {
            res.on('row', function (row) {
                rows.push(row);
            })
                .on('error', function (err) {
                    console.log('Result error: ' + err);
                })
                .on('end', function (info) {

                });
        })
        .on('end', function () {

            for (var i = 0; i < rows.length; i++) {
                outputArr[i] = {
                    name: rows[i].job,
                    data: [parseInt(rows[i].withDwarf),
                        parseInt(rows[i].withoutDwarf)]
                }
            }

            console.log(outputArr);
            res.send(outputArr);
        });

    c.end();
};