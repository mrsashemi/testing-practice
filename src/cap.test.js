import cap from './cap.js';

test('f in first should be capital', () => {
    expect(cap('f')).toMatch(/^[A-Z]/);
})

test('expect no change in Hello World', () => {
    expect(cap('Hello World')).toMatch(/^[A-Z]/);
})

test('h in hello world to be uppercase', () => {
    expect(cap('hello world')).toMatch(/^[A-Z]/);
})

test('expect no change in !p¡', () => {
    expect(cap('!p¡')).not.toMatch(/^[A-Z]/);
})