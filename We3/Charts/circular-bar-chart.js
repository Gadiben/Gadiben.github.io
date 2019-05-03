circularBarData = [
  {"factor":"Lifestyle","val":Math.random(),"color":"#a4cbeb"},
  {"factor":"Personality","val":Math.random(),"color":"#BAC1E8"},
  {"factor":"Demographic","val":Math.random(),"color":"#E8DA8E"},
  {"factor":"Beliefs & Values","val":Math.random(),"color":"#E8C5D3"},
  {"factor":"Interest", "val":Math.random(),"color":"#98D8E3"}
]
var barWidth = 20;
var barPadding = barWidth*0.30;

var strokeColor = '#ccc';
var enAngle = 2
var chartContainers = d3.select("#charts-container");
var endAngle = 270/360;
var arcDelay = 1;
var backTransition = 500;
var textChartPadding = 10;
var textVerticalPadding = 2;
var textHorizontalPadding = 10;
var chartSize = 2*Object.keys(circularBarData).length * (barWidth+barPadding)+textVerticalPadding;
var svg = chartContainers.append("svg")
.attr("class","circular-bar-svg")
//.attr("width",chartSize)
.attr("height",chartSize);

function getInnerRadius(i){
  return (i*(barWidth+barPadding)+barPadding);
}
function getOuterRadius(i){
  return (i+1)*(barWidth+barPadding);
}
let arc = d3.arc()
  .innerRadius((d, i) => getInnerRadius(i))
  .outerRadius((d, i) => getOuterRadius(i))
  .startAngle(0)
  .endAngle((d,i) => d*endAngle* 2*Math.PI );

var barGroups = svg.append("g")
.selectAll("g")
.data(circularBarData)
.enter()
.append("g")

barGroups.append("path")
.style("fill", "#ddd")
.transition()
.duration(backTransition)
.attrTween('d',(d,i) => arcTween(1,i))

barGroups.append("path")
.attr("class","path")
.attr("fill",d => d.color)
.transition()
.delay((d,i)=>i*arcDelay+backTransition/2)
.duration(1000)
.attrTween('d',(d,i) => arcTween(d.val,i))

barGroups.append("rect")
.attr("rx", 10)
.attr("ry", 10)
.attr("id",d=>d.factor.replace(/\s&\s/g,""))

var textLabel = barGroups.append("text")
.html(d=> d.factor)
.attr("text-anchor","end")
.attr("alignment-baseline","text-after-edge")
.attr("fill","white")
.attr("y",(d,i)=>-getInnerRadius(i))
.attr("x",-textChartPadding)

textLabel.datum(function(d){
  var bBox = this.getBBox();
  d3.select("#"+d.factor.replace(/\s&\s/g,""))
  .attr("width",bBox.width+textHorizontalPadding)
  .attr("height",bBox.height+textVerticalPadding)
  .attr("x",bBox.x-textHorizontalPadding/2)
  .attr("y",bBox.y-textVerticalPadding/2)
  .attr("fill",d.color)
})

function arcTween(d, i) {
  let interpolate = d3.interpolate(0, d);
  return t => arc(interpolate(t), i);
}
