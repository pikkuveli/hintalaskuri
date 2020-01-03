let priceInput = document.getElementById('price-input');
priceInput.addEventListener('input', calculatePrice);

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
    let cost3 = (parseFloat(price, 10) + 0.5);
    let cost32 = (parseFloat(price, 10) + 2);
    costElement3.textContent = cost3.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' }) + 
    " – " + 
    cost32.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });

    let costElement4 = document.querySelector('#cost4');
    let cost4 = (parseFloat(price, 10) + 1);
    costElement4.textContent = cost4.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' });
}