// Header.tsx
import { useState, useEffect } from 'react';
import { HeaderWrapper, NavList, NavItem, Sidebar, SidebarContent, CloseIcon, MenuIcon, StyledSidebarLink } from '../styles/HeaderStyles';
import { Link } from 'react-scroll';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderWrapper isScrolled={isScrolled}>
      <nav>
        <NavList>
          <NavItem>
            <Link to="home" smooth={true} duration={500} offset={-70}>Sobre Mim</Link>
          </NavItem>
          <NavItem>
            <Link to="differentials" smooth={true} duration={500} offset={-100}>Diferenciais</Link>
          </NavItem>
          <NavItem>
            <Link to="services" smooth={true} duration={500} offset={-70}>Serviços</Link>
          </NavItem>
          <NavItem>
            <Link to="footer" smooth={true} duration={500} offset={-70}>Contato</Link>
          </NavItem>
        </NavList>
      </nav>

      {/* Ícone de menu para mobile */}
      <MenuIcon onClick={toggleSidebar} />

      <Sidebar isOpen={isSidebarOpen}>
        <SidebarContent>
          <CloseIcon onClick={toggleSidebar} />
          <ul>
            <NavItem>
              <StyledSidebarLink to="home" smooth={true} duration={500} spy={true} offset={-70} activeClass="active" onClick={toggleSidebar}>
                <HomeIcon className="icon" /> Home
              </StyledSidebarLink>
            </NavItem>
            <NavItem>
              <StyledSidebarLink to="differentials" smooth={true} duration={500} spy={true} offset={-70} activeClass="active" onClick={toggleSidebar}>
                <InfoIcon className="icon" /> Diferenciais
              </StyledSidebarLink>
            </NavItem>
            <NavItem>
              <StyledSidebarLink to="services" smooth={true} duration={500} spy={true} offset={-70} activeClass="active" onClick={toggleSidebar}>
                <WorkIcon className="icon" /> Serviços
              </StyledSidebarLink>
            </NavItem>
            <NavItem>
              <StyledSidebarLink to="footer" smooth={true} duration={500} spy={true} offset={-70} activeClass="active" onClick={toggleSidebar}>
                <ContactMailIcon className="icon" /> Contato
              </StyledSidebarLink>
            </NavItem>
          </ul>
        </SidebarContent>
      </Sidebar>
    </HeaderWrapper>
  );
};