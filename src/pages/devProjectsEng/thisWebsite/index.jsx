//
import { Container } from './styles';
import { MenuProject } from '../../../components/menuProject';
//
export function DevProjectsWebsiteEng(){
  return(
    <div>
    <MenuProject />
    <Container>
      <h1>This website</h1>

      <pre>
        <code>
          export const Container = styled.div`
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-top: 6rem;
          `;
        </code>
      </pre>
    </Container>
    </div>
  );
}
//