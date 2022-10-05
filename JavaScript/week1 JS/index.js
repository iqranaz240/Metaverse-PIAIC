//Q2
var pName = "Eric";
var message = `Hello ${pName}, would you like to learn some Python today?`;
console.log(message);

//Q3
var name = "Iqra";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.charAt(0).toUpperCase() + name.slice(1))

//Q4
console.log('Albert Einstein once said, "A person who never made a mistake never tried anything new".');

//Q5
var famous_person = "Albert Einstein";
var message = "A person who never made a mistake never tried anything new"
console.log(`${famous_person} once said, "${message}".`);


//Q6
var name1 = "\t Iqra \n \t \tNaz"
console.log(name1)
console.log(name1.replace(/\s+/g, ''))

//Q7-8
console.log(5+3)
console.log(9-1)
console.log(4*2)
console.log(16/2)

//Q9
var num = 1
console.log(`my favorite number is ${num}`)

//Q10
//my name is Iqra
/*
console.log(5+3)
console.log(9-1)
console.log(4*2)
console.log(16/2)
*/

//Q11
let names = ['Mahi', 'Mooazam', 'Duaa', 'Sani']
for (let i=0; i<names.length; i++)
{
    console.log(names[i])
}

//Q12
for (let i=0; i<names.length; i++)
{
    console.log(`Hi, Dear ${names[i]}`)
}

//Q13
let favVehicles = ['land cruiser', 'jet', 'sports bike']
let example = ['I would like to have a', 'I would love to have a', 'I will buy a']
for (let i=0; i<favVehicles.length; i++)
{
    console.log(`${example[i]} ${favVehicles[i]}.`)
}

//Q14
let guestList = ['Mama', 'Papa', 'Sister']
for (let i=0; i<favVehicles.length; i++)
{
    console.log(`Dear ${guestList[i]}, I would love to have a dinner with you at ABC place today at 9pm.`)
}

//Q15
console.log(guestList[2])
guestList[2] = 'Brother'
for (let i=0; i<favVehicles.length; i++)
{
    console.log(`Dear ${guestList[i]}, I would love to have a dinner with you at ABC place today at 9pm.`)
}

//Q16
let dinner_16 = ['Iqra', 'Imad', 'Osama', 'Waleed'];
for (let i = 0; i < dinner_16.length; i++) {
    console.log("Hello " + dinner_16[i] + ". I would like to invite you for dinner.");
}
console.log("I found a bigger dinner table");
dinner_16.splice(0, 0, "Hamza");
dinner_16.splice(3, 0, "Ali");
dinner_16.push("Shahbaz");
for (let i = 0; i < dinner_16.length; i++) {
    console.log("Hello " + dinner_16[i] + ". Now, I would like to invite you for dinner.");
}


// Question # 17
let dinner_17 = ['Iqra', 'Imad', 'Osama', 'Waleed'];
dinner_17.splice(0, 0, "Hamza");
dinner_17.splice(3, 0, "Ali");
dinner_17.push("Shahbaz");
console.log("I can invite only two people for dinner");
for (let i = dinner_17.length; i > 2; i--) {
    let dinner_17_i = dinner_17.splice(-1, 1)[0];
    console.log("Dear " + dinner_17_i + " I am sorry. I can’t invite you to dinner");
}
for (let i = 0; i < dinner_17.length; i++) {
    console.log(dinner_17[i] + ", you are invited!");
}
dinner_17.length = 0;
console.log(dinner_17);


// Question # 18
let cities_18 = ["Karachi", "Lahore", "Islamabad", "Dubai", "Toronto"];
console.log("Sorted: " + cities_18.slice().sort());
console.log("Unsorted: " + cities_18);
console.log("Reverse Sorted: " + cities_18.slice().sort().reverse());
console.log("Unsorted: " + cities_18);


// Question # 19
let dinner_19 = ['Iqra', 'Imad', 'Osama', 'Waleed'];
console.log("I am inviting " + dinner_19.length + " peoples to dinner");


// Question # 20
let car_20 = ['Bugatti', 'Ferrari', 'Mercedes', 'Lamborgini'];
console.log(car_20);


