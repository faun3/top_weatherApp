console.log("hello world");

function makeRequest() {
  fetch(
    "http://api.weatherapi.com/v1/current.json?key=ed6348fefce647298a8184902230505&q=London"
    //{ mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
    });
  //return weatherJSON;
}

makeRequest();
