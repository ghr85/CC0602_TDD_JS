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

Decorator.prototype.paint_room = function(room) {
if (this.enough_paint_for_room(room) === true) {
room.paint_room();
}
  else {
    return "not enough paint"
  };
};

module.exports = Decorator;
