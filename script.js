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

    // AB:

    let priceFor14DaysForAdultAB = 40.40;
    let priceFor30DaysForAdultAB = 59.70;

    let factorUnder30DaysForAdultAB = 1.21;
    let factorOver30DaysForAdultAB = 1.75;

    let priceFor14DaysForStudentAB = 22.30;
    let priceFor30DaysForStudentAB = 32.80;

    let factorUnder30DaysForStudentAB = 0.66;
    let factorOver30DaysForStudentAB = 0.96;

    let priceFor14DaysForDiscountGroupAB = 20.20;
    let priceFor30DaysForDiscountGroupAB = 29.90;

    let factorUnder30DaysForDiscountGroupAB = 0.61;
    let factorOver30DaysForDiscountGroupAB = 0.87;

    // let priceFor14DaysForAdultBC = 40.40;
    // let priceFor30DaysForAdultBC = 59.70;

    // let factorUnder30DaysForAdultBC = 1.21;
    // let factorOver30DaysForAdultBC = 1.75;

    // let priceFor14DaysForStudentBC = 22.30;
    // let priceFor30DaysForStudentBC = 32.80;

    // let factorUnder30DaysForStudentBC = 0.66;
    // let factorOver30DaysForStudentBC = 0.96;

    // let priceFor14DaysForDiscountGroupBC = 20.20;
    // let priceFor30DaysForDiscountGroupBC = 29.90;

    // let factorUnder30DaysForDiscountGroupBC = 0.61;
    // let factorOver30DaysForDiscountGroupBC = 0.87;

    // let priceFor14DaysForAdultD = 40.40;
    // let priceFor30DaysForAdultD = 59.70;

    // let factorUnder30DaysForAdultD = 1.21;
    // let factorOver30DaysForAdultD = 1.75;

    // let priceFor14DaysForStudentD = 22.30;
    // let priceFor30DaysForStudentD = 32.80;

    // let factorUnder30DaysForStudentD = 0.66;
    // let factorOver30DaysForStudentD = 0.96;

    // let priceFor14DaysForDiscountGroupD = 20.20;
    // let priceFor30DaysForDiscountGroupD = 29.90;

    // let factorUnder30DaysForDiscountGroupD = 0.61;
    // let factorOver30DaysForDiscountGroupD = 0.87;

    // ABC:

    let priceFor14DaysForAdultABC = 65.70;
    let priceFor30DaysForAdultABC = 96.70;

    let factorUnder30DaysForAdultABC = 1.94;
    let factorOver30DaysForAdultABC = 2.83;

    let priceFor14DaysForStudentABC = 36.00;
    let priceFor30DaysForStudentABC = 53.20;

    let factorUnder30DaysForStudentABC = 1.08;
    let factorOver30DaysForStudentABC = 1.56;

    let priceFor14DaysForDiscountGroupABC = 33.10;
    let priceFor30DaysForDiscountGroupABC = 48.40;

    let factorUnder30DaysForDiscountGroupABC = 0.96;
    let factorOver30DaysForDiscountGroupABC = 1.42;

    // CD:

    let priceFor14DaysForAdultCD = 52.70;
    let priceFor30DaysForAdultCD = 77.60;

    let factorUnder30DaysForAdultCD = 1.56;
    let factorOver30DaysForAdultCD = 2.27;

    let priceFor14DaysForStudentCD = 29.00;
    let priceFor30DaysForStudentCD = 42.70;

    let factorUnder30DaysForStudentCD = 0.86;
    let factorOver30DaysForStudentCD = 1.25;

    let priceFor14DaysForDiscountGroupCD = 26.40;
    let priceFor30DaysForDiscountGroupCD = 38.80;

    let factorUnder30DaysForDiscountGroupCD = 0.78;
    let factorOver30DaysForDiscountGroupCD = 1.13;

    // ABCD:

    let priceFor14DaysForAdultABCD = 94.60;
    let priceFor30DaysForAdultABCD = 139.70;

    let factorUnder30DaysForAdultABCD = 2.82;
    let factorOver30DaysForAdultABCD = 4.09;

    let priceFor14DaysForStudentABCD = 52.00;
    let priceFor30DaysForStudentABCD = 76.80;

    let factorUnder30DaysForStudentABCD = 1.55;
    let factorOver30DaysForStudentABCD = 2.25;

    let priceFor14DaysForDiscountGroupABCD = 47.40;
    let priceFor30DaysForDiscountGroupABCD = 69.90;

    let factorUnder30DaysForDiscountGroupABCD = 1.41;
    let factorOver30DaysForDiscountGroupABCD = 2.04;

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
        priceFor14DaysForAdult = priceFor14DaysForAdultAB;
        priceFor30DaysForAdult = priceFor30DaysForAdultAB;

        factorUnder30DaysForAdult = factorUnder30DaysForAdultAB;
        factorOver30DaysForAdult = factorOver30DaysForAdultAB;

        priceFor14DaysForStudent = priceFor14DaysForStudentAB;
        priceFor30DaysForStudent = priceFor30DaysForStudentAB;

        factorUnder30DaysForStudent = factorUnder30DaysForStudentAB;
        factorOver30DaysForStudent = factorOver30DaysForStudentAB;

        priceFor14DaysForDiscountGroup = priceFor14DaysForDiscountGroupAB;
        priceFor30DaysForDiscountGroup = priceFor30DaysForDiscountGroupAB;

        factorUnder30DaysForDiscountGroup = factorUnder30DaysForDiscountGroupAB;
        factorOver30DaysForDiscountGroup = factorOver30DaysForDiscountGroupAB;
    } else if (selectedZone == "abc" || selectedZone == "bcd") {
        priceFor14DaysForAdult = priceFor14DaysForAdultABC;
        priceFor30DaysForAdult = priceFor30DaysForAdultABC;

        factorUnder30DaysForAdult = factorUnder30DaysForAdultABC;
        factorOver30DaysForAdult = factorOver30DaysForAdultABC;

        priceFor14DaysForStudent = priceFor14DaysForStudentABC;
        priceFor30DaysForStudent = priceFor30DaysForStudentABC;

        factorUnder30DaysForStudent = factorUnder30DaysForStudentABC;
        factorOver30DaysForStudent = factorOver30DaysForStudentABC;

        priceFor14DaysForDiscountGroup = priceFor14DaysForDiscountGroupABC;
        priceFor30DaysForDiscountGroup = priceFor30DaysForDiscountGroupABC;

        factorUnder30DaysForDiscountGroup = factorUnder30DaysForDiscountGroupABC;
        factorOver30DaysForDiscountGroup = factorOver30DaysForDiscountGroupABC;
    } else if (selectedZone == "cd") {
        priceFor14DaysForAdult = priceFor14DaysForAdultCD;
        priceFor30DaysForAdult = priceFor30DaysForAdultCD;

        factorUnder30DaysForAdult = factorUnder30DaysForAdultCD;
        factorOver30DaysForAdult = factorOver30DaysForAdultCD;

        priceFor14DaysForStudent = priceFor14DaysForStudentCD;
        priceFor30DaysForStudent = priceFor30DaysForStudentCD;

        factorUnder30DaysForStudent = factorUnder30DaysForStudentCD;
        factorOver30DaysForStudent = factorOver30DaysForStudentCD;

        priceFor14DaysForDiscountGroup = priceFor14DaysForDiscountGroupCD;
        priceFor30DaysForDiscountGroup = priceFor30DaysForDiscountGroupCD;

        factorUnder30DaysForDiscountGroup = factorUnder30DaysForDiscountGroupCD;
        factorOver30DaysForDiscountGroup = factorOver30DaysForDiscountGroupCD;
    } else if (selectedZone == "abcd") {
        priceFor14DaysForAdult = priceFor14DaysForAdultABCD;
        priceFor30DaysForAdult = priceFor30DaysForAdultABCD;

        factorUnder30DaysForAdult = factorUnder30DaysForAdultABCD;
        factorOver30DaysForAdult = factorOver30DaysForAdultABCD;

        priceFor14DaysForStudent = priceFor14DaysForStudentABCD;
        priceFor30DaysForStudent = priceFor30DaysForStudentABCD;

        factorUnder30DaysForStudent = factorUnder30DaysForStudentABCD;
        factorOver30DaysForStudent = factorOver30DaysForStudentABCD;

        priceFor14DaysForDiscountGroup = priceFor14DaysForDiscountGroupABCD;
        priceFor30DaysForDiscountGroup = priceFor30DaysForDiscountGroupABCD;

        factorUnder30DaysForDiscountGroup = factorUnder30DaysForDiscountGroupABCD;
        factorOver30DaysForDiscountGroup = factorOver30DaysForDiscountGroupABCD;
    }

    let customerGroupSelection = document.querySelector('#customerGroupSelection');
    selectedCustomerGroup = customerGroupSelection.value;
    console.log("DEBUG: asiakasryhmä: " + selectedCustomerGroup);

    let seasonDaysInput = document.querySelector('#seasonDaysInput');
    days = seasonDaysInput.value;

    if (days >= 14 && days <= 366) {
        if (days == 14) {
            if (selectedCustomerGroup == "adult") {
                price1 = priceFor14DaysForAdult;
            } else if (selectedCustomerGroup == "student") {
                price1 = priceFor14DaysForStudent;
            }else{
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

    let charAt = value.charAt(1);

    console.log(charAt);

    let parse = parseInt(charAt);

    console.log(parse);

    if (parse >= 4) {
        price = price * 10;
        console.log(price);
        price = Math.ceil(price);
        console.log(price);
        price = price / 10;
        console.log(price);
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