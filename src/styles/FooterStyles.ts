import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #F8F6F2;
  text-align: center;
  height: 70vh;
  align-content: end;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const FooterText = styled.div`
  width: 50%;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 2rem;

    strong {
      color: #333;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

export const FooterImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;

  img {
    border-radius: 50%;
    width: 350px;
    height: 350px;
  }

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

export const FooterButton = styled.button`
  background-color: #46B4A5;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3ba295;
  }
`;

export const CopyrightText = styled.p`
  margin-top: 4rem;
  margin-bottom: -1rem;
  width: 100%;
  font-size: 0.9rem;
  color: #555;
  background-color: #46B4A5;
  padding: 1rem;
  color: white;
`;