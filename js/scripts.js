// Business Logic for Map
function Map() {
  this.destinations = [];
  this.currentId = 0;
}
Map.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations.push(destination);
}
Map.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
Map.prototype.findDestination = function(id) {
  for (let i=0; i< this.destinations.length; i++){
    if (this.destinations[i]){
      if (this.destinations[i].id == id) {
        return this.destinations[i];
      }
    }
  };
  return false;
}
// Business Logic for Destination

function Destination(location, landmarks, timeOfYear, travelCompanion, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.travelCompanion = travelCompanion;
  this.notes = notes;
}
Destination.prototype.updateTimeOfYear = function(newTimeOfYear) {
  this.timeOfYear= [this.timeOfYear];
  this.timeOfYear.push(newTimeOfYear);
}

// User Interface Logic ------------
let map = new Map();

function displayDestinationDetails(mapToDisplay){
  let destinationsList = $("ul#destinations");
  let htmlForDestinationInfo = "";
  mapToDisplay.destinations.forEach(function(destination){
    htmlForDestinationInfo += "<li id=" + destination.id+ ">" + destination.location + "</li>";
  });
  destinationsList.html(htmlForDestinationInfo);
};

function showDestination(destinationId){
  const destination = map.findDestination(destinationId);
  $("#show-destinations").show();
  $(".location").html(destination.location);
  $(".landmarks").html(destination.landmarks);
  $(".time-of-year").html(destination.timeOfYear);
  $(".travel-companion").html(destination.travelCompanion);
  $(".notes").html(destination.notes);
  let buttons = $("#buttons");
  buttons.empty();
}

function attachDestinationListeners(){
  $("ul#destinations").on("click", "li", function(){
    showDestination(this.id);
  });
};

$(document).ready(function(){
  attachDestinationListeners();
  $("form#new-destination").submit(function(event){
    event.preventDefault();
    const inputtedLocation = $("input#location").val();
    const inputtedLandmarks = $("input#landmarks").val();
    const inputtedTimeOfYear = $("input#time-of-year").val();
    const inputtedTravelCompanion = $("input#travel-companion").val();
    const inputtedNotes = $("input#notes").val();
    $("input#location").val("");
    $("input#landmarks").val("");
    $("input#time-of-year").val("");
    $("input#travel-companion").val("");
    $("input#notes").val("");
    let newDestination = new Destination(inputtedLocation, inputtedLandmarks, inputtedTimeOfYear, inputtedTravelCompanion, inputtedNotes);
    map.addDestination(newDestination);
    displayDestinationDetails(map);
  });
});