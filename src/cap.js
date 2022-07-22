function cap(str) {
    let capital = str[0].toUpperCase() + str.slice(1, str.length);
    //make sure lengths match
    if (capital.length == str.length) {
        return capital
    }
}
module.exports = cap;