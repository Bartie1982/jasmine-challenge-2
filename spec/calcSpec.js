  
describe("FizzBuzz function", function() {
    
    beforeEach(function() {
        fizzbuzz = new fizzBuzz();
    });
    
    describe("Returns number, fizz, buzz, fizzbuzz", function() {
       
        it("should exist", function() {
            expect(fizzBuzz).toBeDefined();
        });
        
        it("return Fizz (6)", function() {
            var result = fizzBuzz(6)
            expect(result).toBe("Fizz");
        });
                
        it("return Buzz (10)", function() {
            var result = fizzBuzz(10)
            expect(result).toBe("Buzz");
        });
        
        it("return FizzBuzz(15)", function() {
            var result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz");
        });
        it("should return 2 when called as fizzBuzz(2)", function() {
            var result = fizzBuzz(2)
            expect(result).toBe(2);
        });
    });
});