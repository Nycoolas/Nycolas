import { Container, Main, Title, Subtitle } from './styles'
import { FormComponent } from '../../components/Form'
import { TableComponent } from '../../components/Table';
import { FooterComponent } from '../../components/Footer';

export const Home = () => {
  return (
    <Container>
      <Main>
        <Title>Sistema de cadastro</Title>
        <Subtitle>Salas</Subtitle>
        <FormComponent />
        <TableComponent />
        <FooterComponent/>
      </Main>
    </Container>
  );
}
