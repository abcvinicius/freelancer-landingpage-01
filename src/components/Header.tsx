// Header.tsx
import { useState } from 'react';
import { HeaderWrapper, NavList, NavItem, Sidebar, SidebarContent, CloseIcon, MenuIcon } from '../styles/HeaderStyles';
import { Link } from 'react-scroll';

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <HeaderWrapper>
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