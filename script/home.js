document.getElementById('add-mny-btn').addEventListener('click', function (event) {
    event.preventDefault();

    console.log('btn clicked');

    const addMoney = document.getElementById('amount').value;

    const pinNumber = document.getElementById('pin').value;
    if (pinNumber === '1234') {
        const availableBalance = document.getElementById('balance').innerText

        const updatedBalance = parseFloat(availableBalance) + parseFloat(addMoney);


        document.getElementById('balance').innerText = updatedBalance;
    } else {
        alert("Wrong pin number")
    }
})