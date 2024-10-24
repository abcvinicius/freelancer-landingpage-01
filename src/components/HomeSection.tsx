import { HomeSectionWrapper, HomeContent, HomeImageWrapper, HomeContainer } from '../styles/HomeSectionStyles';

export const HomeSection = () => (
  <HomeSectionWrapper>
    <HomeContainer>
      <HomeContent>
        <h1>Marketing Digital para empresas que buscam Resultados</h1>
        <p>
          Atendimento <strong>exclusivo</strong> e soluções <strong>personalizadas</strong> com foco no que realmente importa: <strong>vendas!</strong>
        </p>
        <a href="#contact" className="btn-primary">Fale diretamente Comigo</a>
      </HomeContent>
      <HomeImageWrapper>
        <div className="image-home" />
      </HomeImageWrapper>
    </HomeContainer>
  </HomeSectionWrapper>
);