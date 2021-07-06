const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json())
              .then(data => {
                  const weatherContainer = document.querySelector("#weather span:first-child");
                  const cityContainer = document.querySelector("#weather span:last-child");
                  weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
                  cityContainer.innerText = data.name;
    });

    //fetch는 promise >> 당장 실행X, 시간 좀 걸린 뒤 실행
}

function onGeoError(){
alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//위치 확인