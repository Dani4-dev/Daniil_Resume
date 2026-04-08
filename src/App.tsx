import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Background } from './components/Background';
import { ScrollToTop } from './components/ScrollToTop';
import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Projects } from './sections/Projects';
import { Certifications } from './sections/Certifications';
import { Hobbies } from './sections/Hobbies';
import { SelfPromotion } from './sections/SelfPromotion';
import './App.css'

function App() {
  return (
    <div id="top" className="flex flex-col min-h-screen relative selection:bg-(--accent)/30">
      <Background />
      <Navbar />

      <main className="flex-1 flex flex-col items-center py-12 md:py-16 px-6 text-center w-full relative z-10">
        <div className="max-w-3xl w-full flex flex-col gap-16 md:gap-20 animate-in fade-in duration-700">
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Certifications />
          <Projects />
          <Hobbies />
          <SelfPromotion />
        </div>
      </main>

    <Footer />
    <ScrollToTop />
    </div>
  )
}

export default App
