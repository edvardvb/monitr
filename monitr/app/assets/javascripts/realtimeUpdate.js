/**
 * Created by vemund on 16.03.16.
 */

var interval = 500; // Time in milliseconds
var heaterUpdater = setInterval( "updateHeaterStatus()", interval );
var powerUpdater = setInterval( "updatePowerStatus()", interval );



function updateHeaterStatus() {
    $.ajax("pages/heater", {
        success: function(result){
            var item = document.getElementById('heater');
            item.className =
                item.className.replace
                ( / (off|on)/ , ' ' + result);
        }
    })
}
function updatePowerStatus() {
    console.log(document.getElementById('power').className);
    $.ajax("pages/power", {
        success: function(result){
            var item = document.getElementById('power');
            item.className =
                item.className.replace
                ( / (off|on)/ , " " + result);
        }
    })
}

