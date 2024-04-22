/*      WEB-115 Final Project
        Author: Raymond Semple
        Date:   4/17/24

        Filename: projectJS.js
*/

//Event listener for personal information button
document.getElementById("piButton").addEventListener('click',piInfo)

//Function for personal Info Area
function piInfo() 
{
    nameInput = document.getElementById("nameIn").value;
    emailInput = document.getElementById("emailIn").value;
    goalInput = document.getElementById("goalIn").value;
    valEmail(emailInput)
}

//function to validate email
function valEmail(emailInput){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailInput.value.match(mailformat)){
        alert("Valid email address!");
//        document.form1.text1.focus();
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
//        document.form1.text1.focus();
        return false;
    }
}

// Days of the Week
let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


// Function to write weekdays into the meal plan 
function addweekDays() {
    let i = 0;  // Initial counter value
    // reference the collection of heading cells in the table
    let headingCells = document.getElementsByTagName("th");
    // write each of the seven days into a heading cell
    while (i < 7) {
        headingCells[i].innerHTML = weekDays[i];
        // increase counter by 1
        i++;
    }
}
