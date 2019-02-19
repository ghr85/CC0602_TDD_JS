//Codeclan Week 06 Day 02
//TDD in Javascript
//Painter/Decorator
//Decorator Specs


const assert = require('assert'); //require Node's assertion module
const Decorator = require('../decorator.js');
const Paint_can = require('../paint_can.js');
const Room = require('../room.js')

describe('Decorator', function(){ //bundle tests together 1st arg = label, 2nd arg anon funct
  let decorator;//note scope assignment being passed to child functions
  beforeEach(function(){
     decorator = new Decorator();
     paint_can = new Paint_can(5);

  })

 it('should start with an empty paint stock',function(){
   const actual = decorator.stock.length;
   const expected = 0;
   assert.strictEqual(actual,expected);
 });

 it('should be able to add a can of paint to stock',function(){
   decorator.get_paint(paint_can);
   const actual = decorator.stock.length;
   const expected = 1;
   assert.strictEqual(actual,expected);
 });
 it('should be able to calculate stock',function(){
   decorator.get_paint(paint_can);
   decorator.get_paint(paint_can);
   const actual = decorator.stock_count();
   const expected = 10;
   assert.strictEqual(actual,expected);
 });

 it('should be able to calculate stock',function(){
   decorator.get_paint(paint_can);
   decorator.get_paint(paint_can);
   let room = new Room(40, false);

   const actual = decorator.enough_paint_for_room(room);
   const expected = false;

   assert.strictEqual(actual,expected);
 });
});
