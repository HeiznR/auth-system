import { Link as LinkChakra, LinkBox, Text } from "@chakra-ui/react";
import Link from "next/link";

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
        <LinkChakra
          onClick={() => callback()}
          variant="underline"
          colorPalette="teal"
        >
          <Link href={href}> {linkLabel}</Link>
        </LinkChakra>
      </Text>
    </LinkBox>
  );
};
