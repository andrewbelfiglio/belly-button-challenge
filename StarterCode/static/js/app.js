// Get the samples.json from URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);

    // Create trace for bar chart
    let trace1 = {
    x: data.samples[0]['sample_values'],
    y: data.samples[0]['otu_ids'],
    type: "bar",
    orientation: "h"
    };

    // Create bar chart
    let data1 = [trace1];

    let layout1 = {
        title: "Top Microbial Species Found"
    };
  
    Plotly.newPlot("bar", data1, layout1);


    // Create trace for bubble chart
    let trace2 = {
        x: data.samples[0]['otu_ids'],
        y: data.samples[0]['sample_values'],
        type: "scatter",
        mode: "markers",
        marker: {
            color: "red",
            size: data.samples[0]['sample_values']
        }
    };

    // Create bubble chart
    let data2 = [trace2];

    let layout2 = {
        title: "Counts of All Microbial Species Found"
    };
    
    Plotly.newPlot("bubble", data2, layout2);
});


let demo_box = d3.select("#sample-metadata");

var demo_data = [
    "id: 940",
    "ethnicity: Caucasian",
    "gender: F",
    "age: 24",
    "location: Beaufort/NC",
    "bbtype: I",
    "wfreq: 2"
];

// .html(___.join('<br/>')) suggestion from 
// https://stackoverflow.com/questions/30518546/how-to-append-text-to-a-div-in-d3
// credit to user Mark: https://stackoverflow.com/users/16363/mark
demo_box.text(demo_data).html(demo_data.join('<br/>'));


let select_box = d3.select("#selDataset");

var select_data = [
    "940",
    "941",
    "942"
];

// this code to add options to select box was adapted from https://stackoverflow.com/questions/33777272/creating-a-drop-down-with-d3-js
// code originated from user Imo https://stackoverflow.com/users/4716796/imo
select_box.selectAll("option")
    .data(select_data)
    .enter()
    .append("option")
    .text(function (d) {
        return d;})
;