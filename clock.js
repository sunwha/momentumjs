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
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();
