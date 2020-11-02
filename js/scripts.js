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

Destination.prototype.updateTimeOfYear = function(newTimeOfYear) {
  this.timeOfYear= [this.timeOfYear];
  this.timeOfYear.push(newTimeOfYear);
}
let berlin = new Destination("Berlin", ["Alexanderpaltz", "Berlin Wall"], "Summer", "Michael", "Study abroad")