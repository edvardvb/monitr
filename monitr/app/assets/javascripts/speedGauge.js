/**
 * Created by vemund on 30.03.16.
 */


var interval = 500;

function updateSpeed(gauge){
    $.ajax('pages/speed' , {
        success: function(result){
            gauge.refresh(Math.round(result));
        }
    })
}

function initGauge(){
    var g = new JustGage({
        id: "gauge",
        value: 80,
        min: 0,
        max: 200,
        title: "Speed",
        label: "km/h",
        titleFontColor: '#000000',
        labelFontColor: '#000000',
        levelColors: ['#00FF00', '#FFFF00', '#FF8800', '#FF0000'],
        levelColorsGradient: true
    });
    setInterval(updateSpeed, interval, g);
}

window.onload = initGauge;