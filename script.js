
// Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice


doctorFactory = (name, specialty, address) => ({
   "DoctorsName": name,
   "Specialty": specialty,
   "Address": address
})
console.log(doctorFactory("James", "cardiologist", "939 Seymour Ave"))

// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.
// Pet name
// Pet breed
// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels

barkFactory = (name, breed) => ({
    "petName": name,
    "petBreed": breed
})

let BowWowKennels = []
BowWowKennels.push(barkFactory("Clementine", "Pointer-Hound"))
BowWowKennels.push(barkFactory("Finn", "Mutt"))
BowWowKennels.push(barkFactory("Zoey", "Mutt"))
console.log(BowWowKennels)

// Your job is to sign each of these promising young music stars to the appropriate label.

// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.
// Create an array for each of these record labels.

// Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function 
// for each of the following artists and place the resulting object in the corresponding label array.


let jumpStop = []
let chatten = []
let polar = []

createBluegrassArtist = (name, age) => ({
    "name": name,
    "genre": "Bluegrass",
    "age": age
})

createCountryArtist = (name, age) => ({
    "name": name,
    "genre": "Country",
    "age": age
})

createFunkArtist = (name, age) => ({
    "name": name,
    "genre": "Funk",
    "age": age
})

createPopArtist = (name, age) => ({
    "name": name,
    "genre": "Pop",
    "age": age
})

createRapArtist = (name, age) => ({
    "name": name,
    "genre": "Rap",
    "age": age
})

jumpStop.push(createFunkArtist("Dre Funkz", 25))
jumpStop.push(createRapArtist("Dusta Grimes", 21))
jumpStop.push(createRapArtist("Loyonce Branis", 27))
chatten.push(createCountryArtist("Bruce Atikins", 23))
chatten.push(createBluegrassArtist("Bartholomew Danielson", 23))
chatten.push(createCountryArtist("Avilee Dallas", 19))
polar.push(createPopArtist("Jensen Brown", 20))
polar.push(createPopArtist("Austin Kinkaid", 22))
console.log({jumpStop},{chatten},{polar})
// Bruce Atikins is a Country artist and is 23 years old
// Jensen Brown is a Pop artist and is 20 years old
// Dre Funkz is a Funk artist and is 25 years old
// Dusta Grimes is a Rap artist and is 21 years old
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
// Avilee Dallas is a Country artist and is 19 years old
// Austin Kinkaid is a Pop artist and is 22 years old
// Loyoncé Branis is a Rap artist and is 27 years old