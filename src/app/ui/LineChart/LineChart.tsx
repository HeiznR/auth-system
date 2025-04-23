"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import {
  LineChart as LineComp,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { LineChartSkeleton } from "./LineChart-skeleton";

const processChartData = (breeds: any) => {
  return breeds.data.map((breed: any) => ({
    name: breed.attributes.name,
    life: breed.attributes.life.max,
    weight: breed.attributes.female_weight.max,
  }));
};

export function ChartData({ fetchFunction }: any) {
  const { data: breeds } = useSuspenseQuery({
    queryKey: ["breeds"],
    queryFn: fetchFunction,
  });
  const chartData = processChartData(breeds);
  return (
    <LineComp
      width={1000}
      height={400}
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        padding: "15px",
      }}
      data={chartData}
    >
      <Line type="monotone" dataKey="life" stroke="#8884d8" />
      <Line type="monotone" dataKey="weight" stroke="#82ca9d" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineComp>
  );
}

export function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: "auto", height: "auto", padding: "20px" }}>
      {children}
    </div>
  );
}

export function LineChart({ fetchFunction }: any) {
  return (
    <Suspense
      fallback={
        <Wrapper>
          <LineChartSkeleton />
        </Wrapper>
      }
    >
      <ChartData fetchFunction={fetchFunction} />
    </Suspense>
  );
}
