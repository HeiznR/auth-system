"use client";

import {
  LineChart as LineComp,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2300 },
  { name: "Page B", uv: 500, pv: 2100, amt: 2700 },
  { name: "Page C", uv: 480, pv: 2350, amt: 2900 },
  { name: "Page D", uv: 580, pv: 2550, amt: 3300 },
];

export default function LineChart() {
  return (
    <LineComp width={400} height={400} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="amt" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineComp>
  );
}
