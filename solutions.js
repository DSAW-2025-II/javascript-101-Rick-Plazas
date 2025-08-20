// Sum of Two Numbers
function sum(a, b) {
  return a+b; 
}

// Factorial of a Number
function factorial(n) {
  if (n < 0) return null; //No hay factoriales negativos
  if (n === 0 || n === 1) return 1;

  let result = 1;

  for(let i = 2; i <= n; i++){
    result *= i;
  }
  return result;
}

// Find the Largest Number
function findLargest(arr) {

  let largest = arr[0]; //Se asume que el primero es el más alto

  for (let i = 1; i < arr.length; i++){ //Recorre el arreglo en la longitud del arreglo
    if(arr[i] > largest){ //Si la posición i del arreglo es más grande que la posición 1
      largest = arr[i]; //La posición más alta se actualiza 
    }
  }
  return largest; 
}

// Count Vowels in a String
function countVowels(str) {
  const vowels = "aeiouAEIOU";

  let count = 0; //Arranca el contador
  for(let char of str){ //Se declara una variable que contenga la constante de la función
    if(vowels.includes(char)){ //Si la cadena incluye la variable que contiene la constante, o sea las vocales
      count ++; //se aumenta el contador
    }
  }
  return count;
}

// Check if a Number is Prime
function isPrime(n) {
  if (n <= 1){  //Los números menores a 1 no son primos
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++){  //Si un nu´mero no tiene divisores iguales a su raíz, no tiene divisores
    if (n % i == 0){ //Número divisible por n sin residuo
      return false;
    }
    
  }

  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
