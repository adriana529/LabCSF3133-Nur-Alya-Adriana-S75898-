function validateForm() {
    let fname = document.forms["myForm"] ["fname"].value;
        if(fname.trim() === "") {
            alert ("First Name must be filled out");
            return false;
        }
}