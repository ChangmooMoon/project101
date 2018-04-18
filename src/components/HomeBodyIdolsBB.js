import React, { Component } from 'react';
import * as d3 from 'd3';

class BubbleChart extends Component {

  renderCanvas(props){
      const data= props.idolData;

       const width = 960,
         height = 500,
         outerRadius = height / 2 - 20,
         innerRadius = outerRadius / 3,
         cornerRadius = 10;

       const arc = d3.arc()
         .padRadius(outerRadius)
         .innerRadius(innerRadius);

       const chart = d3.select(this.node)
         .attr("width", window.innerWidth - 100)
         .attr("height", 500)
         .append("g")
           .attr("transform", `translate(${width / 4}, ${height / 2})`);

       const pie = d3.pie()
         .sort(null)
         .value((d) => +d.count)
         .padAngle(.02);

       const arcContainer = chart.selectAll("path")
         .data(pie(data))
         .enter()
           .append('g')
             .attr('class', 'arc');

       arcContainer
         .append("path")
           .attr("fill", "#14e86e")
           .each((d) => {
             d.outerRadius = outerRadius - 20;
           })
           .attr("d", arc)
           .on("mouseover", this.arcTween(arc, outerRadius, true))
           .on("mouseout", this.arcTween(arc, outerRadius - 20));

       arcContainer
         .append("text")
          .attr('class','count-text')
         .attr("transform", (d) => {
           return `translate(${arc.centroid(d)-200})`;
         })
           .style("text-anchor", "middle")
           .style("font-family",'Noto Sans KR')
           .style("font-size","25")
           .style("fill","black")
           .style("font-weight","700")
           .style("z-index","99999")
          .text(function(d) { return d.data.count; });

        arcContainer
          .append("text")
          .attr("transform", (d) => {
            return `translate(${arc.centroid(d)})`;
          })
            .text(function(d) { return d.data.name; })
            .style("text-anchor", "middle")
            .style("font-family",'Noto Sans KR')
            .style("font-size","14")
            .style("color","white")
            .style("font-weight","700")
            .style("z-index","99999")

     }

     arcTween(arc, newOuterRadius, isMouseOver) {
       return function interpolateFn(data, i) {
         d3.select(this)
           .transition()
           .duration(200)
           .attrTween("d", (d) => {
             const interpolator = d3.interpolate(d.outerRadius, newOuterRadius);
             return (t) => {
               d.outerRadius = interpolator(t);
               return arc(d);
             };
           })
           .attrTween('fill', (d) => {
             const to = isMouseOver ? '#47ff95' : '#14e86e';
             return d3.interpolateRgb(this.getAttribute("fill"), to);
           });

       };
  }

  componentWillReceiveProps(props){
    if(props.idolData){
      this.renderCanvas(props)
    }
  }


  render() {

    return (
      <div className="data-box" refs="anchor">
      <svg className="pie-chart--interactive" ref={(node) => this.node = node}></svg>
      </div>
    );
  }

}
export default BubbleChart;