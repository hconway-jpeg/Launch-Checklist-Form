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
      let pilotStatus = document.getElementById("pilotStatus");
      let coPilotStatus = document.getElementById("copilotStatus");

      if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required");
      } else if (isNaN(pilotNameInput.value) === false || isNaN(coPilotNameInput.value) === false || isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) {
         alert("Invalid entry");
      } else if (fuelLevelInput.value < 10000) {
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} Ready`;
         coPilotStatus.innerHTML = `Co-Pilot ${coPilotNameInput.value} Ready`;
         fuelStatus.innerHTML = "Fuel level too low for launch";
      } else if (cargoMassInput.value > 10000) {
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} Ready`;
         coPilotStatus.innerHTML = `Co-Pilot ${coPilotNameInput.value} Ready`;
         cargoStatus.innerHTML = "Cargo mass too heavy for launch";
      } else if (fuelLevelInput.value < 10000 && cargoMassInput.value > 10000) {
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} Ready`;
         coPilotStatus.innerHTML = `Co-Pilot ${coPilotNameInput.value} Ready`;
         fuelStatus.innerHTML = "Fuel level too low for launch";
         cargoStatus.innerHTML = "Cargo mass too heavy for launch";
      } else {
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green";
         fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
            response.json().then(function(json) {
               const missionTarget = document.getElementById("missionTarget");
                  let planet = Math.round(Math.random()*5);
                  missionTarget.innerHTML = `
                     <h2>Mission Destination</h2>
                        <ol>
                           <li>Name: ${json[planet].name}</li>
                           <li>Diameter: ${json[planet].diameter}</li>
                           <li>Star: ${json[planet].star}</li>
                           <li>Distance from Earth: ${json[planet].distance}</li>
                           <li>Number of Moons: ${json[planet].moons}</li>
                        </ol>
                     <img src="${json[planet].image}">
                  `;
            });
         });
      }
      event.preventDefault();
   });
});