angular
  .module('HappyApp')
  .controller('RatingsController', RatingsController);
  
function RatingsController() {
  this.all = [1, 0, -1];
  this.addRating = addRating;
  this.newRating;
  this.average = averageRating(this.all);
  function addRating() {
    if (this.newRating) {
      this.all.push(parseInt(this.newRating));
    }
    this.average = averageRating(this.all);
    this.newRating = null;
  }
  function averageRating(arr) {
    var average = 0;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    average = sum / arr.length;
    return average;
  }
}
