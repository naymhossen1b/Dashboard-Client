import { useEffect, useRef } from "react";
import * as d3 from "d3";
import useMainData from "../../Hooks/useMainData";

const Likelihood = () => {
  const [mainData] = useMainData();
  const svgRef = useRef();

//   const totalLikelihood = mainData.reduce((acc, total) => acc + total.likelihood, 0).toFixed();
//   console.log(totalLikelihood);

  useEffect(() => {
    if (!mainData || mainData.length === 0) return;

    const data = mainData.map((item) => ({
      id: item._id,
      likelihood: item.likelihood,
    }));

    const width = 600;
    const height = 400;

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const simulation = d3
      .forceSimulation(data)
      .force("charge", d3.forceManyBody().strength(-20))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force(
        "link",
        d3.forceLink().id((d) => d.id)
      );

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const link = svg.append("g").selectAll("line").data([]).join("line");

    const node = svg
      .append("g")
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("r", 5)
      .attr("fill", (d) => color(d.likelihood));

    node.append("title").text((d) => d.id);

    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
    });

    return () => simulation.stop();
  }, [mainData]);

  return (
    <div className="">
      <p className=" text-xl font-bold text-slate-800 px-5 py-3">Likelihood</p>
      <div>
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
};

export default Likelihood;
