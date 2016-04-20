/**
 * Created by vemund on 16.03.16.
 */

function initRPM(){
    rpmGauge = new JustGage({
        id: "engine_rpm",
        value: 0,
        min: 0,
        max: 4000,
        title: "Engine RPM",
        label: "RPM",
        titleFontColor: '#000000',
        labelFontColor: '#000000',
        levelColors: ['#00FF00', '#00FF00', '#00FF00', '#00FF00', '#FFFF00', '#FF8800', '#FF0000'],
        levelColorsGradient: true
    });
}

function initSpeed(){
    speedGauge = new JustGage({
        id: "gauge",
        value: 0,
        min: 0,
        max: 200,
        title: "Speed",
        label: "km/h",
        titleFontColor: '#000000',
        labelFontColor: '#000000',
        levelColors: ['#00FF00', '#FFFF00', '#FF8800', '#FF0000'],
        levelColorsGradient: true
    });
}



function updateStates(url){
    $.ajax(url , {
        type: "POST",
        success: function(result){
            replaceOnOff(document.getElementById('heater'), result['heater']);
            replaceOnOff(document.getElementById('power'), result['power']);
            replaceOnOff(document.getElementById('lock'), result['lock']);
            rpmGauge.refresh(Math.round(result['engine']));
            speedGauge.refresh(Math.round(result['speed']));
            updateMap(map, marker)
            updateTimestamp(document.getElementById('timestamp'), result['timestamp']);
        },
        dataType: 'json'
    })
}

function replaceOnOff(item, newStatus){
    item.className =
        item.className.replace
        ( / (off|on)/ , ' ' + newStatus);
}


function updateTimestamp(element, result){
  var date = new Date(result * 1000)
  var hours = date.getHours()
  var minutes = '0' + date.getMinutes()
  var seconds = "0" + date.getSeconds()
  var milliSeconds = "000" + date.getMilliseconds()

  // Will display time in 10:30:23 format
  var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + '.' + milliSeconds.substr(-3);
  element.innerHTML = 'Last updated: ' + formattedTime;
}


function init(){
    initRPM();
    initSpeed();
    var interval = 500;
    setInterval( "updateStates('pages/status')", interval);
}

window.onload = init
