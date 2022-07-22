import analyzeArray from "./analyzeArray";

test('expect [2,3,5,1,4] to return {average: 3, min: 1, max: 5, length: 5}', () => {
    expect(analyzeArray([2,3,5,1,4])).toStrictEqual({average: 3, min: 1, max: 5, length: 5})
})

test('expect [1,8,3,4,2,6] to return {average: 4, min: 1, max: 8, length: 6}', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({average: 4, min: 1, max: 8, length: 6})
})