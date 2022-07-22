const calculator = {
    sum: (a,b) => {
        return (isNaN(Number(a)) || isNaN(Number(b))) ? "Not all arguments are numbers" : Number(a) + Number(b);
    },
    subtract: (a,b) => {
        return (isNaN(Number(a)) || isNaN(Number(b))) ? "Not all arguments are numbers" : Number(a) - Number(b);
    },
    divide: (a,b) => {
        return (isNaN(Number(a)) || isNaN(Number(b))) ? "Not all arguments are numbers" : Number(a)/Number(b);
    },
    multiply: (a,b) => {
        return (isNaN(Number(a)) || isNaN(Number(b))) ? "Not all arguments are numbers" : Number(a) * Number(b);
    }
}
module.exports = calculator;