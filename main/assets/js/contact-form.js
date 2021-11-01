$('#contact-submit').click(function (event) {
    
    console.log('Clicked button')

    var firstName = $('#first-name').val();
    var lastName = $('#last-name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var subject = $('#subject').val();
    var message = $('#message').val();
    var statusDiv = $('.status')
    statusDiv.empty();


    if(firstName.length >= 1) {
        statusDiv.append('<div> First Name is valid </div>')
    } else {
        event.preventDefault()
        statusDiv.append('<div> First Name is NOT valid </div>')
    }


    if(lastName.length >= 1) {
        statusDiv.append('<div> Last Name is valid </div>')
    } else {
        event.preventDefault()
        statusDiv.append('<div> Last Name is NOT valid</div>')
    }

    
    if(email.length >= 5 && email.includes('@') && email.includes('.')) {
        statusDiv.append('<div> Email is valid </div>')
    } else {
        event.preventDefault()
        statusDiv.append('<div> Email is NOT valid </div>')
    }

    if(phone.length >= 10) {
        statusDiv.append('<div> Phone Number is valid </div>')
    } else {
        event.preventDefault()
        statusDiv.append('<div> Phone Number is NOT valid </div>')
    }

    if(subject.length >= 2) {
        statusDiv.append('<div> Subject is valid </div>')
    } else {
        event.preventDefault()
        statusDiv.append('<div> Subject is NOT valid </div>')
    }

    if(message.length >= 2) {
        statusDiv.append('<div> Message is valid </div>')
    } else {
        event.preventDefault()
        statusDiv.append('<div> Message is NOT valid </div>')
    }
})