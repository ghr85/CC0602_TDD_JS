//Codeclan Week 06 Day 02
//TDD in Javascript
//Painter/Decorator
//Paint can

const Paint_can = function(litres){
  this.litres = litres;
};

Paint_can.prototype.check_if_empty = function(){
  if (this.litres === 0) {
    return true
  } else {
    return false
  }
};

Paint_can.prototype.use_paint = function() {
  this.litres = 0
}

module.exports = Paint_can;
