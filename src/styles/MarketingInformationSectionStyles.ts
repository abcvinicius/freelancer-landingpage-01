import styled from 'styled-components';
import IconWhite from '../assets/card-withe-icon-marketing.png';
import IconGreen from '../assets/card-green-icon-marketing.png';

export const InformationSectionWrapper = styled.section`
  background-color: #f9f9f9;
  padding: 4rem;
  margin-top: 2rem;
`;

export const InformationContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

export const InformationHeader = styled.div`
  margin-bottom: 2rem;
  text-align: center;

  h2 {
    font-size: 1.2rem;
    color: #46b4a5;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: -2rem;
  }

  h3 {
    font-size: 2rem;
    color: #333;
  }
`;

export const CardGrid = styled.div<{ isMobile: boolean }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  justify-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* Exibir 2 colunas no tablet */
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Exibir 2 colunas no mobile */
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr); /* Exibir 2 colunas em telas muito pequenas */
    gap: 1rem; /* Ajustar o gap para telas menores */
  }
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  width: 100%; /* Ajuste para que o card ocupe todo o espaço da coluna */
  max-width: 300px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &:hover {
    transform: scale(1.05);
  }

  h4 {
    font-size: 1.25rem; /* Reduzindo o tamanho da fonte */
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.9rem; /* Diminuindo a fonte */
    margin-bottom: 1rem;
  }

  a {
    font-size: 0.9rem;
    color: #46b4a5;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  &.white {
    background-image: url(${IconWhite});
    background-repeat: no-repeat;
    background-position: top left;
    background-size: 50px 50px;
    color: #46b4a5;
    background-position-x: 2rem;
    background-position-y: 4rem;
  }

  &.green {
    background: linear-gradient(90deg, #73c4b1 0%, #bfdcc6 100%);
    position: relative;
    color: white;

    p {
      color: white !important;
    }
    a {
      color: white !important;
    }
  }

  &.green::before {
    content: '';
    background-image: url(${IconGreen});
    background-size: 50px 50px;
    background-repeat: no-repeat;
    position: absolute;
    top: 4em;
    left: 22%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
  }
`;

export const CardTitle = styled.h4`
  font-size: 1.5rem;
  margin-top: 6.5rem;
  margin-bottom: -2rem;
  color: inherit;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
`;

export const CardLink = styled.a`
  font-size: 1rem;
  color: #46b4a5;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  img {
    margin-left: 0.5rem;
  }
`;