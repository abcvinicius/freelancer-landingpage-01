// AppRoutes.tsx
import { BrowserRouter as Router } from 'react-router-dom';
import { HomeSection } from '../components/HomeSection';
import { Header } from '../components/Header';
import { Differentials } from '../components/Differentials';
import { Services } from '../components/Services';
import { MarketingSection } from '../components/MarketingSection';
import { MarketingInformationSection } from '../components/MarketingInformationSection';
import { Footer } from '../components/Footer';

export const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <div id="home">
        <HomeSection />
      </div>
      <div id="differentials">
        <Differentials />
      </div>
      <div id="services">
        <Services />
      </div>
      <MarketingSection />
      <MarketingInformationSection />
      <div id="footer">
        <Footer />
      </div>
    </Router>
  );
};