import React from 'react';
import Header from '../../Components/DashComponents/Header';
import ProjectData from '../../Components/DashComponents/ProjectData';
import { Container } from '@mui/material';


const Briefs = () => {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <ProjectData />
      </Container>
    </React.Fragment>
  )
}

export default Briefs;