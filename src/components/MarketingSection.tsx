import { useEffect, useState } from 'react';
import PhotoMarketing from '../assets/photo-marketing-section.png';
import { MarketingSectionWrapper, MarketingContent, MarketingImage, MarketingText, MarketingButton } from '../styles/MarketingSectionStyles';

export const MarketingSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Ajusta o comportamento para o tamanho de 1024px ou menos
      if (window.innerWidth <= 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Garante a verificação na primeira renderização

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <MarketingSectionWrapper>
      <MarketingContent isMobile={isMobile}>
        {/* Condicional para mudar a ordem */}
        {isMobile ? (
          <>
            <MarketingText>
              <h2>Está em dúvida sobre qual serviço é o mais adequado para você?</h2>
              <MarketingButton>Fale diretamente Comigo</MarketingButton>
            </MarketingText>
            <MarketingImage>
              <img src={PhotoMarketing} alt="Marketing" />
              <div className="label">Quero vender mais!</div>
            </MarketingImage>
          </>
        ) : (
          <>
            <MarketingText>
              <h2>Está em dúvida sobre qual serviço é o mais adequado para você?</h2>
              <MarketingButton>Fale diretamente Comigo</MarketingButton>
            </MarketingText>
            <MarketingImage>
              <img src={PhotoMarketing} alt="Marketing" />
              <div className="label">Quero vender mais!</div>
            </MarketingImage>
          </>
        )}
      </MarketingContent>
    </MarketingSectionWrapper>
  );
};