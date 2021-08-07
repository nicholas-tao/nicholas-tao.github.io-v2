import styled from "styled-components";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import "./fonts/fonts.css";

export const App = () => {
  return (
    <Container>
      <Header />
      <About />
      <Projects />
      <Footer />
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
  font-family: "Mada", sans-serif;
  @media only screen and (max-width: 600px) {
    padding: 32px;
  }
`;
