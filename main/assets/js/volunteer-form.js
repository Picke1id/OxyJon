$('#volunteer-submit').click(function (event) {
    
    console.log('Clicked button')

    var statusDiv = $('.status')
    statusDiv.empty();
    statusDiv.append('<div> Sorry, there are no current volunteer opportunities at this time. ')
    event.preventDefault()


})