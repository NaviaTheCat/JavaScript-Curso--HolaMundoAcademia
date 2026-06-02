function fizzBuzz(n) {
    // Si n es divisible por 3 y por 5 → "FizzBuzz"
    // Si n es divisible solo por 3 → "Fizz"
    // Si n es divisible solo por 5 → "Buzz"
    // Si no → devuelve el número como string (String(n))

    // TU CÓDIGO AQUÍ:
    
        if (n % 3 === 0 && n % 5 === 0) {
            console.log("FizzBuzz")
        }else if(n % 3 === 0){
            console.log("Fizz")
        }else if(n % 5 === 0){
            console.log("Buzz")
        }else{
            console.log(n)
        }
        return 0
}

fizzBuzz(15)
fizzBuzz(9)
fizzBuzz(10)
fizzBuzz(7)
fizzBuzz(30)
fizzBuzz(4)

