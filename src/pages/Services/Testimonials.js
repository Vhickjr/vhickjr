import React from "react";
import styled, { css } from "styled-components";
import posed, { PoseGroup } from "react-pose";

const AnimatedContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 200,
  },
  exit: {
    opacity: 0,
  },
});

const QuoteContainer = styled(AnimatedContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #010101;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

const Container = styled.section`
  height: 100vh;
  justify-items: center;
  box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.2);
  border-radius: 4px;

  background: cyan;
`;

const Blockquote = styled.blockquote`
  line-height: 1.5em;
  font-style: italic;
`;

const Cite = styled.cite`
  color: gray;
  align-self: flex-end;
  font-style: normal;
`;

const arrow = css`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const LeftArrow = styled.button`
  grid-row: span 2;
  grid-column: 1;
  ${arrow}
`;

const RightArrow = styled.button`
  grid-row: span 2;
  grid-column: 3;
  ${arrow}
`;

class Testimonials extends React.Component {
  state = {
    quotes: [
      {
        message:
          "Lorem ipsum dolor sit amet, id eam munere recteque, per at ridens dictas. Te graecis scripserit cotidieque sed, vel labore praesent maluisset eu, mel nostrud intellegebat at. Ad mel epicurei voluptaria interesset, natum persius voluptatibus et nec, pri ubique animal dignissim et. Quodsi accusam sea cu. Prima probatus mnesarchum has ne.",
        client: "Person",
      },
      {
        message:
          "Ei vim modo albucius voluptaria, an civibus oporteat sit, iriure animal te nam. Cu est esse inciderint. Nam eu regione philosophia definitiones, sonet noluisse cu pri. An aliquid mnesarchum sadipscing sed, vis oratio postulant ad. Everti propriae indoctum no qui.",
        client: "People",
      },
      {
        message:
          "No vim reque probatus. Et wisi suscipit luptatum has. Ut duo facete docendi commune. Tale animal complectitur pro et, an natum idque vel.",
        client: "Nosrep",
      },
    ],
    currentIndex: 0,
  };

  previousQuote = () =>
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % prevState.quotes.length,
    }));

  nextQuote = () =>
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + prevState.quotes.length) %
        prevState.quotes.length,
    }));

  componentDidMount() {
    this.interval = setInterval(() => {
      this.nextQuote();
    }, 8000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { quotes, currentIndex } = this.state;
    const currentQuote = quotes[currentIndex];

    return (
      <Container>
        <LeftArrow onClick={this.previousQuote}>{"<"}</LeftArrow>
        <PoseGroup>
          <QuoteContainer key={currentQuote.client}>
            <Blockquote>{currentQuote.message}</Blockquote>
            <Cite>- {currentQuote.client}</Cite>
          </QuoteContainer>
        </PoseGroup>
        <RightArrow onClick={this.nextQuote}>{">"}</RightArrow>
      </Container>
    );
  }
}

export default Testimonials;
