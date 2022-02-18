import React, { useState, useEffect } from 'react';
import TodoItem from './ToDoItem';
import ToDoInput from './ToDoInput';
import 'cross-fetch/polyfill';
import { GlobalStyle } from '../layout/global-style';
import { ProjectsSectionContainer, Header, CardDiv } from './index';
const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
styleLink.href = 'https://cdn.jsdelivrnet/npm/semantic-ui/dist/semantic.min.css';
document.head.appendChild(styleLink);

export default function ProjectsSection() {
  return (
    <>
      <ProjectsSectionContainer>
        <GlobalStyle />
        <Header>To Do List Info</Header>
        <ToDoInput />
        <TodoItem />
      </ProjectsSectionContainer>
    </>
  );
}
