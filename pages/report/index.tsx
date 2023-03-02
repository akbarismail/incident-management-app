import Header from '@/components/Header';

const Report = () => {
  return (
    <main className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <article className='w-full lg:w-10/12 lg:m-auto rounded-xl bg-white'>
        <Header />
        <div className='p-7'>
          <h1 className='font-bold text-xl '>Report an Accident</h1>
          <form>
            <div className='my-4 grid grid-cols-1 lg:grid-cols-2 gap-7'>
              <div>
                <div className='my-4'>
                  <label htmlFor='name' className='font-medium text-base'>
                    Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Enter your name'
                    className='border border-my-gray p-3 rounded-lg w-full mt-2'
                  />
                </div>
                <div className='my-4'>
                  <label htmlFor='issue' className='font-medium text-base'>
                    Issue
                  </label>
                  <input
                    type='text'
                    name='issue'
                    id='issue'
                    placeholder='Type your issue'
                    className='border border-my-gray p-3 rounded-lg w-full mt-2'
                  />
                </div>
                <div className='my-4'>
                  <select
                    name='select-issue'
                    id='select-issue'
                    className='border border-my-gray p-3 rounded-lg w-1/4 mt-2'
                  >
                    <option value='aplikasi'>Aplikasi</option>
                    <option value='server'>Server</option>
                  </select>
                </div>
                <div className='my-4'>
                  <input
                    type='file'
                    name='img'
                    id='img'
                    className='border border-my-gray p-3 rounded-lg w-full mt-2'
                  />
                </div>
              </div>
              <div className='my-4'>
                <label htmlFor='detail' className='font-medium text-base'>
                  Detail your issue
                </label>
                <textarea
                  name='detail'
                  id='detail'
                  rows={11}
                  className='border border-my-gray p-3 rounded-lg w-full mt-2'
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </article>
    </main>
  );
};

export default Report;
