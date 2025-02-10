import { Link, LinkBox, Text } from "@chakra-ui/react";

export const LinkBoxUI = ({
  label,
  linkLabel,
  callback,
  href,
}: {
  label: string;
  linkLabel: string;
  callback: () => void;
  href: "login" | "signup";
}) => {
  return (
    <LinkBox as="article" p="5" rounded="md" textAlign={"center"}>
      <Text color="fg.muted">
        {label}
        <Link
          onClick={() => callback()}
          href={href}
          variant="underline"
          colorPalette="teal"
        >
          {linkLabel}
        </Link>
      </Text>
    </LinkBox>
  );
};
