const functions = {
    add: (num1, num2) => num1 + num2,
    sub: (num2, num1) => num2 - num1,
    mult: (num1, num2) => num1 * num2,
    div: (num2, num1) => num2 / num1,
    beerChoice: () => {
        const choice = { beerBrand: 'Corona'};
        choice['beerType'] = 'Pilsner';
        return choice;
    }
}

test('Adds 2 + 2  to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2  to NOT equal 3', () => {
    expect(functions.add(2, 2)).not.toBe(3);
});

test('Multiplies 2 * 3 to equal 6', () => {
    expect(functions.mult(2, 3)).toBe(6);
});

test('Subs 10 - 5 to equal 5', () => {
    expect(functions.sub(10, 5)).toBe(5);
});

test('Divides 10 / 5 to equal 2', () => {
    expect(functions.div(10, 5)).toBe(2);
});

test('Beer should be Corona Pilsner', () => {
    expect(functions.beerChoice()).toEqual({
        beerBrand: 'Corona', 
        beerType: 'Pilsner'
    });
});