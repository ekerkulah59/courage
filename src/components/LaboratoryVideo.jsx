export default function LaboratoryVideo() {
  return (
    <div className="laboratory-feature">
      <div>
        <span className="eyebrow">Inside Courage</span>
        <h2>A closer look at our laboratory.</h2>
        <p>Take a video tour of the on-site laboratory and see the space and equipment that support diagnostic testing at Courage.</p>
        <a className="text-link" href="/Courage Medical Laboratory .mp4">Open laboratory video</a>
      </div>
      <figure>
        <video controls playsInline preload="none" poster="/laboratory-video-poster.jpg" aria-label="Tour of Courage Medical Laboratory">
          <source src="/Courage Medical Laboratory .mp4" type="video/mp4" />
          Your browser does not support embedded video. Use the laboratory video link to watch.
        </video>
        <figcaption>Courage Medical Laboratory · Video tour</figcaption>
      </figure>
    </div>
  );
}
