// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let coPilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
         if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields are required");
            event.preventDefault();
         } else if (isNaN(pilotNameInput.value) === false || isNaN(coPilotNameInput.value) === false || isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) {
            alert("Invalid entry");
            event.preventDefault();
         }
   });
   // fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   //    response.json(function(json) {
   //       const missionTarget = document.getElementById("missionTarget");
   //       missionTarget.innerHTML += `
   //          <h2>Mission Destination</h2>
   //          <ol>
   //             <li>Name: ${}</li>
   //             <li>Diameter: ${}</li>
   //             <li>Star: ${}</li>
   //             <li>Distance from Earth: ${}</li>
   //             <li>Number of Moons: ${}</li>
   //          </ol>
   //          <img src="${}">
   //          `;
   //    });
   // });
});
