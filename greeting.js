const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    clockTitleTime = document.querySelector("h1");

const USER_LS = "currentUser",
    SHOWING_CH = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CH);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CH);
    greeting.classList.add(SHOWING_CH);
    
    const clockTime = clockTitleTime.getAttribute("data-time");
    let greetingTxt = "";
    switch(clockTime){
        case "morning":
            greetingTxt = `Good Morning ${text}`;
            break;
        case "afternoon":
            greetingTxt = `Let's work hard. ${text}`;
            break;
        case "evening":
            greetingTxt = `${text}, How was your day?`;
            break;
        case "night":
            greetingTxt = `Sweet dreams. ${text}`;
    }
    greeting.innerText = greetingTxt;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();