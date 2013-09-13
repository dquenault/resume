/* Creates the SVG tree diagram for interests*/
/* Data represents interests and their comparitive usage (all interests total 100%) */
var chartWidth = 420;
var chartHeight =  100


var data; // a global
d3.json("/data/interests.json", function(error, json) {
  if (error) return console.warn(error);
  data = json;
  console.log(data);
  visualizeit();
});

function visualizeit(){
var svg = d3.select("article.skills").append("svg")
     .attr("class", "interestschart")
     .attr("width", chartWidth)
     .attr("height", chartHeight);

var element = svg.selectAll("g myCircles")
              .data(data.interests);

 /*Create and place the "blocks" containing the circle and the text */  
    var elemEnter = element.enter()
        .append("g")
        .attr("transform", function(d){return "translate("+d.x+",80)"});
     
   var circle = elemEnter.append("circle")
     /*.attr("cx", function(d, i) { return (i * 60) + 40; })
     .attr("cy", function(d){ return d.y })
     */.attr("r", function(d){ return d.percent })
     .attr("fill", "yellow")
.attr("stroke", "orange")
.text(function(d) {    return d.name;})
.attr("stroke-width", function(d) {
    return d.percent/2;});

     var text = elemEnter.append("text")
        .attr("dx", function(d){return -20})
        .attr("style","fill: red; font-size:5pt")
        .text(function(d){return d.name});
     
};
