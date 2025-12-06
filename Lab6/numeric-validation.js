function validateNumericInput() {
    let age = document.forms["numericForm"] ["age"].value;
    //check if the input is empty 
    if(age === "") {
        alert("Age field cannot be empty.");
        return false; 
    }

    //check if the input is a numberic value 
    if(isNaN(age)) {
        alert ("Please enter a valid numeric value.");
        return false; 
    }

    //check if the input is within a specific range(optional) 
    if(age<1 || age>120) {
        alert("Please enter a number between 1 and 120.");
        return false; 
    }

    //if all validation pass 
    alert("Form submitted successfully!");
    return true; 
}