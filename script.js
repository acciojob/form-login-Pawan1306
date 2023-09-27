
function getFormvalue() {
    // Get the form element by its ID
    var form = document.getElementById("form1");

    // Get the input elements for first name and last name
    var firstNameInput = form.elements["fname"];
    var lastNameInput = form.elements["lname"];

    // Get the values entered by the user
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;

    // Display the values in an alert
    alert("First name: " + firstName + "\nLast Name: " + lastName);

    // Prevent the form from actually submitting (which would reload the page)
    return false;
}
    
    //

