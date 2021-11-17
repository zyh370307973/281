var countDate = new Date('Dec 5, 2021 00:00:00').getTime(); // the final time//
function finaltime()
{
    var now = new Date().getTime(); // get the what the time now //
        gaps = countDate - now; //get how many time different from now to final time//

        var second = 1000; //1second = 1000 ms//
        var minute = second * 60; 
        var hour = minute * 60;
        var day = hour * 24;
        // get day, hour, minute, second as integer//
        var D = Math.floor(gaps / (day));
        var H = Math.floor((gaps % (day)) / (hour));
        var M = Math.floor((gaps % (hour)) / (minute));
        var S = Math.floor((gaps % (minute)) / second);
        // make the integer to the position in html//
        document.getElementById('day').innerHTML = D;
        document.getElementById('hour').innerHTML = H;
        document.getElementById('minute').innerHTML = M;
        document.getElementById('second').innerHTML = S;


}

setInterval(function(){
    finaltime();
},1000)
