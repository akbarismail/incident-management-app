import Link from 'next/link';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();

  return (
    <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8 bg-white rounded-md'>
        <div className='p-7'>
          <h1 className='font-bold text-xl text-center'>
            Incident Management App
          </h1>
          <form>
            <div className='block my-4'>
              <label htmlFor='email' className='font-medium text-base'>
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter your email'
                className='border border-my-gray p-3 rounded-lg w-full mt-2'
              />
            </div>
            <div className='block my-4'>
              <label htmlFor='password' className='font-medium text-base'>
                Password
              </label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='************'
                className='border border-my-gray p-3 rounded-lg w-full mt-2'
              />
            </div>
            <div className='block my-4'>
              <Link
                href={'/forgot-password'}
                className='font-bold text-sm text-my-green flex justify-end hover:text-my-green-light'
              >
                Forgot password
              </Link>
            </div>
            <div className='block mt-4'>
              <input
                type='submit'
                value='Sign In'
                className='bg-my-green w-full py-3 text-white font-bold text-base cursor-pointer rounded-lg hover:bg-my-green-light'
                onClick={() => router.push('/report')}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
