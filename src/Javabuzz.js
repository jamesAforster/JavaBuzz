class Javabuzz {

  _isDivisibleBy(number, divisor) {
    return (number % divisor === 0);
    
  }

  isDivisibleByFifteen(number) {
    return this._isDivisibleBy(number, 15);
  }

  isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3);
  }

  isDivisibleByFive(number) {
    return this._isDivisibleBy(number, 15);
  }
}