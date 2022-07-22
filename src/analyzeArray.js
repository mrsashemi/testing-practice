function analyzeArray(arr) {
    let sorted = arr.sort((a,b) => {return a-b})
    let avg = arr.reduce((a,b) => a+b, 0)/arr.length;

    return {average: avg, min: sorted[0], max: sorted[arr.length - 1], length: arr.length}
}
module.exports = analyzeArray