// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our fizzBuzzer function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return a number thats not a multiple of 5 or 3', function() {
    // range of normal inputs
    const normalCases = [1,2,4,7,11,14,17,19];
    // for each normal input, make sure it's returned
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal(input);
    });
  });

  // test multiples of 3, 5 and 15
  it('should return fizz, buzz, or fizzbuzz', function() {
    // range of inputs that are multiples of 3 and 5
    const fizzbuzzInputs = [3,5,9,15,18,20,24];

    // for each input, make sure it returns fizz or buzz
    fizzbuzzInputs.forEach(function(input) {
      const answer = fizzBuzzer(input);
      if (input % 15 === 0) {
        expect(answer).to.equal('fizz-buzz');
      } else if (input % 5 === 0) {
        expect(answer).to.equal('buzz');
      } else if (input % 3 === 0) {
        expect(answer).to.equal('fizz');
      }
    });
  });

  // non-representative(unusual) inputs
  it('should throw an error if the args arent numbers', function() {

    // range of bad inputs
    const badInputs = ['hello', function(){}, true, false, '1'];

    // prove that an error is called for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});
