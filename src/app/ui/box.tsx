import { Box, Center } from "@chakra-ui/react";

export const BoxUI = ({ label }: { label: string }) => {
  return (
    <Center bg="white" color={"black"} fontSize={"30px"} h="50px">
      <Box>{label}</Box>
    </Center>
  );
};
