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
    costElement3.textContent = cost3.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });

    let costElement4 = document.querySelector('#valueCost4');
    let cost4 = (parseFloat(price, 10) + 1);
    costElement4.textContent = cost4.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });
}

function calculateSeasonPrice() {
    let price1 = 0;
    //let price2 = 0;
    //let price3 = 0;
    //let price4 = 0;
    let prices = [0, 0, 0];

    let days = 0;

    let priceFor14Days = 40.40;
    let priceFor30Days = 59.70;

    let factorForABZoneUnder30Days = 1.21;
    let factorForABZoneOver30Days = 1.75;

    let seasonDaysInput = document.querySelector('#seasonDaysInput');
    days = seasonDaysInput.value;

    if (days == 14) {
        price1 = priceFor14Days;
        prices = calcSeasonPrices(price1);

    } else if (days > 14 && days < 30) {
        let calcDaysMinus14 = days - 14;
        price1 = (Math.floor((priceFor14Days + calcDaysMinus14 * 1.21) * 10)) / 10;
        prices = calcSeasonPrices(price1);

    } else if (days == 30) {
        price1 = priceFor30Days;
        prices = calcSeasonPrices(price1);

    } else if (days > 30 && days < 367) {
        let calcDaysMinus30 = days - 30;
        price1 = (Math.ceil((priceFor30Days + calcDaysMinus30 * 1.75) * 10)) / 10;
        prices = calcSeasonPrices(price1);

    } else {
        // alle 14 päivää tai yli 366 päivää
        console.log("DEBUG: arvo '" + days + "' on alle 14 päivää tai yli 366 päivää.");
    }

    let costElement1 = document.querySelector('#seasonCost1');
    costElement1.textContent = price1.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });

    let costElement2 = document.querySelector('#seasonCost2');
    costElement2.textContent = prices[0].toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });

    let costElement3 = document.querySelector('#seasonCost3');
    costElement3.textContent = prices[1].toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });

    let costElement4 = document.querySelector('#seasonCost4');
    costElement4.textContent = prices[2].toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });
}

function calcSeasonPrices(price1) {
    return [price1 + 1, price1 + 2, price1 * 1.035];
}