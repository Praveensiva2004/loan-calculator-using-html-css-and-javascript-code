document.getElementById('calculateBtn').addEventListener('click', function() {
    // Get form values
    const amount = parseFloat(document.getElementById('amount').value);
    const interest = parseFloat(document.getElementById('interest').value) / 100 / 12;
    const years = parseInt(document.getElementById('years').value) * 12;

    // Validate input
    if (isNaN(amount) || isNaN(interest) || isNaN(years) || amount <= 0 || interest <= 0 || years <= 0) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    // Calculate monthly payment
    const x = Math.pow(1 + interest, years);
    const monthlyPayment = (amount * interest * x) / (x - 1);

    // Display result
    document.getElementById('payment').textContent = `$${monthlyPayment.toFixed(2)}`;
});
