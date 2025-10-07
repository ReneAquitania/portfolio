import './App.css'
import './sections/Header'
import Header from './sections/Header'
import AboutMe from './sections/AboutMe'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import { useRef } from 'react'
import { useIsVisible } from './shared/hooks/useIsVisible'



function App() {
  const aboutMeRef = useRef<HTMLDivElement | null>(null)
  const isAboutMeVisible = useIsVisible(aboutMeRef)

  const experienceRef = useRef<HTMLDivElement | null>(null)
  const isExperienceVisible = useIsVisible(experienceRef)

  const projectsRef = useRef<HTMLDivElement | null>(null)
  const isProjectsVisible = useIsVisible(projectsRef)

  const contactRef = useRef<HTMLDivElement | null>(null)
  const isContactVisible = useIsVisible(contactRef)

  return (
    <div className="w-screen justify-start scroll-smooth">
      <Header aboutMeRef={aboutMeRef} experienceRef={experienceRef} projectsRef={projectsRef} contactRef={contactRef} />
      {/* Content */}
      <div className="grid bg-gradient-to-b from-violet-600 via-blue-900 to-teal-950">
        <div className="bg-[url(./src/assets/grain.png)] w-full col-start-1 row-start-1 opacity-8 z-100 pointer-events-none"></div>
        <div className="col-start-1 row-start-1 p-4 md:p-12 overflow-hidden">
          <AboutMe ref={aboutMeRef} isVisible={isAboutMeVisible}/>
          <Experience ref={experienceRef} isVisible={isExperienceVisible}/>
          <Projects ref={projectsRef} isVisible={isProjectsVisible}/>
          <Contact ref={contactRef} isVisible={isContactVisible}/>
        </div>
      </div>
    </div>
  )
}

export default App
