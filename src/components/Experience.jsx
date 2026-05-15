import React, { useState, useRef, useEffect } from 'react'
import { useLang, t } from '../i18n'
import { pastProjects } from './ExperienceComponent'
import './Experience.css'

const experiences = {
    en: [
        {
            company: 'Freelance',
            role: 'Senior AI Engineer',
            period: 'Mar 2024 – Sep 2025',
            location: 'Remote',
            color: '#64ffda',
            projects: [
                {
                    name: 'AI Agent Business Support App (Dify)',
                    period: 'Mar 2024 – Sep 2025',
                    tech: ['Python', 'FastAPI', 'Dify', 'OpenAI API', 'Claude API', 'AWS ECS', 'RDS', 'S3', 'PostgreSQL'],
                    points: [
                        'Designed and built AI agent system to automate internal inquiries, business procedures, and FAQ responses',
                        'Implemented RAG system for internal document search with LLM integration',
                        'Developed FastAPI management APIs for system administration and monitoring',
                        'Achieved 60% reduction in inquiry workload; led 3-person team from PoC to production',
                        'Deployed on AWS ECS with RDS + S3 infrastructure; managed customer engagement and requirements',
                    ],
                },
            ],
        },
        {
            company: 'Scoville Inc.',
            role: 'Full-Stack Engineer',
            period: 'May 2023 – Feb 2024',
            location: 'Japan',
            color: '#7b5ea7',
            projects: [
                {
                    name: 'AI Shift Optimization System (Nursing)',
                    period: 'May 2023 – Feb 2024',
                    tech: ['Python', 'FastAPI', 'React Native', 'PostgreSQL', 'Docker', 'AWS'],
                    points: [
                        'Built AI-powered shift generation system considering nursing constraints (qualifications, staffing, preferences)',
                        'Implemented FastAPI backend and React Native mobile UI with drag-and-drop scheduling',
                        'Reduced shift creation time by 20%; achieved 88% facility satisfaction rate',
                        'Served as PM/Full-Stack Engineer; managed customer requirements and technical implementation',
                    ],
                },
                {
                    name: 'B2B SaaS Platform (Microservices)',
                    period: 'May 2023 – Feb 2024',
                    tech: ['C#', '.NET Core', 'AWS', 'Docker', 'Kubernetes'],
                    points: [
                        'Designed microservices architecture and migrated legacy system to cloud',
                        'Implemented API development and cloud infrastructure migration',
                        'Supported PM/PL responsibilities for project coordination',
                    ],
                },
            ],
        },
        {
            company: 'RedSquare Technologies',
            role: 'Senior Engineer (Payment Systems)',
            period: 'Feb 2020 – Jan 2023',
            location: 'Singapore',
            color: '#ff6b6b',
            projects: [
                {
                    name: 'Shopee E-Wallet Payment System',
                    period: 'Feb 2020 – Jan 2023',
                    tech: ['Python', 'Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'RabbitMQ', 'AWS'],
                    points: [
                        'Developed payment APIs and transaction monitoring for Southeast Asian e-wallet platform',
                        'Implemented Python batch processing and Java Spring Boot API integration',
                        'Optimized high-load system: improved response time by 35%, reduced incident count',
                        'Managed transaction integrity and monitoring features for payment reliability',
                    ],
                },
            ],
        },
    ],
    ja: [
        {
            company: 'フリーランス',
            role: 'シニア AI エンジニア',
            period: '2024年3月 – 2025年9月',
            location: 'リモート',
            color: '#64ffda',
            projects: [
                {
                    name: 'AI エージェント業務支援アプリ開発（Dify）',
                    period: '2024年3月 – 2025年9月',
                    tech: ['Python', 'FastAPI', 'Dify', 'OpenAI API', 'Claude API', 'AWS ECS', 'RDS', 'S3', 'PostgreSQL'],
                    points: [
                        '社内問い合わせ・業務手順・FAQ対応を自動化するAIエージェントシステムを設計・構築',
                        '社内文書検索向けRAGシステムとLLM連携を実装',
                        'FastAPIによる管理API開発とシステム監視機能を実装',
                        '問い合わせ工数60%削減を実現、3名チームをPoC から本番導入まで推進',
                        'AWS ECS + RDS + S3 環境構築、顧客折衝・要件定義を担当',
                    ],
                },
            ],
        },
        {
            company: 'スコービル株式会社',
            role: 'フルスタックエンジニア',
            period: '2023年5月 – 2024年2月',
            location: '日本',
            color: '#7b5ea7',
            projects: [
                {
                    name: '看護向け AI シフト最適化システム',
                    period: '2023年5月 – 2024年2月',
                    tech: ['Python', 'FastAPI', 'React Native', 'PostgreSQL', 'Docker', 'AWS'],
                    points: [
                        '看護現場の勤務条件・資格・人数制約を考慮したAI自動シフト生成システムを構築',
                        'FastAPI バックエンドと React Native モバイルUIでドラッグ&ドロップスケジューリングを実装',
                        'シフト作成時間を20%短縮、導入施設満足度88%を達成',
                        'PM/フルスタックエンジニアとして顧客ヒアリング・要件定義・技術実装を担当',
                    ],
                },
                {
                    name: 'B2B SaaS プラットフォーム（マイクロサービス化）',
                    period: '2023年5月 – 2024年2月',
                    tech: ['C#', '.NET Core', 'AWS', 'Docker', 'Kubernetes'],
                    points: [
                        'マイクロサービスアーキテクチャを設計し、レガシーシステムをクラウド移行',
                        'API開発とクラウドインフラ移行を実装',
                        'PM/PL補佐としてプロジェクト推進を支援',
                    ],
                },
            ],
        },
        {
            company: 'RedSquare Technologies',
            role: 'シニアエンジニア（決済システム）',
            period: '2020年2月 – 2023年1月',
            location: 'シンガポール',
            color: '#ff6b6b',
            projects: [
                {
                    name: 'Shopee系 E-Wallet 決済システム開発',
                    period: '2020年2月 – 2023年1月',
                    tech: ['Python', 'Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'RabbitMQ', 'AWS'],
                    points: [
                        '東南アジア向け電子決済プラットフォーム向けの決済API・トランザクション監視機能を開発',
                        'Python バッチ処理と Java Spring Boot API連携を実装',
                        '高負荷システムの最適化：レスポンス時間35%改善、障害件数削減を実現',
                        'トランザクション整合性と監視機能で決済信頼性を確保',
                    ],
                },
            ],
        },
    ],
}

function PastProjectsSection({ lang }) {
    const [openCat, setOpenCat] = useState(null)
    const data = pastProjects[lang]
    const heading = lang === 'en' ? 'Past Project Portfolio' : '過去のプロジェクト一覧'
    return (
        <div className="past-projects">
            <h3 className="past-projects-title">{heading}</h3>
            <div className="past-cats">
                {data.map((cat) => (
                    <div key={cat.category} className="past-cat">
                        <button
                            className={`past-cat-btn ${openCat === cat.category ? 'open' : ''}`}
                            style={{ '--cat-color': cat.color }}
                            onClick={() => setOpenCat(openCat === cat.category ? null : cat.category)}
                        >
                            <span>{cat.icon} {cat.category}</span>
                            <span className="past-cat-count">{cat.items.length}</span>
                            <svg className="past-cat-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>
                        {openCat === cat.category && (
                            <ul className="past-items">
                                {cat.items.map((item) => (
                                    <li key={item.url} className="past-item">
                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="past-item-link">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
                                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                                                <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                            {item.name}
                                        </a>
                                        {item.note && <span className="past-item-note">{item.note}</span>}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function Experience() {
    const { lang } = useLang()
    const [active, setActive] = useState(0)
    const [activeProject, setActiveProject] = useState(0)
    const sectionRef = useRef(null)
    const exps = experiences[lang]

    useEffect(() => { setActiveProject(0) }, [active, lang])

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
            { threshold: 0.1 }
        )
        sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    const exp = exps[active]

    return (
        <section className="experience" id="experience" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title reveal" data-num="02.">{t.experience.title[lang]}</h2>
                <div className="exp-layout">
                    <div className="exp-tabs reveal">
                        {exps.map((e, i) => (
                            <button
                                key={e.company}
                                className={`exp-tab ${active === i ? 'active' : ''}`}
                                onClick={() => setActive(i)}
                                style={{ '--tab-color': e.color }}
                            >
                                <span className="tab-company">{e.company}</span>
                                <span className="tab-period">{e.period}</span>
                            </button>
                        ))}
                    </div>

                    <div className="exp-content reveal">
                        <div className="exp-header">
                            <div>
                                <h3 className="exp-role">{exp.role}</h3>
                                <p className="exp-company-name" style={{ color: exp.color }}>@ {exp.company}</p>
                                <p className="exp-meta">{exp.period} · {exp.location}</p>
                            </div>
                        </div>

                        {exp.projects.length > 1 && (
                            <div className="project-tabs">
                                {exp.projects.map((p, i) => (
                                    <button
                                        key={p.name}
                                        className={`project-tab ${activeProject === i ? 'active' : ''}`}
                                        onClick={() => setActiveProject(i)}
                                    >
                                        {p.name}
                                    </button>
                                ))}
                            </div>
                        )}

                        <div className="exp-project">
                            <div className="project-header">
                                <h4 className="project-name">{exp.projects[activeProject].name}</h4>
                                <span className="project-period">{exp.projects[activeProject].period}</span>
                            </div>
                            <ul className="exp-points">
                                {exp.projects[activeProject].points.map((pt, i) => (
                                    <li key={i}><span className="point-arrow">&#9657;</span>{pt}</li>
                                ))}
                            </ul>
                            <div className="exp-tech">
                                {exp.projects[activeProject].tech.map(tk => (
                                    <span key={tk} className="tech-tag">{tk}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="reveal">
                    <PastProjectsSection lang={lang} />
                </div>
            </div>
        </section>
    )
}
