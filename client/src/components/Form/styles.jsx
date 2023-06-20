import styled from 'styled-components';

export const FormContainer = styled.div`
    width: 90%;
    background: var(--containers-bg);
    padding: 5rem;
    border-radius: 1rem;
    box-shadow: 0rem 0rem 2rem .1rem #dddddd;
    position: relative;
    margin-bottom: 3rem;
     @media only screen and (max-width: 400px) {padding: 0; padding: 2}
`;
export const Form = styled.form`
 width: 100%;
 height: 100%;
 display: flex;
 flex-wrap: wrap;
`
export const InputArea = styled.div`
display: flex;
flex-direction: column;
margin: 1rem;

  label {
    font-size: clamp(1.2rem, 1.6rem, 2rem);
    margin-right: 1rem;
    color: var(--label);
  }

  input {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 0.1rem solid var(--border-color);
    position: relative;

    :focus {
      outline: 0.1rem solid var(--outline-color);
    }
    
    ::placeholder{
        color: #b4b4b4;
    }
  }
`;

export const Button = styled.button`
  padding: 1rem;
  background: var(--valid-bg);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: bold;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  transition: all ease 0.7s;

  :hover {
    background: #6af78d;
  }
`;