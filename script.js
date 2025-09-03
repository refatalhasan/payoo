console.log('js is connected');

// add event listener

document.getElementById('login-btn').addEventListener ('click', function(event){

    // prevent defult reload
    event.preventDefault();
    console.log('login btn clicked');

    // get the phone number from form
    const phoneNumber = document.getElementById('mobile').value;
    console.log(phoneNumber)
    
})
