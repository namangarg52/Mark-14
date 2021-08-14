var purchase = document.querySelector('#purchase-price');
var quantity = document.querySelector('#stock-quantity');
var current = document.querySelector('#current-price');

var out  = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

out.addEventListener('click', submitHandler);

function submitHandler(){
    var ip = purchase.value;
    var qty = quantity.value;
    var curr = current.value;

    calculate(ip, qty, curr);
}

function calculate(purchase, quantity, current){
    if(purchase > current){
       var loss= (purchase - current) * quantity ; 
       var lossPercentage = (loss/purchase) * 100;
        console.log(`Loss ho gya Bhaia ${loss} dollar ka jo ${lossPercentage} % hai`);
    }
    else if (current > purchase) {
      var profit=  (current- purchase) * quantity;
      var profitPercentage = (profit/purchase) * 100;
        console.log(`" Fayda hi fayda ${profit} dollars ka jo ${profitPercentage}% hai"`);
    } else {
        console.log("No pain no gain")
    }
        

}

calculate(10,20,35)

