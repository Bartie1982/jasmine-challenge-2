  
describe("Fizz Buzz", function() {

    beforeEach(function() {
        fizzBuzz = new fizzBuzz();
    }); 
         
    describe("Checks divisibility return a number ", function() {
            it("should exist", function() {
             expect(fizzBuzz).toBeDefined();
        });    
            it("Return Fizz divisible  by 3", function() {
            var result = fizzBuzz(9)
            expect(result).toBe("Fizz");
        });
            it("Return Buzz divisible  by 5", function() {
            var result = fizzBuzz(10)
            expect(result).toBe("Buzz");
        }); 
          it("Return Fizz Buzz if divisible by 5 and 3", function() {
            var result = fizzBuzz(15)
            expect(result).toBe("Fizz Buzz");
        });
            it("Return Fizz divisible  by 2", function() {
            var result = fizzBuzz()
            expect(result).toBe("2");
    
        });
         
    });
});