let valuePriceInput = document.getElementById('valuePriceInput');
valuePriceInput.addEventListener('input', calculateValuePrice);
valuePriceInput.addEventListener("keyup", closeSoftKeyboardWhenEnterPressed);

document.getElementById('seasonDaysSelection').addEventListener("change", calculateSeasonPrice);
document.getElementById('zoneSelection').addEventListener("change", calculateSeasonPrice);
document.getElementById('customerGroupSelection').addEventListener("change", calculateSeasonPrice);

function closeSoftKeyboardWhenEnterPressed(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.activeElement.blur();
    }
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

    let priceArray = [0.0, 0.0, 0.0, 0.0, 0.0];

    let adult = [0.0, 0.0, 0.0, 0.0, 0.0];
    let discount = [0.0, 0.0, 0.0, 0.0, 0.0];
    let student = [0.0, 0.0, 0.0, 0.0, 0.0];

    // AB = BC = D:
    let adultAB = [40.4, 59.7, 112.2, 164.7, 637.2];
    let discountAB = [20.2, 29.9, 56.0, 82.1, 317.0];
    let studentAB = [22.3, 32.8, 61.6, 90.4, 349.6];

    // ABC = BCD:
    let adultABC = [65.7, 96.7, 181.6, 266.5, 1030.6];
    let discountABC = [33.1, 48.4, 91.0, 133.6, 517.0];
    let studentABC = [36.0, 53.2, 100.0, 146.8, 568.0];

    // CD:
    let adultCD = [52.7, 77.6, 145.7, 213.8, 826.7];
    let discountCD = [26.4, 38.8, 72.7, 106.6, 411.7];
    let studentCD = [29.0, 42.7, 80.2, 117.7, 455.2];

    // ABCD:
    let adultABCD = [94.6, 139.7, 262.4, 385.1, 1489.4];
    let discountABCD = [47.4, 69.9, 131.1, 192.3, 743.1];
    let studentABCD = [52.0, 76.8, 144.3, 211.8, 819.3];

    //let days = 0;

    let selectedSeasonDays = "";

    let selectedZone = "";

    let selectedCustomerGroup = "";

    let seasonDaysSelection = document.querySelector('#seasonDaysSelection');
    selectedSeasonDays = seasonDaysSelection.value;

    let zoneSelection = document.querySelector('#zoneSelection');
    selectedZone = zoneSelection.value;

    let customerGroupSelection = document.querySelector('#customerGroupSelection');
    selectedCustomerGroup = customerGroupSelection.value;

    // Hinnat valitun vyöhykkeen perusteella:
    if (selectedZone == "ab" || selectedZone == "bc" || selectedZone == "d") {
        adult = adultAB;
        discount = discountAB;
        student = studentAB;
    } else if (selectedZone == "abc" || selectedZone == "bcd") {
        adult = adultABC;
        discount = discountABC;
        student = studentABC;
    } else if (selectedZone == "cd") {
        adult = adultCD;
        discount = discountCD;
        student = studentCD;
    } else if (selectedZone == "abcd") {
        adult = adultABCD;
        discount = discountABCD;
        student = studentABCD;
    }

    let customerGroup = -1;

    if (selectedCustomerGroup == "adult") {
        priceArray = adult;
        customerGroup = 0;
    } else if (selectedCustomerGroup == "child" || selectedCustomerGroup == "pensioner" || selectedCustomerGroup == "physicallyChallenged") {
        priceArray = discount;
        customerGroup = 1;
    } else if (selectedCustomerGroup == "student") {
        priceArray = student;
        customerGroup = 2;
    }

    if (selectedSeasonDays == "14") {
        price1 = priceArray[0];
    } else if (selectedSeasonDays == "30") {
        price1 = priceArray[1];
    } else if (selectedSeasonDays == "60") {
        price1 = priceArray[2];
    } else if (selectedSeasonDays == "90") {
        price1 = priceArray[3];
    } else if (selectedSeasonDays == "360") {
        price1 = priceArray[4];
    }

    if (selectedSeasonDays != "empty"){
        prices = calculateSeasonStorePrices(price1, customerGroup);
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

function calculateSeasonStorePrices(price, customerGroup) {
    // student or discount group: different price in K-ryhmä (1 euro)
    if (customerGroup == 1 || customerGroup == 2) { 
        return [price + 1, price + 1, price * 1.035];
    }
    // adult: different price in K-ryhmä (2 euros)
    return [price + 1, price + 2, price * 1.035];
}

$(document).ready(function () {
    $('[data-toggle="popover"]').popover({ html: true });
    $(".nav-tabs a").click(function () {
        $(this).tab('show');
    });
    $("#linkToCalc1").click(function (event) {
        $('.tab2').tab('show');
    });
    $("#linkToCalc2").click(function (event) {
        $('.tab3').tab('show');
    });
});