import styled from 'styled-components';
import VectorDifferentials01 from '../assets/VectorDifferentials01.png';
import VectorDifferentials02 from '../assets/VectorDifferentials02.png';
import VectorDifferentials03 from '../assets/VectorDifferentials03.png';

export const DifferentialsSection = styled.section`
  padding: 2rem;
  background-color: #f9f9f9;
  height: auto;
  align-content: center;
  padding-top: 5rem !important;

`;

export const DifferentialsContent = styled.div`
  padding: 2rem;
`;

export const DifferentialsDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
  text-align: start;
  padding-bottom: 4rem;

  h2 {
    width: 30%;
    font-size: 3.5rem;
    text-align: start;
    margin: 0;
    margin-bottom: 1rem;

    @media (max-width: 1024px) {
    }
  }

  p {
    width: 60%;
    font-size: 1.25rem;
    line-height: 1.8;
    color: #333;
    margin: 0;

    @media (max-width: 1024px) {
      width: 100%; /* O texto ocupará 100% da largura em telas menores */
      font-size: 1.1rem;
      text-align: start;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column; /* Empilha o título e o parágrafo em telas menores */
    text-align: center; /* Centraliza o conteúdo em telas menores */

    h2 {
      width: 100%;
      font-size: 2.5rem; /* Reduz o tamanho do título em dispositivos menores */
    }
  }
`;

export const DifferentialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Três colunas em telas grandes */
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr; /* Organiza os cards em uma coluna no iPad Pro */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Mantém a configuração de coluna única para telas menores */
  }
`;

export const DifferentialItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: start;
  position: relative;
  transition: transform 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    flex-direction: column; /* Alinha os itens verticalmente no iPad Pro */
    text-align: center; /* Centraliza o conteúdo */
  }
`;

export const DifferentialIcon = styled.div`
  width: 49px;
  height: 50px;
  background-size: cover;
  margin-right: 1rem;

  &.icon-01 {
    background-image: url(${VectorDifferentials01});
  }

  &.icon-02 {
    width: 52px !important; 
    background-image: url(${VectorDifferentials02});
  }

  &.icon-03 {
    background-image: url(${VectorDifferentials03});
  }

  @media (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 1rem; /* Espaçamento entre ícone e texto */
  }
`;

export const DifferentialText = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: -1rem;
    color: #46B4A5;
  }

  p {
    font-size: 1rem;
    margin-left: 0.5rem;
    color: #7d7d7d;

    @media (max-width: 1024px) {
      margin-left: 0; /* Remove o recuo em telas menores */
    }
  }
`;

export const Separator = styled.hr`
  border: none;
  border-top: 1px solid #ddd;
  width: 100vw;
`;