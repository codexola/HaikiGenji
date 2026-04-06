import React, { useState, useRef, useEffect } from 'react'
import { useLang, t } from '../i18n'
import { pastProjects } from './ExperienceComponent'
import './Experience.css'

const experiences = {
    en: [
        {
            company: 'Freelance',
            role: 'Full-Stack Engineer',
            period: 'Mar 2025 – Present',
            location: 'Remote',
            color: '#64ffda',
            projects: [
                {
                    name: 'Clinic Booking + EMR Integration',
                    period: 'Mar – Jun 2025',
                    tech: ['C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'React Native', 'AWS S3', 'JWT'],
                    points: [
                        'Built REST API with C# / ASP.NET Core for medical appointment and EMR system',
                        'Implemented JWT-based auth and AWS S3 integration for medical records',
                        'Reduced booking processing time by 30% and input errors by 20%',
                        'Cleared all information security requirements for healthcare systems',
                    ],
                },
                {
                    name: 'EC Mobile App Template',
                    period: 'Jul – Sep 2025',
                    tech: ['React Native', 'Flutter', 'TypeScript', 'MongoDB', 'Stripe', 'Docker'],
                    points: [
                        'Built headless e-commerce storefront with Payload CMS backend',
                        'Implemented Stripe payment processing and multi-language support',
                        'Optimized for App Store submission with performance tuning',
                        'Reduced EC launch initial effort significantly via reusable templates',
                    ],
                },
            ],
        },
        {
            company: 'Scoville Inc.',
            role: 'Mobile & Backend Engineer',
            period: 'May 2023 – Jul 2025',
            location: 'Japan',
            color: '#7b5ea7',
            projects: [
                {
                    name: 'Travel Booking Platform',
                    period: 'Mar – Nov 2023',
                    tech: ['TypeScript', 'React Native', 'Java', 'Spring Boot', 'GraphQL', 'GCP'],
                    points: [
                        'Built iOS/Android mobile app for tour, hotel, and package booking',
                        'Designed Spring Boot REST APIs with GraphQL for type-safe frontend integration',
                        'Achieved API response time under 100ms under large-scale traffic',
                        'Contributed to UI/UX consistency and maintainability improvements',
                    ],
                },
                {
                    name: 'AI Shift Optimization — Kokonobi',
                    period: 'Jan – Jul 2024',
                    tech: ['TypeScript', 'React Native', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
                    points: [
                        'Added AI-powered auto-scheduling to nursing staff management app',
                        'Implemented drag-and-drop mobile UI with preview functionality',
                        'Reduced shift creation time by 20%; internal satisfaction score 88%',
                        'Reduced input errors by 12% via A/B tested UX improvements',
                    ],
                },
                {
                    name: 'B2B SaaS Platform Migration',
                    period: 'Aug 2024 – Feb 2025',
                    tech: ['C#', '.NET Core', 'Entity Framework', 'Docker', 'Kubernetes', 'AWS'],
                    points: [
                        'Migrated on-premise system to microservices with C# / .NET Core',
                        'Containerized services with Docker / Kubernetes for scalability',
                        'Achieved zero downtime post-migration; reduced ops cost by 20%',
                        'Client satisfaction exceeded 90% post-launch',
                    ],
                },
            ],
        },
        {
            company: 'RedSquare Technologies',
            role: 'Mobile Engineer / Backend Integration',
            period: 'May 2019 – Jan 2023',
            location: 'Malaysia',
            color: '#ff6b6b',
            projects: [
                {
                    name: 'E-Wallet Custom Solution',
                    period: '2019 – 2023',
                    tech: ['React Native', 'TypeScript', 'Java', 'Spring Boot', 'Ethers.js', 'MetaMask'],
                    points: [
                        'Built MetaMask integration and transaction signing UI with React Native + Ethers.js',
                        'Optimized async payment processing with Java / Spring Boot backend',
                        'Improved user engagement by ~35% through UI/UX redesign',
                        'Authored detailed design docs and API specifications',
                    ],
                },
            ],
        },
    ],
    ja: [
        {
            company: 'フリーランス',
            role: 'フルスタックエンジニア',
            period: '2025年3月 – 現在',
            location: 'リモート',
            color: '#64ffda',
            projects: [
                {
                    name: 'クリニック予約 + EMR連携',
                    period: '2025年3月 – 6月',
                    tech: ['C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'React Native', 'AWS S3', 'JWT'],
                    points: [
                        'C# / ASP.NET Coreで医療予約・EMRシステム向けREST APIを構築',
                        'JWTベース認証とAWS S3による医療記録管理を実装',
                        '予約処理時間を30%、入力エラーを20%削減',
                        '医療系情報セキュリティ要件をすべてクリア',
                    ],
                },
                {
                    name: 'ECモバイルアプリテンプレート',
                    period: '2025年7月 – 9月',
                    tech: ['React Native', 'Flutter', 'TypeScript', 'MongoDB', 'Stripe', 'Docker'],
                    points: [
                        'Payload CMSバックエンドを用いたヘッドレスECストアフロントを構築',
                        'Stripe決済処理と多言語対応を実装',
                        'パフォーマンスチューニングによりApp Store審査基準を満たす最適化を実施',
                        '再利用可能なテンプレートによりECローンチの初期工数を大幅削減',
                    ],
                },
            ],
        },
        {
            company: 'スコービル株式会社',
            role: 'モバイル・バックエンドエンジニア',
            period: '2023年5月 – 2025年7月',
            location: '日本',
            color: '#7b5ea7',
            projects: [
                {
                    name: '旅行予約プラットフォーム',
                    period: '2023年3月 – 11月',
                    tech: ['TypeScript', 'React Native', 'Java', 'Spring Boot', 'GraphQL', 'GCP'],
                    points: [
                        'ツアー・ホテル・パッケージ予約向けiOS/Androidアプリを開発',
                        'GraphQLを活用したSpring Boot REST APIを設計し、型安全なフロントエンド連携を実現',
                        '大規模トラフィック下でAPIレスポンスタイム100ms以下を達成',
                        'UI/UXの一貫性と保守性の向上に貢献',
                    ],
                },
                {
                    name: 'AIシフト最適化 — ここのび',
                    period: '2024年1月 – 7月',
                    tech: ['TypeScript', 'React Native', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
                    points: [
                        '看護スタッフ管理アプリにAI自動スケジューリング機能を追加',
                        'プレビュー機能付きドラッグ&ドロップモバイルUIを実装',
                        'シフト作成時間を20%短縮、社内満足度スコア88%を達成',
                        'A/BテストによるUX改善で入力エラーを12%削減',
                    ],
                },
                {
                    name: 'B2B SaaSプラットフォーム移行',
                    period: '2024年8月 – 2025年2月',
                    tech: ['C#', '.NET Core', 'Entity Framework', 'Docker', 'Kubernetes', 'AWS'],
                    points: [
                        'オンプレミスシステムをC# / .NET Coreマイクロサービスへ移行',
                        'Docker / Kubernetesでサービスをコンテナ化しスケーラビリティを確保',
                        'ゼロダウンタイムで移行完了、運用コストを20%削減',
                        'リリース後のクライアント満足度90%超を達成',
                    ],
                },
            ],
        },
        {
            company: 'RedSquare Technologies',
            role: 'モバイルエンジニア / バックエンド連携',
            period: '2019年5月 – 2023年1月',
            location: 'マレーシア',
            color: '#ff6b6b',
            projects: [
                {
                    name: 'カスタムEウォレットソリューション',
                    period: '2019年 – 2023年',
                    tech: ['React Native', 'TypeScript', 'Java', 'Spring Boot', 'Ethers.js', 'MetaMask'],
                    points: [
                        'React Native + Ethers.jsでMetaMask連携とトランザクション署名UIを構築',
                        'Java / Spring Bootバックエンドで非同期決済処理を最適化',
                        'UI/UXリデザインによりユーザーエンゲージメントを約35%向上',
                        '詳細な設計書とAPI仕様書を作成',
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
