const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');


// Fetch exchange rates and update the DOM
function calculate() {
    // Get the value of the currency one and currency two elements
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => { 
        // console.log(data);
        // Get rate of selected currency
        const rate = data.rates[currency_two];


        // Update rate element
        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`

        // Display what the top amount is
        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

// Event listeners
    // input is used when we type in a number ot use the arrows to select a number
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('change', calculate);

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
})

calculate();