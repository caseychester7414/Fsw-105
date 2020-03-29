var Car = []
function Cars (year,make,price = "Car-prices"){
    this.year = year;
    this.make = make;
    this.price = price
    this.printCarDetails = () => {
        console.log(this)
    }
    Car.push(this)

}
let batman = new Cars("2015","altima","15000")
let catwoman = new Cars ("2016","toyota","20000")
let superman = new Cars ("2018","lambo","300000" )
console.log(Car)


var myTacoma = new Cars(2015,"Toyota","1");
myTacoma.printCarDetails();