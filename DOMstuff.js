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
