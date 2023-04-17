import React from 'react';
import { Container } from '@mui/material';
import Header from '../../Components/DashComponents/Header';
import ProjectData from '../../Components/DashComponents/ProjectData';

const Overview = () => {
  return (
    <React.Fragment>
      <>
        <Container>
          <Header />
          <ProjectData />
        </Container>
      </>
    </React.Fragment>
  )
}

export default Overview;