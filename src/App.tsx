import styled from "styled-components";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Projects } from "./components/Projects";

export const App = () => {
  return (
    <Container>
      <Header />
      <About />
      <Projects />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 48px;
`;