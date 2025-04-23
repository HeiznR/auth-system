"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { FactsSkeleton } from "./Facts-skeleton";

export function FactsData({ fetchFunction }: any) {
  const { data: facts } = useSuspenseQuery({
    queryKey: ["facts"],
    queryFn: fetchFunction,
  });
  const factsData = (
    facts as { data: { attributes: { body: string } }[] }
  ).data.map((fact: any) => ({
    text: fact.attributes.body,
  }));
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {factsData.map((fact) => {
        return <div key={fact.text}>{fact.text}</div>;
      })}
    </div>
  );
}

export function Facts({ fetchFunction }: any) {
  return (
    <Suspense fallback={<FactsSkeleton />}>
      <FactsData fetchFunction={fetchFunction} />
    </Suspense>
  );
}
