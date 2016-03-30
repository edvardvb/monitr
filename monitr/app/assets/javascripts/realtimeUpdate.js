/**
 * Created by vemund on 16.03.16.
 */

var interval = 500; // Time in milliseconds
var heaterUpdater = setInterval( "updateStatus('pages/heater', 'heater')", interval );
var powerUpdater = setInterval( "updateStatus('pages/power', 'power')", interval );
var lockUpdater = setInterval( "updateStatus('pages/lock', 'lock')", interval );
var timestampUpdater = setInterval( "updateTimestamp()", interval );


function updateStatus(url, element){
    $.ajax(url , {
        success: function(result){
            var item = document.getElementById(element);
            item.className =
                item.className.replace
                ( / (off|on)/ , ' ' + result);
        }
    })
}


function updateTimestamp(){
    $.ajax('pages/timestamp' , {
        success: function(result){
            var date = new Date(result*1000);
            var hours = date.getHours();
            var minutes = "0" + date.getMinutes();
            var seconds = "0" + date.getSeconds();
            var milliSeconds = "000" + date.getMilliseconds();

            // Will display time in 10:30:23 format
            var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + '.' + milliSeconds.substr(-3);
            var item = document.getElementById('timestamp');
            item.innerHTML = 'Last updated: ' + formattedTime;
        }
    })
}