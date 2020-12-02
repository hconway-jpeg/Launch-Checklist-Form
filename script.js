// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("").then(function(response) {
      response.json(function(json) {
         const missionTarget = document.getElementById("missionTarget");
      });
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
