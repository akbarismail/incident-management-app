import Link from 'next/link';

const Custom404 = () => {
  return (
    <main className='grid min-h-full place-items-center py-24 px-6 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='text-base font-semibold text-my-red-light'>404</p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl'>
          Page not found
        </h1>
        <p className='mt-6 text-base leading-7 text-white'>
          Sorry, we could not find the page you are looking for.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Link
            href={'/'}
            className='rounded-md bg-my-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-my-green-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-my-green'
          >
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Custom404;
