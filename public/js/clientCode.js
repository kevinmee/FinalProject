$(function () {
    $('#about').click(function() {
        $.get('/profile', function(data) {
            $('#content').html(data);
        })
    });
});