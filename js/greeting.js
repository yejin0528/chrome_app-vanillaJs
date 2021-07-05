const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//greeting 호출 함수
function paintGreeting(username){
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLogin(event) {
    event.preventDefault();  //event defualt동작이 작동되지 않도록 함!
    const username= loginInput.value;

    localStorage.setItem("USERNAME_KEY",username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(username);
}

//localstage 확인
const savedUsername = localStorage.getItem("USERNAME_KEY");

if(savedUsername === null) { //localstorage 값 존재하지않으면
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLogin);
} else {  //localstorage 값 존재하면
   paintGreeting(savedUsername);
}