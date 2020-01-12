$(document).ready(function() {
    $(".submit").click(function(event) {

        var email = $(".email").val()
        var subject = $(".subject").val()
        var message = $(".textarea").val()

        if(email.length > 5 && email.includes("@") && email.includes(".")) {
            console.log("email is valid")
        } else {
            event.preventDefault()
        }

        if(subject.length > 1 && subject.length < 50) {
            console.log("subject is valid")
        } else {
            event.preventDefault()
        }

        if(message.length > 20) {
            console.log("message is valid")
        } else {
            event.preventDefault()
        }
    })
})