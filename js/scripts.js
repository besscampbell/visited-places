// Business Logic for Map
function Map() {
  this.destinations = [];
}
Map.prototype.addDestination = function(destination) {
  this.destinations.push(destination);
}

// Business Logic for Destination

function Destination(location, landmarks, timeOfYear, travelCompanion, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.travelCompanion = travelCompanion;
  this.notes = notes;
}