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
var reports = data;

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
    
    // Select the input element and get the raw HTML node
    var inputElementDate = d3.select("#datetime");
    var inputElementCity = d3.select("#city");
    var inputElementState = d3.select("#state");
    var inputElementCountry = d3.select("#country");
    var inputElementShape = d3.select("#shape");

    // Get the value property of the input element
    var inputValueDate = inputElementDate.property("value");
    var inputValueCity = inputElementCity.property("value");
    var inputValueState = inputElementState.property("value");
    var inputValueCountry = inputElementCountry.property("value");
    var inputValueShape = inputElementShape.property("value");

    console.log(inputElementCity)
    // Filter data according to input value
    if (inputElementDate !="") {
        var filteredData = reports.filter(report => report.datetime === inputValueDate);
    };
    if (inputElementCity !="") {
        var filteredData = reports.filter(report => report.city === inputValueCity);
    };
    if (inputElementState !="") {
        var filteredData = reports.filter(report => report.state === inputValueState);
    };
    if (inputElementCountry !="") {
        var filteredData = reports.filter(report => report.country === inputValueCountry);
    };
    if (inputElementDate !="") {
    var filteredData = reports.filter(report => report.shape === inputValueShape);
    };

    // remove any children from the list to
    tbody.html("");
  
    // display filtered data
    filteredData.forEach((Report) => {
        var row = tbody.append("tr");
        Object.entries(Report).forEach(([key,value]) => { 
        var cell = row.append("td");
        cell.text(value)
        });
   
    });   
};
