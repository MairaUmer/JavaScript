// JS Practice File

// alert('Bano Qabil')
// document.write('<h1>Hello</h1>')
// console.log(123)

// var name = 'maira'
// console.log(name)

// alert('hello ' + name + ' how are you ' + age)
// document.write('<h1>Hello</h1')
// console.log(123)

// console.log(typeof name)

// var age = 23
// console.log(age)
// console.log(typeof age)

// Chapter 10 IF STATEMENTS

// var x = prompt("Where does the Pope live?");
//  if (x === "Vatican")
//   {
//  alert("Correct!");
//  }

// var greeting = prompt('Warm greetings');
//  if (hour < 18) {
//     greeting = "Good day";
//   }
//   else{
//     greeting ="bad day";
//   }

//  Chapter 11 COMPARISIONS OPERATOR

// var num = 4
// console.log(num == 4)

// var num = 4
// console.log(num <= 4)

// var num = 4
// console.log(num >= 4)

// var num = 4
// console.log(num != 4)

//  Chapter 12 IF ELSE AND ELSE IF CONDITIONS

//  var x = prompt("All peoples here are Muslims?");
// if (x === "Muslims") {
//  alert("Correct!");
//  }
// if (x !== "Not Muslims") {
// alert("Wrong answer");
//  }


//  Chapter 13 TESTING SETS OF CONDITIONS

//  only one condition is getting true in && operator
// var weight;
//  if (weight > 300 && time < 6 && age > 17 && gender === "male") {
//       alert("Come to our tryout!");
//     }
//  else {
//     alert("Come to our cookout!");
//      }

//  both conditions are getting true in || operator 
// var variables = x,y,a,b,c,d,e,f,g,h;
// if ((x === y || a === b) && c === d)
//  {
//     console.log(g = h);
//      }
//      else {
//     console.log( e = f);
//      }

//  Chapter 14 NESTED IF CONDITIONS 

// var marks = 75;
// var participations = true;
// if (marks < 60) {
//     console.log(" Better Luck Next Time. ");
//     console.log(" You Are Not Eligible");
// }
// else {
//     if (marks <= 80 && participations == true) {
//         console.log("You are Eligible for this ");
//         console.log("Go ahead for filling your application form. ");
//     }
//     else if (marks > 80) {
//         console.log("Your academics are great! You are eligible for this position.");
//         console.log(" Proceed further for filling the application form.");
//     } else {
//         console.log("Better Luck Next Time.");
//         console.log("You Are Not Eligible");
//     }
// }

//  Chapter 15 ARRAYS

// var names = ['Maira', 'Laiba', 'Sara', 'Zara']
// console.log(names);

// var mixedArray = [1, "Bob", "Now is", true];
// console.log(mixedArray);

//  Chapter 16 ARRAYS: ADDING AND REMOVING ELEMENTS

// var pets = ['dog', 'cat', 'bird'];
// pets.splice(2, 2, "pig", "duck", "emu");
// pets.shift();
// pets.unshift("duck", "parrot");

//    push keyword add element in the end of array
// pets.push("fish", "ferret");

//  pop keyword removes last element of array
// pets.pop('bird');
// console.log(pets);
// console.log(pets[0])
// console.log(pets[1])
// console.log(pets[2])

//  Chapter 17 ARRAYS: INSERTING REMOVING AND EXTRACTING ELEMENTS

//    shift remove first value from array

// var pets = ['dog', 'cat', 'bird'];
// pets.shift();
// console.log(pets.shift());

// unshiift add elements in start
// pets.unshift("duck", "parrot");

// splice method insert one or more element anywhere in array
// pets.splice(2, 2, "pig", "duck", "emu");

//  Chapter 18 FOR LOOPS

// for (var i = 0; i <= 4; i++) {
//     console.log(i);
// }

//    Chapter 19 FOR LOOPS flags booleans

// var matchFound = false;
// for (var i = 0; i <= 4; i++);
// if (cityToCheck === cleanestCities[i]) {
//     matchFound = true;
//     alert("It's one of the cleanest cities");

// }

// if (matchFound === false) {
//     alert("It's not on the list");
// }


//    Chapter 20 FOR LOOPS NESTED

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//     for (var j = 0; j < lastNames.length; j++) {
//         console.log(fullNames.push(firstNames[i] + lastNames[j]));

//     }
// }
//    Chapter 21 changing case


// var userName = "maira";
// userName.toLowerCase()
// console.log(userName[0]);

// var todaysDate = new Date();
// console.log(todaysDate);

// var todayTime = todaysDate.getTime();
// console.log(todayTime);

// var customDate = new Date('23 Nov, 2000');
// console.log(customDate);

// var customTime = customDate.getTime();
// console.log(customTime);

// var differenceOfCustomTodayDateAndCustomDate = todayTime-customTime;
// console.log(differenceOfCustomTodayDateAndCustomDate);

// var dDiff = differenceOfCustomTodayDateAndCustomDate / (1000 * 60 * 60 * 24);
// console.log(dDiff);

// dDiff = Math.floor(dDiff);
// console.log(dDiff);

// var d = new Date();
// d.setDate(23);
// d.setMonth(11);
// d.setFullYear(2008);
// d.setHours(9);
// d.setMinutes(15);
// d.setSeconds(30);
// console.log(d);