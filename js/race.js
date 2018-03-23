//SECTION Pusher Connection
// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher('150738c0e765d9e70b20', {
    cluster: 'eu',
    encrypted: true
});

var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
    alert(data.message);
});

//SECTION Table Manager
$('#raceTable').editableTableWidget();
$('table td').on('change', function(evt, newValue) {
    console.log(newValue);
    console.log($(this).attr("id"));
    if (false) {
        return false; // reject change
    }
});
