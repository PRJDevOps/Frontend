import { useEffect, useRef, useState } from 'react'; // Added useState to the import
import lottie from 'lottie-web';
import { Link } from 'react-router-dom';
import Navbar from '@/layout/navbar';
import { ThemeProvider } from '@/components/theme-provider';

const NotFoundPage = () => {
  const lottieContainer = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://cdn.prod.website-files.com/634d5c356b8adeff5a7c6393/6374a8feb22bb3cb2d2190ec_404%20page%20(1).json'
    });

    const checkAnimationLoaded = () => {
      if (animation.isLoaded) {
        setIsLoading(false);
      }
    };

    animation.addEventListener('enterFrame', checkAnimationLoaded);

    return () => {
      animation.removeEventListener('enterFrame', checkAnimationLoaded);
      animation.destroy();
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="dark">
      <Navbar />
      <div className='justify-center flex flex-col items-center h-screen dark:bg-[#101314]'>
        <div> 
          <span className='text-center mt-4'> Oops! :((  </span>            
        </div>
        <div className='mb-8'> 
          <span className='text-red'>Something went wrong</span> 
        </div>
        
        {isLoading ? (
          <div className="animate-pulse flex space-x-4 items-center">
            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
            <div className="h-2 bg-slate-700 rounded w-48"></div>
          </div>
        ) : (
          <div
            className="lottie-404 part-2"
            ref={lottieContainer} // Ensure this ref is correctly attached
            style={{
              filter: 'invert(1) brightness(2)',
              maxWidth: '700px',
              width: '100%',
            }}
          />
        )}

        <div className='mt-10'>
          <span className='text-center'>Visit my homepage: URL homepage to browse our latest content.</span>
        </div>

        <div className='mt-4'>
          <Link
            to='/'
            className=" border-2  dark:border-white font-bold py-2 px-8 rounded-full hover:bg-white/10 transition-colors duration-300 focus:outline-none focus:shadow-outline"
          >
            <span className='text-[25px]'>Visit to home</span>
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default NotFoundPage;
