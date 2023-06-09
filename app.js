function makeRequest(location) {
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=ed6348fefce647298a8184902230505&q=${location}`
    //{ mode: "cors" }
  )
    .then(function (response) {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("API Call failed!");
      }
    })
    .then(function (response) {
      let extractedData = {
        tempC: response.current.temp_c,
        tempF: response.current.temp_f,
        description: response.current.condition.text,
        iconSource: response.current.condition.icon,
      };
      console.table(extractedData);
      return extractedData;
    })
    .catch((e) => {
      console.log(e);
    });
}

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const locationInput = document.getElementById("location");
  let requestedLocation = locationInput.value;
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=ed6348fefce647298a8184902230505&q=${requestedLocation}`
    //{ mode: "cors" }
  )
    .then(function (response) {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("API Call failed!");
      }
    })
    .then(function (response) {
      let extractedData = {
        tempC: response.current.temp_c,
        tempF: response.current.temp_f,
        description: response.current.condition.text,
        iconSource: response.current.condition.icon,
      };
      console.table(extractedData);
      let weatherView = weatherViewFactory(extractedData);
      weatherView.displayWeather();
      return extractedData;
    })
    .catch((e) => {
      console.log(e);
    });
});

//write out DOM interacting functions that take relevant data in
//  app functions may need to return some values that tell these DOM functions
//  if/what they need to display

//we will display an icon (taken from weatherAPI) to tell users what weather to expect
//  below that we will have the temperature displayed in big text
//  next to the temp display will be a smaller exponent style text that displays
//      the two toggles between Celsius and Farenheit temps

const weatherViewFactory = (dataObject) => {
  const appendPoint = document.querySelector(".weatherData");

  const displayIcon = () => {
    const icon = appendPoint.querySelector(".iconWrapper img");
    const SIZE = "128";
    icon.src =
      "https:" + dataObject.iconSource.replace("64x64", `${SIZE}x${SIZE}`);
  };

  const displayTemp = () => {
    const tempTextParagraph = document.querySelector(".bigText p");

    const celsiusText = document.getElementById("cText");

    if (celsiusText.dataset.toggled === "true") {
      tempTextParagraph.textContent = dataObject.tempC;
    } else {
      tempTextParagraph.textContent = dataObject.tempF;
    }
  };

  const tempToggler = () => {
    const cText = document.getElementById("cText");
    const fText = document.getElementById("fText");

    cText.addEventListener("click", () => {
      if (cText.dataset.toggled === "true") {
        return;
      }
      cText.dataset.toggled = true;
      fText.dataset.toggled = false;
      displayTemp();
    });

    fText.addEventListener("click", () => {
      if (fText.dataset.toggled === "true") {
        return;
      }
      fText.dataset.toggled = true;
      cText.dataset.toggled = false;
      displayTemp();
    });
  };

  const toggleWrapper = () => {
    const weatherWrapper = document.querySelector(".weatherWrapper");
    if (weatherWrapper.dataset.visible === "false") {
      weatherWrapper.dataset.visible = "true";
      weatherWrapper.classList.remove("hidden");
    }
  };

  const displayWeather = () => {
    toggleWrapper();
    tempToggler();
    displayIcon();
    displayTemp();
  };
  return { displayWeather };
};
