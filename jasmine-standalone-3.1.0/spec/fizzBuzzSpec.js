describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function(){
    fizzbuzz = new FizzBuzz
  });

  describe('multiple of 3', function(){
    it('fizzes for 3', function(){
      expect(fizzbuzz.play(3)).toEqual('Fizz');
    });
  describe('multiple of 5', function(){
    it('buzzes for 5', function(){
      expect(fizzbuzz.play(5)).toEqual('Buzz')
    });
  });

  });

});
