// PlusButton Event Handler
const plusBtn = document.getElementById('plus-btn');
plusBtn.addEventListener('click', function(){
    // Increasing Product Quantity
    const quantityNumber = getInputNumber('product-quantity')
    const currentQuantity = quantityNumber + 1;
    document.getElementById('product-quantity').innerText = currentQuantity;
    document.getElementById('minus-btn').disabled = false;
    
    const iPhonePriceNumber = getInputNumber('iPhone11-price');
    const iPhoneCurrentPrice = iPhonePriceNumber + 1219;
    document.getElementById('iPhone11-price').innerText = iPhoneCurrentPrice;

    // Combining product price with total price
    const subTotalNumber = getInputNumber('sub-total');
    const currentSubTotal = subTotalNumber + 1219;
    document.getElementById('sub-total').innerText = currentSubTotal;
    
    // calculating tax amount. if the subTotal is Greater then 3000, then tax will be 0
    if(currentSubTotal > 3000){
        taxTotal = currentSubTotal * 0;
    }
    else{
        taxTotal = parseInt(currentSubTotal * 0.05);
    }
    document.getElementById('tax-amount').innerText = taxTotal;
    const currentTotal = currentSubTotal + taxTotal;
    document.getElementById('total-price').innerText = currentTotal;
})


//Minus Button Event Handler
const minusBtn = document.getElementById('minus-btn');
minusBtn.addEventListener('click', function(){
    // Decreasing Product Quantity
    const quantityNumber = getInputNumber('product-quantity')
    const currentQuantity = quantityNumber - 1;

    if(quantityNumber == 1){
        document.getElementById('minus-btn').disabled = true;
    }
   
    document.getElementById('product-quantity').innerText = currentQuantity;
    const iPhonePriceNumber = getInputNumber('iPhone11-price');
    const iPhoneCurrentPrice = iPhonePriceNumber - 1219;
    document.getElementById('iPhone11-price').innerText = iPhoneCurrentPrice;

    // Combining product price with total price
    const subTotalNumber = getInputNumber('sub-total');
    const currentSubTotal = subTotalNumber - 1219;
    document.getElementById('sub-total').innerText = currentSubTotal;

    // calculating tax amount. if the subTotal is Greater then 3000, then tax will be 0
    if(currentSubTotal > 3000){
        taxTotal = currentSubTotal * 0;
    }
    else{
        taxTotal = parseInt(currentSubTotal * 0.05);
    }
    document.getElementById('tax-amount').innerText = taxTotal;
    const currentTotal = currentSubTotal + taxTotal;
    document.getElementById('total-price').innerText = currentTotal;
})


// PlusButton Event Handler for second product
const plusBtn1 = document.getElementById('plus-btn1');
plusBtn1.addEventListener('click', function(){
    // Increasing Product Quantity
    const quantityNumber = getInputNumber('product-quantity1')
    const currentQuantity = quantityNumber + 1;
    document.getElementById('product-quantity1').innerText = currentQuantity;
    document.getElementById('minus-btn1').disabled = false;
    
    const iPhonePriceNumber = getInputNumber('iPhone-silicone-price');
    const iPhoneCurrentPrice = iPhonePriceNumber + 59;
    document.getElementById('iPhone-silicone-price').innerText = iPhoneCurrentPrice;

    // Combining product price with total price
    const subTotalNumber = getInputNumber('sub-total');
    const currentSubTotal = subTotalNumber + 59;
    document.getElementById('sub-total').innerText = currentSubTotal;

    // calculating tax amount. if the subTotal is Greater then 3000, then tax will be 0
    if(currentSubTotal > 3000){
        taxTotal = currentSubTotal * 0;
    }
    else{
        taxTotal = parseInt(currentSubTotal * 0.05);
    }
    document.getElementById('tax-amount').innerText = taxTotal;
    const currentTotal = currentSubTotal + taxTotal;
    document.getElementById('total-price').innerText = currentTotal;
})



//Minus Button Event Handler
const minusBtn1 = document.getElementById('minus-btn1');
minusBtn1.addEventListener('click', function(){
    // Decreasing Product Quantity
    const quantityNumber = getInputNumber('product-quantity1')
    const currentQuantity = quantityNumber - 1;

    if(quantityNumber == 1){
        document.getElementById('minus-btn1').disabled = true;
    }
   
    document.getElementById('product-quantity1').innerText = currentQuantity;
    const iPhonePriceNumber = getInputNumber('iPhone-silicone-price');
    const iPhoneCurrentPrice = iPhonePriceNumber - 59;
    document.getElementById('iPhone-silicone-price').innerText = iPhoneCurrentPrice;

    // Combining product price with total price
    const subTotalNumber = getInputNumber('sub-total');
    const currentSubTotal = subTotalNumber - 59;
    document.getElementById('sub-total').innerText = currentSubTotal;

    // calculating tax amount. if the subTotal is Greater then 3000, then tax will be 0
    if(currentSubTotal > 3000){
        taxTotal = currentSubTotal * 0;
    }
    else{
        taxTotal = parseInt(currentSubTotal * 0.05);
    }
    document.getElementById('tax-amount').innerText = taxTotal;
    const currentTotal = currentSubTotal + taxTotal;
    document.getElementById('total-price').innerText = currentTotal;

})









// function for Get input number to floating Number
function getInputNumber(id){
    const priceNumber = document.getElementById(id).innerText;
    const priceFloatNumber = parseFloat(priceNumber);
    return priceFloatNumber;
}