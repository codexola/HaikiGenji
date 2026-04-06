import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei'
import { useLang, t } from '../i18n'
import './About.css'

function AnimatedSphere() {
    const meshRef = useRef()
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
        }
    })
    return (
        <Float speed={2} floatIntensity={1}>
            <Sphere ref={meshRef} args={[1.5, 64, 64]}>
                <MeshDistortMaterial
                    color="#64ffda"
                    distort={0.5}
                    speed={2}
                    roughness={0.1}
                    metalness={0.8}
                    transparent
                    opacity={0.15}
                    wireframe
                />
            </Sphere>
            <Sphere args={[1.2, 32, 32]}>
                <MeshDistortMaterial
                    color="#7b5ea7"
                    distort={0.3}
                    speed={1.5}
                    roughness={0.2}
                    metalness={0.9}
                    transparent
                    opacity={0.4}
                />
            </Sphere>
        </Float>
    )
}

export default function About() {
    const { lang } = useLang()
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1 }
        )
        const elements = sectionRef.current?.querySelectorAll('.reveal')
        elements?.forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <section className="about" id="about" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title" data-num="01.">{t.about.title[lang]}</h2>
                <div className="about-grid">
                    <div className="about-text">
                        <p className="reveal">
                            {lang === 'en'
                                ? <>I'm a full-stack engineer with over <span className="accent">7 years of experience</span> building mobile and web applications from the ground up. My journey spans from requirement definition through design, development, and deployment — with a strong focus on code quality and long-term maintainability.</>
                                : <>要件定義からデザイン・開発・デプロイまで一貫して担当するフルスタックエンジニアです。コード品質と長期的な保守性を重視し、<span className="accent">7年以上</span>の実務経験を持ちます。</>
                            }
                        </p>
                        <p className="reveal">
                            {lang === 'en'
                                ? <>My core expertise lies in <span className="accent">Java</span> and <span className="accent">C#</span> backend development, paired with <span className="accent">React Native</span> for cross-platform mobile apps. I've shipped products used by thousands of users across fitness, healthcare, e-commerce, and fintech domains.</>
                                : <>バックエンドは<span className="accent">Java</span>・<span className="accent">C#</span>を中心に、<span className="accent">React Native</span>によるクロスプラットフォームアプリ開発が得意です。フィットネス・医療・EC・フィンテック分野で多数のプロダクトをリリースしてきました。</>
                            }
                        </p>
                        <p className="reveal">
                            {lang === 'en'
                                ? "I thrive in agile environments, love clean architecture, and care deeply about the user experience. Whether it's optimizing API response times to under 100ms or crafting smooth mobile animations — I bring the same level of precision to every layer of the stack."
                                : 'アジャイル環境でのチーム開発が得意で、クリーンアーキテクチャとUXにこだわります。APIレスポンスの100ms以下最適化からスムーズなモバイルアニメーションまで、スタック全体に同じ精度で取り組みます。'
                            }
                        </p>
                        <div className="about-highlights reveal">
                            <div className="highlight-item">
                                <span className="highlight-num">7+</span>
                                <span className="highlight-label">{t.about.years[lang]}</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-num">15+</span>
                                <span className="highlight-label">{t.about.projects[lang]}</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-num">3</span>
                                <span className="highlight-label">{t.about.companies[lang]}</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-num">N2</span>
                                <span className="highlight-label">{t.about.jlpt[lang]}</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-visual reveal">
                        <div className="about-canvas-wrap">
                            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                                <ambientLight intensity={0.5} />
                                <pointLight position={[5, 5, 5]} intensity={2} color="#64ffda" />
                                <pointLight position={[-5, -5, -5]} intensity={1} color="#7b5ea7" />
                                <AnimatedSphere />
                            </Canvas>
                        </div>
                        <div className="about-badges">
                            <span className="badge">Java Gold SE 11</span>
                            <span className="badge">JLPT N2</span>
                            <span className="badge">基本情報技術者</span>
                            <span className="badge">B.Sc. Computer Science</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
