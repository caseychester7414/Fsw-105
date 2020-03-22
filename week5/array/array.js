function fiveAndGreaterOnly(arr){
    const result = arr.filter(function(num){
        if(num > 5){
            return true;
        }
    });
    return result;
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

function evensOnly(arr){
    var result = arr.filter(function(x){
    if (x % 2 === 0){
    return true;

    }
});
return result;
}
console.log(evensOnly([3,6,8,2]));

function fiveCharactersOrFewerOnly(arr){
    var result = arr.filter(function(word){
        
        if (word.length <= 5){
        console.log(word.length)
        return word.length > 0;
}});

return result
}
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten","camping"]));

function peopleWhoBelongtoTheIlluminati(arr){
    var result = arr.filter(function(object){
        if (object.member === true){return object}
})
return result
}
console.log(peopleWhoBelongtoTheIlluminati([
    { name: "Angelina Jolie",
     member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));

function ofAge(arr){
    var result = arr.filter(function(object){
        if (object.age > 18){return object}
})
return result
}
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));

function doubleNumbers(arr){
    var result = arr.map(function(number){
        return number * 2
})
return result
}
console.log(doubleNumbers([2,5,100]));

function stringItUp(arr){
    var result = arr.map(function(cat){
        return cat.toString();
})
return result
}
console.log(stringItUp([2,5,100]));

function capatilizeNames(arr){
    var result = arr.map(function(names){
        return names.toUpperCase();
})
return result
}
console.log(capatilizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

function namesOnly(arr){
    var result = arr.map(function(names){
        return names.name
})
return result
}
console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age:80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }

]));

function makeStrings(arr){
    var result = arr.map(function(names){
        if(names.age >= 18)
    {
    console.log(names.name +" can go to the matrix")
}else{
    console.log(names.name +" cant go to the movies")
}})
return result
}
console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age:80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }

]));

function readyToPutInTheDom(arr){
    var result = arr.map(function(names){
        if (names.age >= 1)
    {
        console.log("h1" + names.name + "h1" + "h2" + names.age + "h2")
    }else{
        console.log("h2"+ names.age + "h2")
}});
return result
}
console.log(readyToPutInTheDom([
    {
        name: "Angelina Jolie",
        age:80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

function total(arr){
var result = arr.reduce(function(final, num){
  final += num
  return final
})
return result
}
console.log(total([1,2,3]));

function stringConcat(arr){
var result = arr.reduce(function(final,num){   
    return final
}, [1,2,3])
return result
}
console.log(stringConcat([1,2,3]))

function totalVotes(arr){
    var result = arr.reduce(function(final,voters){
        if(voters.voted){
            final++
        }
        return final
    }, 0)
    return result
}
var voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zach", age: 19, voted: false }
];
console.log(totalVotes(voters));


function shoppingSpree(arr){
    var result = arr.reduce(function(final,item){
        return final+item.price
    } ,0)
        return result
}
var wishlist = [
    {title: "tesla Model S", price: 90000},
    {title: "4 carat diamond ring", price: 45000},
    {title: "Fancy Hacking Sack", price: 5},
    {title: "Gold fidgit spiiner", price: 2000},
    {title: "a second Tsela Model s", price: 90000}
]; 
console.log(shoppingSpree(wishlist));

function flatten(arr){
    var result = arr.reduce(function(final,flat){
        return final.concat(flat)
    })
        return result
}
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
console.log(flatten(arrays));

var voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zach", age: 19, voted: false }
];
function voterResults(arr){
    var result = arr.reduce(function(final,age){
        if (age.voted && age.age > 18 && age.age < 25)final.youngVotes++
        if (age.age > 18 && age.age < 26)final.youth++
        if (age.voted && age.age > 26 && age.age < 35)final.midVotes++
        if (age.age > 26 && age.age < 35)final.mids++
        if (age.voted && age.age > 36 && age.age < 56)final.oldVotes++
        if (age.age > 36 && age.age < 56)final.olds++
        
        
        return final
    },{youngVotes:0,youth:0,midVotes:0,mids:0,oldVotes:0,olds:0})
        return result
}
console.log(voterResults(voters));

function leastToGreatest(arr){
     var result = arr.sort(function(a, b){return a-b});
    arr[0];
    return result
}
console.log(leastToGreatest([1,3,5,2,90,20]));

function greatestToLeast(arr){
    var result = arr.sort(function(a, b){return b-a});
   arr[0];
   return result
}
console.log(greatestToLeast([1,3,5,2,90,20]));


function LengthSort(arr){
    var result = arr.sort(function(a, b){return a.length-b.length});
   
    return result
}

console.log(LengthSort(["dog","wolf","by","family","eaten"]));

function alphabetical(arr){
    var result = arr.sort();
   
    return result
}

console.log(alphabetical(["dog","wolf","by","family","eaten"]));

function byAge(arr){
var result = arr.sort(function(a, b){return ( a.age - b.age)})

return result
}
console.log(byAge([{name: "Quiet Samurai", age:22},
{ name: "Arrogant ambassador", age: 100},
{name:"Misunderstood Observer", age: 2},
{name: "unlucky swami", age: 77}]))