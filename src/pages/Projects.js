// src/pages/Projects.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  background-color: #000;
  color: #fff;
  font-family: 'Helvetica', sans-serif;
  padding: 4rem 2rem;
  min-height: 100vh;
`;

const ProjectsContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectsHeading = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: #111;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.7);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.9);
  }
`;

const ProjectTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  color: #ccc;
  margin-bottom: 1rem;
`;

const ProjectLink = styled.a`
  font-size: 1.1rem;
  color: #1db954;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Projects = () => {
  return (
    <PageContainer>
      <ProjectsContainer
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <ProjectsHeading>My Projects</ProjectsHeading>
        <ProjectGrid>
          <ProjectCard>
            <ProjectTitle>Squad Running App</ProjectTitle>
            <ProjectDescription>
              SquadRun is a social running accountability app that helps runners stay motivated by joining squads, tracking runs, competing on leaderboards, and achieving weekly goals together. Built for runners who thrive on community and friendly competition.
            </ProjectDescription>
            <ProjectLink href="https://github.com/SmitWandre/SquadRunna" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </ProjectLink>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>Sensor Anomaly Detection</ProjectTitle>
            <ProjectDescription>
              An end-to-end web app that ingests timestamped temperature and humidity CSV data, uses Django and Celery to asynchronously and automatically resample hourly readings and apply K-Means clustering, then visualizes normal versus anomalous hours in React via Recharts and PapaParse. Fully containerized with Docker Compose for consistent, production-ready development and deployment.
            </ProjectDescription>
            <ProjectLink href="https://github.com/SmitWandre/sensor_anomaly_detection" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </ProjectLink>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>Crop Yield Prediction</ProjectTitle>
            <ProjectDescription>
              This project predicts crop yields using environmental data like temperature, rainfall, and soil quality. A linear regression model was developed, trained, and evaluated. An interactive Flask frontend with Plotly graphs displays predictions dynamically. It showcases full-stack machine learning development from data processing to web deployment in Python with modern techniques.
            </ProjectDescription>
            <ProjectLink href="https://github.com/SmitWandre/crop_yield_prediction" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </ProjectLink>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>My Portfolio</ProjectTitle>
            <ProjectDescription>
              This modern portfolio website uses React for the frontend, React Router for navigation, styled-components for a sleek UI, framer-motion for smooth animations, and react-typed for typing effects. It showcases projects, a resume, and contact information.
            </ProjectDescription>
            <ProjectLink href="https://github.com/SmitWandre/my_portfolio" target="_blank" rel="noopener noreferrer">
              View on Github
            </ProjectLink>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>Stock Analysis App</ProjectTitle>
            <ProjectDescription>
              This project is a comprehensive Stock Analysis Dashboard built using Python. It allows users to analyze stock data, calculate various technical indicators, and visualize the data in an intuitive way. The app is developed using yfinance for data retrieval, pandas for data manipulation, matplotlib for visualization, and streamlit for the user interface.
            </ProjectDescription>
            <ProjectLink href="https://github.com/SmitWandre/stock_analysis_app" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </ProjectLink>
          </ProjectCard>
          {/* Add additional ProjectCards as needed */}
        </ProjectGrid>
      </ProjectsContainer>
    </PageContainer>
  );
};

export default Projects;

