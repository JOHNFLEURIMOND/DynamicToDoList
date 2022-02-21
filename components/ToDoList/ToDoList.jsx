import React, { useState } from 'react';
import ToDoInput from './ToDoInput';
import 'cross-fetch/polyfill';
import { GlobalStyle } from '../layout/global-style';
import { ProjectsSectionContainer, Header, CardDiv } from './index';

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