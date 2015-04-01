var makeLilJonDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  this.$node.attr("id", "liljon");
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.bounce = 0;

};

makeLilJonDancer.prototype = Object.create(makeDancer.prototype);

makeLilJonDancer.prototype.constructor = makeLilJonDancer;

makeLilJonDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
  var topStr = this.$node.css('top');
  var top = parseFloat(topStr.slice(0,topStr.length-3));
  if (this.bounce) {
    top = "" + (top+20) + "px";
    this.bounce--;
  } else {
    top = "" + (top-20) + "px";
    this.bounce++;
  }
  this.$node.animate({'top': top}, 150);
};

