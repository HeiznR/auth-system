import { AbsoluteCenter } from "@chakra-ui/react";
import { ReactNode } from "react";

export const CenterUI = ({ children }: { children: ReactNode }) => {
  return (
    <AbsoluteCenter p="4" color="white" axis="both">
      {children}
    </AbsoluteCenter>
  );
};
