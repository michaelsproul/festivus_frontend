var moment = require("moment");
var URI = require("urijs");
var Plotly = require("plotly.js");
var jQuery = require("jquery");

var day_start = moment({day: 2, hour: 0, minute: 0, second: 0});
var now = moment();

var url = URI("http://localhost:3000/power").query({
    start: day_start.toISOString(),
    end: now.toISOString(),
}).build() + "&callback=?";

console.log("Requesting data from:", url);

jQuery.getJSON(url).done(function(raw_data) {
    console.log("SUCCESS");
    // Plot
    var data = {
        type: "scatter",
        name: "total_power",
        line: {shape: "hv"},
        fill: "tozeroy",
        fillcolor: "#93BDBB",
        x: raw_data.x,
        y: raw_data.y
    };
    Plotly.plot("power_chart", [data], { margin: { pad: 2 } });

}).error(function() {
    console.log("ERROR");
});
