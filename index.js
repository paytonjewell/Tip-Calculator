let tipAmount = 0;
const calculateTip = (i) => {
    let billAmount = document.querySelector('#amount').value;
    tipAmount = billAmount * i;

    document.querySelector('#tipAmount').innerHTML = "$" + tipAmount.toFixed(2);

    let billTotal = parseFloat(tipAmount) + parseFloat(billAmount);


    document.querySelector('#totalBill').innerHTML = "$" + billTotal.toFixed(2);

}

