//HomeSectionStyles.ts
import styled from 'styled-components';
import circleRight from '../assets/circle-right.png';
import circleLeft from '../assets/circle-left.png';
import heroImage from '../assets/image-hero-section.png';

export const HomeSectionWrapper = styled.section`
  padding: 2rem;
  height: auto; /* Ajuste para permitir que o conteúdo cresça conforme necessário */
  align-content: center;
  padding-top: 12rem !important;

  @media (max-width: 768px) {
    padding-top: 5rem !important;
  }
`;

export const HomeContainer = styled.section`
  padding: 2rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media (max-width: 1600px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (max-width: 1024px) {
    flex-direction: column; /* Alinha os itens verticalmente */
    align-items: center; /* Centraliza os itens no eixo Y */
    text-align: center; /* Centraliza o texto */
  }
`;

export const HomeContent = styled.div`
  max-width: 730px;

  @media (max-width: 1600px) {
    padding-right: 2rem;
  }

  h1 {
    color: #333;
    font-size: 4rem;
    margin-bottom: 1.5rem; /* Adiciona margem inferior para separar os elementos */

    @media (max-width: 1600px) {
      font-size: 3.2rem;
    }

    @media (max-width: 1024px) {
      font-size: 3.2rem;
      margin-bottom: 1rem; /* Margem menor em telas menores */
    }

    @media (max-width: 768px) {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
  }

  p {
    margin-top: 0 !important;
    margin-bottom: 2rem !important; /* Ajusta o espaçamento entre o parágrafo e o botão */
    width: 30rem;
    color: #555;
    font-size: 1.2rem;

    @media (max-width: 1024px) {
      width: 100%;
      font-size: 1.1rem;
      margin-bottom: 1.5rem; /* Reduz o espaçamento em telas menores */
    }

    @media (max-width: 768px) {
      width: 100%;
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  }

  .btn-primary {
    margin-top: 1rem !important;
    padding: 1.8rem 1rem;
    background-color: #46B4A5;
    color: #FFF;
    text-decoration: none;
    border-radius: 100px;
    font-weight: bold;
    font-size: 1.38rem;
    transition: opacity 0.3s ease-in-out;

    @media (max-width: 1600px) {
      font-size: 1.2rem;
      padding: 1.5rem 0.8rem;
    }

    @media (max-width: 1024px) {
      font-size: 1.2rem;
      padding: 1.5rem 0.8rem;
    }

    @media (max-width: 768px) {
      width: 100%;
      font-size: 1.2rem;
      margin-bottom: 2rem; /* Adiciona espaçamento entre o botão e a imagem */
    }
  }

  .btn-primary:hover {
    opacity: 85%;
  }
`;

export const HomeImageWrapper = styled.div`
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    width: 400px;
    height: auto;
    margin-top: 2rem; /* Espaçamento entre o botão e a imagem */
  }

  .circle-left {
    position: absolute;
    left: -35px;
    top: 185px;
    width: 370px;
    height: 358px;
    background-image: url(${circleLeft});
    background-size: cover;
    background-position: center;
    z-index: 0;

    @media (max-width: 1600px) {
      width: 370px;
      height: 358px;
    }

    @media (max-width: 1024px) {
      width: 250px;
      height: 240px;
    }

    @media (max-width: 768px) {
      width: 200px;
      height: 190px;
      top: 120px;
      left: -10px;
    }
  }

  .circle-right {
    position: absolute;
    right: -15px;
    top: 75px;
    width: 462px;
    height: 446px;
    background-image: url(${circleRight});
    background-size: cover;
    background-position: center;
    z-index: 0;

    @media (max-width: 1600px) {
      width: 462px;
      height: 446px;
      right: 0;
      top: 60px;
    }

    @media (max-width: 1024px) {
      width: 300px;
      height: 290px;
      right: 0;
      top: 60px;
    }

    @media (max-width: 768px) {
      width: 250px;
      height: 240px;
      right: -5px;
      top: 150px;
    }
  }

  .image-hero {
    position: relative;
    z-index: 1;
    width: 774px;
    height: 750px;
    background-image: url(${heroImage});
    background-size: cover;
    background-position: center;
    border-radius: 50%;

    @media (max-width: 1600px) {
      width: 774px;
      height: 750px;
    }

    @media (max-width: 1024px) {
      width: 500px;
      height: 485px;
    }

    @media (max-width: 768px) {
      width: 400px;
      height: 385px;
    }
  }
`;