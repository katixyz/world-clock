function showTime(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "Europe/London") {
      let currentTime = moment().tz(event.target.value);

      let date = document.querySelector("#selected-city .date");
      date.innerHTML = currentTime.format("dddd, Do MMMM, YYYY");
      let time = document.querySelector("#selected-city .time");
      time.innerHTML = currentTime.format("h:mm:ss [<small>]a[</small>]");
      let city = document.querySelector("#timezone");
      city.innerHTML = "London";
    }
  }
}
// setInterval(showTime, 1000);

let citiesSelect = document.querySelector("#cities");
citiesSelect.addEventListener("change", showTime);
