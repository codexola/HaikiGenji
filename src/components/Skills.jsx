import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text3D, Center } from '@react-three/drei'
import { useLang, t } from '../i18n'
import './Skills.css'

const skillGroups = [
    {
        category: 'AI / LLM',
        color: '#64ffda',
        icon: '🤖',
        skills: [
            { name: 'OpenAI API', level: 95 },
            { name: 'Claude API', level: 92 },
            { name: 'Dify', level: 90 },
            { name: 'LangChain / RAG', level: 88 },
        ],
    },
    {
        category: 'Backend',
        color: '#7b5ea7',
        icon: '⚙️',
        skills: [
            { name: 'Python / FastAPI', level: 95 },
            { name: 'Java / Spring Boot', level: 92 },
            { name: 'C# / .NET Core', level: 88 },
            { name: 'TypeScript / Node.js', level: 85 },
        ],
    },
    {
        category: 'Frontend',
        color: '#ff6b6b',
        icon: '🖥️',
        skills: [
            { name: 'React / Next.js', level: 88 },
            { name: 'React Native', level: 85 },
            { name: 'TypeScript', level: 92 },
            { name: 'Three.js / WebGL', level: 75 },
        ],
    },
    {
        category: 'Database',
        color: '#ffd54f',
        icon: '🗄️',
        skills: [
            { name: 'PostgreSQL', level: 92 },
            { name: 'MySQL / SQL Server', level: 88 },
            { name: 'Redis', level: 85 },
            { name: 'MongoDB', level: 80 },
        ],
    },
    {
        category: 'Cloud / DevOps',
        color: '#4fc3f7',
        icon: '☁️',
        skills: [
            { name: 'AWS (ECS, RDS, S3, Lambda)', level: 90 },
            { name: 'Docker / Kubernetes', level: 88 },
            { name: 'CI/CD (GitHub Actions, Jenkins)', level: 85 },
            { name: 'GCP', level: 75 },
        ],
    },
    {
        category: 'Tools & Practices',
        color: '#a5d6a7',
        icon: '🛠️',
        skills: [
            { name: 'Git / GitHub', level: 95 },
            { name: 'Jira / Agile', level: 92 },
            { name: 'API Design / REST', level: 90 },
            { name: 'Figma / Design', level: 80 },
        ],
    },
]

function SkillBar({ name, level, color, delay }) {
    const barRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(e => {
                    if (e.isIntersecting && barRef.current) {
                        setTimeout(() => {
                            if (barRef.current) {
                                barRef.current.style.width = level + '%'
                            }
                        }, delay)
                    }
                })
            },
            { threshold: 0.5 }
        )
        if (barRef.current) observer.observe(barRef.current.parentElement)
        return () => observer.disconnect()
    }, [level, delay])

    return (
        <div className="skill-item">
            <div className="skill-info">
                <span className="skill-name">{name}</span>
                <span className="skill-level" style={{ color }}>{level}%</span>
            </div>
            <div className="skill-bar-bg">
                <div
                    ref={barRef}
                    className="skill-bar-fill"
                    style={{ '--bar-color': color, width: '0%' }}
                />
            </div>
        </div>
    )
}

function FloatingOrb({ position, color }) {
    const meshRef = useRef()
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
        }
    })
    return (
        <mesh ref={meshRef} position={position}>
            <icosahedronGeometry args={[0.4, 1]} />
            <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} wireframe />
        </mesh>
    )
}

export default function Skills() {
    const { lang } = useLang()
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
            { threshold: 0.05 }
        )
        sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <section className="skills" id="skills" ref={sectionRef}>
            <div className="skills-bg-canvas">
                <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                    <ambientLight intensity={0.2} />
                    <pointLight position={[5, 5, 5]} intensity={1} color="#64ffda" />
                    <pointLight position={[-5, -5, -5]} intensity={0.5} color="#7b5ea7" />
                    <FloatingOrb position={[-4, 1, 0]} color="#64ffda" />
                    <FloatingOrb position={[4, -1, -1]} color="#7b5ea7" />
                    <FloatingOrb position={[0, 2, -2]} color="#ff6b6b" />
                    <FloatingOrb position={[-2, -2, 1]} color="#ffd54f" />
                </Canvas>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="section-title reveal" data-num="04.">{t.skills.title[lang]}</h2>

                <div className="skills-grid">
                    {skillGroups.map((group, gi) => (
                        <div key={group.category} className="skill-group reveal" style={{ transitionDelay: `${gi * 0.1}s` }}>
                            <div className="group-header">
                                <span className="group-icon">{group.icon}</span>
                                <h3 className="group-title" style={{ color: group.color }}>{group.category}</h3>
                            </div>
                            <div className="group-skills">
                                {group.skills.map((skill, si) => (
                                    <SkillBar
                                        key={skill.name}
                                        name={skill.name}
                                        level={skill.level}
                                        color={group.color}
                                        delay={gi * 100 + si * 80}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills-extra reveal">
                    <h3 className="extra-title">Also experienced with</h3>
                    <div className="extra-tags">
                        {['Prompt Engineering', 'RAG Systems', 'Microservices', 'GraphQL', 'REST API', 'JWT / OAuth2', 
                            'Stripe', 'RabbitMQ', 'Kafka', 'Entity Framework', 'Hibernate', 'WebSocket', 'Redis', 'Nginx', 'Linux',
                            'Agile / Scrum', 'PM / PL', 'Team Leadership', 'Customer Engagement'].map(tag => (
                                <span key={tag} className="extra-tag">{tag}</span>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
