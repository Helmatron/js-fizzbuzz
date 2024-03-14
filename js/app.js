// console.log('Ciao Mondo!')


//Per iniziare scrivi un programma che stampi in console i numeri da 1 a 100,
for (let i = 1 ; i <= 100 ; i++) /* number */ {
// console.log(i)


let num = i + 1
const resto3 = num % 3 // multipli di 3
const resto5 = num % 5 // multipli di 5




if (resto3 === 0 && resto5 === 0) // Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
{
    console.log('FizzBuzz')
} else if (resto3 === 0) {
        console.log('Fizz') // per i multipli di 3 stampi “Fizz” al posto del numero
} else if (resto5 === 0) {
        console.log('Buzz') // per i multipli di 5 stampi “Buzz” al posto del numero.
} else {
    console.log(num) // in tutti gli altri casi venga stampato il numero stesso

} 
 }

