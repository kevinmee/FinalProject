$(function () {
    $('#homelink').click(function() {
        renderHomepage();
    });
    $('#inventorylink').click(function() {
        $.get('/inventory', function(data) {
            data = data.replace(/\n/g, '<br />');
            $('#content').html(data);
        });
    });
    $('#aboutlink').click(function() {
        $.get('/about', function(data) {
            data = data.replace(/\n/g, '<br />');
            $('#content').html(data);
        });
    });
    $('#addDwarflink').click(function() {
        $.get('/addDwarf', function(data) {
            data = data.replace(/\n/g, '<br />');
            $('#content').html(data);
        });
    });

    renderHomepage();
});

function renderHomepage() {
    $.get('/homepage', function(data) {
        data = data.replace(/\n/g, '<br />');
        $('#content').html(data);
    });

    // Initialize Cookie Sales chart
    $.getJSON('/getProductivity', function(data) {

        var chart = new Highcharts.Chart({
            chart: {
                renderTo: 'dwarfProductivity',
                type: 'column'
            },
            title: {
                text: 'Dwarf Productivty Ratings'
            },
            xAxis: {
                categories: [
                    'With Dwarves', 'Without Dwarves'
                ]
            },
            yAxis: {
                title: {
                    text: 'Productivity Rating'
                }
            },
            series: data
        });

    });
}

function getDwarfProfile(dwarf) {
    $.get('/profile?' + dwarf, function(data) {
        data = data.replace(/\n/g, '<br />');
        $('#content').html(data);
    });
}
