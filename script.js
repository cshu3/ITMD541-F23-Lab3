document.getElementById('tipForm').addEventListener('input', function() {

	var billTotalInput = document.getElementById('billTotal');
	var tipInput = document.getElementById('tip');

	// Function to update the tip calculations
	function updateTipCalculations() {
		var inputValue = billTotalInput.value;
		if (inputValue.length == 0 || inputValue == "0") {
			inputValue = "0";
			tipInput.value = "0"; // Reset the tip slider to 0
		}
		var numericValue = inputValue.replace(/[^0-9.]/g, ''); // Allow decimal point as well

		// Set the input value to the sanitized numeric value
		billTotalInput.value = numericValue;

		var billTotal = parseFloat(numericValue);
		var tip = parseFloat(tipInput.value);

		var tipPercentage = tip / 100;
		var tipAmount = billTotal * tipPercentage;
		var totalBillWithTip = billTotal + tipAmount;

			var formatter = new Intl.NumberFormat('en-US'); // Create a number formatter for the US locale
			document.getElementById('tipPercentage').value = (tipPercentage * 100).toFixed(0) + '%';
			document.getElementById('tipAmount').value = formatter.format(tipAmount.toFixed(2)); // Format tipAmount with thousand separators
			document.getElementById('totalBillWithTip').value = formatter.format(totalBillWithTip.toFixed(2)); // Format totalBillWithTip with thousand separators
		}

	updateTipCalculations();
});