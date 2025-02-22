// src/pages/Home.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed'; // named export from react-typed
import { FaPython, FaJs, FaReact, FaHtml5, FaCss3Alt, FaGit, FaLaptopCode } from 'react-icons/fa';
import { SiC, SiRuby, SiFlask, SiStreamlit } from 'react-icons/si';
import pfp from '../assets/pfp.JPG'; // Ensure filename & case match exactly

// Fade-in animation for sections
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// Base page container with dark background
const PageContainer = styled.div`
  background-color: #000;
  color: #fff;
  font-family: 'Helvetica', sans-serif;
  overflow-x: hidden;
`;

// Base section style
const Section = styled(motion.section)`
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// ----- HERO SECTION ----- //
const HeroSection = styled(Section)`
  background: #111;
  animation: ${fadeIn} 1s ease-out;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: left;
  width: 100%;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
`;

const HeroText = styled.div`
  flex: 1;
  min-width: 300px;
  padding-right: 2rem;
`;

const HeroImageContainer = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: flex-end;
  padding-left: 2rem;
`;

const HeroHeading = styled.h1`
  font-size: 6rem; /* Very large heading for multiple lines */
  margin: 0;
  line-height: 1.2;
`;

const HeroSubheading = styled.p`
  font-size: 1.75rem;
  margin-top: 1rem;
  color: #ccc;
`;

const HeroImage = styled(motion.img)`
  width: 300px;
  height: auto;
  border-radius: 50%;
  border: 5px solid #1db954;
`;

// ----- ABOUT SECTION ----- //
const AboutSection = styled(Section)`
  background: #000;
  border-top: 1px solid #333;
`;

// Python window styling
const PythonWindow = styled(motion.div)`
  background: #1a1a1a;
  width: 80%;
  max-width: 800px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.8);
  overflow: hidden;
`;

const PythonWindowHeader = styled.div`
  background: #333;
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
`;

const Dot = styled.span`
  width: 12px;
  height: 12px;
  background: ${props => props.color || '#ff5f56'};
  border-radius: 50%;
`;

// IMPORTANT: Updated styling to ensure multiline text is fully visible
const PythonWindowBody = styled.pre`
  background: #1a1a1a;
  padding: 1rem;
  overflow: auto;           /* Enables scrolling if content exceeds container */
  color: #c5c8c6;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.1rem;
  
  white-space: pre-wrap;    /* Wrap lines instead of cutting off horizontally */
  word-wrap: break-word;    /* Break long lines or words if needed */
  width: 100%;
`;

// ----- SKILLS SECTION ----- //
const SkillsSection = styled(Section)`
  background: #111;
  border-top: 1px solid #333;
`;

const SkillsHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  min-width: 90px;
`;

// ----- CONTACT SECTION ----- //
const ContactSection = styled(Section)`
  background: #000;
  border-top: 1px solid #333;
  flex-direction: column;
  text-align: center;
`;

const ContactHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ContactInfo = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  a {
    color: #1db954;
    text-decoration: none;
  }
`;

const Home = () => {
  return (
    <PageContainer>
      {/* HERO SECTION */}
      <HeroSection
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <HeroContent>
          <HeroText>
            <HeroHeading>
              <ReactTyped
                strings={["Hello! I am Smit Wandre."]}
                typeSpeed={80}
                backSpeed={40}
                loop={false}
              />
            </HeroHeading>
            <HeroSubheading>
              A passionate developer building awesome things.
            </HeroSubheading>
          </HeroText>
          <HeroImageContainer>
            <HeroImage
              src={pfp}
              alt="Smit Wandre"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </HeroImageContainer>
        </HeroContent>
      </HeroSection>

      {/* ABOUT SECTION */}
      <AboutSection
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <PythonWindow
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <PythonWindowHeader>
            <Dot color="#ff5f56" />
            <Dot color="#ffbd2e" />
            <Dot color="#27c93f" />
          </PythonWindowHeader>
          <PythonWindowBody>
{`# About Me
def introduce():
    name = "Smit Wandre"
    bio = """I'm a passionate software developer who thrives on 
          transforming ideas into elegant code. With a deep love 
          for problem-solving and innovation, I build dynamic, 
          efficient applications that make a real impact. Whether 
          I'm exploring cutting-edge technologies or fine-tuning 
          a system for optimal performance, I approach each challenge 
          as an opportunity to learn and grow. I believe in the art 
          of coding—not just as a career, but as a way of life, fueling 
          creativity and pushing the boundaries of what's possible."""
    print(f"Hi, I'm {name}! {bio}")

introduce()`}
          </PythonWindowBody>
        </PythonWindow>
      </AboutSection>

      {/* SKILLS SECTION */}
      <SkillsSection
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <SkillsHeading>Technologies I Work With</SkillsHeading>
        <SkillList>
          <SkillItem>
            <FaPython />
            <p>Python</p>
          </SkillItem>
          <SkillItem>
            <FaJs />
            <p>JavaScript</p>
          </SkillItem>
          <SkillItem>
            <FaReact />
            <p>React</p>
          </SkillItem>
          <SkillItem>
            <FaHtml5 />
            <p>HTML5</p>
          </SkillItem>
          <SkillItem>
            <FaCss3Alt />
            <p>CSS3</p>
          </SkillItem>
          <SkillItem>
            <SiC />
            <p>C</p>
          </SkillItem>
          <SkillItem>
            <SiRuby />
            <p>Ruby</p>
          </SkillItem>
          <SkillItem>
            <FaGit />
            <p>Git</p>
          </SkillItem>
          <SkillItem>
            <SiFlask />
            <p>Flask</p>
          </SkillItem>
          <SkillItem>
            <SiStreamlit />
            <p>Streamlit</p>
          </SkillItem>
          <SkillItem>
            <FaLaptopCode />
            <p>Dafny</p>
          </SkillItem>
        </SkillList>
      </SkillsSection>

      {/* CONTACT SECTION */}
      <ContactSection
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <ContactHeading>Contact Me</ContactHeading>
        <ContactInfo>
          Email: <a href="mailto:wandresmit@gmail.com">wandresmit@gmail.com</a>
        </ContactInfo>
        <ContactInfo>
          LinkedIn: <a href="https://www.linkedin.com/in/smit-wandre-9911802b3" target="_blank" rel="noopener noreferrer">smitwandre</a>
        </ContactInfo>
        <ContactInfo>
          GitHub: <a href="https://github.com/SmitWandre" target="_blank" rel="noopener noreferrer">SmitWandre</a>
        </ContactInfo>
      </ContactSection>
    </PageContainer>
  );
};

export default Home;
