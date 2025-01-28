import { useState } from 'react'
import './App.css'
import PersonalInfo from './Components/PersonalInfo'
import Skills from './Components/Competence'
import { About } from './Components/About'
import Experience from './Components/Experience'
import Project from './Components/Project'

function App() {

  return (
    <>
      <section className='lg:grid p-2 grid-cols-4 gap-4'>
        <div className='lg:col-span-1 border-r text-center border-gray-200 h-full py-6 px-2'>
          <section id='information'>
            <PersonalInfo />
          </section>
          <section className='skills group my-4 p-3 bg-gray-50 shadow-lg rounded border border-gray-200/80'>
            <Skills />
          </section>
        </div>
        <div className="lg:col-span-3 p-6">
          <section className='about my-4'>
            <About />
          </section>

          <section className="experience my-4">
            <Experience />
          </section>
          <section className="experience my-4">
            <Project />
          </section>
        </div>
      </section>
    </>
  )
}

export default App
