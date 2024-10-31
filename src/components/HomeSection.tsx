import { HomeSectionWrapper, HomeContent, HomeImageWrapper, HomeContainer } from '../styles/HomeSectionStyles';

export const HomeSection = () => (
  <HomeSectionWrapper>
    <HomeContainer>
      <HomeContent>
        <h1>Marketing Digital para empresas que buscam Resultados</h1>
        <p>
          Atendimento <strong>exclusivo</strong> e soluções <strong>personalizadas</strong> com foco no que realmente importa: <strong>vendas!</strong>
        </p>
        <a href="https://api.whatsapp.com/send?phone=5541985317476&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os" 
           className="btn-primary" 
           target="_blank" 
           rel="noopener noreferrer">
           Fale diretamente Comigo
        </a>
      </HomeContent>
      <HomeImageWrapper>
        <div className="image-home" />
      </HomeImageWrapper>
    </HomeContainer>
  </HomeSectionWrapper>
);