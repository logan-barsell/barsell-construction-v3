'use client';

export default function GlobalError({ reset }) {
  return (
    <html lang='en'>
      <body>
        <main className='global-error'>
          <div>
            <p>Barsell Construction Inc.</p>
            <h1>Something went wrong.</h1>
            <button type='button' onClick={reset}>
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
