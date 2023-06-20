import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
` 
export const Main = styled.main`
    width: 100%;
    max-width: 1000px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
` 

export const Title = styled.h1`
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-size: clamp(1.4rem, 1.8rem, 2.2rem);
  font-family: "Raleway";
  color: #1ae27e;
`; 
export const Subtitle = styled.h2`
  text-align: center;
  padding-bottom: 2rem;
  font-size: clamp(1.2rem, 1.6rem, 2rem);
  font-family: "Poppins";
  color: #1ae27e;
`; 