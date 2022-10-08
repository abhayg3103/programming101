// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   readline.question('Who are you?', name => {
//     console.log(`Hey there ${name}!`);
//     readline.close();
//   });

//Write a nodejs program to accept two integers and check whether they are equal or not

let a= 15
let b= 15
if (a==b)
{
//console.log(a "and" b "are equal")
console.log("Number1 and Number2 are equal")

}
else {
  console.log("Number1 and Number2 are not equal")
}


//Write a nodejs program to check whether a given number is even or odd.

let a1= 0
b1= a1%2
// console.log(b1)
if(b1=0)
{ 
  console.log("Number is even")
}
else 
{
  console.log("Number is ODD")
}

// Write a Nodejs program to check whether a given number is positive or negative

let a2= 0

if (a2==0)
{
console.log("The number is zero and can not be classified as positive or negative")
}
else
{
  if(a2>0)
  {
    console.log("The number is positive")
  }
  else
  {
    console.log("The number is negative")
   
  }
}

//Write a Nodejs program to find whether a given year is a leap year or not.

let   year=2019
x= year%4
console.log(x)
if(x==0)
{
  console.log("The year is leap year")
}
else
{
  console.log("The year is not leap year")
}

//Write a Nodejs program to read the age of a candidate and determine whether it is eligible for casting his/her own vote.

let   age=17
if(age>=18)
{
  console.log("Congratulation! You are eligible for casting your vote.")
}
else
{
  console.log("You are not eligible to vote")
}

//Write a Noejs program to read the value of an integer m and display the value of n is 1 when m is larger than 0, 0 when m is 0 and -1 when m is less than 0

let number = -5
if(number<0)
{
console.log("The value of n = -1")
}
else
{
if(number==0) 
{
console.log("The value of n = 0")  
}
else
{
  console.log("The value of n = 1")
}
}

//Write a Nodejs program to accept the height of a person in centimeter and categorize the person according to their height.

let height=400

if(height>180)
{
console.log("The person is very long")
}
else
{
if(height>140)
{
console.log("The person is average height")
}
else
{
  console.log("The person is dwarf")
  }
}  



//Write a Nodejs program to find the largest of three numbers.


let N1=12
let N2=25
let N3=52

if (N1>=N2)
{
if(N1>=N3)
{
console.log(N1)
}
else 
{
  console.log(N3)
}
}
else if (N2>=N3)
{
  console.log(N2)
}
else 
{
  console.log(N3)
}


//Write a Nodejs program to accept a coordinate point in a XY coordinate system and determine in which quadrant the coordinate point lies

let X=7
let Y=9

if(X>=0)
{
  if(Y>=0)
  {
    console.log("The coordinate point(" + X + "," + Y + ") lies in the First quadrant.")
  }
  else
  {
    console.log("The coordinate point(" + X + "," + Y + ") lies in the Fourth quadrant.") 
  }
}
else
if(Y<0)
{
  console.log("The coordinate point(" + X + "," + Y + ")lies in the Third quadrant.")
}
else
{
  console.log("The coordinate point(" + X + "," + Y + ")lies in the Second quadrant.") 
}


//Write a Nodejs program to check whether an alphabet is a vowel or consonant

let alphabet = 'X'

switch (alphabet)
{
case 'a':
console.log("The alphabet is a Vowel.")
break;

case 'e':
console.log("The alphabet is a Vowel.")
break;

case 'i':
console.log("The alphabet is a Vowel.")
break;

case 'o':
console.log("The alphabet is a Vowel.")
break;

case 'u':
console.log("The alphabet is a Vowel.")
break;

default:
  console.log("The alphabet is a consonant.")

}