// Question # 21
var student_21 = {
    "name": "Iqra Naz",
    "department": "Information Technology",
    "education": "Bachelors in Software Engineering"
};
console.log(student_21.name);
console.log(student_21.department);
console.log(student_21.education);


// Question # 22
let car_22 = ['Bugatti', 'Ferrari', 'Mercedes', 'Lamborgini'];
console.log(car_22[4]);


// Question # 23
let name_23 = "Iqra";
let course_23 = "web3";
if (name_23 == "Iqra" && course_23 == "web3") {
    console.log("Name is True and Course is True");
}
else if (name_23 == "Iqra" && course_23 != "web3") {
    console.log("Only Name is True and Course is False");
}
else if (name_23 != "Iqra" && course_23 == "web3") {
    console.log("Only Course is True and Name is False");
}
else {
    console.log("False");
}


// Question # 24
let name_24 = "Iqra";
if (name_24 === "Iqra") {
    console.log("Name is True and Case is True");
}
else if (name_24 == "iqra") {
    console.log("Name is True");
}
else {
    console.log("False");
}


// Question # 25
let alien_color_25 = "black";

if (alien_color_25 == "black") {
    console.log("Player earned 5 points");
}
else if (alien_color_25 != "black") {
    console.log("");
}

if (alien_color_25 == "green") {
    console.log("Player earned 5 points");
}
else if (alien_color_25 != "green") {
    console.log("");
}


// Question # 26
let alien_color_26 = "green";

if (alien_color_26 == "green") {
    console.log("Player earned 5 points");
}
else if (alien_color_26 != "green") {
    console.log("Player earned 10 points");
}

if (alien_color_26 == "black") {
    console.log("Player earned 5 points");
}
else if (alien_color_26 != "black") {
    console.log("");
}


// Question # 27
var alien_color_27 = "green";
if (alien_color_27 == "green") {
    console.log("Player earned 5 points");
}
else if (alien_color_27 == "yellow") {
    console.log("Player earned 10 points");
}
else if (alien_color_27 == "red") {
    console.log("Player earned 15 points");
}

var alien_color_27 = "yellow";
if (alien_color_27 == "green") {
    console.log("Player earned 5 points");
}
else if (alien_color_27 == "yellow") {
    console.log("Player earned 10 points");
}
else if (alien_color_27 == "red") {
    console.log("Player earned 15 points");
}

var alien_color_27 = "red";
if (alien_color_27 == "green") {
    console.log("Player earned 5 points");
}
else if (alien_color_27 == "yellow") {
    console.log("Player earned 10 points");
}
else if (alien_color_27 == "red") {
    console.log("Player earned 15 points");
}


// // Question # 28
var age_28 = 22;
if (age_28 < 2 && age_28 >= 0) {
    console.log("You are a baby");
}
else if (age_28 < 4 && age_28 >= 2) {
    console.log("You are a toddler");
}
else if (age_28 < 13 && age_28 >= 4) {
    console.log("You are a kid");
}
else if (age_28 < 20 && age_28 >= 23) {
    console.log("You are a teenager");
}
else if (age_28 < 65 && age_28 >= 20) {
    console.log("You are an adult");
}
else if (age_28 >= 65) {
    console.log("You are an elder");
}


// Question # 29
var fruits_29 = ["mango", "apple", "banana", "guava", "pineapple"];
if (fruits_29.includes("mango")) {
    console.log("Mango is in the array");
}
else {
    console.log("Mango is not in the array");
}

var favourite_fruits_29 = ["mango", "apple", "banana"];
if (favourite_fruits_29.includes("mango")) {
    console.log("Mango is your favourite fruit");
}
if (favourite_fruits_29.includes("apple")) {
    console.log("Apple is your favourite fruit");
}
if (favourite_fruits_29.includes("banana")) {
    console.log("Banana is your favourite fruit");
}
if (favourite_fruits_29.includes("guava")) {
    console.log("Guava is your favourite fruit");
}
if (favourite_fruits_29.includes("pineapple")) {
    console.log("Pineapple is your favourite fruit");
}


// Question # 30
var usernames_30 = ["admin", "mooazam", "iqra", "imad"];
for (let i = 0; i < usernames_30.length; i++) {
    if (usernames_30[i] == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + usernames_30[i] + ", thank you logging in again");
    }
}


