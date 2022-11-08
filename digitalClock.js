setInterval(showTime, 1000);

function showTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var timeFormat = 'AM';

    if (hours == 0) {
        hours = 12;
        timeFormat = "am";
    }
    if (hours > 12) {
        hours -= 12;
        timeFormat = "pm";
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

     //var finalTime = "&(hours):&(minutes):&(seconds)";
    var finalTime = hours + ":" + minutes + ":" + seconds + timeFormat;
    document.getElementById("time").innerText = finalTime;
}

