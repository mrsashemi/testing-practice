import reverse from './reverse.js';

test('hello to return olleh', () => {
    expect(reverse('hello')).toBe('olleh');
})

test('hello I am the world to return dlrow eht ma I olleh', () => {
    expect(reverse('hello I am the world')).toBe('dlrow eht ma I olleh');
})

test('expect 12345 to be 54321', () => {
    expect(reverse('12345')).toBe('54321');
})

test('expect racecar to be racecar', () => {
    expect(reverse('racecar')).toBe('racecar');
})

test('expect Racecar to be racecaR', () => {
    expect(reverse('Racecar')).toBe('racecaR');
})