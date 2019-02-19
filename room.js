//Codeclan Week 06 Day 02
//TDD in Javascript
//Painter/Decorator
//Room

const Room = function(area,painted){
this.area = area;
this.painted = painted;
};

Room.prototype.paint_room = function(){
  this.painted = true;
};
module.exports = Room;
