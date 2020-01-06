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
    let prices = [0, 0, 0];

    let days = 0;

    let selectedZone = "";

    let selectedCustomerGroup = "";

    // Yleiset:

    let priceFor14DaysForAdult = 0;
    let priceFor30DaysForAdult = 0;

    let factorUnder30DaysForAdult = 0;
    let factorOver30DaysForAdult = 0;

    let priceFor14DaysForStudent = 0;
    let priceFor30DaysForStudent = 0;

    let factorUnder30DaysForStudent = 0;
    let factorOver30DaysForStudent = 0;

    let priceFor14DaysForDiscountGroup = 0;
    let priceFor30DaysForDiscountGroup = 0;

    let factorUnder30DaysForDiscountGroup = 0;
    let factorOver30DaysForDiscountGroup = 0;

    let zoneSelection = document.querySelector('#zoneSelection');
    selectedZone = zoneSelection.value;
    console.log("DEBUG: vyöhyke: " + selectedZone);

    if (selectedZone == "ab" || selectedZone == "bc" || selectedZone == "d") {
        priceFor14DaysForAdult = 40.40;
        priceFor30DaysForAdult = 59.70;

        factorUnder30DaysForAdult = 1.21;
        factorOver30DaysForAdult = 1.75;

        priceFor14DaysForStudent = 22.30;
        priceFor30DaysForStudent = 32.80;

        factorUnder30DaysForStudent = 0.66;
        factorOver30DaysForStudent = 0.96;

        priceFor14DaysForDiscountGroup = 20.20;
        priceFor30DaysForDiscountGroup = 29.90;

        factorUnder30DaysForDiscountGroup = 0.61;
        factorOver30DaysForDiscountGroup = 0.87;

    } else if (selectedZone == "abc" || selectedZone == "bcd") {
        priceFor14DaysForAdult = 65.70;
        priceFor30DaysForAdult = 96.70;

        factorUnder30DaysForAdult = 1.94;
        factorOver30DaysForAdult = 2.83;

        priceFor14DaysForStudent = 36.00;
        priceFor30DaysForStudent = 53.20;

        factorUnder30DaysForStudent = 1.08;
        factorOver30DaysForStudent = 1.56;

        priceFor14DaysForDiscountGroup = 33.10;
        priceFor30DaysForDiscountGroup = 48.40;

        factorUnder30DaysForDiscountGroup = 0.96;
        factorOver30DaysForDiscountGroup = 1.42;

    } else if (selectedZone == "cd") {
        priceFor14DaysForAdult = 52.70;
        priceFor30DaysForAdult = 77.60;

        factorUnder30DaysForAdult = 1.56;
        factorOver30DaysForAdult = 2.27;

        priceFor14DaysForStudent = 29.00;
        priceFor30DaysForStudent = 42.70;

        factorUnder30DaysForStudent = 0.86;
        factorOver30DaysForStudent = 1.25;

        priceFor14DaysForDiscountGroup = 26.40;
        priceFor30DaysForDiscountGroup = 38.80;

        factorUnder30DaysForDiscountGroup = 0.78;
        factorOver30DaysForDiscountGroup = 1.13;

    } else if (selectedZone == "abcd") {
        priceFor14DaysForAdult = 94.60;
        priceFor30DaysForAdult = 139.70;

        factorUnder30DaysForAdult = 2.82;
        factorOver30DaysForAdult = 4.09;

        priceFor14DaysForStudent = 52.00;
        priceFor30DaysForStudent = 76.80;

        factorUnder30DaysForStudent = 1.55;
        factorOver30DaysForStudent = 2.25;

        priceFor14DaysForDiscountGroup = 47.40;
        priceFor30DaysForDiscountGroup = 69.90;

        factorUnder30DaysForDiscountGroup = 1.41;
        factorOver30DaysForDiscountGroup = 2.04;
    }

    let customerGroupSelection = document.querySelector('#customerGroupSelection');
    selectedCustomerGroup = customerGroupSelection.value;
    console.log("DEBUG: asiakasryhmä: " + selectedCustomerGroup);

    let seasonDaysInput = document.querySelector('#seasonDaysInput');
    days = seasonDaysInput.value;

    if (days >= 14 && days <= 366) {
        errorMessageForSeasonDaysInput.textContent = "";
        if (days == 14) {
            if (selectedCustomerGroup == "adult") {
                price1 = priceFor14DaysForAdult;
            } else if (selectedCustomerGroup == "student") {
                price1 = priceFor14DaysForStudent;
            } else {
                // lapset, eläkeläiset ja liikuntarajoitteiset ihmiset:
                price1 = priceFor14DaysForDiscountGroup;
            }

        } else if (days > 14 && days < 30) {
            let calcDaysMinus14 = days - 14;
            if (selectedCustomerGroup == "adult") {
                price1 = (Math.floor((priceFor14DaysForAdult + calcDaysMinus14 * factorUnder30DaysForAdult) * 10)) / 10;
            } else if (selectedCustomerGroup == "student") {
                price1 = (Math.floor((priceFor14DaysForStudent + calcDaysMinus14 * factorUnder30DaysForStudent) * 10)) / 10;
            } else {
                // lapset, eläkeläiset ja liikuntarajoitteiset ihmiset:
                price1 = (Math.floor((priceFor14DaysForDiscountGroup + calcDaysMinus14 * factorUnder30DaysForDiscountGroup) * 10)) / 10;
            }
        } else if (days == 30) {
            if (selectedCustomerGroup == "adult") {
                price1 = priceFor30DaysForAdult;
            } else if (selectedCustomerGroup == "student") {
                price1 = priceFor30DaysForStudent;
            } else {
                // lapset, eläkeläiset ja liikuntarajoitteiset ihmiset:
                price1 = priceFor30DaysForDiscountGroup;
            }

        } else if (days > 30 && days < 367) {
            let calcDaysMinus30 = days - 30;
            if (selectedCustomerGroup == "adult") {
                price1 = (Math.ceil((priceFor30DaysForAdult + calcDaysMinus30 * factorOver30DaysForAdult) * 10)) / 10;
            } else if (selectedCustomerGroup == "student") {
                price1 = calcHelpForRounding(priceFor30DaysForStudent + calcDaysMinus30 * factorOver30DaysForStudent);
                //price1 = (Math.ceil((priceFor30DaysForStudent + calcDaysMinus30 * factorForABZoneOver30DaysForStudent) * 10)) / 10;
            } else {
                // lapset, eläkeläiset ja liikuntarajoitteiset ihmiset:
                price1 = calcHelpForRounding(priceFor30DaysForDiscountGroup + calcDaysMinus30 * factorOver30DaysForDiscountGroup);
            }

        }
        prices = calculateSeasonStorePrices(price1);
    } else {
        // alle 14 päivää tai yli 366 päivää
        console.log("DEBUG: arvo '" + days + "' on alle 14 päivää tai yli 366 päivää.");
        let errorMessageForSeasonDaysInput = document.querySelector('#errorMessageForSeasonDaysInput');
        if (days < 14) {
            errorMessageForSeasonDaysInput.textContent = "Kesto on alle 14 päivää.";
        } else {
            // yli 366 päivää
            errorMessageForSeasonDaysInput.textContent = "Kesto on yli 366 päivää.";
        }
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

function calculateSeasonStorePrices(price) {
    return [price + 1, price + 2, price * 1.035];
}

function calcHelpForRounding(price) {

    console.log("DEBUG: calcHelpForRounding");

    console.log(price);

    price = price.toFixed(2);

    console.log(price);

    let priceString = price.toString();

    console.log(priceString);

    let split = priceString.split(".");

    console.log(split);

    let value = split[1];

    console.log(value);

    let charAt0 = value.charAt(0);

    console.log(charAt0);

    let charAt = value.charAt(1);

    console.log(charAt);

    let parse0 = parseInt(charAt0);

    console.log(parse0);

    let parse = parseInt(charAt);

    console.log(parse);

    if (parse >= 4) {

        if (parse0 == 0) {
            price = price * 10;
            console.log(price);
            price = Math.floor(price);
            console.log(price);
            price = price / 10;
            console.log(price);
        } else {
            price = price * 10;
            console.log(price);
            price = Math.ceil(price);
            console.log(price);
            price = price / 10;
            console.log(price);
        }        
    } else {
        price = price * 10;
        console.log(price);
        price = Math.floor(price);
        console.log(price);
        price = price / 10;
        console.log(price);
    }
    return price;
}