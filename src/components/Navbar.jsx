import React, { useState, useEffect } from 'react'
import { useLang, t } from '../i18n'
import './Navbar.css'

export default function Navbar() {
    const { lang, toggle } = useLang()
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const links = [
        { label: t.nav.about[lang], href: '#about', num: '01' },
        { label: t.nav.experience[lang], href: '#experience', num: '02' },
        { label: t.nav.projects[lang], href: '#projects', num: '03' },
        { label: t.nav.skills[lang], href: '#skills', num: '04' },
        { label: t.nav.contact[lang], href: '#contact', num: '05' },
    ]

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-inner">
                <a href="#" className="nav-logo">
                    <span className="logo-bracket">&lt;</span>HG<span className="logo-bracket">/&gt;</span>
                </a>

                <ul className="nav-links">
                    {links.map(l => (
                        <li key={l.href}>
                            <a href={l.href}>
                                <span className="nav-num">{l.num}.</span> {l.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="/Hakimi Genji.pdf" target="_blank" rel="noopener noreferrer" className="nav-resume">
                            {t.nav.resume[lang]}
                        </a>
                    </li>
                    <li>
                        <button className="lang-toggle" onClick={toggle} aria-label="Toggle language">
                            {lang === 'en' ? '日本語' : 'EN'}
                        </button>
                    </li>
                </ul>

                <div className="nav-right-mobile">
                    <button className="lang-toggle" onClick={toggle} aria-label="Toggle language">
                        {lang === 'en' ? '日本語' : 'EN'}
                    </button>
                    <button
                        className={`hamburger ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </div>

            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    {links.map(l => (
                        <li key={l.href}>
                            <a href={l.href} onClick={() => setMenuOpen(false)}>
                                <span className="nav-num">{l.num}.</span> {l.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="/Hakimi Genji.pdf" target="_blank" rel="noopener noreferrer" className="nav-resume">
                            {t.nav.resume[lang]}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
