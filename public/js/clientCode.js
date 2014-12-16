$(function () {
    $('#homelink').click(function() {
        $.get('/homepage', function(data) {
            data = data.replace(/\n/g, '<br />');
            $('#content').html(data);
        });
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

    $.get('/homepage', function(data) {
        data = data.replace(/\n/g, '<br />');
        $('#content').html(data);
    });
});

function getDwarfProfile(dwarf) {
    $.get('/profile?' + dwarf, function(data) {
        data = data.replace(/\n/g, '<br />');
        $('#content').html(data);
    });
}
