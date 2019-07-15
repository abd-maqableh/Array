console.log('Here is : ', 'array')




1
// Correct the syntax error
 var x= [ 1,7 , 9 , 45 ];

 var y= ["Str", "alex","moh" ,'the','fox' ,'over', "lazy", 'dog'  ];




/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

index of "Banana": 1
index of "Tomato": 0

*/




/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

var food = ["mansaf", "msa5n", "mkmora", "broasted", "mandi"];


var sport = ["tennis", "football", "basket ball"];


var Movie = ["john wick", "captin marvel", "avengers", "alaaddin"];

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function  firstOfArray (x)
{
    
    return x[0];
}

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray (x)
{
    var l= x.length
    return x[l-1];
}

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

var array = [0,5,7,9]
console.log (array.shift())
console.log (array.shift())
console.log (array.shift())
console.log (array.unshift(1, 3, 4, 6, 8))
console.log (array.push(10))

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5,9,-7,3.5]

console.log (array2.push(1))
console.log (array2.pop())
console.log (array2.unshift(10))
console.log (array2.shift())


/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function  middleOfArray (x)
{ var l= x.length;

    if (l%2!==0)
    return x[(l-1)/2]

    return ( x[l/2-1]+ " and "+ x[l/2])
}

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

var animals = ['cat', 'ele', 'bird']
animals= ['zebra', 'elephant'];

var nums= [1,2,3,8,9];
nums[0]= 5;
nums[1]= -22;
nums[2]= 3.5;
nums[3]= 44;
nums[4]= 98;
nums[5]= 44;

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/


function  indexOfArray (x, y){
return x[y]    ;
}

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function  arrayExceptLast (x)
{var l = x.length;
return x.slice(0, l-1 )    
}

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd (x,y)
{
    var l = x.length;
    return x[l-1]=y;

}

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function sumArray (x)
{   var sum = 0;
    var i=0
     while (i<x.length) {
        sum = sum + x[i]; 

        i++

        
     }                                   
  
return sum;
}

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function  minInArray (x)
{   var min = x[0];
    var i=1
    while (i<x.length) {
        
            if (x[i]<min)
            min = x[i];
        
     
        
        i++
    }
    
   
return min;
}

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: removeFromArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray (x,y)
{ 

    var i=0;

    while (i<x.length) {
        
            if (x[i]===y)
            x.splice(i,1) ;
        
        i++  
    }
   
   
return x;
}


/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray (x)
{ var y =[];

    var i=0
    while (i<x.length) {
        
            if (x[i]%2===1)
            y.push(x[i]) ;
         
        i++;
    }


  
return y;
}
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function aveArray (x)
{ var sum = 0;
    var i=0;
    while (i<x.length) {

        sum = sum + x[i];

        i++
    }

    

return sum/x.length;
}

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function shorterInArray (x)
{ var short = x[0];
    var i=0;
    while (i<x.length) {

        if (x[i].length<short.length)
        short = x[i];

        i++
        
    }
   
return short;
} 


/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function  repeatChar (str, chr)
{
var rep =0;
var l = str.length;
var i=0;
while ( i<l) {
    if (str[i]===chr)
    rep++;
    i++;
    
}



return rep;
}

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function  evenIndexOddLength (x){

var arr=[];
var i=0;
while ( i<x.length) {
    
    if (x[i].length%2===1)
    arr.push(x[i])

    i=i+2
}

  


return arr;
}

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [1, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function  powerElementIndex (x)
{ var y =[];
    var i=0;
    while (i<x.length) {

        y[i]= x[i]**i;
        i++
        
    }
    
return y;
}


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function  evenNumberEvenIndex (x)
{var y= [];

    var i = 0;
    while (i<x.length) {


        if (x[i]%2===0)
        y.push (x[i]);
        i=i+2  
        
    }


return y;
}