import calculator from './calculator'

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.sum(1, 2)).toBe(3);
});

test('subtract 3 - 2 to equal 1', () => {
    expect(calculator.subtract(3, 2)).toBe(1);
});

test('divide 9/3 to equal 3', () => {
    expect(calculator.divide(9, 3)).toBe(3);
});

test('divide 9*3 to equal 27', () => {
    expect(calculator.multiply(9, 3)).toBe(27);
});
  
test('adds 1 + "2" to equal 3', () => {
    expect(calculator.sum(1, "2")).toBe(3);
});
  
test('subtract "3" - 2 to equal 1', () => {
    expect(calculator.subtract("3", 2)).toBe(1);
});

test('divide 9/"3" to equal 3', () => {
    expect(calculator.divide(9, "3")).toBe(3);
});

test('divide 9*"3" to equal 27', () => {
    expect(calculator.multiply(9, "3")).toBe(27);
});

test('adds 1 + "two" to return "Not all arguments are numbers"', () => {
    expect(calculator.sum(1, "two")).toBe("Not all arguments are numbers");
});
  
test('subtract "three" - 2 to return "Not all arguments are numbers"', () => {
    expect(calculator.subtract("three", 2)).toBe("Not all arguments are numbers");
});

test('divide 9/"three" to return "Not all arguments are numbers"', () => {
    expect(calculator.divide(9, "three")).toBe("Not all arguments are numbers");
});

test('divide 9*"three" to return "Not all arguments are numbers"', () => {
    expect(calculator.multiply(9, "three")).toBe("Not all arguments are numbers");
});



  
