// Write your JavaScript code here!
window.addEventListener("load", function() {
   const form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let coPilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");

      if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required");
         event.preventDefault();
      } else if (isNaN(pilotNameInput.value) === false || isNaN(coPilotNameInput.value) === false || isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) {
         alert("Invalid entry");
         event.preventDefault();
      } else if (fuelLevelInput.value < 10000) {
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Fuel level too low for launch";
      } else if (cargoMassInput.value > 10000) {
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         faultyItems.style.visibility = "visible";
         cargoStatus = "Cargo mass too heavy for launch";
      } else {
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green";
         fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
            response.json().then(function(json) {
               const missionTarget = document.getElementById("missionTarget");
                  missionTarget.innerHTML += `
                     <h2>Mission Destination</h2>
                        <ol>
                           <li>Name: ${planets[0].name}</li>
                           <li>Diameter: ${planets[0].diameter}</li>
                           <li>Star: ${planets[0].star}</li>
                           <li>Distance from Earth: ${planets[0].distance}</li>
                           <li>Number of Moons: ${planets[0].moons}</li>
                        </ol>
                     <img src="${planets[0].image}">
                  `;
            });
         });
      }
   });
});