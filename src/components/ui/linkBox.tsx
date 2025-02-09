import { Link, LinkBox, Text } from "@chakra-ui/react";

export const LinkBoxUI = ({
  label,
  linkLabel,
  callback,
}: {
  label: string;
  linkLabel: string;
  callback: () => void;
}) => {
  return (
    <LinkBox as="article" p="5" rounded="md" textAlign={"center"}>
      <Text color="fg.muted">
        {label}
        <Link
          onClick={() => callback()}
          href="#inner-link"
          variant="underline"
          colorPalette="teal"
        >
          {linkLabel}
        </Link>
      </Text>
    </LinkBox>
  );
};
