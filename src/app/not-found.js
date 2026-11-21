import ButtonLink from '@/components/ui/ButtonLink';

export default function NotFound() {
  return (
    <section className='not-found'>
      <div className='site-container'>
        <p className='eyebrow eyebrow--light'>Page not found</p>
        <h1>This page is no longer on the plans.</h1>
        <p>Return home or explore the services Barsell Construction offers.</p>
        <div className='button-row'>
          <ButtonLink href='/'>Return home</ButtonLink>
          <ButtonLink href='/services' variant='outline-light'>
            View services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
