var inspect = require('util').inspect;
var Client = require('mariasql');

exports.getDwarves = function(req, res) {

    var outputArr = [];

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
            res.on('row', function(row) { outputArr.push(row); })
                .on('error', function(err) { console.log('Result error: ' + err); })
                .on('end', function(info) { console.log('Results'); });
        })
        .on('end', function() {
            console.log('Done with all results');

            console.log(outputArr);
            res.send(outputArr);
        });

    c.end();

}