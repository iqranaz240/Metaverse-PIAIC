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


  





