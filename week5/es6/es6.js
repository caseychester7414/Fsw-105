const name = "john"
const age = 101

function runForLoop(pets){
    const petObjects = []
    for (let i= 0; i < pets.length; i++){
    let pet = {type: pets[i]}
    let name;
    if (pets[i] ==="dog"){
        name = "john"
    } else { 
        name = "spot"
}
console.log("pet name:",name)
pet.name = name
petObjects.push(pet)
}
console.log("man name: ",name)
return petObjects
}
runForLoop(["cat","Dog"])


const carrots = ["bright orange","ripe","rotten"]
mapVegetables = (arr) => arr.map ((carrot)=> ({type: "carrot", name: carrot}))

console.log(mapVegetables(carrots))

const people = [
    {name: "Princess Peach",friendly: false},
    {name: "Luigi",friendly: true},
    {name: "Mario",friendly: true},
    {name: "Bowser",friendly: false}
]
filterForFriendly =(arr) => arr.filter  ((person)=> person.friendly)
console.log(filterForFriendly(people))

doMathSum =(a,b) => a + b
console.log(doMathSum(1,2))
produceProduct =(a,b)=> a * b
console.log(produceProduct(1,2))

printString = (first, last, age) => {
    console.log(`Hi ${first} ${last}, how does it feel to be ${age}?`);
};
printString("Jane","doe",100);

const animals = [
    {type: "dog", name: "theodore"},
    {type: "cat", name:"whiskers"},
    {type:"pig",name: "piglette"},
    {type:"dog",name: "sparky"}
]
const filterForDogs = arr => arr.filter(animal => animal.type === 'dog' ? true : false);
console.log(animals)

dankString = (first) => {
    console.log(`hi ${first}`);
};
dankString("Janice");

blangString = (location) => {
    console.log(`Welcome to ${location}`);
};
blangString("Hawaii");

rightString = (location) => {
    console.log(`I hope you enjoy your stay. Please ask the president of ${location} if you need anything`)
}
rightString("hawaii")


// name = (  ) => {  }


