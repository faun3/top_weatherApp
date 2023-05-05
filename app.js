//TODO

//makeRequest function should take in a string parameter that specifies the location
//  we want to get weather data for
//
//makeRequest should handle getting a bad location from the users

//write a parseRequest function that takes in the relevant data we need
//  temp in C
//  temp in F
//  "description" string (i.e. cloudy, sunny, etc)
//
//this function should return an object with this relevant data

//write out DOM interacting functions that take relevant data in
//  app functions may need to return some values that tell these DOM functions
//  if/what they need to display

function getLocation() {
  //const formSubmit = document.getElementById("submitButton");
  const form = document.getElementById("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const locationInput = document.getElementById("location");
    let requestedLocation = locationInput.value;
    makeRequest(requestedLocation);
  });
}

function makeRequest(location) {
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=ed6348fefce647298a8184902230505&q=${location}`
    //{ mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      let extractedData = {
        temp_c: response.current.temp_c,
        temp_f: response.current.temp_f,
        description: response.current.condition.text,
      };
      console.table(extractedData);
    })
    .catch((e) => {
      console.log(e);
    });
  //return weatherJSON;
}

getLocation();
