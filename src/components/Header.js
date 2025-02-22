// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const HeaderWrapper = styled.header`
  background: #121212;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
`;

const NavItem = styled.li`
  a {
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      color: #1db954;
    }
  }
`;

const SocialLinks = styled.div`
  a {
    color: #ffffff;
    margin-left: 1rem;
    font-size: 1.5rem;
    &:hover {
      color: #1db954;
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <nav>
        <NavList>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/resume">Resume</Link>
          </NavItem>
          <NavItem>
            <Link to="/projects">Projects</Link>
          </NavItem>
        </NavList>
      </nav>
      <SocialLinks>
        <a
          href="https://www.linkedin.com/in/smit-wandre-9911802b3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/SmitWandre"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </SocialLinks>
    </HeaderWrapper>
  );
};

export default Header;

