//
import { Routes, Route } from 'react-router-dom';
//
import { HomeEng } from '../pages/homeEng';
import { ProfessionalExpEng } from '../pages/professionalExpEng';
import { HobbiesEng } from '../pages/hobbiesEng';
import { BioEng } from '../pages/bioEng';
//
import { DevProjectsEng } from '../pages/devProjectsMainEng';
import { DevProjectsWebsiteEng } from '../pages/devProjectsEng/thisWebsite';
import { DevProjectsAnalogClockEng } from '../pages/devProjectsEng/analogClock';
import { DevProjectsCalculatorEng } from '../pages/devProjectsEng/calculator';
import { DevProjectsPostitEng } from '../pages/devProjectsEng/postit';
import { DevProjectsLoginEng } from '../pages/devProjectsEng/login';
import { DevProjectsUrlShrinkEng } from '../pages/devProjectsEng/urlShrinker';
//
import { BlogMainEng } from '../pages/blogMainEng';
import { AboutMeBlogEng } from '../pages/blogEng/aboutMeBlogEng';
import { ProfessionalExpBlogEng } from '../pages/blogEng/professionalExpBlogEng';
import { PantanalBlogEng } from '../pages/blogEng/pantanalBlogEng';
import { PokemonPainBlogEng } from '../pages/blogEng/pokemonPainBlogEng';
//
export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<HomeEng />} />
      <Route path="/Career" element={<ProfessionalExpEng />} />
      <Route path="/Hobbies" element={<HobbiesEng />} />
      <Route path="/AboutMe" element={<BioEng />} />
      <Route path="/Portfolio" element={<DevProjectsEng />} />
      <Route path="/Portfolio/ThisWebsite" element={<DevProjectsWebsiteEng />} />
      <Route path="/Portfolio/AnalogClock" element={<DevProjectsAnalogClockEng />} />
      <Route path="/Portfolio/Calculator" element={<DevProjectsCalculatorEng />} />
      <Route path="/Portfolio/Login" element={<DevProjectsLoginEng />} />
      <Route path="/Portfolio/UrlShrink" element={<DevProjectsUrlShrinkEng />} />
      <Route path="/Blog" element={<BlogMainEng />} />
      <Route path="/Blog/AboutMe" element={<AboutMeBlogEng />} />
      <Route path="/Blog/Career" element={<ProfessionalExpBlogEng />} />
    </Routes>
  );
}
//
//import { ContactEng } from '../pages/contactEng';
//<Route path="/ContactEng" element={<ContactEng />} />
//<Route path="/Blog/Pantanal" element={<PantanalBlogEng />} />
//<Route path="/Blog/PokemonPain" element={<PokemonPainBlogEng />} />
//<Route path="/Portfolio/Postit" element={<DevProjectsPostitEng />} />