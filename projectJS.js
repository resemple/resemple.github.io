/*      WEB-115 Final Project
        Author: Raymond Semple
        Date:   4/17/24

        Filename: projectJS.js
*/


// Clear form button
function clearForm() {
    document.getElementById("myForm").reset();
  }

//Event listener for personal information button
document.getElementById("piButton").addEventListener('click', piInfo)
document.getElementById("prntButton").addEventListener('click', printMealPlan)

//Function for personal Info Area
function piInfo() {
    nameInput = document.getElementById("nameIn").value;
    emailInput = document.getElementById("emailIn").value;
    goalInput = document.getElementById("goalIn").value;
    // Validate email address
    if (!validateEmail(emailInput)) {
        alert("Please enter a valid email address.");
        return;
    }
    addWeekDays()

    // Generate meal plan HTML
    var mealPlanHTML = `
    <html>
    <head>
        <title>Weekly Meal Plan</title>
        <style>
            body 
            {
                font-family: monospace;
            }
            table 
            {
                width: 100%; 
                border-collapse: collapse; 
                border: 2px solid #000; 
            }
            th, td 
            {
                border: 1px solid #000; 
                padding: 8px; 
                word-wrap: break-word;
            }
            th:nth-child(1), td:nth-child(1),
            th:nth-child(2), td:nth-child(2),
            th:nth-child(3), td:nth-child(3),
            th:nth-child(4), td:nth-child(4),
            th:nth-child(5), td:nth-child(5), 
            {
              max-width: 75px; 
            }
        </style>
        <script src="projectJS.js" defer></script>
    </head>
    <body>
      <div id="meal-plan">
        <h1>Weekly Meal Plan</h1>
        <p>Name: ${nameInput}</p>
        <p>Email: ${emailInput}</p>
        <p>Goal for the Week: ${goalInput}</p>
        <h2>Meal Plan:</h2>
        <table>
            <tr>
               <th>Day Of Week</th>
               <th>Breakfast</th>
               <th>Morning Snack</th>
               <th>Lunch</th>
               <th>Afternoon Snack</th>
               <th>Dinner</th>
            </tr>
            <tr>
                <td>Monday</td>
                <td>${monBrk}</td>
                <td>${monMsk}</td>
                <td>${monLun}</td>
                <td>${monAsk}</td>
                <td>${monDin}</td>
                
             </tr> 
             <tr>
                 <td>Tuesday</td>
                 <td>${tueBrk}</td>
                 <td>${tueMsk}</td>
                 <td>${tueLun}</td>
                 <td>${tueAsk}</td>
                 <td>${tueDin}</td>
                
             </tr> 
             <tr>
                <td>Wednesday</td>
                <td>${wedBrk}</td>
                <td>${wedMsk}</td>
                <td>${wedLun}</td>
                <td>${wedAsk}</td>
                <td>${wedDin}</td>
                
             </tr> 
             <tr>
                <td>Thursday</td>
                <td>${thuBrk}</td>
                <td>${thuMsk}</td>
                <td>${thuLun}</td>
                <td>${thuAsk}</td>
                <td>${thuDin}</td>
                
             </tr> 
             <tr>
                <td>Friday</td>
                <td>${friBrk}</td>
                <td>${friMsk}</td>
                <td>${friLun}</td>
                <td>${friAsk}</td>
                <td>${friDin}</td>
                
             </tr> 
             <tr>
                <td>Saturday</td>
                <td>${satBrk}</td>
                <td>${satMsk}</td>
                <td>${satLun}</td>
                <td>${satAsk}</td>
                <td>${satDin}</td>
                
             </tr> 
             <tr>
                <td>Sunday</td>
                <td>${sunBrk}</td>
                <td>${sunMsk}</td>
                <td>${sunLun}</td>
                <td>${sunAsk}</td>
                <td>${sunDin}</td>
                
             </tr>                
         </table>
        </div>
        <br><center>
        <button onclick="printMealPlan()">Print</button>
        <button onclick="downloadMealPlan()">Download</button>
        <script>
            function printMealPlan() {
                window.print();
            }
            function downloadMealPlan() {
                var mealPlanContent = document.getElementById('meal-plan').innerText;
                var blob = new Blob([mealPlanContent], { type: 'text/plain' });
                var link = document.createElement('a');
                link.download = 'meal_plan.txt';
                link.href = window.URL.createObjectURL(blob);
                link.click();
              }
        </script> 
    </body>
    </html>
    `;

    // Open a new window and write the meal plan HTML
    var newWindow = window.open();
    newWindow.document.write(mealPlanHTML);
}

// Function to validate email address
function validateEmail(email) {
    // Regular expression for validating email address
    var re = /\S+@\S+\.\S+/;
    return re.test(email); 
}   


// Function to write weekdays into the meal plan 
function addWeekDays() {
    monBrk = document.getElementById("monBrk").value;
    monMsk = document.getElementById("monMsk").value;
    monLun = document.getElementById("monLun").value;
    monAsk = document.getElementById("monAsk").value;
    monDin = document.getElementById("monDin").value;

    tueBrk = document.getElementById("tueBrk").value;
    tueMsk = document.getElementById("tueMsk").value;
    tueLun = document.getElementById("tueLun").value;
    tueAsk = document.getElementById("tueAsk").value;
    tueDin = document.getElementById("tueDin").value;

    wedBrk = document.getElementById("wedBrk").value;
    wedMsk = document.getElementById("wedMsk").value;
    wedLun = document.getElementById("wedLun").value;
    wedAsk = document.getElementById("wedAsk").value;
    wedDin = document.getElementById("wedDin").value;

    thuBrk = document.getElementById("thuBrk").value;
    thuMsk = document.getElementById("thuMsk").value;
    thuLun = document.getElementById("thuLun").value;
    thuAsk = document.getElementById("thuAsk").value;
    thuDin = document.getElementById("thuDin").value;

    friBrk = document.getElementById("friBrk").value;
    friMsk = document.getElementById("friMsk").value;
    friLun = document.getElementById("friLun").value;
    friAsk = document.getElementById("friAsk").value;
    friDin = document.getElementById("friDin").value;

    satBrk = document.getElementById("satBrk").value;
    satMsk = document.getElementById("satMsk").value;
    satLun = document.getElementById("satLun").value;
    satAsk = document.getElementById("satAsk").value;
    satDin = document.getElementById("satDin").value;

    sunBrk = document.getElementById("sunBrk").value;
    sunMsk = document.getElementById("sunMsk").value;
    sunLun = document.getElementById("sunLun").value;
    sunAsk = document.getElementById("sunAsk").value;
    sunDin = document.getElementById("sunDin").value;



}

