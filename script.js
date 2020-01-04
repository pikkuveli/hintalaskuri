document.getElementById('view1').style.display = "none";
document.getElementById('view2').style.display = "none";

document.getElementById('btnView0').addEventListener("click", showView0);
document.getElementById('btnView1').addEventListener("click", showView1);
document.getElementById('btnView2').addEventListener("click", showView2);

let valuePriceInput = document.getElementById('valuePriceInput');
valuePriceInput.addEventListener('input', calculateValuePrice);
valuePriceInput.addEventListener("keyup", closeSoftKeyboardWhenEnterPressed);

let seasonDaysInput = document.getElementById('seasonDaysInput');
seasonDaysInput.addEventListener('input', calculateSeasonPrice);
seasonDaysInput.addEventListener("keyup", closeSoftKeyboardWhenEnterPressed);

function closeSoftKeyboardWhenEnterPressed(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.activeElement.blur();
    }
}

function showView1() {
    document.getElementById('view0').style.display = "none";
    document.getElementById('view1').style.display = "block";
    document.getElementById('view2').style.display = "none";
}

function showView2() {
    document.getElementById('view0').style.display = "none";
    document.getElementById('view1').style.display = "none";
    document.getElementById('view2').style.display = "block";
}

function showView0() {
    document.getElementById('view0').style.display = "block";
    document.getElementById('view1').style.display = "none";
    document.getElementById('view2').style.display = "none";
}

function calculateValuePrice() {
    let price = 0;

    let priceInputElement = document.querySelector('#valuePriceInput');
    price = priceInputElement.value;

    let costElement1 = document.querySelector('#valueCost1');
    let cost1 = (parseFloat(price, 10));
    costElement1.textContent = cost1.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });

    let costElement2 = document.querySelector('#valueCost2');
    let cost2 = (parseFloat(price, 10) + 1);
    costElement2.textContent = cost2.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });

    let costElement3 = document.querySelector('#valueCost3');
    let cost3 = (parseFloat(price, 10) + 1);
    costElement3.textContent = "~"+ cost3.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });

    let costElement4 = document.querySelector('#valueCost4');
    let cost4 = (parseFloat(price, 10) + 1);
    costElement4.textContent = cost4.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });
}

function calculateSeasonPrice() {
    let price = 0;
    let days = 0;

    let seasonDaysInput = document.querySelector('#seasonDaysInput');
    days = seasonDaysInput.value;

    if (days == 14) {
        console.log("DEBUG: tasan 14");
        price = 40.40;
    } else if (days > 14 && days < 30) {
        console.log("DEBUG: 15-29, " + days);
        let calcDaysMinus14 = days - 14;
        console.log("DEBUG: distance from 14: " + calcDaysMinus14);
        price = 40.40 + calcDaysMinus14 * 1.21;
    } else if (days == 30) {
        console.log("DEBUG: tasan 30");
    } else if (days > 30 && days < 367) {
        console.log("DEBUG: 31-366, " + days);
        let calcDaysMinus30 = days - 30;
        console.log("DEBUG: distance from 30: " + calcDaysMinus30);
    } else {
        console.log("DEBUG: tämä luku ei sallittu: " + days);
        
    }

    let costElement1 = document.querySelector('#seasonCost1');
    let cost1 = (parseFloat(price, 10));
    costElement1.textContent = cost1.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });

    // let costElement2 = document.querySelector('#seasonCost2');
    // let cost2 = (parseFloat(days, 10) + 1);
    // costElement2.textContent = cost2.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });

    // let costElement3 = document.querySelector('#seasonCost3');
    // let cost3 = (parseFloat(days, 10) + 2);
    // costElement3.textContent = cost3.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });

    // let costElement4 = document.querySelector('#seasonCost4');
    // let cost4 = (parseFloat(days, 10) + 3);
    // costElement4.textContent = cost4.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });
}