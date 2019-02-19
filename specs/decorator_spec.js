//Codeclan Week 06 Day 02
//TDD in Javascript
//Painter/Decorator
//Decorator Specs


const assert = require('assert'); //require Node's assertion module
const Decorator = require('../decorator.js');

describe('Decorator', function(){ //bundle tests together 1st arg = label, 2nd arg anon funct
  let decorator;//note scope assignment being passed to child functions
  beforeEach(function(){
     decorator = new Decorator();
  })

 it('should start with an empty paint stock',function(){
   const actual = decorator.stock.length;
   const expected = 0;
   assert.strictEqual(actual,expected);
 });//describe properties the taxi should have

});
