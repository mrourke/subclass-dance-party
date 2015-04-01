var makeHammerDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  this.$node.attr("id", "hammer");
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.move = 0;
  this.timeBetweenSteps = 2000;
  //this.oldStep = this.step;

};

makeHammerDancer.prototype = Object.create(makeDancer.prototype);

makeHammerDancer.prototype.constructor = makeHammerDancer;

makeHammerDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var leftStr = this.$node.css('left');
  var left = parseFloat(leftStr.slice(0,leftStr.length-3));
  if (this.move) {
    left = "" + (left+100) + "px";
    this.move--;
  } else {
    left = "" + (left-100) + "px";
    this.move++;
  }
  this.$node.animate({'left': left}, 750);
};





