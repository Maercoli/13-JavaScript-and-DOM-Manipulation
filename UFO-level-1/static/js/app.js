// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

//Loop Through `data` and console.log each UFO report object in the table
data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key,value]) => { 
    var cell = row.append("td");
    cell.text(value)
    });
});
