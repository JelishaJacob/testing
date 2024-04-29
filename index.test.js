const { capitalize, reverse, calculator, add, substract, divide, multiply } = require(".");

test('hello return Hello',()=>{
    expect(capitalize("hello")).toBe("Hello")
})

test('hello return olleh', () => {
    expect(reverse("hello")).toBe("olleh")
})

test('add function clearly',()=>{
    expect(add(1,2)).toBe(3)
})

test('substract function clearly',()=>{
    expect(substract(4,2)).toBe(2)
})

test('divide functions correctly', () => {
    expect(divide(2, 2)).toBe(1)
  })

  test('multiply functions correctly', () => {
    expect(multiply(2, 2)).toBe(4)
  });
  
  test('calculator object basic operations', () => {
    const calculator = calculator();

    expect(calculator.add(2, 2)).toBe(4);
    expect(calculator.subtract(2, 2)).toBe(0);
    expect(calculator.divide(2, 2)).toBe(1);
    expect(calculator.multiply(2, 2)).toBe(4);
  })