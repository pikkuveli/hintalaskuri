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

document.getElementById('zoneSelection').addEventListener("change", calculateSeasonPrice);
document.getElementById('customerGroupSelection').addEventListener("change", calculateSeasonPrice);

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
    let price1 = 0;
    let price2 = 0;
    let price3 = 0;
    let price4 = 0;

    let priceInputElement = document.querySelector('#valuePriceInput');
    price = priceInputElement.value;

    if (price >= 0.01) {
        price1 = (parseFloat(price, 10));
        price2 = (parseFloat(price, 10) + 1);
        price3 = (parseFloat(price, 10) + 1);
        price4 = (parseFloat(price, 10) + 1);
    } else {
        // alle 0.01
        console.log("DEBUG: arvo '" + price + "' on alle 0.01 euroa.");
    }

    let priceElement1 = document.querySelector('#valueCost1');
    priceElement1.textContent = price1.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });

    let priceElement2 = document.querySelector('#valueCost2');
    priceElement2.textContent = price2.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });

    let priceElement3 = document.querySelector('#valueCost3');
    priceElement3.textContent = price3.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });

    let priceElement4 = document.querySelector('#valueCost4');
    priceElement4.textContent = price4.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });
}

function calculateSeasonPrice() {
    let price1 = 0;
    //let price2 = 0;
    //let price3 = 0;
    //let price4 = 0;
    let prices = [0, 0, 0];

    let days = 0;

    let selectedZone = "";

    let selectedCustomerGroup = "";

    let priceFor14DaysForAdult = 40.40;
    let priceFor30DaysForAdult = 59.70;

    let factorForABZoneUnder30DaysForAdult = 1.21;
    let factorForABZoneOver30DaysForAdult = 1.75;

    let priceFor14DaysForStudent = 22.30;
    let priceFor30DaysForStudent = 32.80;

    let factorForABZoneUnder30DaysForStudent = 0.66;
    let factorForABZoneOver30DaysForStudent = 0.96;

    let priceFor14DaysForDiscountGroup = 20.20;
    let priceFor30DaysForDiscountGroup = 29.90;

    let factorForABZoneUnder30DaysForDiscountGroup = 0.61;
    let factorForABZoneOver30DaysForDiscountGroup = 0.87;

    //let discount = 0;
    //let roundUp = false;

    let zoneSelection = document.querySelector('#zoneSelection');
    selectedZone = zoneSelection.value;
    console.log("DEBUG: vyöhyke: " + selectedZone);

    let customerGroupSelection = document.querySelector('#customerGroupSelection');
    selectedCustomerGroup = customerGroupSelection.value;
    console.log("DEBUG: asiakasryhmä: " + selectedCustomerGroup);

    // if (selectedCustomerGroup == "adult") {
    //     discount = 1;
    //     console.log("DEBUG: aikuisalennus: " + discount);

    // } else if (selectedCustomerGroup == "child" || selectedCustomerGroup == "pensioner" || selectedCustomerGroup == "physicallyChallenged") {
    //     discount = 0.5;
    //     console.log("DEBUG: lapsi-, eläke- tai liikuntarajoitteisalennus: " + discount);

    // } else if (selectedCustomerGroup == "student") {
    //     discount = 0.55;
    //     roundUp = true;
    //     console.log("DEBUG: opiskelija-alennus: " + discount + ", pyöristys ylöspäin: " + roundUp);
    // } else {
    //     discount = 1;
    //     console.log("DEBUG: muu alennus: " + discount);
    // }

    let seasonDaysInput = document.querySelector('#seasonDaysInput');
    days = seasonDaysInput.value;

    if (days >= 14 && days <= 366) {
        if (days == 14) {

            if (selectedCustomerGroup == "adult") {
                price1 = priceFor14DaysForAdult;
            } else if (selectedCustomerGroup == "student") {
                price1 = priceFor14DaysForStudent;
            }

            //if (roundUp) {
            //price1 = (Math.ceil(priceFor14DaysForAdult * 10 * discount)) / 10;
            //} else {
            //price1 = priceFor14DaysForAdult;
            //}

        } else if (days > 14 && days < 30) {
            let calcDaysMinus14 = days - 14;
            if (selectedCustomerGroup == "adult") {
                price1 = (Math.floor((priceFor14DaysForAdult + calcDaysMinus14 * factorForABZoneUnder30DaysForAdult) * 10)) / 10;
            } else if (selectedCustomerGroup == "student") {
                price1 = (Math.floor((priceFor14DaysForStudent + calcDaysMinus14 * factorForABZoneUnder30DaysForStudent) * 10)) / 10;
            }


            //if (roundUp) {
            //console.log("DEBUG: laskemista");
            // let test1 = priceFor14Days + calcDaysMinus14 * factorForABZoneUnder30Days;
            // console.log(test1);

            // let test2 = test1 * 10 * discount;
            // console.log(test2);

            //price1 = (Math.round((priceFor14DaysForAdult + calcDaysMinus14 * factorForABZoneUnder30DaysForAdult) * 10 * discount)) / 10;
            //} else {
            //price1 = (Math.floor((priceFor14DaysForAdult + calcDaysMinus14 * factorForABZoneUnder30DaysForAdult) * 10)) / 10;
            //}

        } else if (days == 30) {
            if (selectedCustomerGroup == "adult") {
                price1 = priceFor30DaysForAdult;
            } else if (selectedCustomerGroup == "student") {
                price1 = priceFor30DaysForStudent;
            }

        } else if (days > 30 && days < 367) {
            let calcDaysMinus30 = days - 30;
            if (selectedCustomerGroup == "adult") {
                price1 = (Math.ceil((priceFor30DaysForAdult + calcDaysMinus30 * factorForABZoneOver30DaysForAdult) * 10)) / 10;
            } else if (selectedCustomerGroup == "student") {
                price1 = (Math.ceil((priceFor30DaysForStudent + calcDaysMinus30 * factorForABZoneOver30DaysForStudent) * 10)) / 10;
            }

        }
        prices = calculateSeasonStorePrices(price1);
    } else {
        // alle 14 päivää tai yli 366 päivää
        console.log("DEBUG: arvo '" + days + "' on alle 14 päivää tai yli 366 päivää.");
    }

    let priceElement1 = document.querySelector('#seasonCost1');
    priceElement1.textContent = price1.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });

    let priceElement2 = document.querySelector('#seasonCost2');
    priceElement2.textContent = prices[0].toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });

    let priceElement3 = document.querySelector('#seasonCost3');
    priceElement3.textContent = prices[1].toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });

    let priceElement4 = document.querySelector('#seasonCost4');
    priceElement4.textContent = prices[2].toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });
}

function calculateSeasonStorePrices(price1) {
    return [price1 + 1, price1 + 2, price1 * 1.035];
}