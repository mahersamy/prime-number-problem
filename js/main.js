

function isPrime(number){
    for(var i=2;i<=number/2;i++){
        if(number%i ===0){
            return false;
        }
    }
    return true;
}



function printAllPrimeNumbers(n,m){
    var res=[];
    for(var i=n;i<=m;i++){
        if(isPrime(i) === true && i!=1){
            res.push(i);
        }
    }
    return res;
    

}
console.log(printAllPrimeNumbers(1,1000));

