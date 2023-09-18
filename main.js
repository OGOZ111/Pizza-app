/* document.getElementById('button').onclick = */
const form = document.querySelector('form')

function fillform(event){
  event.preventDefault()
let ordername = document.getElementById('id-name').value
if (ordername == ""){alert("Please enter name")}

let addon =""
let method = document.getElementById('id-delivery').value
if (method =="5.00"){addon = " and includes 5e delivery fee!"}
else {addon = " Please pick up your order in 15 minutes!"}


let rates = document.getElementsByName('firstsel');
let rate_value;
for(let i = 0; i < rates.length; i++){
    if(rates[i].checked){
        rate_value = rates[i].value;


let tops1 = document.getElementsByName('topping1');
let txt = "";
let a;
for (a = 0; a < tops1.length; a++) {
if (tops1[a].checked) {
txt = txt = tops1[a].value;
}
}

topcount = document.querySelectorAll("input[name='topping1']:checked").length * 0.50
if (topcount <= 2){
  topcount = 0.00}
  else {topcount = (topcount - 2.00)
  }
/*console.log(topcount)*/


let sum = Number(rate_value) + Number(method); + Number(txt)
total = sum + topcount


document.getElementById("log").innerHTML = "Total: " + total + "€ " + addon;
} 

}


}

form.addEventListener('input', fillform)









    
    














