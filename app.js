
const screenStart =document.getElementById('start');
const screenWelcome= document.getElementById('welcome');
const options1= document.getElementById('questionsAnimals');
const result1= document.getElementById('resultAnimals');
const options2=document.getElementById('questionsCulture');
const result2= document.getElementById('resultCulture')

function inicio(){
screenStart.style.display="block"
screenWelcome.style.display="none";
options1.style.display="none";
result1.style.display="none";
options2.style.display="none";
result2.style.display="none";
}
inicio();

function player() {

  screenStart.style.display="none";
  screenWelcome.style.display="block";
  options1.style.display="none";

  const name = document.getElementById("name").value;
  document.getElementById("inputName").innerHTML = "¡Hola " + name + "!";

}

function optionAnimals(){
  screenWelcome.style.display="none";
  options1.style.display="block";
  result1.style.display="none";
  options2.style.display="none";
  result2.style.display="none";
}


function optionCulture(){
  screenWelcome.style.display="none";
  options2.style.display="block";
  result2.style.display="none";
  options1.style.display="none";
  result1.style.display="none";

}


function resultAnimals() {
let q1, q2, q3, score1;

if (document.getElementById('q12').checked==true){
  q1=1
}
else{
  q1=0}
if (document.getElementById('q22').checked==true) {
  q2=1
}
else {
  q2=0
}
if (document.getElementById('q31').checked==true) {
  q3=1
}
else {
  q3=0
}

score1=q1+q2+q3;
document.getElementById("scoreAnimals").innerHTML = `Tu resultado es ${score1}/3`;
options1.style.display="none";
result1.style.display="block";

}


function resultCulture() {
let qA1, qA2, qA3, score2;

if (document.getElementById('qA11').checked==true){
  qA1=1
}
else{
  qA1=0
}
if (document.getElementById('qA22').checked==true) {
  qA2=1
}
else {
  qA2=0
}
if (document.getElementById('qA33').checked==true) {
  qA3=1
}
else {
  qA3=0}

score2=qA1+qA2+qA3;
document.getElementById("scoreCulture").innerHTML = `Tu resultado es ${score2}/3`;
options2.style.display="none";
result2.style.display="block";
}
