describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function(){
    fizzbuzz = new FizzBuzz
  });

  describe('multiple of 3', function(){
    it('fizzes for 3', function(){
      expect(fizzbuzz.play(3)).toEqual('Fizz');
    });
  });
  describe('multiple of 5', function(){
    it('buzzes for 5', function(){
      expect(fizzbuzz.play(5)).toEqual('Buzz')
    });
  });
  describe('multiple of 15', function(){
    it('fizzbuzzes for 15', function(){
      expect(fizzbuzz.play(15)).toEqual('FizzBuzz')
    });
  });
  describe('all other numbers', function(){
    it('1 for 1', function(){
      expect(fizzbuzz.play(1)).toEqual(1)
    });
  });

});
