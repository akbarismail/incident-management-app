import Link from 'next/link';

export default function Home() {
  return (
    <div className='grid min-h-full place-items-center py-24 px-6 sm:py-32 lg:px-8'>
      <h1 className='text-white text-2xl lg:text-6xl'>Welcome!</h1>
      <Link
        href={'/login'}
        className='hover:bg-my-green-light lg:text-base bg-my-green py-2 px-7 text-white rounded-lg text-xs mt-6'
      >
        <p>Get Started</p>
      </Link>
    </div>
  );
}
