const clock = document.querySelector(".js-clock"),
    clockTitle = clock.querySelector("h1");

function getTime(){
    const date = new Date(),
        hours = date.getHours(),
        mins = date.getMinutes(),
        secs = date.getSeconds();

    clockTitle.innerText = `${
            hours < 10 ? `0${hours}` : hours
        }:${
            mins < 10 ? `0${mins}` : mins
        }:${
            secs < 10 ? `0${secs}` : secs
        }`;
    
    if(hours > 5 && hours < 12){
        clockTitle.setAttribute("data-time", "morning");
    } else if(hours >= 12 && hours < 18){
        clockTitle.setAttribute("data-time", "afternoon");
    } else if(hours >= 18 && hours < 21){
        clockTitle.setAttribute("data-time", "evening");
    } else {
        clockTitle.setAttribute("data-time", "night");
    }
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();
