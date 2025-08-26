'use client';

import '@/components/styles/Navbar.css';

interface NavbarProps {
  tab: string;
  setTab: (tabName: string) => void;
}

export default function Navbar({
  tab,
  setTab
}: NavbarProps) {

  const switchTab = (e: React.MouseEvent<HTMLAnchorElement>, tabName: string) => {
    e.preventDefault();
    setTab(tabName);
  }

  return (
    <div className='nav_container'>
      <nav>
        <a className='wallpoet_regular brand'>TBRAC LLC</a>
        <a id='home' className={`wallpoet_regular ${tab === "home" && "active"}`} onClick={(e) => switchTab(e, "home")}>HOME</a>
        <a id='about' className={`wallpoet_regular ${tab === "about" && "active"}`} onClick={(e) => switchTab(e, "about")}>ABOUT</a>
        <a id='projects' className={`wallpoet_regular ${tab === "projects" && "active"}`} onClick={(e) => switchTab(e, "projects")}>PROJECTS</a>
        <a id='services' className={`wallpoet_regular ${tab === "services" && "active"}`} onClick={(e) => switchTab(e, "services")}>SERVICES</a>
        <a id='contact' className={`wallpoet_regular ${tab === "contact" && "active"}`} onClick={(e) => switchTab(e, "contact")}>CONTACT US</a>
      </nav>
    </div>

  )
};

