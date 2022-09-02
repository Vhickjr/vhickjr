import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import styled from "styled-components";
// const footerSection = styled.footer`
//   text-align: center;
//   height: 24px;
//   color: black;
// `
const Center = styled.div`
  margin: 20px auto;
`;
// const textContent = styled.p`
//   font-size: 16px;
//   font-weight:500;
// `

const Footer = () => {
  return (
    <footerSection>
      <Center>
        <textContent>
          <FaRegCopyright /> Copyright 2022. mathiasvictor.com
        </textContent>
      </Center>
    </footerSection>
  );
};

export default Footer;
