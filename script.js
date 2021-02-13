// PlusButton Event Handler
const plusBtn = document.getElementById('plus-btn');
plusBtn.addEventListener('click', function () {
    // Increasing Product Quantity

    const singleProductPrice = 1219;
    updateQtyPricePlus('product-quantity','minus-btn','iPhone11-price','sub-total','tax-amount','total-price',singleProductPrice);
})


//Minus Button Event Handler
const minusBtn = document.getElementById('minus-btn');
minusBtn.addEventListener('click', function () {
    // Decreasing Product Quantity
    const quantityNumber = getInputNumber('product-quantity')
    const currentQuantity = quantityNumber - 1;

    const singleProductPrice = 1219;

    if (quantityNumber == 1) {
        document.getElementById('minus-btn').disabled = true;
    }

    updateQtyPriceMinus('product-quantity', 'iPhone11-price', 'sub-total', 'tax-amount', 'total-price', currentQuantity, singleProductPrice);

})


// PlusButton Event Handler for second product
const plusBtn1 = document.getElementById('plus-btn1');
plusBtn1.addEventListener('click', function () {
    // Increasing Product Quantity

    const singleProductPrice = 59;
    updateQtyPricePlus('product-quantity1', 'minus-btn1', 'iPhone-silicone-price', 'sub-total', 'tax-amount', 'total-price',singleProductPrice);
})



//Minus Button Event Handler for Second Product
const minusBtn1 = document.getElementById('minus-btn1');
minusBtn1.addEventListener('click', function () {
    // Decreasing Product Quantity
    const quantityNumber = getInputNumber('product-quantity1')
    const currentQuantity = quantityNumber - 1;
    const singleProductPrice = 59;

    if (quantityNumber == 1) {
        document.getElementById('minus-btn1').disabled = true;
    }
    updateQtyPriceMinus('product-quantity1', 'iPhone-silicone-price', 'sub-total', 'tax-amount', 'total-price', currentQuantity, singleProductPrice);

})



// Function for Plus Button, To update the product Quantity, Price, Sub Total, tax & grand total price

function updateQtyPricePlus(productQty, minusBtn, siliconePrice, subTotal, taxAmount, totalPrice, singleProductPrice) {
    const quantityNumber = getInputNumber(productQty)
    const currentQuantity = quantityNumber + 1;
    document.getElementById(productQty).innerText = currentQuantity;
    document.getElementById(minusBtn).disabled = false;

    const iPhonePriceNumber = getInputNumber(siliconePrice);
    const iPhoneCurrentPrice = iPhonePriceNumber + singleProductPrice;
    document.getElementById(siliconePrice).innerText = iPhoneCurrentPrice;

    // Combining product price with total price
    const subTotalNumber = getInputNumber(subTotal);
    const currentSubTotal = subTotalNumber + singleProductPrice;
    document.getElementById(subTotal).innerText = currentSubTotal;

    // calculating tax amount. if the subTotal is Greater then 3000, then tax will be 0
    if (currentSubTotal > 3000) {
        taxTotal = currentSubTotal * 0;
    }
    else {
        taxTotal = parseInt(currentSubTotal * 0.05);
    }
    document.getElementById(taxAmount).innerText = taxTotal;
    const currentTotal = currentSubTotal + taxTotal;
    document.getElementById(totalPrice).innerText = currentTotal;
}







// Function for Minus Button, To update the product Quantity, Price, Sub Total, tax & grand total price
function updateQtyPriceMinus(qty, productPrice, subTotal, taxAmount, totalPrice, currentQuantity, singleProductPrice) {
    document.getElementById(qty).innerText = currentQuantity;
    const iPhonePriceNumber = getInputNumber(productPrice);
    const iPhoneCurrentPrice = iPhonePriceNumber - singleProductPrice;
    document.getElementById(productPrice).innerText = iPhoneCurrentPrice;

    // Combining product price with total price
    const subTotalNumber = getInputNumber(subTotal);
    const currentSubTotal = subTotalNumber - singleProductPrice;
    document.getElementById(subTotal).innerText = currentSubTotal;

    // calculating tax amount. if the subTotal is Greater then 3000, then tax will be 0;
    if (currentSubTotal > 3000) {
        taxTotal = currentSubTotal * 0;
    }
    else {
        taxTotal = parseInt(currentSubTotal * 0.05);
    }
    document.getElementById(taxAmount).innerText = taxTotal;
    const currentTotal = currentSubTotal + taxTotal;
    document.getElementById(totalPrice).innerText = currentTotal;
}






// function for Get input number to floating Number
function getInputNumber(id) {
    const priceNumber = document.getElementById(id).innerText;
    const priceFloatNumber = parseFloat(priceNumber);
    return priceFloatNumber;
}