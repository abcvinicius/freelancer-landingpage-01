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
          <FooterButton  onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=5541985317476&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os",
                "_blank",
                "noopener,noreferrer"
              )
            }
            style={{ cursor: 'pointer' }} // Adiciona um cursor de ponteiro
          >Vamos Começar</FooterButton>
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