const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();

    //숫자형 > 문자형 변환
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();  //시작하자마자 실행시키기 위해
setInterval(getClock, 1000);  //5초마다 sayHello 호출