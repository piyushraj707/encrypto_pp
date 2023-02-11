import bigInt from "big-integer";

function toNum(letter) {
    const ans=toString(letter)
    if(ans.length==1) return '0'+ans;
    else return ans;
}

function toBigInt (dPass) {
    const ans=""
    for (var i=0; i<dPass.length; i++) {
        ans+=toNum(dPass[i])
    }
    ans=bigInt(ans);
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

export function RSA(dPass) {
    const lenPrime=50;
    const d=toBigInt(dPass);

    const p = generateLargePrime(lenPrime);
    const p_=p.minus(1);
    const n=bigInt(1);
    var q=bigInt(1), q_=bigInt(1), n_=bigInt(1);
    
    while (q===bigInt.one || bigInt.gcd(n_, d)!==bigInt.one) {
        q=generateLargePrime(lenPrime);
        q_=q.minus(1);
        n_= p_.multiply(q_);
    }

    const e = bigInt(d).modInv(n_)
    n = p.multiply(q);
    return [n, e];
}