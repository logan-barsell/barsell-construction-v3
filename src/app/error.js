'use client';

import { useEffect } from 'react';

export default function ErrorPage({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className='error-page'>
      <div className='site-container'>
        <p className='eyebrow eyebrow--light'>Something went wrong</p>
        <h1>We hit an unexpected snag.</h1>
        <p>
          Please try the page again. If the problem continues, return to the
          homepage and start from there.
        </p>
        <div className='button-row'>
          <button className='button button--primary' type='button' onClick={reset}>
            <span>Try again</span>
          </button>
          <a className='button button--outline-light' href='/'>
            <span>Return home</span>
          </a>
        </div>
      </div>
    </section>
  );
}
