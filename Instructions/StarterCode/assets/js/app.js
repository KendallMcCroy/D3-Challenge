var svgWidth = 960;
var svgHeight = 500;

var margin = {
    top: 20,
    right:40,
    bottom: 60,
    left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Creating a SVG group to hold the charts
var svg = d3.select("#scatter").append("svg").attr("width", svgWidth).attr("height", svgHeight);

var chartGroup = svg.append("g").attr("transform", `translate(${margin.left}, ${margin.top})` );

d3.csv("assets/data/data.csv").then(function(data){

    // Loop through data to find poverty and healthcare
    data.forEach(function(health_data){
        health_data.poverty = +health_data.poverty; // X axis
        health_data.healthcare = +health_data.healthcare; // Y Axis
    })

    // Create scale for x axis
    var xAxisScale = d3.scaleLinear().domain([8, d3.max(data, d => d.poverty)]).range([0, width]);

    // Create scale for y axis
    var yAxisScale = d3.scaleLinear().domain([0, d3.max(data, d => d.healthcare)]).range([height, 0]);

    // Creating axis functions
    var xAxis = d3.axisBottom(xAxisScale)
    var yAxis = d3.axisLeft(yAxisScale)

    // Adding Axes to the chart
    chartGroup.append("g").attr("tranform", `translate (0, ${height})`).call(xAxis);
    chartGroup.append("g").call(yAxis);
})
