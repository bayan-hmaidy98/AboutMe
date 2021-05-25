'use strict'

let visitor = prompt('What is your name?')
let drinksQues = prompt('Do I prefer hot drinks?')
let sportQues = prompt ('Do I have sport addiction?')
let peopleQues = prompt ('Do I enjoy hanging out with big number of people?')
let FamilyQues = prompt ('Is family a priority for me?')
let watchQues = prompt ('Do I watch movies more than series'?

var c = 0;
var array = [];
array [0] = visitor;
array [1] = drinksQues;
array [2] = sportQues;
array [3] = peopleQues;
array [4] = FamilyQues;
array [5] = watchQues; 
for (var i=1; i<=5; i++)
{
    for (var n=1; n<=3; n++)
array [i] = toLowerCase(array[i]);

}
console.log (array)
for (var n=0; n<=2; n++)
{
if (array [n] == 'no')
c++
}
for (var y=4; y<=5; y++)
{
if (array [y] == 'yes')
c++
}
if (c==5 || c==4)
{
alert ('Hello ' + visitor + ', you did a great job. Your score is ' + c +'/5')
}
else {
    ('Hello ' + visitor + ', you are missing a lot about me ' + c +'/5')
}
