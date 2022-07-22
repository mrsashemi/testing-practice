import caesar from './caesar'

test('expect Hello World with shifter 1 to return Ifmmp Xpsme', () => {
    expect(caesar('Hello World', 1)).toBe('Ifmmp Xpsme');
})

test('expect Hello World with shifter 5 to return Mjqqt Btwqi', () => {
    expect(caesar('Hello World', 5)).toBe('Mjqqt Btwqi');
})

test('expect Hello World with shifter 15 to return Wtaad Ldgas', () => {
    expect(caesar('Hello World', 15)).toBe('Wtaad Ldgas');
})

test('expect Hello World with shifter 25 to return Gdkkn Vnqkc', () => {
    expect(caesar('Hello World', 25)).toBe('Gdkkn Vnqkc');
})

test('expect Hello... World! with shifter 1 to return Ifmmp... Xpsme!', () => {
    expect(caesar('Hello... World!', 1)).toBe('Ifmmp... Xpsme!');
})