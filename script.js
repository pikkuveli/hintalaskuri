document.getElementById('view1').style.display = "none";
document.getElementById('view2').style.display = "none";

document.getElementById('btn0').addEventListener("click", showView1);
document.getElementById('btn1').addEventListener("click", showView2);
document.getElementById('btn2').addEventListener("click", showView0);

let priceInput = document.getElementById('price-input');
priceInput.addEventListener('input', calculatePrice);

priceInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.activeElement.blur();
    }
});

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

function calculatePrice() {
    let price = 0;

    let priceInputElement = document.querySelector('#price-input');
    price = priceInputElement.value;

    let costElement1 = document.querySelector('#cost1');
    let cost1 = (parseFloat(price, 10));
    costElement1.textContent = cost1.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });

    let costElement2 = document.querySelector('#cost2');
    let cost2 = (parseFloat(price, 10) + 1);
    costElement2.textContent = cost2.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });

    let costElement3 = document.querySelector('#cost3');
    let cost3 = (parseFloat(price, 10) + 1);
    costElement3.textContent = "~"+ cost3.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });

    let costElement4 = document.querySelector('#cost4');
    let cost4 = (parseFloat(price, 10) + 1);
    costElement4.textContent = cost4.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });
}