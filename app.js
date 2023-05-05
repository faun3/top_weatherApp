//TODO

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
        temp_c: response.current.temp_c,
        temp_f: response.current.temp_f,
        description: response.current.condition.text,
      };
      console.table(extractedData);
      return extractedData;
    })
    .catch((e) => {
      console.log(e);
    });
}

export { makeRequest };
