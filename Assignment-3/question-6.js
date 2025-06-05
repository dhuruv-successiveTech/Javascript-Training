//Q6.  Write a program to display prime numbers from 1 to 50

// Ans. 
    function isPrime(num){
        if(num<=1){
            return false;
        }
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i==0){
                return false;
            }
        }
        return true;
    }

    function primesInRange(){
        for(let i=1;i<=50;i++){
            if(isPrime(i)){   // Returns true if number is prime
                console.log(i);
            } 
        }
    }
    primesInRange();