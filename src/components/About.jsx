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
                                ? <>I'm a senior full-stack engineer with <span className="accent">8+ years of experience</span> in AI systems, Web development, and Cloud architecture. My journey spans from requirement definition through design, development, and production deployment — with a strong focus on business value and operational excellence.</>
                                : <>AI・Web・クラウド開発に<span className="accent">8年以上</span>の経験を持つシニアエンジニアです。要件定義からデザイン・開発・本番運用まで一貫して担当し、ビジネス価値と運用品質を重視します。</>
                            }
                        </p>
                        <p className="reveal">
                            {lang === 'en'
                                ? <>My core expertise lies in <span className="accent">Python/FastAPI</span> backend development, <span className="accent">AI/LLM integration</span> (OpenAI, Claude, Dify), and <span className="accent">AWS</span> cloud architecture. I've led AI projects that achieved <span className="accent">60% reduction in inquiry workload</span> and shipped products across healthcare, fintech, and business automation domains.</>
                                : <>Python・FastAPI によるバックエンド開発、<span className="accent">OpenAI・Claude・Dify</span> を活用した AI/LLM 統合、<span className="accent">AWS</span> クラウドアーキテクチャが得意です。問い合わせ工数 <span className="accent">60% 削減</span>を実現した AI プロジェクトをリードし、医療・フィンテック・業務自動化分野で多数のプロダクトをリリースしてきました。</>
                            }
                        </p>
                        <p className="reveal">
                            {lang === 'en'
                                ? "I thrive in agile environments, excel at translating business challenges into technical solutions, and care deeply about code quality and team collaboration. Whether it's designing RAG systems, optimizing database queries, or mentoring junior engineers — I bring the same level of precision to every aspect of development."
                                : 'アジャイル環境でのチーム開発が得意で、ビジネス課題を技術で解決することにこだわります。RAG システム設計、DB 最適化、後進エンジニアのメンタリングまで、開発のあらゆる側面に同じ精度で取り組みます。'
                            }
                        </p>
                        <div className="about-highlights reveal">
                            <div className="highlight-item">
                                <span className="highlight-num">8+</span>
                                <span className="highlight-label">{t.about.years[lang]}</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-num">20+</span>
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
                            <span className="badge">Python Expert</span>
                            <span className="badge">AI/LLM Specialist</span>
                            <span className="badge">AWS Certified</span>
                            <span className="badge">JLPT N2</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
