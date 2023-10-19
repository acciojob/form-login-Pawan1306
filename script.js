
function getFormvalue() {
    
    var form = document.getElementById("form1");

    
    var firstNameInput = form.elements["fname"];
    var lastNameInput = form.elements["lname"];

    
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;

    // Display the values in an alert
    alert(  firstName + " " + lastName);

   
    return false;
}
    
   

