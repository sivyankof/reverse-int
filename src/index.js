module.exports = function reverse(n) {
    let nbr = n.toString().split("");
    if (nbr[0] == `-`) {
        nbr.shift();
        return Number(nbr.reverse().join(""));
    } else {
        return Number(n.toString().split("").reverse().join(""));
    }
};

// function reverse(n) {
//     let nbr = n.toString().split("");
//     if (nbr[0] == `-`) {
//         nbr.shift();
//         return Number(nbr.reverse().join(""));
//     } else {
//         return Number(n.toString().split("").reverse().join(""));
//     }
// }

// reverse(-12345);
// reverse(5678);
