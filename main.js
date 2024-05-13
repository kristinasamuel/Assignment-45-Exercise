#! /usr/bin/env node
// Assignmet 45 exercise solution
//QUESTION NO 2 SOLUTION
// Personal Message: store a person's name in a variable, and print a message to the that person.
// your message should be simple,such as "hello eric,would you like to learn some phython today?"
let person_name = "Eric";
console.log(`Hello ${person_name}, would you like to learn some Python today?`);
// QUESTION NO 3 SOLUTION
// Name Cases: store a person's name in a variable,and then print the person's name in
// lowercase,uppercase, and titlecase.
let personName = "kristina";
console.log("lowercase:", personName.toLowerCase());
console.log("uppercase:", personName.toLocaleUpperCase());
console.log("titlecase:", personName.replace(/\bw/g, (c) => c.toUpperCase()));
// QUESTION NO 4 SOLUTION
// Famous quote: find a quote from a famous person you admire.print the quote and the name of its authore
// Your original should look something like the following .
// Albert Einstein once said,"A person who never made a mistake never tried anything new."
let quote = "A person who never made a mistake never tried anything new.";
let author = "Albert Einstein";
console.log(`${author} once said,"${quote}"`);
//QUESTION NO 5 SOLUTION
// Famous Quote 2: Repeat exercise 4, but this time store the famous person name in a variable callded message.
// print your message.
let Quote = "A person who never made a mistake never tried anything new.";
let famouse_person = "Albert Einstein";
let message = `${famouse_person} once said,"${Quote}"`;
console.log(message);
//QUESTION NO 6 SOLUTION
// Stripping Names: store a perosn name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination,"\t" and "\n", at least once.Print the once ,so the whitespace around
// the name is displayed.then print the name after stripping the white spaces.
let PersonName = "\n\t Victor John \t\n";
console.log(PersonName);
let stripped = PersonName.trim();
console.log(stripped);
// QUESTION NO 7 SOLUTION
// Number Eight: Write addition,subtraction,multiplication and division operations that each result in the number 8.
// Be sure to enclose your operation in print statements to see the result.
// QUESTION NO 8 SOLUTION
// You should creat four lines that look like this: console.log(5 + 3)
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
// QUESTION NO 9 SOLUTION
// Favourite Number: store your favorite number in a variable.Then, using that variable,creat a message
// that reveals your favorite number. Print that message.
let favoriteNumber = 7;
console.log(`My favorite number is ${favoriteNumber}`);
//QUESTION NO 10 SOLUTION
// Adding Comments:
// write one sentence describing what the program does.
// my name is kristina
//ndated: 18/3/2024
// this program will run simple code just like hello world
console.log(`hello world`);
//QUESTION NO 11 SOLUTION
// Names: Store the names of a few of your friends in a array called names.Print each person's name by
// accessing each  element in the list, one at a time.
let members = ["sana", "javeriya", "jessica", "andrew", "aman"];
for (let i = 0; i < members.length; i++) {
    console.log(members[i]);
}
// QUESTION NO 12 SOLUTION
// Greeting:  start with the array you used in Exercise 11 ,but instead of just printing each person's name.
// print a message to them. The text of each message should be the same, but each message should be personalized
// with the persons's name.
let member = ["sana", "javeriya", "jessica", "andrew", "aman"];
let messages = `Please eat your lunch  `;
for (let i = 0; i < members.length; i++) {
    console.log(messages + members[i]);
}
// QUESTION NO 13 SOLUTION
// Your Own Array: Think of your favorite mode of transportation,such as a motorcycle or a car, and make list
// that stores several examples. Use your list to print a series of statements about these items,such as"I would
// like to own a Honda motorcycle".
let transportation = ["civic", "bike", "bus", "suzuki"];
for (let i = 0; i < transportation.length; i++) {
    console.log(`I would like to own a ` + transportation[i]);
}
// QUESTION NO 14 SOLUTION
// Guest List: if you could invite anyone, living or deceased, to dinner, who would you invite? Make a list
// that includes at least three people you'd like to invite to dinner.Then use your list to print a messagge
// to each person, inviting them to dinner.
let guestList = ["AMAN", "ASHWARYA", "JESSICA", "JASON"];
for (let i = 0; i < guestList.length; i++) {
    console.log("Repected Sir/Madam:  " +
        guestList[i] +
        "\n We invite you on dinner tommorrow.\n\nThank You");
}
// QUESTION NO 15 SOLUTION
// Changing guest list: you just heard that one of your guest can't make dinner so you need to send out a new
// set of invitation from exercise 14 modify your list.
let guest_list = ["AMAN", "ASHWARYA", "JESSICA", "JASON"];
for (let i = 0; i < guest_list.length; i++) {
    console.log("Repected Sir/Madam:  " +
        guest_list[i] +
        "\n We invite you on dinner tommorrow.\n\nThank You");
}
let not_coming = "ASHWARYA";
let new_guest = "VIKRAM";
guest_list[1] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log("Repected Sir/Madam:  " +
        guest_list[i] +
        "\n We invite you on dinner tommorrow.\n\nThank You");
}
console.log(`\nMrs. ${not_coming} will not coming on tommorrow dinner.`);
// QUESTION NO 16 SOLUTION
// More guest: you just found a bigger dinner table,so know more space is available.think of three more guest to
// invite start with exercise 15.
let GuestList = ["AMAN", "ASHWARYA", "JESSICA", "JASON"];
let NotComing = "ASHWARYA";
let NewGuest = "vikram";
GuestList[1] = NewGuest;
for (let i = 0; i < GuestList.length; i++) {
    console.log("Repected Sir/Madam:  " +
        GuestList[i] +
        "\n We invite you on dinner tommorrow.\n\nThank You");
}
GuestList.unshift("SHAHEEN", "RIZWAN", "WILLIAM");
for (let i = 0; i < GuestList.length; i++) {
    console.log("Repected Sir/Madam:  " +
        GuestList[i] +
        "\nwe invited you on dinner tommorrow.We found a biggger table so we decide to invite 3 more guest. .\n\nThank You");
}
// QUESTION NO 17 SOLUTION
// Shrinking guest list: you just found out that your new diner table won't arrive in time for the dinner,and
// you have space for only two guest remove guest from the list.
let GUESTLIST = ["AMAN", "ASHWARYA", "JESSICA", "JASON"];
let NOTCOMING = "ASHWARYA";
let NEWGUEST = "vikram";
GUESTLIST[1] = NEWGUEST;
GUESTLIST.unshift("SHAHEEN", "RIZWAN", "WILLIAM");
console.log(`\nUnfortunately we can not arrange a big table,only two people are allow.`);
while (GUESTLIST.length > 2) {
    let remove_guest = GUESTLIST.pop();
    console.log(`Sorry Sir/Madam :${remove_guest} you ae not invited for dinner.`);
}
for (let i = 0; i < GUESTLIST.length; i++) {
    console.log(`Respected Sir/Madam ` +
        GUESTLIST[i] +
        `\nYes you are still invited on tomorrow dinner\nThank You \n`);
}
GUESTLIST.splice(0, 2);
console.log(GUESTLIST);
// QUESTION NO 18 SOLUTION
// Seeing the world: think of at least five places in the world you'd like to vist.
// print array, show array , print in original array , reverse the order of your list.
let places = ["Ahmedabad", "France", "Belgium", "Dubai", "China"];
console.log(`original: ` + places);
console.log(`copy: ` + [...places].sort());
console.log(`original: ` + places);
console.log(`copy: ` + [...places].sort().reverse());
console.log(`copy: ` + [...places].sort().reverse());
console.log(`original: ` + places.sort());
console.log(`original: ` + places.sort().reverse());
// QUESTION NO 19 SOLUTION
// Dinner guest: Working with one of the programs from exercise 14 through 18, print a message
// indicating the number of people you are inviting to dinner.
let guestsList = ["AMAN", "ASHWARYA", "JESSICA", "JASON"];
for (let i = 0; i < guestsList.length; i++) {
    console.log("Repected Sir/Madam:  " +
        guestsList[i] +
        "\n We invite you on dinner tommorrow.\n\nThank You");
}
console.log(`\n Printing number of guests invited.`);
console.log(`We had finally invited ${guestsList.length} guests .`);
//QUESTION NO 20 SOLUTION
// Think of the something you could store in array.For example, you could make a list of mountains,rivers,countries
// cities,languages or anything else you'd like. write a program that creates a list containing these items.
let countriesName = ["AMERICA", "CANADA", "ITLAY", "CHINA", "TURKEY"];
console.log("list of countries:");
for (let top of countriesName) {
    console.log(top);
}
const book = {
    name: "INFORMATION TECHNOWLOGY ",
    price: 580,
};
const stories = {
    name: "SPIDER MAN",
    price: 470,
};
console.log(`\nbook name: ${book.name}, price:Rs ${book.price}`);
console.log(`\nstories name: ${stories.name}, price:Rs ${stories.price}`);
// QUESTION NO 22 SOLUTION
// Intentional error: if you haven't received an array index array in one of your program yet,try to make one happen
// change an index in one of your program to produce an index error. make sure you correct the error
// before closing the programs.
let array = ["AMAN", "SHAHEEN", 7, 4, 2, "JOHNSON"]; // check by net
console.log(array[5]);
// QUESTION NO 23 SOLUTION
// Conditional tests: write a series of coditional test. print a statement describing each test and your
//  prediction for the result of each test.your code like this let car = 'subaru'.look closely at your result
// creat at least 10 test 5 true and 5 false.
let Car = "subaru";
// test 1 equalitiy camparison
console.log("Is car == 'subaru'? I predict True.");
console.log(Car == "subaru");
// test 2 strict equality camparison
console.log("Is car === 'subaru'? I predict True.");
console.log(Car === "subaru");
// test 3 Inequality camparison
console.log("Is car != 'subaru'? I predict False.");
console.log(Car != "subaru");
// test 4 strict inequality camparison
console.log("Is car !== 'subaru'? I predict False.");
console.log(Car !== "subaru");
// test 5 less then comparison
console.log("Is car < 'subaru'? I predict False.");
console.log(Car < "subaru");
// test 6 Greater than camparison
console.log("Is car > 'subaru'? I predict False.");
console.log(Car > "subaru");
// test 7 less then or equal camparison
console.log("Is car <= 'subaru'? I predict true.");
console.log(Car <= "subaru");
// test 8 greater then or equal to
console.log("Is car >= 'subaru'? I predict False.");
console.log(Car >= "subaru");
// test 9 checking truthness
console.log("Is car? I predict True");
console.log(Car);
// test 10 checking falseness
console.log("Is car? I predict False");
console.log(!Car);
// QUESTION NO 24 SOLUTION
// More Conditional test you don't have to limit the number of tests you creat to 10 if you want to try more
// comparison, write more tests. have at least one true and one false result for each following.
let car = 'subaru';
let age = 22;
let number = [1, 2, 3, 4];
// string test
//test 1 equality
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru'); // 
// test 2 strict inequality
console.log("Is car === 'subaru'? I predict false.");
console.log(car === 'subaru');
// test 3 inequality
console.log("Is car != 'toyota'? I predict true.");
console.log(car != 'toyota');
// test 4 inequality
console.log("Is car != 'subaru'? I predict false.");
console.log(car != 'subaru');
// lowercase function tests
// test 5 lower conversion
console.log(" Is car.toLowerCase() == 'subaru'? I predict true.");
console.log(car.toLowerCase() == 'subaru');
// test 6 lowercase conversion
console.log(" Is car === car.toLowerCase()? I predict false.");
console.log(car === car.toLowerCase());
// numerical tests
// test 7 equallity
console.log("Is age == 22? I predict true.");
console.log(age == 22);
// test  8 in equality
console.log("Is age != 27? I predict true.");
console.log(age != 27);
// test 9 greatter than
console.log("Is age > 27? I predict false.");
console.log(age > 27);
//test 10 less than or equal
console.log("Is age <= 22? I predict true.");
console.log(age <= 22);
// logical operator
// test 11 AND
console.log("Is age > 20 && < 27 ? I predict true.");
console.log(age > 20 && age < 27);
// test 12 OR
console.log("Is age > 27 || < 18 ? I predict false.");
console.log(age > 27 && age < 18);
// array tests
// test 13 in array
console.log("Is 3 in numbers? I predict true.");
console.log(3 in number);
// test 14 not in a array
console.log("Is 5 in numbers? I predict false.");
console.log(5 in number);
// QUESTION NO 25 SOLUTION
// Imagine an alien was just shot down in a game. creat a variable called alien color and assign it a value of "green"
// ,"yellow", "red".
let alien_colour = "green";
if (alien_colour === "green") {
    console.log("The player just earned 5 points.");
}
// the version that faIls will have no output
alien_colour = "red";
if (alien_colour === "green") {
    console.log("The player just earned 5 points.");
}
// QUESTION NO 26 SOLUTION
// alien colour #2:choose a colur for an alien as you did in exercise 25 and write if else chain.
let alienColour = "green";
// printing message play earn 5 points
// printing message play earn 10 points in else statement
if (alienColour == "green") {
    console.log("The player just earned 5 points for shot the alien.");
}
else {
    console.log("The player just earned 10 points");
}
// Secound version
if (alienColour == "blue") {
    console.log("Alien color is blue");
}
else {
    console.log("I am come from Else statement.");
}
// QUESTION NO 27 SOLUTION
// Alien colors #3: turn your if else chain for exercise 25,26 into an if else chain.
// version 1
let AlienColor = "green";
//if alien is green print message that the player earned 5 points.
if (AlienColor == "green") {
    console.log("The player just earned 5 points.");
}
// if alien is yellow print message that the player earned 10 points.
else if (AlienColor == "yellow") {
    console.log("The player just earned 10 points.");
}
// if alien is red print message that the player earned 15 points
else if (AlienColor == "red") {
    console.log("The player just earned 15 points.");
}
else {
    console.log("Please select right colour");
}
//wtite three version of this program,make sure each message is printed for appropeiate color alien.
// version 2
AlienColor = "yellow";
if (AlienColor == "green") {
    console.log("The player just earned 5 points.");
}
else if (AlienColor == "yellow") {
    console.log("The player just earned 10 points.");
}
else if (AlienColor == "red") {
    console.log("The player just earned 15 points.");
}
else {
    console.log("Please select right colour");
}
// version 3
AlienColor = "red";
if (AlienColor == "green") {
    console.log("The player just earned 5 points.");
}
else if (AlienColor == "yellow") {
    console.log("The player just earned 10 points.");
}
else if (AlienColor == "red") {
    console.log("The player just earned 15 points.");
}
else {
    console.log("Please select right colour");
}
// QUESTION NO 28 SOLUTION
// Stages of life: write an if else chain that determine a person stage of life.set a value for the variable age
// person is less then 2 year old print message a person is baby.
let Age = 66;
if (age < 2) {
    console.log("The person is a baby.");
}
// if the person is at least 2 year old but less than 4, print a message the person is toddler
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
// if the person at least 4 year old but less then 13,print a message a person is a kid.
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
// if the person is at least 13 year old but less then 20, print a message the person is teenager.
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
// if the person is at least 20 year old but less then 65, print a message the person is adult.
else if (age >= 20 && age < 65) {
    console.log("The person is a adult.");
}
// if the person age is 65 or older year print a message the person is an elder.
else {
    console.log("the person is an elder.");
}
// QUESTION NUMBER 29 SOLUTION
// Make a array of your favorite fruite, and then write a series of independed if if statement that check
//  for certain fruits in your array.
let favorite_fruits = ["Mango", "Apple", "Banana"];
// write a  5 series of if statement
if (favorite_fruits.includes("Mango")) {
    console.log("I really like Mango!");
}
if (favorite_fruits.includes("Apple")) {
    console.log("I really like Apple!");
}
if (favorite_fruits.includes("Banana")) {
    console.log("I really like Banana!");
}
if (favorite_fruits.includes("Orange")) {
    console.log("I really like Orange!");
}
if (favorite_fruits.includes("Cherry")) {
    console.log("I really like Cherry!");
}
// QUESTION NO 30 SOLUTION
// Hello Admin: make a array of five or more user name including the name "admin". Imagin you are writing code
// that will print greeting to each user after they log into a website.loop through the array.
let users = ["sana", "hina", "aman", "eric", "admin"];
// printing message
for (let user of users) {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
}
// QUESTION NO 31 SOLUTION
// No Users:Add an if test to exercise 28 to make sure the list of users is not empty. if the list is empty print the
// messga we need to find some users. remove all the users names from array and make sure the correct message print.
let userNames = ["ameen", "ali", "sana", "waniya", "admin"];
if (userNames.length === 0) {
    console.log("we need to find some users!");
}
else {
    userNames = [];
    console.log("all user names have been removed" + userNames.length);
}
// QUESTION NUMBER 32 SOLUTION
// Checking usernames: Do the following to creat a program that simulates how websutes ensure that
// every one has a unique user name.
let currentUsers = ["AshWerya", "SanjAna", "Ruhi", "RaMan", "John"];
let newUsers = ["Bilal", "Raman", "william", "Jamas", "Ruhi"];
newUsers.forEach((newUsername) => {
    let lowerCase = newUsername.toLowerCase();
    if (currentUsers.map((c_user) => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${newUsername} is not available. Please write a different username`);
    }
    else {
        console.log(`The username ${newUsername} is avaiable`);
    }
});
// QUESTION NUMBER 33 SOLUTION
// Ordinal numbers: Ordinal number indicate their position in a array, such as 1st,2nd,3rd.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// loop through the array
for (let num of numbers) {
    let ordinalEnding;
    if (num == 1) {
        ordinalEnding = "st";
    }
    else if (num == 2) {
        ordinalEnding = "nd";
    }
    else if (num == 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(`${num}${ordinalEnding}`);
}
// QUESTION NO 34 SOLUTION
// Pizzas: Think of at least three kind of you favorite pizza Store these pizza names in array and then use
// a for loop to print the name of each pizza
let pizzas = ["Pepperoni", "Chessy", "BBQ chicken"];
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}
// add a line at end of your program,i really love pizza!
console.log(`I really love pizza!`);
// QUESTION NO 35 SOLUTION
// Animals: Think of three different animal that have common characteristic and store in a list, and use a for loop to
// print out the names of each animal
let Animals = ["Cat", "Dog", "Rabbit"];
// print the for loop to print the name of each animal
for (let Animal of Animals) {
    console.log(`A ${Animal} would make a great pet.`);
}
// printing message
console.log(`Any of these animals would make a great pet!`);
// QUESTION NO 36 SOLUTION
// T shirt: write a function called  make_shirt() that accept a size and test of a message that should be print on the
// shirt.The function should print a sentence summarizing the size of the shirt and the message print on it. Call function.
function makeShirt(size, text) {
    console.log(`Creating a ${size} shirt with a message: ${text}`);
}
// call function
makeShirt("large", "Have a nice day");
makeShirt("small", "Have a nice day");
makeShirt("medium", "Please come again");
// QUESTION NO 37 SOLUTION
// Large shirt: modify the make shirt() function so that shirts are large by default with a message that reads
//I Love typescript make a large shirt and medium with the default message.and a shirt of any size with different message.
function make_shirt(size = "large", text = "I love typescript.") {
    console.log(`Creating a ${size} shirt with a message: ${text}`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I love Javascript.");
// QUESTION NO 38 SOLUTION
// Cities write a fuction called describe_city that accept the name of city in its country.The function should print
// a simple sentence.such as Karachi in Pakistan. Give the parameter for the country a default value. Call your function
// for three different cities, at leastt one  if which is not in the default  country.
function describeCity(city, country = "Default Country.") {
    // print message
    console.log(`${city} is in ${country}`);
}
// call function for three different cities
describeCity("Karachi", "Pakistan");
describeCity("Mumbai", "India");
describeCity("New york");
// QUESTION NO 39 SOLUTION
// Cities Names: Write a function called city_country() that takes in the names of city and its country.
function city_country(city, country) {
    // use return
    return `${city} ,${country}`;
}
// call function with at least three city-country pair.
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Delhi", "India"));
console.log(city_country("Toranto", "Canada"));
//QUESTION NO 40 SOLUTION
// Album: Write a function called make_album that builds a object describing a music album.The function should take
// in an artist name and title,and it should return a object containing these two pieces of informatin.Use the
// function to make three dictionaries representting different album.Print each return value to show that object are
// storing the album information correctly.Add an optional parameter to make album() that allows you to store the
// number of tracks on an album . If the calling line includes a value for the number of tracks.add value to the album.
function makeAlbum(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = makeAlbum("Artist 1", "Album Title 1");
console.log(album1);
let album2 = makeAlbum("Artist 2", "Album Title 2");
console.log(album2);
let album3 = makeAlbum("Artist 3", "Album Title 3", 15);
console.log(album3);
//QUESTION NO 41 SOLUTION
// make a array of magician's names. pass the array to the function called show_magicians()
// which print the name of each magician in the array
let magician = ["Domnic", "Thomas", "Herry", "Aleina"];
function showMagicians(magicians) {
    magicians.forEach((element) => {
        console.log(element);
    });
}
showMagicians(magician);
//  QUESTION NO 42  SOLUTION
// start with the copy of your program from exercise 41.write a function called make_great() that modify
// the array of magicians by adding the phrase the great to each magicians name.Call show magician to see that the
// list has actually been modified.
let magicians = ["Domnic", "Thomas", "Herry", "Aleina"];
function make_great(magiciansArray) {
    for (let i = 0; i < magiciansArray.length; i++) {
        magicians[i] = "The Great " + magiciansArray[i];
    }
}
function showMagician(magicians) {
    magicians.forEach((element) => {
        console.log(element);
    });
}
make_great(magicians);
showMagicians(magicians);
// QUESTION NO 43 SOLUTION
//unchanged magicaians start with your work from exercise 40.call the fucnctioon make great() with the copy of
//magicians name. because the original arraywill be un changed. return the array and store it in a separate array
//call show magicians() with each array to show that you have one of the original names and once array with the
//great added to each magicians name
let Magicians = ["Domnic", "Thomas", "Herry", "Aleina"];
function copyArray(array) {
    return [...array];
}
function makeGreat(magiciansArray) {
    for (let i = 0; i < magiciansArray.length; i++) {
        magiciansArray[i] = "The Great " + magiciansArray[i];
    }
}
function show_Magician(Magicians) {
    Magicians.forEach((element) => {
        console.log(element);
    });
}
const copyMagiciansArray = copyArray(Magicians);
makeGreat(copyMagiciansArray);
console.log("\n\nThis is a original array");
show_Magician(Magicians);
console.log("\n\nThis is a modified copy of the array");
show_Magician(copyMagiciansArray);
// QUESTION NO 44 SOLUTION
//Sandwiches: write a function that accept a array of the items a person wants on a sandwich.
// the function should have one parameter that coolect as many items as the function called provides
// and it should print a summary of the sandwitch that is being ordered.Call the function three times using
// different number of arguments each time.
function makeSandwich(items) {
    console.log("\nMaking your sandwich with the ingredients:");
    items.forEach((element) => console.log("- " + element));
    console.log("Enjoy your sandwich!\n");
}
makeSandwich(["cucumber", "tomato", "cheese"]);
makeSandwich(["lettuce", "butter"]);
makeSandwich(["cucumber", "tomato", "lettuce"]);
// QUESTION NO 45 SOLUTION
// CARS: write a function that stores information about car in object.the function should always receive
// a manufacturer and a model name.it should then accept an arbitrary number of keyword arguments.Call the function
// with the required information and two other name-value pairs,such ass a color or an optical feature. print the
// object  thats returned to make sure all the information was stored correctly.
function storeCarInfo(manufacturer, modelName, ...rest) {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...rest),
    };
    return carInfo;
}
let Information = storeCarInfo("Toyota", "Civic", { color: "White" }, { features: ["Navigation", "Automatic Gear"] });
console.log(Information);
export {};
