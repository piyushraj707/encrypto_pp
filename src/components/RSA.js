// import bigInt from "big-integer";
const bigInt = require("big-integer")

export function mToC(msg) { //message-to-cipher function
    const n=bigInt(localStorage.getItem("n"));
    const e=bigInt(localStorage.getItem("e"));
    var c=bigInt(toBigInt(msg));
    c=c.modPow(e, n);
    localStorage.setItem("c", c.toString())
    return c.toString();
}

function fromBigInt(m) {
    const len=(Math.floor(m.length/2))
    var ans="";
    for (var i =0; i<len; i++) {
        var temp=m[2*i]+m[2*i+1];
        temp=parseInt(temp)+23;
        ans+=String.fromCharCode(temp);
    }
    return ans;
}

export function cToM(cipher, prvKey) {//decryption key
    cipher=bigInt(cipher);
    const n=bigInt(localStorage.getItem("n"));
    const d=bigInt(toBigInt(prvKey)+"1");
    var m=cipher.modPow(d, n);
    console.log("decrypted msg", m.toString());
    m=fromBigInt(m.toString());
    return m;
}

function toNum(letter) {
    var ans=letter.charCodeAt(0);
    ans=ans-23;
    ans=ans.toString();
    if(ans.length===1) {
        return '0'+ans;
    }
    else return ans;
}

function toBigInt (dPass) {
    var ans=""
    for (var i=0; i<dPass.length; i++) {
        ans+=toNum(dPass[i])
    }
    return ans;
}

function generateLargePrime(numDigits) {
    const accuracy = 40; // number of iterations for the Miller-Rabin primality test

    let prime = bigInt.randBetween(
        bigInt(10).pow(numDigits - 1),
        bigInt(10).pow(numDigits)
    );

    while (!prime.isProbablePrime(accuracy)) {
        prime = bigInt.randBetween(
            bigInt(10).pow(numDigits - 1),
            bigInt(10).pow(numDigits)
        );
    }

    return prime;
}

// d: decryption key
// e: encryption key
// p: first prime number
// q: second prime number
// n, e: public key for RSA encyrption (where n=p*q)

function RSA(dPass) {
    const lenPrime=50;
    const checkLimit=20;
    const d=bigInt(toBigInt(dPass)+"1");  //make sure that the key is an odd number.

    var p = generateLargePrime(lenPrime);
    var q = generateLargePrime(lenPrime);
    var p_ = p.minus(1);
    var q_ = q.minus(1);
    var n=p.multiply(q)
    var n_=p_.multiply(q_)

    var a=0;
    while (bigInt.gcd(n_, d).value!==bigInt.one.value) {
        p = generateLargePrime(lenPrime);
        q = generateLargePrime(lenPrime);
        p_ = p.minus(1);
        q_ = q.minus(1);
        n=p.multiply(q)
        n_=p_.multiply(q_)
        a=a+1;
        console.log("gcd: ", bigInt.gcd(n_, d).value)
        if (a>checkLimit) break;
    }

    if (bigInt.gcd(n_, d).value!==bigInt.one.value) return [-1, -1];

    //creating the encryption key:
    const e=d.modInv(n_);
    return [n.toString(), e.toString()];
}

// var fff=mToC("adsfadsasdfb")
// console.log(fff)

export default RSA;