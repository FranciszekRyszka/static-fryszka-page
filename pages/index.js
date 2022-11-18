import Head from 'next/head';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { BsFillMoonStarsFill} from 'react-icons/bs'
import Image from 'next/image';
import { useState } from 'react';
import web1 from '../public/web1.JPG';
import web2 from '../public/web2.JPG';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>FRyszka.com.pl</title>
        <meta name="description" content="Test website" />
        <meta name="keywords" content="webdev,javascipt,nextjs,tailwind" />
        <meta name="author" content="Franciszek Ryszka" />
      </Head>

      <main className="bg-gray-100 px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white scroll-smooth">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-2xl font-firacode select-none">Test</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a href="#" className="dark:bg-gray-700 shadow-lg dark:shadow-gray-700/50 px-4 py-2 rounded-md ml-8 select-none ring ring-blue-500 ring-offset-2 ring-offset-gray-100 dark:ring-offset-gray-900">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 font-medium md:text-6xl">Lorem ipsum</h2>
            <div className="flex">
              <p className="text-center text-xl px-7 py-4 font-normal md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 py-10 lg:flex-wrap">
            <div className="basis-1/2 flex-1">
              <Image src={web1} className="rounded-lg object-cover" width={'80%'} height={'80%'} layout="responsive"/>        
            </div>
            <div className="basis-1/2 flex-1">
              <Image src={web2} className="rounded-lg object-cover" width={'80%'} height={'80%'} layout="responsive"/>        
            </div>
          </div>
        </section> 
      </main>
      <footer>
        <div className="bg-gray-100 dark:bg-gray-900">
          <h1 className="text-center dark:text-white/80">Footer test</h1>
          <h2 className="text-center dark:text-white/80">Lorem Ipsum</h2>
        </div>  
      </footer>
    </div>
  )
}
