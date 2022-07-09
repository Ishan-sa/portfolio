import Head from 'next/head';
import { Navbar } from '../components/Navbar.jsx';
import { First } from '../components/Intro.jsx';
import { About } from '../components/About.jsx';
import { Skills } from '../components/Skills.jsx';
import { Projects } from '../components/Projects.jsx';
import { Contact } from '../components/Contact.jsx';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ishan | Front-End Developer</title>
        <meta name="description" content="Developed by- Ishan Sachdeva" />
        <link rel="icon" href="/Icon.svg" />
      </Head>

      <Navbar />
      <First />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
