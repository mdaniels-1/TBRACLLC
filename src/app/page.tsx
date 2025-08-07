'use client';

import { useEffect, useState } from 'react';

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
  const [projects, setProjects] = useState();

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/api/get-projects", {
        method: "GET"
      });
      const data = await res.json()
      setProjects(data.projects);
    }
    fetchProjects();

  }, []);

  return (
    <div>
      <LogoBar />
      <Navbar setTab={setTab}/>
      {tab === "home" && (<Home setTab={setTab}/>)}
      {tab === "about" && (<About/>)}
      {tab === "projects" && (projects && <div>
        <Projects projects={projects}/>
      </div>)}
      {tab === "services" && (<Services/>)}
      {tab === "contact" && (<Contact/>)}
      <Footer />
    </div>
  );
}