// Question # 31
var usernames_31 = [];
if (usernames_31.length == 0) {
    console.log("We need to find some users!");
}


// Question # 32
var current_users_32 = ["mooazam", "iqra", "imad", "shayan", "ali"];
var new_users_32 = ["zain", "mooazam", "usman", "saad"];
for (let i = 0; i < new_users_32.length; i++) {
    if (current_users_32.includes(new_users_32[i])) {
        console.log(new_users_32[i] + " Username already exist, try another name!");
    }
    else {
        console.log(new_users_32[i] + " Username is available!");
    }
}


// Question # 33
var num_33 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < num_33.length; i++) {
    if (num_33[i] == 1) {
        console.log("1st");
    }
    else if (num_33[i] == 2) {
        console.log("2nd");
    }
    else if (num_33[i] == 3) {
        console.log("3rd");
    }
    else if (num_33[i] != 1 && num_33[i] != 2 && num_33[i] != 3) {
        console.log(num_33[i] + "th");
    }
}

//Q34
let pizzas = ['fajita', 'pepperoni', 'chicken tikka']
for (let i=0; i<pizzas.length; i++)
{
    console.log(pizzas[i])
}
for (let i=0; i<pizzas.length; i++)
{
    console.log(`I love ${pizzas[i]} pizza!`)
}
console.log(`${pizzas[0]} pizza is spicy and full of flavors. It contains chicken, bell pepper, onion, jalapenos, lime juice and spices, plus tortillas and my favorite topping. I really love ${pizzas[0]} pizza!`)

//Q35
let animals = ['cat', 'dog', 'rabbit']
for (let i=0; i<animals.length; i++)
{
    console.log(animals[i])
}
for (let i=0; i<animals.length; i++)
{
    console.log(`${animals[i]} makes a great pet.`)
}
console.log('Any of these animals would make a great pet!')

//Q36
function make_shirt(size, text){
    console.log(`Q36: Shirt size is ${size} and it should have "${text}" printed on it.`)
}
make_shirt('Small', 'Javascript is fun.')

//Q37
function make_shirts(size, text){
    if ((size === 'large')||(size === 'medium')){
       console.log(`Shirt size is ${size} and it should have "I love Javascript." printed on it.`)
    }
    else {
        console.log(`Shirt size is ${size} and it should have "${text}" printed on it.`)
    }
}
make_shirts('medium', 'Javascript is fun.')

//Q38
function describe_city(city, country = "Pakistan"){
    console.log(`${city} is in ${country}.`)
}
describe_city('Karachi')
describe_city('Lahore')
describe_city('Makkah', 'Saudi Arabia')

//Q39
function city_country(city, country){
    console.log(`"${city}, ${country}"`)
}
city_country('Paris','Farance')
city_country('London', 'England')
city_country('Toronto','Canada')

//Q40
function make_album(artist, album, tracks='unknown'){
    let music_album = {
        artist: artist,
        album: album,
        tracks: tracks
    }
    console.log(music_album)
}
make_album('Justin Bieber', 'Justice', 16)
make_album('Asim Azhar', 'Noor')
make_album('Ed Shereen', 'Atlantic', 10)

//Q41
let magicians = ['Xord', 'Senta', 'Paul', 'Alen']
function show_magicians(magicians){
    console.log(magicians)
}
show_magicians(magicians)

//Q42
function make_great(magicians){
    return magicians+' Great'
}
let great_magicians = magicians.map(make_great)
console.log(great_magicians)

//Q43
const great_magicians_copy = great_magicians
show_magicians(magicians)
show_magicians(great_magicians_copy)

//Q44
function sandwiches(items){
    console.log(items)
}
sandwiches(['cheese','chicken','egg','salad','ketchup','mayonise','sauces'])
sandwiches(['cheese','salad','ketchup','mayonise','chicken','egg','sauces'])
sandwiches(['ketchup','mayonise','sauces','cheese','chicken','egg','salad',])

//Q45
function cars(manufacturer, model, color, auto){
    let cars = {
        manufacturer:manufacturer,
        model:model,
        color:color,
        auto:auto

    }
    console.log(cars)
}
cars('Toyota', 'Corolla','Black',true)
cars('Suzuki', 'Swift','Gray',true)
cars('Honda', 'Civic','White',true)


  





