$(function () {
    $('#about').click(function() {
        $.get('/profile', function(data) {
            data = data.replace(/\n/g, '<br />');
            $('#content').html(data);
        })
    });

    $('#inventory').click(function() {
        $.get('/inventory', function(data) {
            data = data.replace(/\n/g, '<br />');
            $('#content').html(data);
        })
    });
});