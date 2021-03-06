describe('Javabuzz', function() {

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {
  
    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function () {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(4)).toBe(false);
    });
  });

});