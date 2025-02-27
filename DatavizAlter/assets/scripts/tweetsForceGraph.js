"use strict";
function ticked() {
  bubbles
    .attr('cx', function (d) { return nodes[d.id].x; })
    .attr('cy', function (d) { return nodes[d.id].y; });
}

function seperateTweets(d){
  if(d.sentiment<-0.15){
    return -1;
  } else if(d.sentiment>0.15){
    return 1;
  } else {
    return 0;
  }
}
function attractionCenterX(d){
  return attractionPoints[seperateTweets(d)+1][0];
}
/*
function attractionCenterY(){
  return yMediasPosition + (nbCategoriesDisplayed-1)*interCategorySpace + axisMarginY + tweetVerticalMargin + tweetLegendMargin + tweetHeight/2 ;
}
*/
//fonction qui maintient les cercles de chaque tweet d'un même groupe ensemble
function runTweetSimulation(source,bubbleGroups,xBubbleScale){
  tweetSimuDone = false;
  var neutralRandomFactor = 2.5
  var simulationTweet = d3.forceSimulation()
    .velocityDecay(0.3)
    .force('x', d3.forceX().strength(forceStrengthTweet).x(d => {
      return attractionCenterX(d) + (Math.random()-0.5)*2 * svgBounds.width * 0.05 * ((d.sentiment == 0)*neutralRandomFactor + (d.sentiment != 0)*0.5) * (source.length > 500);
    }))
    .force('y', d3.forceY().strength(forceStrengthTweet).y(d => {
        return attractionCenterY() + (Math.random()-0.5)*2 * svgBounds.width * 0.05 *((d.sentiment == 0)*neutralRandomFactor + (d.sentiment != 0)*0.5) * (source.length > 500);
      }))
    .force('collide', d3.forceCollide(d => Math.sqrt(xBubbleScale(+d.retweet_count)) + collisionTweetMargin))
    .on('tick', d => tweetTicked(d,bubbleGroups,xBubbleScale,simulationTweet.alpha()));
  simulationTweet.nodes(source);
  d3.selectAll("#tweetBubbleChart g").style("cursor","wait");
}
/*
function updateTweetChart(){
  d3.selectAll("#tweetBubbleChart g").style("cursor","default");
  d3.select("#tweetBubbleChart")
  .transition()
  .ease(d3.easeSin)
  .duration(transitionAxisDuration)
  .attr("transform", function(){
    //To use to translate bubbles and images
    var translation = (nbCategoriesDisplayed-previousNbCategoriesDisplayed)*interCategorySpace

    //Legend Image
    var legendImageBar = d3.select("#legendImage")
    legendImageBar.transition()
    .ease(d3.easeSin)
    .duration(transitionAxisDuration)
    .attr("transform", computeTranslateeTransform(legendImageBar,translation));

    //transform bubble group
    return computeTranslateeTransform(d3.select(this),translation);
  })
  updateSvgSize();
}
function computeTranslateeTransform(d3Node,translation){
  var nodeTransform = d3Node.attr("transform");
  if(nodeTransform){
    var oldTranslate = nodeTransform.split(",")[1].split(")")[0];
    translation += +oldTranslate;
  }
  return "translate(0," + translation + ")";
}

*/
function tweetTicked(d,bubbleGroups,x,alpha) {
  if(!tweetSimuDone && alpha<fractionToShowTip){
    tweetSimuDone = true;
    d3.selectAll("#tweetBubbleChart g").style("cursor","default");
  }
  bubbleGroups.select("circle")
    .attr('cx', function (d) { return d.x; })
    .attr('cy', function (d) { return d.y; });

  bubbleGroups.select("svg")
    .attr('x', function (d) { return placeBird(d.x,d.y,Math.sqrt(x(+d.retweet_count))).x; })
    .attr('y', function (d) { return placeBird(d.x,d.y,Math.sqrt(x(+d.retweet_count))).y; });
}
