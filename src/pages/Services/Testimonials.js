import React from "react";
import styled, { css } from "styled-components";
import posed, { PoseGroup } from "react-pose";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

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
  flex-wrap: wrap;
  background: #010101;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  height: 220px;
  border-radius: 20px;
  @media (max-width: 768px) {
    width: 90%;
    height: 350px;
  }
  @media (max-width: 425px) {
    width: 90%;
    height: 350px;
  }
`;

const Container = styled.section`
  height: 100%;
  box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.2);
  background: grey;
`;

const Blockquote = styled.blockquote`
  line-height: 20px;
  font-style: italic;
  font-size: 18px;
  font-weight: 100;
  padding: 1.5em;
`;

const Cite = styled.cite`
  color: white;
  align-self: center;
  font-style: normal;
  margin-top: -20px;
  margin-right: auto;
  margin-left: auto;
`;

class Testimonials extends React.Component {
  state = {
    quotes: [
      {
        message:
          ' "Lorem ipsum dolor sit amet, id eam munere recteque, per at ridens dictas. Te graecis scripserit cotidieque sed, vel labore praesent maluisset eu, mel nostrud intellegebat at. Ad mel epicurei voluptaria interesset, natum persius voluptatibus et nec, pri ubique animal dignissim et. Quodsi accusam sea cu. Prima probatus mnesarchum has ne."',
        client: "Person1",
      },
      {
        message:
          '"Ei vim modo albucius voluptaria, an civibus oporteat sit, iriure animal te nam. Cu est esse inciderint. Nam eu regione philosophia definitiones, sonet noluisse cu pri. An aliquid mnesarchum sadipscing sed, vis oratio postulant ad. Everti propriae indoctum no qui."',
        client: "Person2",
      },
      {
        message:
          '"No vim reque probatus. Et wisi suscipit luptatum has. Ut duo facete docendi commune. Tale animal complectitur pro et, an natum idque vel."',
        client: "Person3",
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
        <AiOutlineLeft
          style={{
            color: "red",
            zIndex: 10,
            position: "relative",
            left: "-24%",
            top: "25%",
          }}
          onClick={this.previousQuote}
        >
          {"<"}
        </AiOutlineLeft>
        <PoseGroup>
          <QuoteContainer key={currentQuote.client}>
            <Blockquote>{currentQuote.message}</Blockquote>
            <Cite>{currentQuote.client}</Cite>
          </QuoteContainer>
        </PoseGroup>

        <AiOutlineRight
          style={{
            color: "red",
            zIndex: 1,
            position: "relative",
            right: "-24%",
            bottom: "26%",
          }}
          onClick={this.nextQuote}
        >
          {"<"}
        </AiOutlineRight>
      </Container>
    );
  }
}

export default Testimonials;
