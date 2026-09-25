import { services } from '../data/services';

export default function ServiceDetail({ service }) {
  const emergency = service.slug === 'emergency-care';
  return <>
    <div className="wrap">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a><span aria-hidden="true">/</span>
        <a href="/services">Our services</a><span aria-hidden="true">/</span>
        <span aria-current="page">{service.name}</span>
      </nav>
      <div className="page-intro service-intro">
        <span className="eyebrow">{service.name}</span>
        <h1>{service.headline}</h1>
        <p>{service.introduction}</p>
        <a className="button" href={emergency ? '/contact' : '/visit'}>
          {emergency ? 'Location information' : 'Plan your visit'} <span aria-hidden="true">↗</span>
        </a>
      </div>
      {emergency && <p className="notice">Do not wait for a response from this website in a medical emergency. No emergency requests are received here.</p>}
    </div>
    <section className="block service-body">
      <div className="wrap split">
        <div>
          <span className="eyebrow">Understanding your care</span>
          <h2>Who this service is for</h2><p>{service.audience}</p>
          <h2>Our approach</h2><p>{service.approach}</p>
        </div>
        <div className="detail service-offerings">
          <h2>What we offer</h2>
          <ul>{service.offerings.map(offering => <li key={offering}>{offering}</li>)}</ul>
          <div className="principle">
            <h3>{emergency ? 'Location and availability' : 'Before your visit'}</h3>
            <p>{service.visit}</p>
          </div>
          <a className="text-link" href="/contact">Location &amp; contact ↗</a>
        </div>
      </div>
    </section>
    <section className="block community">
      <div className="wrap">
        <div className="section-head"><div><span className="eyebrow">Explore our care</span><h2>Other services at Courage</h2></div><a className="text-link" href="/services">All services ↗</a></div>
        <nav className="related-services" aria-label="Other services">
          {services.filter(item => item.slug !== service.slug).map(item => <a key={item.slug} href={`/${item.slug}`}>{item.name}<span aria-hidden="true">↗</span></a>)}
        </nav>
      </div>
    </section>
  </>;
}
