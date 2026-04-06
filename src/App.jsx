import React, { useState, useEffect } from 'react'
import { LangProvider } from './i18n'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import './App.css'

export default function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2800)
        return () => clearTimeout(timer)
    }, [])

    if (loading) return <Loader />

    return (
        <LangProvider>
            <div className="app">
                <Cursor />
                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <Experience />
                    <Projects />
                    <Skills />
                    <Contact />
                </main>
                <Footer />
            </div>
        </LangProvider>
    )
}
