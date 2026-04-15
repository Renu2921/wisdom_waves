import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const UpcomingBatches = lazy(() => import('./pages/UpcomingBatches'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Events = lazy(() => import('./pages/Events'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const HonoraryDoctorate = lazy(() => import('./pages/HonoraryDoctorate'));
const DBAPhdPrograms = lazy(() => import('./pages/DBAPhdPrograms'));
const HonoraryProfessorship = lazy(() => import('./pages/HonoraryProfessorship'));

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div className="flex w-full h-[60vh] items-center justify-center font-serif text-2xl text-primary opacity-60">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="batches" element={<UpcomingBatches />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="events" element={<Events />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="honorary-doctorate" element={<HonoraryDoctorate />} />
          <Route path="dba-phd-programs" element={<DBAPhdPrograms />} />
          <Route path="honorary-professorship" element={<HonoraryProfessorship />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
