const functions = {
    bitwiseEquals: (n, m) => !(n ^ m),
    containerHas: (obj) => {
        const container = ['Bud Light', 'Corona', 'Lagunitas IPA', 'Dos Equis Lager']
        return container.includes(obj)
    },
}


test('Test if n (4) and m (4) to be equal', () => {
    expect(functions.bitwiseEquals(4, 4)).toBe(true)
});

test('Test if n (9) and m (5) to be NOT equal', () => {
    expect(functions.bitwiseEquals(9, 5)).not.toBe(true)
});

test('Test if container holds Lagunitas IPA as an element to be true', () => {
    expect(functions.containerHas('Lagunitas IPA')).toBe(true)
});

test('Test if container holds Donuts as an element to be false', () => {
    expect(functions.containerHas('Donuts')).not.toBe(true)
});