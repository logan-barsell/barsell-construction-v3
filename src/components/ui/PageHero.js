export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className='page-hero'>
      <div className='page-hero__geometry' aria-hidden='true'>
        <span />
        <span />
        <span />
      </div>
      <div className='site-container page-hero__content'>
        <p className='eyebrow eyebrow--light'>{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
