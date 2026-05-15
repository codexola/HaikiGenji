import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useLang, t } from '../i18n'
import './Contact.css'

function ContactOrb() {
    const meshRef = useRef()
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
            meshRef.current.rotation.z = state.clock.elapsedTime * 0.2
        }
    })
    return (
        <Float speed={1.5} floatIntensity={0.8}>
            <mesh ref={meshRef}>
                <dodecahedronGeometry args={[1.5, 0]} />
                <meshStandardMaterial
                    color="#64ffda"
                    metalness={0.9}
                    roughness={0.1}
                    wireframe
                    transparent
                    opacity={0.4}
                />
            </mesh>
            <mesh>
                <dodecahedronGeometry args={[1.2, 0]} />
                <meshStandardMaterial
                    color="#7b5ea7"
                    metalness={0.8}
                    roughness={0.2}
                    transparent
                    opacity={0.2}
                />
            </mesh>
        </Float>
    )
}

export default function Contact() {
    const { lang } = useLang()
    const sectionRef = useRef(null)
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [sent, setSent] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
            { threshold: 0.1 }
        )
        sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        // In production, connect to a form service like Formspree or EmailJS
        setSent(true)
        setTimeout(() => setSent(false), 4000)
        setForm({ name: '', email: '', message: '' })
    }

    return (
        <section className="contact" id="contact" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title reveal" data-num="05.">{t.contact.title[lang]}</h2>

                <div className="contact-grid">
                    <div className="contact-info reveal">
                        <div className="contact-canvas-wrap">
                            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                                <ambientLight intensity={0.3} />
                                <pointLight position={[5, 5, 5]} intensity={2} color="#64ffda" />
                                <pointLight position={[-5, -5, -5]} intensity={1} color="#7b5ea7" />
                                <ContactOrb />
                            </Canvas>
                        </div>

                        <div className="contact-details">
                            <h3 className="contact-heading">{t.contact.heading[lang]}</h3>
                            <p className="contact-text">{t.contact.text[lang]}</p>

                            <div className="contact-links">
                                <a href="mailto:hiroki.kodan2025@gmail.com
" className="contact-link">
                                    <div className="contact-link-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="link-label">EMAIL</span>
                                        <span className="link-value">hiroki.kodan2025@gmail.com
</span>
                                    </div>
                                </a>

                                <a href="https://github.com/crystal70916" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <div className="contact-link-icon">
                                        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="link-label">GITHUB</span>
                                        <span className="link-value">https://github.com/crystal70916</span>
                                    </div>
                                </a>

                                <a href="https://www.chatwork.com/appledev" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <div className="contact-link-icon">
                                        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l4.93-1.37A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 15H7v-2h6v2zm2-4H7v-2h8v2zm0-4H7V7h8v2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="link-label">CHATWORK</span>
                                        <span className="link-value">appledev</span>
                                    </div>
                                </a>

                                <a href="https://t.me/smose0917" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <div className="contact-link-icon">
                                        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.667l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.978.892z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="link-label">TELEGRAM</span>
                                        <span className="link-value">@smose0917</span>
                                    </div>
                                </a>

                                <a href="/職務経歴書_徳永琉孝.pdf" download className="contact-link">
                                    <div className="contact-link-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                            <polyline points="14 2 14 8 20 8" />
                                            <line x1="12" y1="18" x2="12" y2="12" />
                                            <polyline points="9 15 12 18 15 15" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="link-label">RESUME</span>
                                        <span className="link-value">{t.contact.resume[lang]}</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrap reveal">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">{t.contact.name[lang]}</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder={t.contact.namePh[lang]}
                                    value={form.name}
                                    onChange={e => setForm({ ...form, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">{t.contact.email[lang]}</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder={t.contact.emailPh[lang]}
                                    value={form.email}
                                    onChange={e => setForm({ ...form, email: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">{t.contact.message[lang]}</label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    placeholder={t.contact.messagePh[lang]}
                                    value={form.message}
                                    onChange={e => setForm({ ...form, message: e.target.value })}
                                    required
                                />
                            </div>
                            <button type="submit" className={`btn-submit ${sent ? 'sent' : ''}`}>
                                {sent ? (
                                    <>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        {t.contact.sent[lang]}
                                    </>
                                ) : (
                                    <>
                                        {t.contact.send[lang]}
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                            <line x1="22" y1="2" x2="11" y2="13" />
                                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
