
//handle the event base of different configuration 
function handleClick(configuration,price){
    const totalPrice = document.getElementById('total_'+configuration);
    totalPrice.innerText = price;
    updateTotalPrice();
}

//update Total Price 
function updateTotalPrice(){
    //get the value of the total prices
    const totalBestPrice = document.getElementById('total_best_price').innerText;
    const totalMemoryPrice = document.getElementById('total_memory').innerText;
    const totalStoragePrice = document.getElementById('total_storage').innerText;
    const totalDeliveryPrice = document.getElementById('total_delivery').innerText;
    const totalPrice = document.getElementsByClassName('total_price');

    //add all the cost to the two different places by a single class
    for (const price of totalPrice) {
        price.innerText = parseFloat(totalBestPrice) + parseFloat(totalMemoryPrice) + parseFloat(totalStoragePrice) + parseFloat(totalDeliveryPrice);
    }
}

//promo code apply 
function promoCodeApply(event){
    const finalTotalPrice = document.getElementById('final_total_price');
    const promoInputField = document.getElementById('promo_input_field');
    const promoError = document.getElementById('promo_error');

    //get the promo value
    const promoValue = promoInputField.value;

    //verify the promo code
    if(promoValue == 'stevekaku'){
        let promoAppliedPrice =(80 /100 ) * parseFloat(finalTotalPrice.innerText);
        promoInputField.value = " ";

        //update the final price 
        Math.round(finalTotalPrice.innerText = promoAppliedPrice)

        //validation for promo button
        event.target.setAttribute('disabled',true);
        promoError.innerText = "You can use Promo for a single time ❗❗❗❗";

    }else{
        promoError.innerText = "You must give correct promo code ❗❗❗❗"
    }
}