const readline = require("readline-sync")
function escapee(key = false){
const escape2 = ["put hand in hole", "find the key or","open the door"]
const escape = readline.keyInSelect(escape2,"how would you like to escape the room?",)
console.log(escape2[escape])
console.log(key)
if (escape2[escape]== "put hand in hole"){
console.log("you have died")}
 else if (escape2[escape]== "find the key or"){
     console.log("searching for the key")
    var keyChance = Math.floor(Math.random() * 10)
    console.log(keyChance)
    if (keyChance > 4)
    {console.log("you found the key you can open the door")
    escapee(true)}
    if(keyChance === 4)
    {console.log("you found nothing")
    escapee()}
    if(keyChance < 4)
    {console.log("keep looking!")
    escapee()}
  
    
 }
 else if (escape2[escape]== "open the door"){
     console.log("you can only open the door with the key")
     console.log(key)
     if(key === true)
     {console.log("your free")}
     if(key === false)
     {console.log("your trapped you need the key!")
     escapee()}

 }}
escapee()

