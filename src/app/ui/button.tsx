import { Button, ConditionalValue, HStack } from "@chakra-ui/react";

export const ButtonUI = ({
  size,
  label,
  callback,
  icon,
  variant,
  disabled = false,
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
  disabled?: boolean;
}) => {
  return (
    <HStack wrap="wrap" pt="5">
      <Button
        disabled={disabled}
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
