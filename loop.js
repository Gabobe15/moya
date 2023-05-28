const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//   In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

// const hasLand = []
// const hasntLand = []

// for(let i=0; i<countries.length; i++){
//     if(countries[i].includes('land')){
//         hasLand.push(countries[i])
//     }
//     else{
//         hasntLand.push(countries[i])
//     }
// }

// console.log(hasLand);
// console.log(hasntLand);


// console.log(countries);


  ['Finland','Ireland']

//   In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.


// const withAi = []
// const withOutAi = []

// for(let i=0; i<countries.length; i++){
//     if(countries[i].includes('ia')){
//         withAi.push(countries[i])
//     }
//     else{
//         withOutAi.push(countries[i])
//     }
// }
// console.log(withAi);
// console.log(withOutAi);

//  ['Albania', 'Bolivia','Ethiopia']

// Extract all the countries contain the word 'land' from the countries array and print it as array

// const containsLand = []
// for(let i=0; i<countries.length; i++){
//     if(countries[i].includes('land')){
//         containsLand.push(countries[i])
//     }
// }
// console.log(containsLand);

// Reverse the countries array and capitalize each country and stored it as an array

// const newCountries = [...countries]
// newCountries.reverse()
// for(country of newCountries){
//     console.log(country.toUpperCase());
// }

// const COUNTRIES = countries.map(country => country.toUpperCase())
// console.log(COUNTRIES);

// console.log(newCountries);
// console.log(countries);


// let str = ""
// for(let i=0; i<7; i++){
//     str += '#'
//     console.log(str);
// }


// random
// exercise level 1 
// Develop a small script which generate array of 5 random numbers
// let randArray = []
// for(let i=0; i<5; i++){
//     randArray.push(Math.floor(Math.random() * 10))
// }
// console.log(randArray);

//2. Develop a small script which generate array of 5 random numbers and the numbers must be unique

//3. Develop a small script which generate a six characters random id:
let sixChar = []
let char = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
for(let i=0; i<6; i++){
    let charRandom = Math.floor(Math.random() * char.length)
    sixChar += char[charRandom]
}
console.log(sixChar);

// 5j2khz

// exercise level 2 
// Develop a small script which generate any number of characters random id:

//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba

// Write a script which generates a random hexadecimal number.

// '#ee33df'

// Write a script which generates a random rgb color number.

// rgb(240,180,80)