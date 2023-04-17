import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import Opportunities from './Pages/Listpages/Opportunities';
import Competitors from './Pages/Listpages/Competitors';
import Saved from './Pages/Listpages/Saved';
import Overview from './Pages/Listpages/Overview';
import Setting from './Pages/Listpages/Setting';
import Help from './Pages/Listpages/Help';
import Briefs from './Pages/Listpages/Briefs';
import Sidebar from './Components/Layout/Sidebar';



const SidebarWrapper = ({ component }) => {
  return <Sidebar >{component}</Sidebar>
};




const RouterPage = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<SidebarWrapper component={<Overview />} />} />
          <Route exact path="/opportunities" element={<SidebarWrapper component={<Opportunities />} />} />
          <Route exact path="/competitors" element={<SidebarWrapper component={<Competitors />} />} />
          <Route exact path="/briefs" element={<SidebarWrapper component={<Briefs />} />} />
          <Route exact path="/saved" element={<SidebarWrapper component={<Saved />} />} />

          <Route exact path="/settings" element={<SidebarWrapper component={<Setting />} />} />
          <Route exact path="/help" element={<SidebarWrapper component={<Help />} />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default RouterPage;