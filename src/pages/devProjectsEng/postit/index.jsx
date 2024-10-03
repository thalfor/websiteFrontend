//
import { Container } from './styles';
import { Navbar } from '../../../components/navBar';
//
export function DevProjectsPostitEng(){
  return(
    <Container>
      <Navbar />
      <h1>Post It</h1>
      <p>
        The code was divided in 3 parts:
          HTML
          CSS
          JS

        We have:

        To create a note click on the "+" button.
        To delete a note click twice on the note, a popup will appear asking if you want to delete it or not.
        To alter an existing note just click and type again, it will automatically save.
        Since it's saved on the LocalStorage as long as you are using in the same browser you'll have it saved.
      </p>
    </Container>
  );
}
//