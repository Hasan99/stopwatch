var minute = 0;
var second = 0;
var millisecond = 0;
var interval;

var minHeading = document.getElementById("minHeading");
var secHeading = document.getElementById("secHeading");
var millisecHeading = document.getElementById("millisecHeading");

function disable() {
    var btnStart = document.getElementById("btnStart");
    btnStart.disabled = true;
    var btnReset = document.getElementById("btnReset");
    btnReset.disabled = true;
    start();
}

function enable() {
    var btnStart = document.getElementById("btnStart");
    btnStart.disabled = false;
    var btnReset = document.getElementById("btnReset");
    btnReset.disabled = false;
}

function start() {
    interval = setInterval(function () {
        millisecond++;
        millisecHeading.innerHTML = millisecond;

        if (millisecond >= 100) {
            second++;
            secHeading.innerHTML = second;
            millisecond = 0;
        }
        else if (second >= 60) {
            minute++;
            minHeading.innerHTML = minute;
            second = 0;
        }

    }, 10);
}

function pause() {
    clearInterval(interval);
    enable();
}

function reset() {
    minute = second = millisecond = 0;

    minHeading.innerHTML = minute;
    secHeading.innerHTML = second;
    millisecHeading.innerHTML = millisecond;

}