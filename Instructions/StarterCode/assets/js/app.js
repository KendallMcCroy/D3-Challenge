d3.csv("assets/data/data.csv").then(function(data){

    // Loop through data to find poverty and healthcare
    data.forEach(function(health_data){
        health_data.poverty = +health_data.poverty;
        health_data.healthcare = +health_data.healthcare;
    })
})
