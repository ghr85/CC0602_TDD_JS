//Codeclan Week 06 Day 02
//TDD in Javascript
//Painter/Decorator
//Decorator
require('./paint_can.js')
const Decorator = function(){
this.stock = [];
};

//remember parameter is in function parameters, not prototype declaration
Decorator.prototype.get_paint = function(paint_can){
  this.stock.push(paint_can);
};


Decorator.prototype.stock_count = function(){
let litre_count = 0;
for(let currentCan of this.stock){
  litre_count += currentCan.litres;
};
return litre_count;
};

Decorator.prototype.enough_paint_for_room = function(room) {
  if (room.area >= this.stock_count()) {
    return false
  } else {
    return true
  }
};

module.exports = Decorator;
