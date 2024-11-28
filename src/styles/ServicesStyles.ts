import styled from 'styled-components';

export const ServicesSection = styled.section`
  padding: 4rem;
  background-color: #f9f9f9;
  height: auto; /* Ajusta a altura para crescer com o conteúdo */
  align-content: center;
  
  h2 {
    font-size: 3rem;
    color: #333;
    text-align: start;
    margin-top: 0.5rem;

    @media (max-width: 1024px) {
      text-align: center; /* Centraliza o título em telas menores */
      font-size: 2.5rem; /* Reduz o tamanho do título */
    }
  }

  .section-hash {
    font-size: 1.75rem;
    color: #46B4A5;
    font-weight: 400;
    text-transform: uppercase;
    display: block;
    text-align: start;

    @media (max-width: 1024px) {
      font-size: 1rem;
      text-align: center; /* Centraliza a hashtag em telas menores */
    }
  }

  .services-container {
    display: flex;
    justify-content: center;
    gap: 2rem;

    @media (max-width: 1024px) {
      flex-direction: column; /* Organiza os cards em coluna no iPad Pro */
      align-items: center; /* Centraliza os cards */
    }
  }
`;
export const ServiceWarapper = styled.div`
  display: flex;
`;

export const ServiceBox = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 45%;
  text-align: left;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    width: 90%; /* Aumenta a largura dos cards em telas menores */
    margin-bottom: 2rem; /* Adiciona espaçamento entre os cards */
  }
`;

export const ServiceIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
`;

export const ServiceText = styled.div`
  h3 {
    margin: 0 0.5rem !important;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: #46B4A5;
    
    @media (max-width: 670px) {
      font-size: 1.5rem;

    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 1.5rem;

    @media (max-width: 1024px) {
      text-align: center; /* Centraliza o texto dentro dos cards em telas menores */
    }
  }
`;

export const ServiceLink = styled.a`
  font-size: 1.2rem;
  color: #46B4A5;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;

  img {
    width: 16px;
    margin-left: 0.5rem;
  }

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 1024px) {
    justify-content: center; /* Centraliza o link */
  }
`;