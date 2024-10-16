//
import { Container } from './styles';
import { MenuProject } from '../../../components/menuProject';
import { UrlShrinker } from '../../../components/urlShrinker';
//
export function DevProjectsUrlShrinkEng(){
  return(
    <div>
    <MenuProject />
    <Container>
      <UrlShrinker />
      test
    </Container>
    </div>
  );
}
//