const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLogin(event) {
    event.preventDefault();  //event defualt동작이 작동되지 않도록 함!
    const username= loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);

    greeting.innerText = "Hello, " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLogin);