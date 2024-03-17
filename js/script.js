// ex -1
function textChange(){
    document.getElementById('t_c').innerHTML = "hello";
}
// ex-2
function showDate(){
    document.getElementById('s_d').innerHTML = Date();
}
// ex-3
function bulbOn(){
    document.getElementById('bulb').src ='imgs/pic_bulbon.gif';
}
function bulbOff(){
    document.getElementById('bulb').src ='imgs/pic_bulboff.gif';
}
// ex -4
function textShow(){
    document.getElementById('text').style.display = 'block';
}
function textHide(){
    document.getElementById('text').style.display = 'none'
}
// ex-5
var number1 = 5;
var number2 = 2;
var number = number1 + number2;
function calculate(){
    document.getElementById('value').innerHTML = number;
}
// ex - 6
let number3, number4, num;
number3 = 7;
number4 = 3;
num = number3 - number4 ;
function calculate_2(){
    document.getElementById('value2').innerHTML = num;
}
// // ex-7
let number5, number6;
number5 = 4;
number6 = 6;
number5 *= number6;
function calculate_3(){
    document.getElementById('value3').innerHTML = number5;
}

// ex-8
function textChange_2(){
    document.getElementsByClassName('text_2')[1].innerHTML = "Yaay";
}
// ex-9
function textChange_3(){
    var info = document.getElementsByTagName('h3');
    alert(info.length);
}
//ex-10
function showResult(){
    document.getElementById('result').innerHTML = Math.round(9.87);
}
// ex -11
let text = "You will be taking JavaScript classes next semester";
let index = text.indexOf("JavaScript");
function showIndex(){
    document.getElementById('io_method').innerHTML = index;
}
// ex-12
function piValue(){
    document.getElementById('m_pi').innerHTML = Math.PI ;
}
// ex-13
function showChanges(){
    document.getElementsByClassName("cusCss")[0].style.fontSize = '35px';
    document.getElementsByClassName("cusCss")[0].style.color = 'green' ;
}
//ex-14
function showAlert(){
    document.getElementById('alert').innerHTML = window.alert("Be prepared for the snow storm !!!");
}
// ex-15
const main = {
    fLine: "Her ", 
    sLine: " major",
    thLine: "Computer ",
    frLine: " Science",
};

 function showObject(){
     document.getElementsByClassName("object")[0].innerHTML = main.fLine + main.sLine + " is " + main.thLine + main.frLine;
 }
 //ex-16
 var f = 47;
 let value = (5/9) * (f-32);
 function toCelsius(){
    document.getElementsByClassName("temperature")[0].innerHTML = value;
 }
 //ex -17
 let prompt = "Find out the location of the word 'location' : ";
 let output = prompt.search(/location/);

 function showSearchResult(){
    document.getElementsByClassName("s_method")[0].innerHTML = output;
 }
// ex-18
let prompt_2 = "Find out the location of the word 'location' :";
let output_2 = prompt_2.search("location");
function showPosition(){
    document.getElementsByClassName("s_method")[1].innerHTML = output_2;
}
// ex -19
function replace() {
    let prompt_3 = document.getElementById('replaceResult').innerHTML;
    document.getElementById('replaceResult').innerHTML = prompt_3.replace("12PM" , "1PM");
}

