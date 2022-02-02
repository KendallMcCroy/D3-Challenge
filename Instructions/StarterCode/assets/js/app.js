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

    var xAxis = d3.axisBottom(xAxisScale)
    var yAxis = d3.axisLeft(yAxisScale)
})
