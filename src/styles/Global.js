import styled, { createGlobalStyle, css } from "styled-components";
import { device } from "./BreakPoints";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

 /* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    font-family: ${(props) => props.theme.fonts.poppins}, sans-serif;
  } 
h1,
h2,
h3,
h4,
h5,
h6,
p,
figure,
blockquote,
dl,
dd {
    padding: 0;
    margin: 0;
}
/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}
li {
  list-style-type: none;
}
/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}
/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

export const Container = styled.div`
  width: 100%;
  /* max-width: 1280px; */
  max-width: 1640px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const AppBorder = styled.div`
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 5px;
`;

export const mt24 = styled.div`
  margin-top: 24px;
  @media ${device.tablet} {
    margin-top: 13px;
  }
`;

export const Divider = styled.div`
  display: grid;
  grid-template-columns: 20fr 80fr;
  grid-column-gap: 50px;
  @media ${device.tablet} {
    margin-bottom: 30px;
    display: block;
  }
`;

export const AbsCenter = css`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
