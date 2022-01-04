/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, COLORS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <StyledDialogOverlay>
      <StyledDialogContent aria-label="Mobile Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
        </CloseButton>
        <MobileNav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </MobileNav>
        <MobileFooter>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </MobileFooter>
      </StyledDialogContent>
    </StyledDialogOverlay>
  );
};

const CloseButton = styled(UnstyledButton)`
  display: flex;
  justify-content: flex-end;
  margin-right: -10px;
`;

const MobileNav = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 22px;
  color: hsl(var(--gray-900));
  & > a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: ${18 / 16}rem;
    color: inherit;
    &:focus,
    &:hover {
      color: var(--secondary);
    }
  }
`;

const MobileFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  color: hsl(var(--gray-700));
  & > a {
    color: inherit;
    text-decoration: none;
    font-size: ${14 / 16}rem;
  }
`;

const StyledDialogOverlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(var(--gray-500) / 0.7);
`;

const StyledDialogContent = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 32px;
  background: var(--white);
`;

export default MobileMenu;
