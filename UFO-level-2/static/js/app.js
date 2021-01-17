// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

//The code below uses the Arrow function to:
// 1- Loop Through `data` and console.log each UFO report object
// 2- Use d3 to append one table row `tr` for each UFO report object
// 3- Use d3 to append 1 cell per UFO report value 
// 4- Use d3 to update each cell's text with UFO report values (datetime, city, state, country, shape, durationMinutes, comments)

data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key,value]) => { 
    var cell = row.append("td");
    cell.text(value)
    });
});

// Assign the data from `data.js` to a descriptive variable
//var reports = data;

// Select the button
var button = d3.selectAll("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("change",runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the value property added in the element
    var date = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value");
    var state = d3.select("#state").property("value");
    var country = d3.select("#country").property("value");
    var shape = d3.select("#shape").property("value");

    // Assign a variable to filter the data according to the value property of the input element
    var filteredData = data;    

    // Filter data according to each input value
    if (date) {
        filteredData = filteredData.filter((ufoReport) => {
            return ufoReport.datetime == date;
        });
    };
    
    if (city) {
        filteredData = filteredData.filter((ufoReport) => {
            return ufoReport.city == city;
        }); 
    };   
    
    if (state) {
        filteredData = filteredData.filter((ufoReport) => {
            return ufoReport.state == state;
        }); 
    };

    if (country) {
        filteredData = filteredData.filter((ufoReport) => {
            return ufoReport.country == country;
        }); 
    };

    if (shape) {
        filteredData = filteredData.filter((ufoReport) => {
            return ufoReport.shape == shape;
        }); 
    };
     // remove any children from the list to
     tbody.html("");

     if (filteredData.length > 0) {
        buildTable(filteredData);
     }
     else {
         var row = tbody.append("h2").text("No data found")
     };
};


// Function to build filtered data
function buildTable (data) {
    data.forEach((ufoReport) => {
         var row = tbody.append("tr");
         Object.entries(ufoReport).forEach(([key,value]) => { 
         var cell = row.append("td");
         cell.text(value)
         });
    
     }); 
    
;}
