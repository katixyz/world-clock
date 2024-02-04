function showTime(event) {
  let cityTimezone = event.target.value;
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let currentTime = moment().tz(cityTimezone);
  let date = document.querySelector("#selected-city .date");
  date.innerHTML = currentTime.format("dddd, Do MMMM, YYYY");
  let time = document.querySelector("#selected-city .time");
  time.innerHTML = currentTime.format("h:mm:ss [<small>]a[</small>]");
  let city = document.querySelector("#timezone");
  city.innerHTML = cityName;
}

let citiesSelect = document.querySelector("#cities");
citiesSelect.addEventListener("change", showTime);

// setInterval(showTime, 1000);

function showLocalTime() {
  let localTimezone = moment.tz.guess();
  let localCity = localTimezone.replace("_", " ").split("/")[1];
  let localTimezoneElement = document.querySelector("#localTimezone");
  localTimezoneElement.innerHTML = `${localCity} <small>(current location)</small>`;
  let localDate = document.querySelector("#localDate");
  localDate.innerHTML = moment.tz(localTimezone).format("dddd, Do MMMM, YYYY");
  let localTime = document.querySelector("#localTime");
  localTime.innerHTML = moment
    .tz(localTimezone)
    .format("h:mm:ss [<small>]a[</small>]");
}

showLocalTime();
setInterval(showLocalTime, 1000);
