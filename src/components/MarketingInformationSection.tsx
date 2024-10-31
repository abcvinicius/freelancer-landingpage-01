import { useEffect, useState } from 'react';
import {
  InformationSectionWrapper,
  InformationContent,
  InformationHeader,
  CardGrid,
  Card,
  CardTitle,
  CardDescription,
  CardLink,
} from '../styles/MarketingInformationSectionStyles';
import IconArrow from '../assets/icon-arrow.png';
import IconArrowWhite from '../assets/icon-arrow-white.png';

export const MarketingInformationSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <InformationSectionWrapper>
      {/* Seção 1 - Ainda não investe */}
      <InformationContent>
        <InformationHeader>
          <h2>#IDEAL PARA VOCÊ</h2>
          <h3>Ainda não investe em marketing digital?</h3>
        </InformationHeader>

        <CardGrid isMobile={isMobile}>
          <Card className="white">
            <CardTitle>SEO Local:</CardTitle>
            <CardDescription>
              Otimize seu site para se destacar nos mecanismos de busca e atrair tráfego qualificado de forma contínua.
            </CardDescription>
            <CardLink href="#">
              Saiba Mais <img src={IconArrow} alt="Arrow Icon" />
            </CardLink>
          </Card>

          <Card className="green">
            <CardTitle>Tráfego Pago:</CardTitle>
            <CardDescription>
              Criação e gestão de campanhas online com foco em fazer com que seus anúncios paguem sozinho.
            </CardDescription>
            <CardLink href="#">
              Saiba Mais <img src={IconArrowWhite} alt="Arrow Icon" />
            </CardLink>
          </Card>

          <Card className="white">
            <CardTitle>Automações e CRM:</CardTitle>
            <CardDescription>
              Automatização de processos essenciais para gerar e nutrir leads de forma ágil e eficiente.
            </CardDescription>
            <CardLink href="#">
              Saiba Mais <img src={IconArrow} alt="Arrow Icon" />
            </CardLink>
          </Card>

          <Card className="white">
            <CardTitle>Inbound Marketing:</CardTitle>
            <CardDescription>
              Integração entre marketing e comercial, criando um funil robusto que explora cada oportunidade de venda.
            </CardDescription>
            <CardLink href="#">
              Saiba Mais <img src={IconArrow} alt="Arrow Icon" />
            </CardLink>
          </Card>
        </CardGrid>
      </InformationContent>

      <InformationContent>
        <InformationHeader>
          <h2>#IDEAL PARA VOCÊ</h2>
          <h3>Já investe em marketing digital?</h3>
        </InformationHeader>

        <CardGrid isMobile={isMobile}>
          <Card className="white">
            <CardTitle>Dashboard Personalizado:</CardTitle>
            <CardDescription>
              Visualização centralizada dos dados em tempo real. Mantenha o progresso de forma simples e rápida.
            </CardDescription>
            <CardLink href="#">
              Saiba Mais <img src={IconArrow} alt="Arrow Icon" />
            </CardLink>
          </Card>

          <Card className="green">
            <CardTitle>Auditoria de Contas de Anúncios:</CardTitle>
            <CardDescription>
              Identificação de gaps e oportunidades ocultas que podem estar limitando os seus resultados.
            </CardDescription>
            <CardLink href="#">
              Saiba Mais <img src={IconArrowWhite} alt="Arrow Icon" />
            </CardLink>
          </Card>

          <Card className="white">
            <CardTitle>Trackeamento e Análise de Dados:</CardTitle>
            <CardDescription>
              Rastreamento e captura de dados de forma precisa e segura, em conformidade com a LGPD.
            </CardDescription>
            <CardLink href="#">
              Saiba Mais <img src={IconArrow} alt="Arrow Icon" />
            </CardLink>
          </Card>

          <Card className="white">
            <CardTitle>Treinamento para Marketing Interno:</CardTitle>
            <CardDescription>
              Fortaleça sua equipe interna com as melhores práticas e estratégias personalizadas.
            </CardDescription>
            <CardLink href="#">
              Saiba Mais <img src={IconArrow} alt="Arrow Icon" />
            </CardLink>
          </Card>
        </CardGrid>
      </InformationContent>
    </InformationSectionWrapper>
  );
};