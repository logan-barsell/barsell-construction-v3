import ButtonLink from '@/components/ui/ButtonLink';

export default function ContactBand() {
  return (
    <section className='contact-band'>
      <div className='site-container contact-band__inner'>
        <div>
          <p className='eyebrow eyebrow--light'>Have a project in mind?</p>
          <h2>Let’s talk about your home.</h2>
          <p>
            Reach out to discuss your goals, ask a question, or begin planning
            your project.
          </p>
        </div>
        <ButtonLink
          href='/contact'
          variant='light'
          className='contact-band__cta'
        >
          Start a conversation
        </ButtonLink>
      </div>
    </section>
  );
}
