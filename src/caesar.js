let cipher = {
    65: "A",
    66: "B",
    67: "C",
    68: "D",
    69: "E",
    70: "F",
    71: "G",
    72: "H",
    73: "I",
    74: "J",
    75: "K",
    76: "L",
    77: "M",
    78: "N",
    79: "O",
    80: "P",
    81: "Q",
    82: "R",
    83: "S",
    84: "T",
    85: "U",
    86: "V",
    87: "W",
    88: "X",
    89: "Y",
    90: "Z"
}

function caesar(str, shifter) {
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        let adjustShifter;

        //Check to see if the shifter might overshoot and adjust it accordingly
        let x = str[i].toUpperCase();
        let overShot = x.charCodeAt(0) + shifter;

        if (overShot > 90) {
            adjustShifter = (overShot - 90) - 1;

            if (adjustShifter > 26) {
                adjustShifter = (adjustShifter % 26) - 1;
            }
        }

        //Compare against the cipher hashmap
        if (cipher[str.charCodeAt(i)]) {
            (overShot > 90) ? arr.push(cipher[65 + adjustShifter]) : arr.push(cipher[str.charCodeAt(i) + shifter]);
        } else if (cipher[str.charCodeAt(i) - 32]) {
            (overShot > 90) ? arr.push(cipher[65 + adjustShifter].toLowerCase()) : arr.push(cipher[str.charCodeAt(i) - 32 + shifter].toLowerCase());
        } else {
            arr.push(str[i]);
        }
    }

    return arr.join('');
}
module.exports = caesar;