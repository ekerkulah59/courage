import { useState } from 'react';
import Brand from './Brand';
const links = [['services', 'Our services'], ['about', 'About Courage'], ['community', 'Community'], ['visit', 'Plan your visit']];
export default function Header({ active }) {
  const [isOpen, setIsOpen] = useState(false);
  return <>
    <div className="utility"><div className="wrap"><span>⌖ &nbsp; Kollieta Wolah · Gbarnga, Bong County, Liberia</span><span>Care with compassion. Rooted in community.</span></div></div>
    <header><div className="wrap nav">
      <Brand />
      <nav className={`links${isOpen ? ' open' : ''}`} id="navigation" aria-label="Main navigation" onKeyDown={event => { if (event.key === 'Escape') setIsOpen(false); }}>
        {links.map(([route, label]) => <a key={route} href={`/${route}`} className={active === route ? 'active' : undefined} aria-current={active === route ? 'page' : undefined}>{label}</a>)}
      </nav>
      <a className="button" href="/visit">Visit the center <span aria-hidden="true">↗</span></a>
      <button className="menu" aria-controls="navigation" aria-expanded={isOpen} onClick={() => setIsOpen(open => !open)} onKeyDown={event => { if (event.key === 'Escape') setIsOpen(false); }}>{isOpen ? 'Close' : 'Menu'}</button>
    </div></header>
  </>;
}
