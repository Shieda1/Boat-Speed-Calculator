// https://www.omnicalculator.com/everyday-life/boat-speed

// calculators not working

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const speedRadio = document.getElementById('speedRadio');
const shafthorsepowerRadio = document.getElementById('shafthorsepowerRadio');
const boatdisplacementRadio = document.getElementById('boatdisplacementRadio');
const crouchsconstantRadio = document.getElementById('crouchsconstantRadio');

let speed;
let shafthorsepower = v1;
let boatdisplacement = v2;
let crouchsconstant = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

speedRadio.addEventListener('click', function() {
  variable1.textContent = 'Shaft horsepower';
  variable2.textContent = 'Boat displacement';
  variable3.textContent = 'Crouch\'s constant';
  shafthorsepower = v1;
  boatdisplacement = v2;
  crouchsconstant = v3;
  result.textContent = '';
});

shafthorsepowerRadio.addEventListener('click', function() {
  variable1.textContent = 'Speed';
  variable2.textContent = 'Boat displacement';
  variable3.textContent = 'Crouch\'s constant';
  speed = v1;
  boatdisplacement = v2;
  crouchsconstant = v3;
  result.textContent = '';
});

boatdisplacementRadio.addEventListener('click', function() {
  variable1.textContent = 'Speed';
  variable2.textContent = 'Shaft horsepower';
  variable3.textContent = 'Crouch\'s constant';
  speed = v1;
  shafthorsepower = v2;
  crouchsconstant = v3;
  result.textContent = '';
});

crouchsconstantRadio.addEventListener('click', function() {
  variable1.textContent = 'Speed';
  variable2.textContent = 'Shaft horsepower';
  variable3.textContent = 'Boat displacement';
  speed = v1;
  shafthorsepower = v2;
  boatdisplacement = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(speedRadio.checked)
    result.textContent = `Speed = ${computespeed().toFixed(2)}`;

  else if(shafthorsepowerRadio.checked)
    result.textContent = `Shaft horsepower = ${computeshafthorsepower().toFixed(2)}`;

  else if(boatdisplacementRadio.checked)
    result.textContent = `Boat displacement = ${computeboatdisplacement().toFixed(2)}`;

  else if(crouchsconstantRadio.checked)
    result.textContent = `Crouch's constant = ${computecrouchsconstant().toFixed(2)}`;
})

// calculation

// speed = sqrt(shafthorsepower / boatdisplacement) * crouchsconstant

function computespeed() {
  return Math.sqrt(Number(shafthorsepower.value) / Number(boatdisplacement.value)) * Number(crouchsconstant.value);
}

function computeshafthorsepower() {
  return Math.pow(Number(speed.value) / Number(crouchsconstant.value), 2) / Number(boatdisplacement.value);
}

function computeboatdisplacement() {
  return Number(shafthorsepower.value) / Math.pow(Number(speed.value) / Number(crouchsconstant.value), 2);
}

function computecrouchsconstant() {
  return Number(speed.value) / Math.sqrt(Number(shafthorsepower.value) / Number(boatdisplacement.value));
}