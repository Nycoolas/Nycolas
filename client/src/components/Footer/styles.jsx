import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 90%;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 3rem;
  padding: 2rem .5rem;
`;
export const SocialContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 3rem;
    height: 3rem;
    margin: 0 1rem;
  }
`;
export const LicenseContainer = styled.div`
  width: 100%;
  padding: 2rem;
`;

export const LicenseText = styled.h3`
  text-align: center;
  color: gray;
`;
