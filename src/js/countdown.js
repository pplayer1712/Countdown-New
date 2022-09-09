// FILE: countdown.js
// --------------------
let main = setInterval(function() {
    // COUNT DOWN TO THIS DATE (UTC)
    let endDate = new Date("Jul 16, 2022 06:20:00 GMT+01:00").getTime();
    
    // Calculate time delta (days, hours, minutes, seconds and milliseconds)
    let now = new Date().getTime();    
    let dayDelta = Math.floor((endDate - now) / (1000 * 60 * 60 * 24));
    let hourDelta = Math.floor((endDate - now) / (1000 * 60 * 60) % 24);
    let minuteDelta = Math.floor((endDate - now) / (1000 * 60) % 60);
    let secondDelta = Math.floor((endDate - now) / 1000 % 60);

    // Display time delta
    let elem = document.getElementById('timer');
    elem.innerHTML = `Noch ${dayDelta} Tage, ${hourDelta} Stunden, 
                     ${minuteDelta} Minuten und ${secondDelta} Sekunden`;
    if (now > endDate) {
        elem.innerHTML = "Das Event findet jetzt statt! 🎉";
        confetti.start();
        return;
    }
}, 1000);

window.onload = main;