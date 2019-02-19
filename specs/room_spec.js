//Codeclan Week 06 Day 02
//TDD in Javascript
//Painter/Decorator
//Room Specs

const assert = require('assert'); //require Node's assertion module
const Room = require('../room.js');

describe('Room', function(){ //bundle tests together 1st arg = label, 2nd arg anon funct
  let room;//note scope assignment being passed to child functions
  beforeEach(function(){
     room = new Room(40,false);
  })

 it('should have an area',function(){
   const actual = room.area;
   const expected = 40;
   assert.strictEqual(actual,expected);
 });//describe properties the taxi should have

 it('should have a painted property', function(){
   const actual = room.painted;
   const expected = false;
   assert.strictEqual(actual,expected);
 });//again tests are given labels to be perceived by mocha

});
