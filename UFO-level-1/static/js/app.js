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

//