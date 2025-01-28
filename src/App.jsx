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
      <section className='grid lg:grid-cols-4 grid-cols-1 lg:gap-2'>
        <div className='lg:col-span-1 lg:border-r  text-center border-gray-200  py-6 px-2'>
          <section id='information'>
            <PersonalInfo />
          </section>
          <section className='skills group my-8 p-3 bg-gray-50 shadow-lg rounded border border-gray-200/80'>
            <Skills />
          </section>
        </div>
        <div className="col-span-3 p-2">
          <section className='about my-8'>
            <About />
          </section>

          <section className="experience my-8">
            <Experience />
          </section>
          <section className="experience my-8">
            <Project />
          </section>
        </div>
      </section>
    </>
  )
}

export default App
