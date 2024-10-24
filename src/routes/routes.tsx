import { BrowserRouter as Router } from 'react-router-dom';
import {HomeSection} from '../components/HomeSection';
import {Header} from '../components/Header';
import { Differentials } from '../components/Differentials';
import { Services } from '../components/Services';
import { MarketingSection } from '../components/MarketingSection';
import { MarketingInformationSection } from '../components/MarketingInformationSection';
import { Footer } from '../components/Footer'
export const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <HomeSection />
      <Differentials />
      <Services />
      <MarketingSection />
      <MarketingInformationSection />
      <Footer />
    </Router>
  );
};