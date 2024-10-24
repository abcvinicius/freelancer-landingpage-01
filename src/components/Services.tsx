import IconSettings from '../assets/Icon-settings-servicos.png';
import IconArrow from '../assets/icon-arrow-servicos.png';
import {
  ServicesSection,
  ServiceBox,
  ServiceIcon,
  ServiceText,
  ServiceLink
} from '../styles/ServicesStyles';

export const Services = () => {
  return (
    <ServicesSection>
      {/* Hashtag acima do título */}
      <span className="section-hash">#MEUS SERVIÇOS</span>
      <h2>Como eu posso te ajudar?</h2>

      <div className="services-container">
        <ServiceBox>
          <ServiceIcon src={IconSettings} alt="Não invisto em Marketing" />
          <ServiceText>
            <h3>Não invisto em Marketing</h3>
            <p>
              Você sabe que seu negócio tem potencial, mas sente que não consegue alcançar mais clientes ou crescer como poderia?
            </p>
            <ServiceLink href="#">
              Eu posso te ajudar <img src={IconArrow} alt="Seta para a direita" />
            </ServiceLink>
          </ServiceText>
        </ServiceBox>

        <ServiceBox>
          <ServiceIcon src={IconSettings} alt="Já invisto em Marketing" />
          <ServiceText>
            <h3>Já invisto em Marketing</h3>
            <p>
              Você já tentou várias estratégias, investiu seu tempo e dinheiro, mas os resultados parecem não acompanhar seus esforços?
            </p>
            <ServiceLink href="#">
              Eu posso te ajudar <img src={IconArrow} alt="Seta para a direita" />
            </ServiceLink>
          </ServiceText>
        </ServiceBox>
      </div>
    </ServicesSection>
  );
};
