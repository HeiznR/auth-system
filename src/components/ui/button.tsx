import { Button, chakra, ConditionalValue, HStack } from "@chakra-ui/react";

export const ButtonUI = ({
  size,
  label,
  callback,
  icon,
  variant,
}: {
  size: ConditionalValue<
    "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
  >;
  label: string;
  callback: () => void;
  icon?: any;
  variant?: ConditionalValue<
    "outline" | "solid" | "subtle" | "surface" | "ghost" | "plain" | undefined
  >;
}) => {
  return (
    <HStack wrap="wrap" pt="5">
      <Button
        onClick={() => callback()}
        w="100%"
        size={size}
        colorPalette={"blue"}
        variant={variant}
      >
        {icon ? icon : null}
        {label}
      </Button>
    </HStack>
  );
};
