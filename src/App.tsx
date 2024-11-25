import { Suspense } from 'react';
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import LayoutsWithNavbar from './components/LayoutsWithNavbar';
import DraggablePoints from './components/NewProject/Magnifier/DraggablePoints';
import SelectLine from './components/NewProject/Magnifier/SelectLine';
import SelectPixels from './components/NewProject/Magnifier/SelectPixels';
import UploadImg from './components/NewProject/Magnifier/UploadImg';
import ProjectDetails from './components/Projects/ProjectDetails/ProjectDetails';
import UserManagement from './components/User Management/Admin/UserManagement';
import About from './pages/About';
import Account from './pages/Account';
import Auth from './pages/Auth';
import Contract from './pages/Contract';
import CustomreService from './pages/CustomreService';
import Design from './pages/Design';
import DesignStyles from './pages/DesignStyles';
import Financial from './pages/Financial';
import HelpAndSupport from './pages/HelpAndSupport';
import Home from './pages/Home';
import Install from './pages/Install';
import Measure from './pages/Measure';
import NewProject from './pages/NewProject';
import Offers from './pages/Offers';
import PageNotFound from './pages/PageNotFound';
import PayOutPreferences from './pages/PayOutPreferences';
import Portfolio from './pages/Portfolio';
import PriceAndMaterial from './pages/PriceAndMaterial';
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
        <HashRouter>
          <div className="bg-mainGreen">
            <Routes>
              <Route path="/" element={<LayoutsWithNavbar user_role={user_role} />}>
                <Route path="/" element={<Navigate to="/auth" />} />
                <Route path="/home" element={<Home user_role={user_role} />} />
                <Route path="/new-project" element={<NewProject />} />
                <Route path="/projects" element={<Projects user_role={user_role} />} />
                <Route
                  path="/projects/:id"
                  element={<ProjectDetails user_role={user_role} />}
                />
                <Route path="/contract" element={<Contract user_role={user_role} />} />
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
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/account" element={<Account />} />
                <Route path="/help-and-support" element={<HelpAndSupport />} />
                <Route path="/payout-prefrences" element={<PayOutPreferences />} />
                <Route
                  path="/user-management"
                  element={<UserManagement user_role={user_role} />}
                />
                <Route
                  path="/price-and-material"
                  element={<PriceAndMaterial user_role={user_role} />}
                />
                <Route path="/customer-service" element={<CustomreService />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/design-styles" element={<DesignStyles />} />

                <Route path="/test" element={<DraggablePoints />} />
                <Route path="/test2" element={<UploadImg />} />
                <Route path="/test3" element={<SelectLine />} />
              </Route>
              <Route path="auth" element={<Auth />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </HashRouter>
      </Suspense>
    </>
  );
}
