"use client";
import { fetchBreeds, fetchFacts } from "@/api/fetchPosts";
import { CenterUI } from "../ui/center";
import { LineChart } from "../ui/LineChart/LineChart";
import { Facts } from "../ui/Facts/Facts";

export default function Page() {
  return (
    <CenterUI>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "auto",
          height: "500px",
        }}
      >
        <LineChart fetchFunction={fetchBreeds} />
        <Facts fetchFunction={fetchFacts} />
      </div>
    </CenterUI>
  );
}
