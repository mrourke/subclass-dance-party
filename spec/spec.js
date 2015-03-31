describe("blinkyDancer", function() {

  var blinkyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      //debugger;
      sinon.spy(blinkyDancer, "step");
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe("lilJohnDancer", function() {

  var lilJohnDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    lilJohnDancer = new makeLilJohnDancer (10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(lilJohnDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(lilJohnDancer.$node, 'toggle');
    lilJohnDancer.step();
    expect(lilJohnDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      //debugger;
      sinon.spy(lilJohnDancer, "step");
      expect(lilJohnDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(lilJohnDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(lilJohnDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe("rickAstleyDancer", function() {

  var rickAstleyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rickAstleyDancer = new makeRickAstleyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(rickAstleyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(rickAstleyDancer.$node, 'toggle');
    rickAstleyDancer.step();
    expect(rickAstleyDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      //debugger;
      sinon.spy(rickAstleyDancer, "step");
      expect(rickAstleyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(rickAstleyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rickAstleyDancer.step.callCount).to.be.equal(2);
    });
  });
});
