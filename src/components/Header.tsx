//Header.tsx
import { useState } from 'react';
import { HeaderWrapper, NavList, NavItem, StyledLink, Sidebar, SidebarContent, CloseIcon, MenuIcon } from '../styles/HeaderStyles';

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
            <StyledLink to="/">Sobre Mim</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/differentials">Diferenciais</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/services">Serviços</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/contact">Contato</StyledLink>
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
              <StyledLink to="/">Home</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/examples">Diferenciais</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/components">Serviços</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/profile">Contato</StyledLink>
            </NavItem>
          </ul>
        </SidebarContent>
      </Sidebar>
    </HeaderWrapper>
  );
};