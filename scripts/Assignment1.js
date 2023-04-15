document.write("<b><i><h1>Javascript Task 1:</h1></i></b><b><i><h1>Maira Umer</h1></i></b><b><i><h1>Bano Qabil</h1></i></b>")

// Task 1:
// Calculate the zakat value, first, create a variable named "zakatPercentage" and
// store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
// named "userInput" and take the input from the user using the prompt. Make sure
// the input value is of a type number by converting the input string to a number
// using a suitable method. Then, create a variable named "result" and assign its value
// to the multiplication of the zakat percentage and user input. Finally, use an alert
// message to display the calculated zakat value. The message should look like this:
// "Your zakat value is xxx".

// var creation i am using namimg convention of camelCase
var zakatPercentage = 0.025
var zakatValue = 2

//  input using user prompt
var userInput = prompt("Enter Your Monthly Zakat")

// conversion of string prompt to number
console.log(typeof(0.025))

//  multiple of zakat percentage and user input
var result = 0.025*2
console.log(result)

alert('Your zakat value is ' + result )


// Task 2:
// calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.


// ask user about his family member using prompt
var familyMembers =(prompt("How many members in your family:"));

// Ask the user to choose a fitrah method
var fitrahMethod = prompt("Select a fitrah methods: \n1. Gandum \n2. Jau \n3.Khajur \n4. Kismish");

// declare variables for the selecting methods and range
var fitrah;
var range;

//methods and range by user input and conditions
if (fitrahMethod  === "1")
 {
    fitrah = "Gandum";
     range = 10,000;
}
 else if (fitrahMethod === "2")
  {
    fitrah = "Jau";
    range = 15,000;
} 
else if (fitrahMethod === "3")
 {
    fitrah = "Khajur";
     range = 20,000;
       }

  //now calculating the fitrah amount according to the total no of family members
  var fitrahAmount = range * familyMembers;
  
  // Displaying the calculated fitrah amount using an alert message
  alert(`Fitrah amount for ${familyMembers} family members using ${fitrah} is ${fitrahAmount}.`);


//   Task 3:
// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.


//  Generate a random number between 1 and 10
var secretNumber = (2 * 10);

// Ask the user to guess the secret number
var guess = prompt("Guess the secret number (between 1 and 10)");

// Check if the guess is correct
if (guess == secretNumber)
 {
  alert("Congratulations! You guessed the secret number.");
} 
else if (guess < secretNumber)
 {
  alert("Sorry, your guess is too low.guess it again.");
}
 else {
  alert("Sorry, your guess is too high.  guess it again.");
}

// Task 4:
// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).

//  Ask the user to enter a name
var userName = prompt("Enter your name");

// Capitalize the first letter of the name
var captalizeName = "mAira";
var upperCaseName = "Maira";

// Print out the capitalized name
console.log(captalizeName.toUpperCase());

// Task 5:
// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.

// declaring two empty arrays
var contactNumbers = [];
var contactNames = [];

// Use a for loop to ask the user to enter contact information using prompt and push the values to the arrays
for (var i = 0; i < 2; i++) {
  var number = prompt('Enter your Num');
  var name = prompt('Enter your Name');
  
  contactNumbers.push(number);
  contactNames.push(name);
}

// Log the contact numbers and names using a for loop
for (var i = 0; i < contactNumbers.length; i++) {
  console.log('Name: Amir','Num: 0300345678');
}

// Task 6:
// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.

//  create an array of products
// var products = ['NailPaints', 'EarRings', 'LipGloss', 'Lashes', 'Perfume'];

// ask the user to input the position of the item to remove
// var positionOfItem = prompt('Enter the positon of item that you want to removed' + products.length);

// positionOfItem = (position) -1;

// removing item at the any position and store in var
// var removedItem = products.splice(position, 1)[0];

// log the removed item to the console
// console.log('Removed item :' + removedItem);

// log the remaining items in the array to the console
// console.log('Remaining items :' + products);


// Task 7:
// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible to vote

// ask user for their nationality, gender, and age

var nationality = prompt('what is your nationality:?');
var gender = prompt('what is your gender:?');
var age = (prompt('what is your age:?'));

// check if the person is Pakistani or Indian

if (nationality === 'Pakistani' || nationality === 'Indian') {

  // check their gender and age
  if (gender === 'male' && age >= 20)
   {
    console.log('You are eligible to vote!');

  }
   else if (gender === 'female' && age >= 20) 
   {
    var maritalStatus = prompt('Are you married? (yes/no)');
    if (maritalStatus === 'yes') {
      console.log('You are eligible to vote!');
    } 
    else {
      console.log('You are not eligible to vote.');
    }
  } 
  else {
    console.log('You are not eligible to vote.');
  }
} 
else {
  console.log('You are not eligible to vote.');
}


// Task 8:
// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array)

//  create an array of 15 Pakistani players selected for the World Cup
var WorldCupPlayers = ['Shadab Khan', 'Shaheen', 'Babar', 'Azam Khan', 'Haris', 'Shoaib Malik', 'Asif Ali', 'Sarfaraz Ahmed', 'Mohammad Rizwan', 'Imad Wasim', 'Imam ul haq', 'Wahab Riaz', 'Fakhar', 'Mohammad Amir', 'Hasan Ali'];

// make a copy of the WorldCupPlayers array and select 11 players for the match against India
var matchPlayers = WorldCupPlayers.slice(0, 11);

// log the match player to the console
console.log('Match players:', matchPlayers);
