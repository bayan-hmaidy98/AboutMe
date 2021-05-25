'use strict'

let visitor = prompt('What is your name?');
let drinksQues = prompt('Do I prefer hot drinks?');
let sportQues = prompt('Do I have sport addiction?');
let peopleQues = prompt('Do I enjoy hanging out with big number of people?');
let FamilyQues = prompt('Is family a priority for me?');
let watchQues = prompt('Do I watch movies more than series?');
let ageQues = prompt ('Can you guess my age?');
ageQues = Number(ageQues);

// run Q6 4 times max. unless we have a correct answer and get out of the loop

for (var a=1; a<=4; a++)
{
    switch (ageQues){
    case 22:
    case 21:
        ageQues = Number(prompt('You are so close! But I am older'))
    break;
    case 24:
    case 25:
        ageQues = Number(prompt('You are so close! But I am younger'))
    break;
    case 23:
        alert ('You are absloutly correct!') 
    break;
    default:
        ageQues = Number(prompt('No! Try again please.. '))
    }
    if (ageQues==23){
        break;
    }
}
let studQues = prompt ('Which animation studio I prefer the most? 1. Disney 2. Ghibli 3. Pixar (Please answer the qustion only with number)')
while (studQues !== '1' || studQues !== '2' || studQues !== '3')
{
studQues = prompt('Please answer only with numbers (1, 2 or 3)')
}
for (let b=1; b<=6; b++)
{
    switch (studQues){
        case '1':
        case '3':
            studQues = prompt('You are wrong! Try again.. ')
        break;
        case '2':
            alert('You are correct!')        
        default:


    }
}
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
{array [i] = array[i].toLowerCase();}

}
console.log (array)
for (var n=0; n<=2; n++)
{
if (array [n] == 'no' || array [n] == 'n')
{
    c++
}
}
for (var y=4; y<=5; y++)
{
if (array [y] == 'yes' || array [y] == 'y')
{
    c++
}

}
console.log(c)
if (c==5 || c==4)
{
alert ('Hello ' + visitor + ', you did a great job. Your score is ' + c +'/5')
}
else
 {
  alert  ('Hello ' + visitor + ', you are missing a lot about me ' + c +'/5')
}
