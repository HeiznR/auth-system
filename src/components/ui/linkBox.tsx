import {
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  Span,
  Text,
} from "@chakra-ui/react";

export const LinkBoxUI = () => {
  return (
    <LinkBox as="article" p="5" rounded="md" textAlign={"center"}>
      <Text color="fg.muted">
        {`Don't have an account? `}
        <Link href="#inner-link" variant="underline" colorPalette="teal">
          Sign up
        </Link>
      </Text>
    </LinkBox>
  );
};
