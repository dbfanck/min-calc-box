function avg(numbers) {
    let s = 0;
    for (let i = 0; i < numbers.length; i++) {
        s += numbers[i];
    }
    return s / numbers.length;
}

function prime(num) {
    for(let i=2; i<=num/2 ; i++){
        if(num%i===0){
            return false; //num is not prime
        }
    }
    return true; //num is prime
}

function fact(num) {
    if(num>15){
        console.log("factorial num is acceptable up to 15");
        process.exit(1);
    }
    if(num===1){
        return 1;
    }
    else{
        return num*fact(num-1);
    }
}

module.exports = {
    avg,
    prime,
    fact
}