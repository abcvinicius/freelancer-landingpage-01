import IconSettings from '../assets/Icon-settings-servicos.png';
import IconArrow from '../assets/icon-arrow-servicos.png';
import {
  ServicesSection,
  ServiceBox,
  ServiceIcon,
  ServiceText,
  ServiceLink,
  ServiceWarapper
} from '../styles/ServicesStyles';

export const Services = () => {
  return (
    <ServicesSection>
      {/* Hashtag acima do título */}
      <span className="section-hash">#MEUS SERVIÇOS</span>
      <h2>Como eu posso te ajudar?</h2>

      <div className="services-container">
        <ServiceBox  onClick={() =>
            window.open(
              "https://api.whatsapp.com/send?phone=5541985317476&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os",
              "_blank",
              "noopener,noreferrer"
            )
          }
          style={{ cursor: 'pointer' }} 
        >
          <ServiceWarapper>
            <ServiceIcon src={IconSettings} alt="Não invisto em Marketing" />
              <h3>Não invisto em Marketing</h3>
          </ServiceWarapper>
            <ServiceText>
              <p>
                Você sabe que seu negócio tem potencial, mas sente que não consegue alcançar mais clientes ou crescer como poderia?
              </p>
              <ServiceLink href="https://api.whatsapp.com/send?phone=5541985317476&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os" target="_blank" >
                Eu posso te ajudar <img src={IconArrow} alt="Seta para a direita" />
              </ServiceLink>
            </ServiceText>
        </ServiceBox>

        <ServiceBox  onClick={() =>
            window.open(
              "https://api.whatsapp.com/send?phone=5541985317476&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os",
              "_blank",
              "noopener,noreferrer"
            )
          }
          style={{ cursor: 'pointer' }} 
        >
          <ServiceWarapper>
            <ServiceIcon src={IconSettings} alt="Já invisto em Marketing" />
              <h3>Já invisto em Marketing</h3>
          </ServiceWarapper>
            <ServiceText>
              <p>
                Você já tentou várias estratégias, investiu seu tempo e dinheiro, mas os resultados parecem não acompanhar seus esforços?
              </p>
              <ServiceLink href="https://api.whatsapp.com/send?phone=5541985317476&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os" target="_blank" >
                Eu posso te ajudar <img src={IconArrow} alt="Seta para a direita" />
              </ServiceLink>
            </ServiceText>
        </ServiceBox>
      </div>
    </ServicesSection>
  );
};
