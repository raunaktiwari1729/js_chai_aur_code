# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-zsgmcy8s?file=1-colorChanger%2Fchaiaurcode.js)

# Solution code

## project 1(Change background color based on boxes)

```javascript
console.log("raunak")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


```

## project 2 solution

```javascript
//if used before empty

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let height = parseInt(form.querySelector('#height').value);
  const weight = parseInt(form.querySelector('#weight').value);

  height = height / 100;

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Give vaild height';
  }
  if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Give vaild weight';
  }
  const output = CalculateBmi(height, weight);
  const res = Decision(output);
  results.innerHTML = `BMI is ${output} and you are ${res}`;
});

function CalculateBmi(height, weight) {
  return weight / (height * height);
}

function Decision(BMI) {
  if (BMI < 18.6) {
    return 'UnderWeight';
  } else if ((BMI > 18.6) & (BMI < 24.9)) {
    return 'Normal';
  } else return 'OverWeight';
}


```

## project 3 solution code

```javascript
const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  clock.innerText = date.toLocaleTimeString();
}, 1000);


```

## project 4 solution


```javascript
const num = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const UserInp = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');

const lowOrHigh=document.querySelector('.lowOrHi')

const startOver=document.querySelector('.resultParas')

var GameOn=true;
var totalGuess=0;
var prevGuess=[]

if(GameOn){
  submit.addEventListener('click',function(e){
    e.preventDefault();
     const guessNum=parseInt(UserInp.value)
     isValid(guessNum);

  });
}

function isValid(guess){
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('Please enter a valid number between 1 and 100');
  }
  else{
    prevGuess.push(guess);
    guessSlot.innerHTML += `${guess}, `; 
    totalGuess++;
remaining.innerHTML = `${11 - totalGuess}`; 
     
      if(guess==num){
        displayMessage("You won")
        endGame();
      }
      else if(totalGuess==11){
        remaining.innerHTML = `0`;
        displayMessage(`Game Over. Random number was ${num}`);
        endGame();
      }
      else{
        if(guess<num){
          displayMessage("The required number is bigger")
        }
        else{
          displayMessage("The required number is smaller")
        }
      
      }
  }
  }

function displayMessage(str){
  lowOrHigh.innerHTML=str
}

function endGame(){
  GameOn=false
}







```


# Project 5 solution

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});


```

# Project 6 Solution

```javascript
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


```
