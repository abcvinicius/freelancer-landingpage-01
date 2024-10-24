import PhotoFooter from '../assets/photo-footer-section.png';
import { FooterWrapper, FooterContent, FooterText, FooterImage, FooterButton, CopyrightText } from '../styles/FooterStyles';

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterText>
          <h2>Está preparado para crescermos juntos?</h2>
          <p>
            Se você quer resultados de verdade e não está disposto a perder mais tempo e dinheiro com promessas vazias, <strong>agora é o momento</strong>.
          </p>
          <FooterButton>Vamos Começar</FooterButton>
        </FooterText>
        <FooterImage>
          <img src={PhotoFooter} alt="Footer Image" />
        </FooterImage>
      </FooterContent>
      <CopyrightText>
        Copyright © Susan Cristini 2024 - Todos os direitos reservados
      </CopyrightText>
    </FooterWrapper>
  );
};