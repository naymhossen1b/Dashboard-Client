import { useEffect, useRef } from "react";
import useMainData from "../../Hooks/useMainData";
import * as d3 from "d3";

const Intensity = () => {
  const [mainData] = useMainData();
  const svgRef = useRef();

  useEffect(() => {
    if (!mainData || mainData.length === 0) return;

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(mainData.map((d) => d.topic))
      .range([0, width])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(mainData, (d) => d.intensity)])
      .nice()
      .range([height, 0]);

    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append("g").call(d3.axisLeft(y));

    svg
      .selectAll(".bar")
      .data(mainData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.topic))
      .attr("y", (d) => y(d.intensity))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - y(d.intensity))
      .attr("fill", "#4F46E5");
  }, [mainData]);

  return (
    <div className="">
      <p className=" text-xl font-bold text-slate-800 px-5 py-3">Intensity</p>
      <div className="">
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
};

export default Intensity;
