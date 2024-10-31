import styled from 'styled-components';

export const MarketingSectionWrapper = styled.section`
  background: linear-gradient(90deg, #73C4B1 0%, #BFDFC6 100%);
  width: 100%;
  padding: 3rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MarketingContent = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  text-align: ${({ isMobile }) => (isMobile ? 'center' : 'left')};

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const MarketingImage = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  justify-content: flex-start;

  img {
    border-radius: 50%;
    width: 350px;
    height: 350px;

    @media (max-width: 1024px) {
      margin-bottom: -12rem;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .label {

    display: block;
    height: 2.5rem;
    margin-left: -10rem;
    margin-top: 5rem;
    z-index: 1;
    left: 0;
    background-color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 1rem;
    font-weight: bold;
    color: #46B4A5;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
     transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.02);
    }
    
    @media (max-width: 1024px) {
      margin-right: 2rem;
      margin-left: -11.9rem;
    }
  }

  @media (max-width: 1024px) {
    margin-bottom: 1.5rem;
    width: 100%;
    justify-content: center;
  }
`;

export const MarketingText = styled.div`
  width: 50%;

  h2 {
    font-size: 2.15rem;
    color: white;
    line-height: 1.4;
    margin-bottom: 1.5rem;
    @media (max-width: 1024px) {
      padding: 0rem 1rem;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
     margin-bottom: 2rem;
  }
`;

export const MarketingButton = styled.button`
  background-color: #46B4A5;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  transition: transform 0.3s ease-in-out;

&:hover {
    transform: scale(1.02);
    background-color: #3ba295;
  }
`;