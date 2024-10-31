// Header.tsx
import { useState, useEffect } from 'react';
import { HeaderWrapper, NavList, NavItem, Sidebar, SidebarContent, CloseIcon, MenuIcon } from '../styles/HeaderStyles';
import { Link } from 'react-scroll';

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Monitora o scroll para adicionar o background ao header
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
            <Link to="home" smooth={true} duration={500}>Sobre Mim</Link>
          </NavItem>
          <NavItem>
            <Link to="differentials" smooth={true} duration={500}>Diferenciais</Link>
          </NavItem>
          <NavItem>
            <Link to="services" smooth={true} duration={500}>Serviços</Link>
          </NavItem>
          <NavItem>
            <Link to="footer" smooth={true} duration={500}>Contato</Link>
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
              <Link to="home" smooth={true} duration={500} onClick={toggleSidebar}>Home</Link>
            </NavItem>
            <NavItem>
              <Link to="differentials" smooth={true} duration={500} onClick={toggleSidebar}>Diferenciais</Link>
            </NavItem>
            <NavItem>
              <Link to="services" smooth={true} duration={500} onClick={toggleSidebar}>Serviços</Link>
            </NavItem>
            <NavItem>
              <Link to="footer" smooth={true} duration={500} onClick={toggleSidebar}>Contato</Link>
            </NavItem>
          </ul>
        </SidebarContent>
      </Sidebar>
    </HeaderWrapper>
  );
};