import { useEffect } from 'react';
import ServiceDetail from './pages/ServiceDetail';
import { services } from './data/services';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Community from './pages/Community';
import Visit from './pages/Visit';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

const pages = { index: Home, services: Services, about: About, community: Community, visit: Visit, contact: Contact };
const titles = {
  index: 'Compassionate care in Gbarnga | Courage Medical & Rehab Center',
  services: 'Our services | Courage Medical & Rehab Center',
  about: 'About Courage | Courage Medical & Rehab Center',
  community: 'Community programs | Courage Medical & Rehab Center',
  visit: 'Plan your visit | Courage Medical & Rehab Center',
  contact: 'Location and contact | Courage Medical & Rehab Center',
};

export default function App() {
  const route = window.location.pathname.split('/').filter(Boolean).pop()?.replace(/\.html$/, '') || 'index';
  const Page = pages[route];
  const service = services.find(item => item.slug === route);

  useEffect(() => {
    document.title = service
      ? `${service.name} | Courage Medical & Rehab Center`
      : titles[route] || 'Page not found | Courage Medical & Rehab Center';
  }, [route, service]);

  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Header active={service ? 'services' : route} />
      <main id="main">
        {service ? <ServiceDetail service={service} /> : Page ? <Page /> : (
          <div className="wrap page-intro">
            <h1>Page not found</h1>
            <a className="button" href="/">Return home</a>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
