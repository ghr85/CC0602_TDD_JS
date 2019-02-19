//Codeclan Week 06 Day 02
//TDD in Javascript
//Painter/Decorator
//Paint Can Specs

//Codeclan Week 06 Day 02
//TDD in Javascript
//Painter/Decorator
//Room Specs

const assert = require('assert'); //require Node's assertion module
const Paint_can = require('../paint_can.js');

describe('Paint Can', function(){ //bundle tests together 1st arg = label, 2nd arg anon funct
  let paint_can;//note scope assignment being passed to child functions
  beforeEach(function(){
     paint_can = new Paint_can(5);
  })

  it('should have number of litres of paint',function(){
    const actual = paint_can.litres;
    const expected = 5;
    assert.strictEqual(actual,expected);

});

  it('should check if the paint can is empty',function(){
    const actual = paint_can.check_if_empty()
    const expected = false;
    assert.strictEqual(actual,expected);

  });

  it('should be able to empty itself of paint',function(){
    paint_can.use_paint()
    const actual = paint_can.check_if_empty()
    const expected = true;
    assert.strictEqual(actual,expected);

  });


})
