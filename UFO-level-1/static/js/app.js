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
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(reports);
    
    var filteredData = reports.filter(report => report.datetime === inputValue);

    console.log(filteredData);

    // Create an array with just the dates
    var dates = filteredData.map(day => day.datetime);

    //select the table element by id
    var newTable = d3.select("#ufo-table")

    // remove any children from the list to
    tbody.html("");

    // display filtered data
    console.log(filteredData);
};


