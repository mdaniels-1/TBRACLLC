'use client';

import '@/components/styles/Navbar.css';

interface NavbarProps {
  setTab: (tabName: string) => void;
}

export default function Navbar({
  setTab
}: NavbarProps) {

  const switchTab = (e: React.MouseEvent<HTMLAnchorElement>, tabName: string) => {
    e.preventDefault();
    setTab(tabName);
  }

  return (
    <div className='nav_container'>
      <nav>
        <a className='wallpoet_regular'>TBRAC LLC</a>
        <a className='wallpoet_regular' onClick={(e) => switchTab(e, "home")}>HOME</a>
        <a className='wallpoet_regular' onClick={(e) => switchTab(e, "about")}>ABOUT</a>
        <a className='wallpoet_regular' onClick={(e) => switchTab(e, "projects")}>PROJECTS</a>
        <a className='wallpoet_regular' onClick={(e) => switchTab(e, "services")}>SERVICES</a>
        <a className='wallpoet_regular' onClick={(e) => switchTab(e, "contact")}>CONTACT US</a>
      </nav>
    </div>

  )
};

