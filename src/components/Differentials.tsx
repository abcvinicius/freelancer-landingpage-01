import { 
  DifferentialsSection, 
  DifferentialsContent, 
  DifferentialsDescription, 
  DifferentialsGrid, 
  DifferentialItem, 
  DifferentialIcon, 
  DifferentialText, 
  Separator 
} from '../styles/DifferentialsStyles';

export const Differentials = () => {
  return (
    <>
      <DifferentialsSection>
        <DifferentialsContent>
          <DifferentialsDescription>
            <h2>Por que escolher um marketing exclusivo?</h2>
            <p>
              Ao contrário das grandes agências, eu ofereço <strong>atendimento direto</strong> e personalizado,
              <strong>sem intermediários!</strong> Vou te mostrar não só o que estou fazendo, mas também o porquê de
              cada ação e como isso vai impactar nos resultados. Meu objetivo não é consumir seu tempo com
              <strong>termos técnicos</strong> ou <strong>informações vagas</strong>, e sim trazer uma
              <strong>comunicação clara</strong> e <strong>transparente</strong>, empoderando você a participar
              ativamente das <strong>decisões estratégicas</strong> do seu negócio.
            </p>
          </DifferentialsDescription>

          <DifferentialsGrid>
            <DifferentialItem>
              <DifferentialIcon className="icon-01" />
              <DifferentialText>
                <h3>Simplicidade no marketing</h3>
                <p>Grandeza nos resultados</p>
              </DifferentialText>
            </DifferentialItem>

            <DifferentialItem>
              <DifferentialIcon className="icon-02" />
              <DifferentialText>
                <h3>Transparência e clareza</h3>
                <p>Em cada etapa e processo</p>
              </DifferentialText>
            </DifferentialItem>

            <DifferentialItem>
              <DifferentialIcon className="icon-03" />
              <DifferentialText>
                <h3>Trabalhe com uma especialista</h3>
                <p>Dedicada ao seu negócio</p>
              </DifferentialText>
            </DifferentialItem>
          </DifferentialsGrid>
        </DifferentialsContent>
      </DifferentialsSection>
      <Separator />
    </>
  );
};