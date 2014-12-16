$(function () {
    $('#inventory').click(function() {
        $.get('/inventory', function(data) {
            data = data.replace(/\n/g, '<br />');
            $('#content').html(data);
        });
    });
});

function getDwarfProfile(dwarf) {
    $.get('/profile?' + dwarf, function(data) {
        data = data.replace(/\n/g, '<br />');
        $('#content').html(data);
    });
}