import React from "react";
import styled from "styled-components/macro";

import { BREAKPOINTS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side>
          <MobileNav>
            <Icon id="shopping-bag" />
            <Icon id="search" />
            <UnstyledButton
              onClick={() => setShowMobileMenu((current) => !current)}
            >
              <Icon id="menu" />
            </UnstyledButton>
          </MobileNav>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid hsl(var(--gray-300));
  overflow-x: auto;
  overflow-y: hidden;
  @media (max-width: ${BREAKPOINTS.tablet}rem) {
    border-top: 4px solid hsl(var(--gray-900));
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 8vw - 2.75rem, 3rem);
  margin: 0px 48px;
  @media (max-width: ${BREAKPOINTS.tablet}rem) {
    display: none;
  }
`;

const MobileNav = styled(Nav)`
  display: none;
  justify-content: flex-end;
  align-items: flex-end;
  margin-left: auto;
  margin-right: 0;
  gap: 20px;
  @media (max-width: ${BREAKPOINTS.tablet}rem) {
    display: flex;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: hsl(var(--gray-900));
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--secondary);
  }
`;

export default Header;
