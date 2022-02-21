import React, { useState } from 'react';
import ToDoInput from './ToDoInput';
import 'cross-fetch/polyfill';
import { GlobalStyle } from '../layout/global-style';
import { ProjectsSectionContainer, Header, CardDiv } from './index';
const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
styleLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css';
document.head.appendChild(styleLink);

 const ProjectsSection = () => {
  return (
    <>
      <ProjectsSectionContainer>
        <GlobalStyle />
        <ToDoInput />
      </ProjectsSectionContainer>
    </>
  );
}


export default ProjectsSection;