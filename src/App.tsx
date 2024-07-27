import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LayoutsWithNavbar from './components/LayoutsWithNavbar';
import Auth from './pages/Auth';
import Contract from './pages/Contract';
import Financial from './pages/Financial';
import Home from './pages/Home';
import NewProject from './pages/NewProject';
import PageNotFound from './pages/PageNotFound';
import Projects from './pages/Projects';
import SingleService from './pages/SingleService';

export default function App() {
  // return <h1 className="text-3xl font-bold text-red-500 underline">Hello world!</h1>;
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<LayoutsWithNavbar />}>
              <Route path="/" element={<Home />} />
              <Route path="/new-project" element={<NewProject />} />
              <Route path="/single-service" element={<SingleService />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contract" element={<Contract />} />
              <Route path="/financial" element={<Financial />} />
            </Route>
            <Route path="auth" element={<Auth />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
