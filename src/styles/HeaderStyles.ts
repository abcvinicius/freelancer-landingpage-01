//HeaderStyles.ts
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import menuIcon from '../assets/icon-menu.png';

export const HeaderWrapper = styled.header`
  background-color: transparent;
  padding: 0rem !important;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  height: 10vh !important;

  @media (max-width: 1024px) {
    justify-content: space-between;
    padding: 1rem;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 5.5rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  cursor: pointer;
  font-size: 1.125rem;
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;

  &.active {
    color: #1EA69A;
  }

  &:hover {
    color: #1EA69A;
    transform: scale(1.05);
  }
  
`;

export const StyledLink = styled(NavLink)`
  color: #000000;
  text-decoration: none;
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;

  &.active {
    color: #1EA69A;
  }

  &:hover {
    color: #1EA69A;
    transform: scale(1.05);
  }
`;

export const MenuIcon = styled.div`
  width: 35px;
  height: 35px;
  background-image: url(${menuIcon});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  position: absolute; 
  right: 1rem;
  margin-right: 1rem;
  
  @media (min-width: 1025px) {
    display: none;
  }
`;

export const Sidebar = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 75%;
  height: 100%;
  background-color: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease-in-out;
  z-index: 1000;

  @media (min-width: 1025px) {
    display: none;
  }
`;

export const SidebarContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    li {
      font-size: 1.2rem;
    }
  }
`;

export const CloseIcon = styled.div`
  width: 35px;
  height: 35px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  margin-left: auto;

  @media (min-width: 1025px) {
    display: none;
  }
`;