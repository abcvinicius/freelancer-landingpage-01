import styled from 'styled-components';
import photoHome from '../assets/photo-home.png';

export const HomeSectionWrapper = styled.section`
  height: 100vh;
  align-content: center;
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;

`;

export const HomeContainer = styled.section`
  padding: 2rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const HomeContent = styled.div`
  max-width: 730px;

  h1 {
    font-size: 4rem;
    color: #333;

    @media (max-width: 1024px) {
      font-size: 2.8rem;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    margin-top: -2.5rem;
    margin-bottom: 4.5rem;
    font-size: 1.2rem;
    color: #555;

    @media (max-width: 1024px) {
      font-size: 1.1rem;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .btn-primary {
    margin-top: 1.5rem;
    padding: 1.8rem 1rem;
    background-color: #46B4A5;
    color: white;
    border-radius: 100px;
    font-size: 1.2rem;
    font-weight: bold;
    transition: opacity 0.3s ease;
    text-decoration: none;

    &:hover {
      opacity: 85%;
    }
  }
`;

export const HomeImageWrapper = styled.div`
  .image-home {
    background-image: url(${photoHome});
    background-size: cover;
    background-position: center;
    width: 500px;
    height: 485px;

    @media (max-width: 1024px) {
      margin-top: 4rem;
      width: 400px;
      height: 385px;
    }

    @media (max-width: 768px) {
      margin-top: 4rem;
      width: 300px;
      height: 285px;
    }
  }
`;