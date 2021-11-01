$('#subscribe-button').click(function (event) {
    
    console.log('Clicked button')

    var email = $('#email').val();
    var statusDiv = $('.status')
    statusDiv.empty();

    
    if(email.length >= 5 && email.includes('@') && email.includes('.')) {
        statusDiv.append('<div class="toast toast--hidden toast--top-right js-toast" role="alert" aria-live="assertive" aria-atomic="true" id="toast-1"> <div class="flex items-start justify-between"><div class="text-component text-sm"><h1 class="toast__title text-md">Congratulations!</h1><p class="toast__p">You are now subscribed to the Littlefield Newsletter! </p></div><button class="reset toast__close-btn margin-left-xxxxs js-toast__close-btn js-tab-focus"><svg class="icon" viewBox="0 0 12 12"><title>Close notification</title><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><line x1="1" y1="1" x2="11" y2="11" /><line x1="11" y1="1" x2="1" y2="11" /></g></svg></button></div></div>')
    } else {
        event.preventDefault()
        statusDiv.append('<div class="toast toast--hidden toast--top-right js-toast" role="alert" aria-live="assertive" aria-atomic="true" id="toast-1"> <div class="flex items-start justify-between"><div class="text-component text-sm"><h1 class="toast__title text-md">Sorry!</h1><p class="toast__p">The email address you have entered is not valid. Please re-enter your email address and try again. </p></div><button class="reset toast__close-btn margin-left-xxxxs js-toast__close-btn js-tab-focus"><svg class="icon" viewBox="0 0 12 12"><title>Close notification</title><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><line x1="1" y1="1" x2="11" y2="11" /><line x1="11" y1="1" x2="1" y2="11" /></g></svg></button></div></div>')
    }


})