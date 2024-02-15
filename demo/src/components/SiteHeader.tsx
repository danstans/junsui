import { css } from "../../styled-system/css";
import { Container, HStack } from "../../styled-system/jsx";

export const SiteHeader = () => {
  return (
    <header
      className={css({
        w: "full",
        h: "16",
        position: "absolute",
        top: 0,
        borderBottom: "1px solid",
        borderColor: "fg.muted",
        color: "fg.muted",
      })}
    >
      <Container
        className={css({
          h: "full",
          display: "flex",
          justifyContent: { base: "center", sm: "space-between" },
        })}
      >
        <HStack>
          <a href="https://junsui-docs.vercel.app">Junsui Docs</a>
          <a href="https://junsui-docs.vercel.app/themes">Themes</a>
          <a href="https://github.com/danstans/junsui">Github</a>
        </HStack>
        <HStack>Search</HStack>
      </Container>
    </header>
  );
};
