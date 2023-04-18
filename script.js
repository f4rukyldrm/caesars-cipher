function rot13(str) {

    let chars = str.split('');

    chars = chars.reduce((acc, curr) => {

        if (/[\W_]/.test(curr)) {
            acc.push(curr);
            return acc;
        }
        if (curr.charCodeAt() - 13 >= 65) {
            acc.push(curr.charCodeAt() - 13)
            return acc;
        } else {
            let extract = curr.charCodeAt() - 13;
            extract = 91 - (65 - extract);
            acc.push(extract);
            return acc;
        }
    }, [])

    let decoded = chars.map(char => {
        if (typeof char === 'string') {
            return char;
        }
        return String.fromCharCode(char);
    })

    decoded = decoded.join('');

    return decoded;
}


// ! tests
/* 
    rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
    rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
    rot13("SERR YBIR?") should decode to the string FREE LOVE?
    rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/