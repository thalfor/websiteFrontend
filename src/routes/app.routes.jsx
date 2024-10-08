//
import { Routes, Route } from 'react-router-dom';
//
import { HomeEng } from '../pages/homeEng';
import { ProfessionalExpEng } from '../pages/professionalExpEng';
import { HobbiesEng } from '../pages/hobbiesEng';
import { ContactEng } from '../pages/contactEng';
import { BioEng } from '../pages/bioEng';
import { DevProjectsEng } from '../pages/devProjectsMainEng';
import { DevProjectsWebsiteEng } from '../pages/devProjectsEng/thisWebsite';
import { DevProjectsAnalogClockEng } from '../pages/devProjectsEng/analogClock';
import { DevProjectsCalculatorEng } from '../pages/devProjectsEng/calculator';
import { DevProjectsPostitEng } from '../pages/devProjectsEng/postit';
import { DevProjectsLoginEng } from '../pages/devProjectsEng/login';
import { DevProjectsUrlShrinkEng } from '../pages/devProjectsEng/urlShrinker';
import { BlogMainEng } from '../pages/blogMainEng';
import { ProfessionalExpBlogEng } from '../pages/blogEng/professionalExpBlogEng';
import { aboutMeBlogEng } from '../pages/blogEng/aboutMeBlogEng';
import { pantanalBlogEng } from '../pages/blogEng/pantanalBlogEng';
import { pokemonPainBlogEng } from '../pages/blogEng/pokemonPainBlogEng';
//
export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<HomeEng />} />
      <Route path="/ProfessionalExpEng" element={<ProfessionalExpEng />} />
      <Route path="/HobbiesEng" element={<HobbiesEng />} />
      <Route path="/ContactEng" element={<ContactEng />} />
      <Route path="/BioEng" element={<BioEng />} />
      <Route path="/DevProjectsEng" element={<DevProjectsEng />} />
      <Route path="/DevProjectsEng/DevProjectsWebsiteEng" element={<DevProjectsWebsiteEng />} />
      <Route path="/DevProjectsEng/DevProjectsAnalogClockEng" element={<DevProjectsAnalogClockEng />} />
      <Route path="/DevProjectsEng/DevProjectsCalculatorEng" element={<DevProjectsCalculatorEng />} />
      <Route path="/DevProjectsEng/DevProjectsPostitEng" element={<DevProjectsPostitEng />} />
      <Route path="/DevProjectsEng/DevProjectsLoginEng" element={<DevProjectsLoginEng />} />
      <Route path="/DevProjectsEng/DevProjectsUrlShrinkEng" element={<DevProjectsUrlShrinkEng />} />
      <Route path="/BlogMainEng" element={<BlogMainEng />} />
      <Route path="/BlogMainEng/ProfessionalExpBlogEng" element={<ProfessionalExpBlogEng />} />
      <Route path="/BlogMainEng/aboutMeBlogEng" element={<aboutMeBlogEng />} />
      <Route path="/BlogMainEng/pantanalBlogEng" element={<pantanalBlogEng />} />
      <Route path="/BlogMainEng/pokemonPainBlogEng" element={<pokemonPainBlogEng />} />
    </Routes>
  );
}
//