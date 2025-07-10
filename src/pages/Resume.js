import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  background-color: #000;
  color: #fff;
  font-family: 'Helvetica', sans-serif;
  padding: 4rem 2rem;
  min-height: 100vh;
`;

const ResumeContainer = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  background: #111;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
`;

const ResumeHeading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const ResumeText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #ccc;
`;

const ViewButton = styled.button`
  display: inline-block;
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #fff;
  background-color: #1db954;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background-color: #17a44d;
  }
`;

const IframeContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 600px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
`;

const Resume = () => {
  const [showResume, setShowResume] = useState(false);

  const handleViewResume = () => {
    setShowResume(true);
  };

  return (
    <PageContainer>
      <ResumeContainer
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <ResumeHeading>My Resume</ResumeHeading>
        {!showResume && (
          <ViewButton onClick={handleViewResume}>
            View Resume (PDF)
          </ViewButton>
        )}
        {showResume && (
          <IframeContainer>
            <iframe
              src="/resume_6.pdf"
              title="My Resume"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            ></iframe>
          </IframeContainer>
        )}
      </ResumeContainer>
    </PageContainer>
  );
};

export default Resume;
