import { Button, ConditionalValue, HStack } from "@chakra-ui/react";

export const ButtonUI = ({
  size,
  label,
  callback,
}: {
  size: ConditionalValue<
    "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
  >;
  label: string;
  callback: () => void;
}) => {
  return (
    <HStack wrap="wrap" pt="5">
      <Button
        onClick={() => callback()}
        w="100%"
        size={size}
        colorPalette={"blue"}
        variant="outline"
      >
        {label}
      </Button>
    </HStack>
  );
};
