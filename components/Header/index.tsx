import Link from 'next/link';

const Header = () => {
  return (
    <header className='px-5 lg:px-6 shadow-sm'>
      <nav className='flex justify-center lg:justify-end  py-3'>
        <ul className='flex  justify-center lg:justify-end py-3'>
          <li className='p-2'>
            <Link
              href={'/users'}
              className='hover:text-my-green tracking-wider text-sm lg:text-base font-medium'
            >
              Users
            </Link>
          </li>
          <li className='p-2'>
            <Link
              href={'/'}
              className='hover:bg-my-red-light lg:text-base bg-my-red py-2 px-7 text-white rounded-lg text-xs'
            >
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
