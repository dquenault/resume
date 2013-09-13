var data = [14, 8, 30, 16, 80, 100];
var chartWidth = 420;
var chartHeight = 30 * data.length;

var chart = d3.select("#chart").append("svg")
     .attr("class", "chart")
     .attr("width", chartWidth)
     .attr("height", chartHeight)
     .append("g")
     .attr("transform", "translate(10,15)");

var x = d3.scale.linear()
     .domain([0, d3.max(data)])
     .range([0, 420]);

    var y = d3.scale.ordinal()
     .domain(data)
     .rangeBands([0, 120]);

chart.selectAll("rect")
     .data(data)
   .enter().append("rect")
     .attr("y", function(d, i) { return i * 20; })
     .attr("height", 20)
     .attr("width", function(d){ return d; });
     

chart.selectAll("text")
     .data(data)
     .enter().append("text")
     .attr("x", x)
     .attr("y", function(d) { return y(d) + y.rangeBand() / 2; })
     .attr("dx", -3) // padding-right
     .attr("dy", ".35em") // vertical-align: middle
     .attr("text-anchor", "end") // text-align: right
     .text(String);

chart.selectAll("line")
      .data(x.ticks(5))
   .enter().append("line")
     .attr("x1", x)
     .attr("x2", x)
     .attr("y1", 0)
     .attr("y2", 120)
     .style("stroke", "#ccc");

chart.selectAll(".rule")
     .data(x.ticks(5))
     .enter().append("text")
     .attr("class", "rule")
     .attr("x", x)
     .attr("y", 0)
     .attr("dy", -3)
     .attr("text-anchor", "middle")
     .text(String);

//Single line for y axis
chart.append("line")
     .attr("y1", 0)
     .attr("y2", 120)
     .style("stroke", "#000");

