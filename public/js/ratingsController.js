angular
  .module('HappyApp')
  .controller('RatingsController', RatingsController);

function RatingsController() {
  this.all = [1, 0, -1];
  this.newRating;

  this.addRating = function addRating() {
    if (this.newRating) {
      this.all.push(parseInt(this.newRating));
    }
    this.newRating = null;
  }
}
