import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LayoutsWithNavbar from './components/LayoutsWithNavbar';
import ProjectDetails from './components/Projects/ProjectDetails';
import Account from './pages/Account';
import Auth from './pages/Auth';
import Contract from './pages/Contract';
import Design from './pages/Design';
import Financial from './pages/Financial';
import HelpAndSupport from './pages/HelpAndSupport';
import Home from './pages/Home';
import Install from './pages/Install';
import Measure from './pages/Measure';
import NewProject from './pages/NewProject';
import PageNotFound from './pages/PageNotFound';
import PayOutPreferences from './pages/PayOutPreferences';
import Produce from './pages/Produce';
import Projects from './pages/Projects';
import Requests from './pages/Requests';
import SingleService from './pages/SingleService';

export default function App() {
  const roles = {
    customer: 'customer',
    designer: 'designer',
    producer: 'producer',
    installer: 'installer',
    admin: 'admin',
  };

  const user_role = roles.customer;

  return (
    <>
      <Suspense fallback={<div className="container">Loading...</div>}>
        <BrowserRouter>
          <div className="bg-mainGreen">
            <Routes>
              <Route path="/" element={<LayoutsWithNavbar user_role={user_role} />}>
                <Route path="/" element={<Home user_role={user_role} />} />
                <Route path="/new-project" element={<NewProject />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetails />} />
                <Route path="/contract" element={<Contract />} />
                <Route path="/financial" element={<Financial user_role={user_role} />} />
                <Route
                  path="/single-service"
                  element={<SingleService user_role={user_role} />}
                />
                <Route path="/single-service/measure" element={<Measure />} />
                <Route path="/single-service/design" element={<Design />} />
                <Route path="/single-service/install" element={<Install />} />
                <Route path="/single-service/produce" element={<Produce />} />
                <Route path="/requests" element={<Requests />} />

                <Route path="/account" element={<Account />} />
                <Route path="/help-and-support" element={<HelpAndSupport />} />
                <Route path="/payout-prefrences" element={<PayOutPreferences />} />
              </Route>
              <Route path="auth" element={<Auth />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
