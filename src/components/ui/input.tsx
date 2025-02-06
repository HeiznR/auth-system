import { Box, Field, Input, defineStyle } from "@chakra-ui/react";
import { ChangeEvent } from "react";

export const InputUI = ({
  label,
  name,
  callback,
  value,
}: {
  label: string;
  name: string;
  value: any;
  callback: (input: { [key: string]: string }) => void;
}) => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    callback({ [name]: e.target.value });
  };
  return (
    <Field.Root pt="5">
      <Box pos="relative" w="full">
        <Input value={value} onChange={(e) => handleInput(e)} color="black" />
        <Field.Label css={floatingStyles}>{label}</Field.Label>
      </Box>
    </Field.Root>
  );
};

const floatingStyles = defineStyle({
  pos: "absolute",
  bg: "white",
  px: "0.5",
  top: "-3",
  insetStart: "2",
  fontWeight: "normal",
  pointerEvents: "none",
  transition: "position",
  color: "black",
  _peerPlaceholderShown: {
    color: "black",
    top: "2.5",
    insetStart: "3",
  },
  _peerFocusVisible: {
    color: "black",
    top: "-3",
    insetStart: "2",
  },
});
