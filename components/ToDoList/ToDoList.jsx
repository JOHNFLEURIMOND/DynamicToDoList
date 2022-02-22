import React, { useState } from 'react';
import ToDoInput from './ToDoInput';
import 'cross-fetch/polyfill';
import { GlobalStyle } from '../layout/global-style';
import { ProjectsSectionContainer } from './index';

const ProjectsSection = () => {
  return (
    <>
      <ProjectsSectionContainer>
        <GlobalStyle />
        <ToDoInput />
      </ProjectsSectionContainer>
    </>
  );
};

export default ProjectsSection;
