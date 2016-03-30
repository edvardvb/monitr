/**
 * Created by vemund on 16.03.16.
 */

var interval = 500; // Time in milliseconds
var heaterUpdater = setInterval( "updateStatus('pages/heater', 'heater')", interval );
var powerUpdater = setInterval( "updateStatus('pages/power', 'power')", interval );
var lockUpdater = setInterval( "updateStatus('pages/lock', 'lock')", interval );


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