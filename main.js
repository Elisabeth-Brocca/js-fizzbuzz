//stampi i numeri da 1 a 100,

for(let i = 1; i<=100; i++){

    if ((i % 3) ===0 && (i % 5)===0){
        console.log("FrizzBuzz");
        //Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
    }else if((i%3)===0){
        console.log("Frizz");
        //ma per i multipli di 3 stampi “Fizz” al posto del numero 
    }else if((i % 5) ===0){
        console.log("Buzz");
        //e per i multipli di 5 stampi Buzz.
    }else{
        console.log(i);

    }
}


