/**
 * Created by vemund on 30.03.16.
 */

var interval = 500;

function initSpeed(){
    var g = new JustGage({
        id: "gauge",
        value: 0,
        min: 0,
        max: 200,
        title: "Speed",
        label: "km/h",
        titleFontColor: '#000000',
        labelFontColor: '#000000',
        levelColors: ['#008000', '#FFFF00', '#FF8800', '#FF0000'],
        levelColorsGradient: true
    });
    setInterval(updateSpeed, interval, g);
}
function updateSpeed(gauge){
    $.ajax('pages/speed' , {
        success: function(result){
            gauge.refresh(Math.round(result));
        }
    })
}

function initRPM(){
    var g = new JustGage({
        id: "engine_rpm",
        value: 0,
        min: 0,
        max: 6000,
        title: "Engine RPM",
        label: "RPM",
        titleFontColor: '#000000',
        labelFontColor: '#000000',
        levelColors: ['#008000', '#00FF00', '#00FF00', '#00FF00', '#FFFF00', '#FF8800', '#FF0000'],
        levelColorsGradient: true
    });
    setInterval(updateRPM, interval, g);
}

function updateRPM(gauge){
    $.ajax('pages/engine_rpm' , {
        success: function(result){
            gauge.refresh(Math.round(result));
        }
    })
}



function init(){
    initSpeed();
    initRPM();
}


window.onload = init;
