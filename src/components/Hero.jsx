import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Float, MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'
import { useLang, t } from '../i18n'
import './Hero.css'

function FloatingSphere({ position, color, speed, distort, scale }) {
    const meshRef = useRef()
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3
            meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5
        }
    })
    return (
        <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.8}>
            <Sphere ref={meshRef} args={[1, 64, 64]} scale={scale} position={position}>
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={distort}
                    speed={2}
                    roughness={0.1}
                    metalness={0.8}
                    transparent
                    opacity={0.7}
                />
            </Sphere>
        </Float>
    )
}

function ParticleField() {
    const pointsRef = useRef()
    const count = 2000
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 30
        positions[i * 3 + 1] = (Math.random() - 0.5) * 30
        positions[i * 3 + 2] = (Math.random() - 0.5) * 30
    }
    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
            pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01
        }
    })
    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.04} color="#64ffda" transparent opacity={0.6} sizeAttenuation />
        </points>
    )
}

function TorusKnot() {
    const meshRef = useRef()
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.15
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
        }
    })
    return (
        <Float speed={1.5} floatIntensity={0.5}>
            <mesh ref={meshRef} position={[3.5, 0, -2]}>
                <torusKnotGeometry args={[0.8, 0.25, 128, 16]} />
                <meshStandardMaterial color="#7b5ea7" metalness={0.9} roughness={0.1} emissive="#3d2d6e" emissiveIntensity={0.3} />
            </mesh>
        </Float>
    )
}

export default function Hero() {
    const { lang } = useLang()
    const roles = t.hero.roles[lang]
    const [roleIndex, setRoleIndex] = useState(0)
    const [displayed, setDisplayed] = useState('')
    const [typing, setTyping] = useState(true)

    useEffect(() => {
        setDisplayed('')
        setTyping(true)
    }, [lang])

    useEffect(() => {
        const current = roles[roleIndex % roles.length]
        let i = typing ? 0 : current.length
        const interval = setInterval(() => {
            if (typing) {
                i++
                setDisplayed(current.slice(0, i))
                if (i >= current.length) { clearInterval(interval); setTimeout(() => setTyping(false), 2000) }
            } else {
                i--
                setDisplayed(current.slice(0, i))
                if (i <= 0) { clearInterval(interval); setRoleIndex(prev => (prev + 1) % roles.length); setTyping(true) }
            }
        }, typing ? 80 : 40)
        return () => clearInterval(interval)
    }, [roleIndex, typing, lang])

    return (
        <section className="hero" id="home">
            {/* Avatar Banner with Cat Developer */}
            <div className="hero-avatar-banner">
                <div className="avatar-banner-content">
                    <div className="avatar-section">
                        <img
                            src="https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=400&fit=crop"
                            alt="Developer Cat Avatar"
                            className="avatar-cat"
                        />
                        <span className="avatar-label">Code is my superpower 💻</span>
                    </div>
                    <div className="banner-divider" />
                    <div className="tech-section">
                        <img
                            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop"
                            alt="Programming Languages"
                            className="tech-banner"
                        />
                        <span className="tech-label">技術で未来を創る — Creating Future with Technology</span>
                    </div>
                </div>
            </div>

            <div className="hero-canvas">
                <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                    <ambientLight intensity={0.3} />
                    <pointLight position={[10, 10, 10]} intensity={1.5} color="#64ffda" />
                    <pointLight position={[-10, -10, -10]} intensity={0.8} color="#7b5ea7" />
                    <pointLight position={[0, 10, -5]} intensity={0.5} color="#ff6b6b" />
                    <Stars radius={80} depth={50} count={3000} factor={3} saturation={0} fade speed={1} />
                    <ParticleField />
                    <FloatingSphere position={[-3.5, 1, -1]} color="#64ffda" speed={1.2} distort={0.4} scale={1.2} />
                    <FloatingSphere position={[4, -1.5, -3]} color="#7b5ea7" speed={0.8} distort={0.6} scale={0.9} />
                    <FloatingSphere position={[-1, -2.5, -2]} color="#ff6b6b" speed={1.5} distort={0.3} scale={0.6} />
                    <TorusKnot />
                </Canvas>
            </div>

            <div className="hero-content container">
                <div className="hero-text">
                    <p className="hero-greeting">{t.hero.greeting[lang]}</p>
                    <h1 className="hero-name">Ryuko Tokunaga.</h1>
                    <h2 className="hero-role">
                        <span className="typed">{displayed}</span>
                        <span className="cursor-blink">|</span>
                    </h2>
                    <p className="hero-desc">
                        {t.hero.desc[lang]}
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="btn-primary">
                            {t.hero.viewWork[lang]}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#contact" className="btn-ghost">{t.hero.getInTouch[lang]}</a>
                    </div>
                    <div className="hero-socials">
                        <a href="https://github.com/crystal70916" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>
                        <a href="mailto:toms90305@gmail.com" aria-label="Email">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="hero-scroll">
                <div className="scroll-line" />
                <span>scroll</span>
            </div>
        </section>
    )
}
