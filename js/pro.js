var CountDownDate = new Date("July 31, 2021 11:00:00").getTime();
var x =setInterval(function(){
    var now = new Date().getTime();
    var dist = CountDownDate - now;
    var days = Math.floor(dist / (1000 * 60*60 * 24));
    var hours = Math.floor((dist %(1000 * 60 * 60 * 24)) / (1000 * 60 *60));
    var mins = Math.floor((dist %(1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((dist %(1000 * 60)) / (1000));

document.getElementById("day").innerHTML = days;
document.getElementById("hour").innerHTML = hours;
document.getElementById("minute").innerHTML = mins;
document.getElementById("second").innerHTML = sec;
})
