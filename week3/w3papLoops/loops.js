
var officeItems = ["stapler", "monitor", "computer", "desk","lamp","computer","stapler","computer","stapler","computer"]
// console.log(officeItems.length)
var computer =0;

for (var i=0;i<officeItems.length;i++)
{
     if ("computer" === officeItems[i])
 {
     computer = computer +1
}{
}
}
console.log(computer)
 
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender:"male"
    },{
        name: "Madeline",
        age: 80,
        gender:"female"
    },{
        name: "Cheryl",
        age: 22,
        gender:"Female"
    },{
        name: "Sam",
        age: 30,
        gender:"male"
    },{
        name: "Suzy",
        age: 4,
        gender:"female"
    }
]
var gender = "him"
for (var i = 0; i <peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'male'){
       gender = "him"
    }else{
        gender = "her"
    }
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is old enough to see Mad Max"+"dont let" + gender+ "in")
    }else{ 
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max"+"dont let"+gender+"in")
    }
}
for(i = 0; i <= 101; i++){
    if(i % 2 == 0){
        console.log("even")
    }else{
        console.log("odd")
    }
}