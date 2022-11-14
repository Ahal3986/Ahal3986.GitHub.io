const output =  document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt)

let changeColor = document.querySelector('.color-button').addEventListener('click', changeBackground);
/*let resetButton = document.querySelector('.reset-button').addEventListener('click', reset);*/
/*const minusButton = document.querySelector('.minus-button').addEventListener('click',minus);
const plusButton = document.querySelector('.plus-button').addEventListener('click',plus);*/
const addButton = document.querySelector('.sub').addEventListener('click',finalNum);
const submitButton = document.querySelector('.submit').addEventListener('click',submit);
const color = document.getElementById('color').addEventListener('click',colorValue);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

/*let colorValue = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;*/



function randomRGB() {
    let r_ = random(0, 255);
    let g_ =  random(0, 255);
    let b_ =  random(0, 255);
    let colorValue = `rgb(${r_},${g_},${b_}`;
    document.body.style.background = colorValue;
    numbersOnly = +`${r_}${g_}${b_}`;
    console.log(colorValue);
    console.log(numbersOnly);
    output.textContent = numbersOnly;
    return colorValue;
}


  function changeBackground()
{
    document.body.style.background = randomRGB();
    
}

function reset()
{
     numbersOnly = 000000000;
        output.textContent = numbersOnly;
    
    }

/*function minus(){
    
        if (numbersOnly > 1000000000){
            numbersOnly -=1000000000;
        output.textContent = numbersOnly;
        }}
    
function plus(){

        if (numbersOnly < 9000000000){
            numbersOnly +=1000000000;}
        output.textContent = numbersOnly;
        }*/

function finalNum(){
    if(numbersOnly < 9999){
        alert("your starter number cannot be less than 9999");
        output.textContent == 0 ;
        location.reload()
    }      
    if (numbersOnly < 9999999999 ){
        numbersOnly = numbersOnly + +document.getElementById('submitB').value;
        output.textContent = numbersOnly;
        console.log(numbersOnly);}
        else{
            output.textContent = numbersOnly;}
        }

function submit(){
    alert(output.textContent)
}
    

function colorT()
{
    var colorRGB = document.getElementById('color').value;
    console.log(colorRGB);
}
function colorValue(ev) {
    var colorRGB = document.getElementById('color').value;
    const r = parseInt(colorRGB.substr(1,2), 16)
    const g = parseInt(colorRGB.substr(3,2), 16)
    const b = parseInt(colorRGB.substr(5,2), 16)
    numbersOnly = (+`${r}${g}${b}`)
    console.log(numbersOnly)
    output.textContent = numbersOnly;
    let backColor = `rgb(${r},${g},${b}`
    document.body.style.background = backColor}

    setTimeout(function(){
        location = ''
      },60000)

