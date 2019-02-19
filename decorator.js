//Codeclan Week 06 Day 02
//TDD in Javascript
//Painter/Decorator
//Decorator

const Decorator = function(){
this.stock = [];
};

//remember parameter is in function parameters, not prototype declaration
Decorator.prototype.get_paint = function(paint_can){
  this.stock.push(paint_can);
};
module.exports = Decorator;
