//maybe switch to http://www.formvalidator.net to ditch bootstrap

$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        // formError();
        // submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var company = $("#company").val();
    var country = $("#country").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var message = $("#message").val();

    $.ajax({
        type: "POST",
        url: "form-process.php",
        data: "firstName=" + firstName + "&lastName=" + lastName + "&company=" + company + "&country=" + country + "&email=" + email + "&phone=" + phone + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                // formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Enquiry sumbitted.")
}

// function formError(){
//     $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//         $(this).removeClass();
//     });
// }

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "text-success";
    } else {
        var msgClasses = "text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}