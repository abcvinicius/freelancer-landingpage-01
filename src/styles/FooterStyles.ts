import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #F8F6F2;
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
`;


export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  max-width: 1200px;
  margin: auto; /* Centraliza verticalmente */
  flex: 1; /* Faz com que o conteúdo ocupe o espaço restante */
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
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
  font-size: 0.9rem;
  color: #555;
  background-color: #46B4A5;
  padding: 1rem;
  margin-bottom: 0rem !important;
  color: white;
  text-align: center;
`;