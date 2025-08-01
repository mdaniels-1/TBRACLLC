'use client';

import { useState } from 'react';

import LogoBar from '@/components/LogoBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/components/Home/Home';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Services from '@/components/Services/Services';
import Contact from '@/components/Contact/Contact';

export default function Landing() {
  const [tab, setTab] = useState("home");

  return (
    <div>
      <LogoBar />
      <Navbar setTab={setTab}/>
      {tab === "home" && (<Home setTab={setTab}/>)}
      {tab === "about" && (<About/>)}
      {tab === "projects" && (<Projects/>)}
      {tab === "services" && (<Services/>)}
      {tab === "contact" && (<Contact/>)}
      <Footer />
    </div>
  );
}
