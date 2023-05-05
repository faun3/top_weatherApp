import { makeRequest } from "./app";

//write out DOM interacting functions that take relevant data in
//  app functions may need to return some values that tell these DOM functions
//  if/what they need to display

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const locationInput = document.getElementById("location");
  let requestedLocation = locationInput.value;
  makeRequest(requestedLocation);
});

//we will display an icon (taken from weatherAPI) to tell users what weather to expect
//  below that we will have the temperature displayed in big text
//  next to the temp display will be a smaller exponent style text that displays
//      the two toggles between Celsius and Farenheit temps

const appendPoint = document.querySelector("weatherData");

const weatherViewFactory = (appendPoint) => {
  const resetDisplay = () => {
    appendPoint.replaceChildren();
  };

  const generateSkeleton = () => {};

  const getIcon = () => {};

  const tempToggle = () => {
    const weatherWrapperDiv = document.createElement("div");
    weatherWrapperDiv.setAttribute("class", "weatherWrapperDiv");

    const iconDiv = document.createElement("div");
    iconDiv.setAttribute("class", "iconDiv");

    //png sourced from weatherAPI
    const iconSource = document.createAttribute("img");
    //placeholder below, change returned object code to make it dynamic
    iconSource.src = "https://cdn.weatherapi.com/weather/64x64/day/116.png";

    const tempToggleDiv = document.createElement("div");
    tempToggleDiv.setAttribute("class", "tempToggleDiv");

    const celsiusDisplayText = document.createElement("p");
    celsiusDisplayText.setAttribute("id", "cText");
    celsiusDisplayText.setAttribute("data-toggled", "true");
    celsiusDisplayText.textContent = "℃";

    celsiusDisplayText.addEventListener("click", () => {
      //swap currently active text to this one
      //  active temperature is rendered with darker text
    });

    const pipeDivider = document.createElement("div");
    pipeDivider.textContent = "|";

    const farenheitDisplayText = document.createElement("p");
    farenheitDisplayText.setAttribute("id", "fText");
    farenheitDisplayText.setAttribute("data-toggled", "false");
    farenheitDisplayText.textContent = "℉";

    const bigTextDiv = document.createElement("div");
    bigTextDiv.setAttribute("class", "bigTextDiv");

    const bigTempText = document.createElement("p");
    bigTempText.textContent =
      requestedLocation.appendPoint.appendChild(weatherWrapperDiv);
  };

  const displayWeather = () => {
    //call all required display functions
  };
  return { displayWeather };
};

let weatherView = weatherViewFactory(appendPoint);
weatherView.displayWeather();