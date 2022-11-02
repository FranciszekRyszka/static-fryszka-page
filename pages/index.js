import Head from 'next/head';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { BsFillMoonStarsFill} from 'react-icons/bs'
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>FRyszka</title>
        <meta name="description" content="Franciszek Ryszka - my portfolio" />
        <meta name="keywords" content="porfolio,webdev,javascipt,nextjs,tailwind" />
        <meta name="author" content="Franciszek Ryszka" />
      </Head>

      <main className="bg-gray-100 px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white scroll-smooth">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-2xl font-firacode select-none">FRDev</h1>
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
            <h2 className="text-5xl py-2 font-medium md:text-6xl"></h2>
          </div>
        </section> 
      </main>
      <footer>
        <div className="bg-gray-100 dark:bg-gray-900">
          <h1 className="text-center dark:text-white/80">Footer test</h1>
        </div>  
      </footer>
    </div>
  )
}
