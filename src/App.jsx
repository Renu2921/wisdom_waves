import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import UpcomingBatches from './pages/UpcomingBatches';
import Blogs from './pages/Blogs';
import Events from './pages/Events';
import ContactUs from './pages/ContactUs';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="batches" element={<UpcomingBatches />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="events" element={<Events />} />
        <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
