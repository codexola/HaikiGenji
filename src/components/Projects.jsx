import React, { useRef, useEffect, useState } from 'react'
import { useLang, t } from '../i18n'
import './Projects.css'

const projectsData = {
    en: [
        {
            title: 'Gym Crush App',
            category: 'iOS Mobile App',
            description: 'Social fitness platform for gym enthusiasts. Features in-app purchases, smooth animations, workout sharing, and community features. Built with React Native.',
            tech: ['React Native', 'TypeScript', 'Firebase', 'In-App Purchase'],
            link: 'https://apps.apple.com/pk/app/gym-crush-app/id6471010947',
            color: '#64ffda', icon: '💪',
            stats: { users: '10K+', rating: '4.8★', platform: 'iOS' },
        },
        {
            title: 'AquaPro',
            category: 'iOS Mobile App',
            description: 'Water tracking app with Firebase integration and real-time user interactions. Features smart hydration reminders, health analytics, and HealthKit integration.',
            tech: ['React Native', 'Firebase', 'HealthKit', 'TypeScript'],
            link: 'https://apps.apple.com/us/app/aquapro/id1615343095',
            color: '#4fc3f7', icon: '💧',
            stats: { users: '5K+', rating: '4.6★', platform: 'iOS' },
        },
        {
            title: 'Peregrine',
            category: 'iOS Mobile App',
            description: 'Feature-rich iOS application with advanced navigation and real-time data processing. Optimized for performance with smooth 60fps animations throughout.',
            tech: ['React Native', 'TypeScript', 'REST API', 'Maps'],
            link: 'https://apps.apple.com/pk/app/peregrine/id6475718241',
            color: '#ab47bc', icon: '🦅',
            stats: { platform: 'iOS', type: 'Navigation' },
        },
        {
            title: 'Catch Me Coach',
            category: 'iOS Mobile App',
            description: 'Coaching and fitness tracking application with personalized workout plans, progress tracking, and coach-client communication features.',
            tech: ['React Native', 'TypeScript', 'Firebase', 'Push Notifications'],
            link: 'https://apps.apple.com/pk/app/catch-me-coach/id6737513151',
            color: '#ff7043', icon: '🏃',
            stats: { platform: 'iOS', type: 'Fitness' },
        },
        {
            title: 'Patel Films',
            category: 'iOS Mobile App',
            description: 'Entertainment and media streaming application with smooth video playback, content discovery, and user engagement features.',
            tech: ['React Native', 'Video Streaming', 'TypeScript', 'CDN'],
            link: 'https://apps.apple.com/pk/app/patel-films/id6449718401',
            color: '#ffd54f', icon: '🎬',
            stats: { platform: 'iOS', type: 'Entertainment' },
        },
        {
            title: 'American TGB',
            category: 'Web Platform',
            description: 'Full-featured web platform for American TGB brand. Responsive design, product catalog, dealer locator, and customer engagement features.',
            tech: ['React', 'TypeScript', 'REST API', 'Responsive'],
            link: 'https://www.americantgb.com/',
            color: '#ef5350', icon: '🏍️',
            stats: { type: 'Web', platform: 'Cross-platform' },
        },
        {
            title: 'Tiger Powersports',
            category: 'E-Commerce',
            description: 'Powersports e-commerce platform with product catalog, inventory management, and seamless checkout experience for ATV and powersports vehicles.',
            tech: ['React', 'Shopify', 'TypeScript', 'E-Commerce'],
            link: 'https://tigerpowersports.com/',
            color: '#ff8f00', icon: '🏎️',
            stats: { type: 'E-Commerce', platform: 'Web' },
        },
        {
            title: 'Al Bark Rent Car',
            category: 'Web Platform',
            description: 'Car rental platform with real-time availability, booking management, fleet management, and customer portal for a UAE-based rental company.',
            tech: ['React', 'TypeScript', 'Booking System', 'REST API'],
            link: 'https://www.albarkrentcar.com/',
            color: '#26a69a', icon: '🚗',
            stats: { type: 'Web', platform: 'Cross-platform' },
        },
        {
            title: 'Sensoria Fitness Store',
            category: 'E-Commerce',
            description: 'Smart fitness wearables e-commerce platform with product customization, subscription management, and IoT device integration.',
            tech: ['React', 'E-Commerce', 'IoT Integration', 'Stripe'],
            link: 'https://store.sensoriafitness.com/',
            color: '#66bb6a', icon: '⌚',
            stats: { type: 'E-Commerce', platform: 'Web' },
        },
        {
            title: 'Happn',
            category: 'Social App',
            description: 'Location-based social discovery app. Contributed to performance optimization, real-time location features, and user matching algorithms.',
            tech: ['React Native', 'Location Services', 'Real-time', 'TypeScript'],
            link: 'https://www.happn.com/',
            color: '#ec407a', icon: '❤️',
            stats: { users: '100M+', platform: 'iOS/Android' },
        },
        {
            title: 'ParkWhiz',
            category: 'iOS Mobile App',
            description: 'Parking reservation and navigation app. Integrated real-time parking availability, payment processing, and turn-by-turn navigation.',
            tech: ['React Native', 'Maps', 'Payments', 'Real-time'],
            link: 'https://www.parkwhiz.com/',
            color: '#29b6f6', icon: '🅿️',
            stats: { platform: 'iOS/Android', type: 'Utility' },
        },
        {
            title: 'BlueBite Decode',
            category: 'Web Platform',
            description: 'NFC-powered digital experience platform. Built interactive product experiences triggered by NFC tags for brand engagement and authentication.',
            tech: ['React', 'NFC', 'TypeScript', 'REST API'],
            link: 'https://www.bluebite.com/decode',
            color: '#5c6bc0', icon: '📡',
            stats: { type: 'IoT/NFC', platform: 'Web' },
        },
        {
            title: 'AI-Powered Business Solutions',
            category: 'Web Platform',
            description: 'Enterprise AI platform showcasing cutting-edge technology integration. Features AI agent systems, RAG-based document search, and intelligent automation for business process optimization.',
            tech: ['Python', 'FastAPI', 'Dify', 'OpenAI API', 'AWS', 'React'],
            link: '#',
            color: '#64ffda', icon: '🤖',
            stats: { type: 'AI/Enterprise', platform: 'Web' },
        },
        {
            title: 'Team Collaboration Hub',
            category: 'Web Platform',
            description: 'Modern workspace platform designed for distributed teams. Features real-time collaboration, project management, and seamless communication tools for remote-first organizations.',
            tech: ['React', 'TypeScript', 'WebSocket', 'Node.js'],
            link: '#',
            color: '#7b5ea7', icon: '👥',
            stats: { type: 'Collaboration', platform: 'Web' },
        },
        {
            title: 'Design System & UI Components',
            category: 'Web Platform',
            description: 'Comprehensive design system with reusable UI components, accessibility standards, and responsive design patterns. Built for scalable enterprise applications.',
            tech: ['React', 'TypeScript', 'Storybook', 'CSS-in-JS'],
            link: '#',
            color: '#ff6b6b', icon: '🎨',
            stats: { type: 'Design System', platform: 'Web' },
        },
    ],
    ja: [
        {
            title: 'Gym Crush App',
            category: 'iOSモバイルアプリ',
            description: 'ジム愛好家向けのソーシャルフィットネスプラットフォーム。アプリ内課金、スムーズなアニメーション、ワークアウト共有、コミュニティ機能を搭載。React Nativeで構築。',
            tech: ['React Native', 'TypeScript', 'Firebase', 'アプリ内課金'],
            link: 'https://apps.apple.com/pk/app/gym-crush-app/id6471010947',
            color: '#64ffda', icon: '💪',
            stats: { ユーザー数: '10K+', 評価: '4.8★', プラットフォーム: 'iOS' },
        },
        {
            title: 'AquaPro',
            category: 'iOSモバイルアプリ',
            description: 'Firebase連携とリアルタイムユーザーインタラクションを備えた水分補給トラッキングアプリ。スマートな水分補給リマインダー、健康分析、HealthKit連携を搭載。',
            tech: ['React Native', 'Firebase', 'HealthKit', 'TypeScript'],
            link: 'https://apps.apple.com/us/app/aquapro/id1615343095',
            color: '#4fc3f7', icon: '💧',
            stats: { ユーザー数: '5K+', 評価: '4.6★', プラットフォーム: 'iOS' },
        },
        {
            title: 'Peregrine',
            category: 'iOSモバイルアプリ',
            description: '高度なナビゲーションとリアルタイムデータ処理を備えた多機能iOSアプリ。60fpsのスムーズなアニメーションでパフォーマンスを最適化。',
            tech: ['React Native', 'TypeScript', 'REST API', 'マップ'],
            link: 'https://apps.apple.com/pk/app/peregrine/id6475718241',
            color: '#ab47bc', icon: '🦅',
            stats: { プラットフォーム: 'iOS', 種別: 'ナビゲーション' },
        },
        {
            title: 'Catch Me Coach',
            category: 'iOSモバイルアプリ',
            description: 'パーソナライズされたトレーニングプラン、進捗管理、コーチとクライアント間のコミュニケーション機能を備えたコーチング・フィットネストラッキングアプリ。',
            tech: ['React Native', 'TypeScript', 'Firebase', 'プッシュ通知'],
            link: 'https://apps.apple.com/pk/app/catch-me-coach/id6737513151',
            color: '#ff7043', icon: '🏃',
            stats: { プラットフォーム: 'iOS', 種別: 'フィットネス' },
        },
        {
            title: 'Patel Films',
            category: 'iOSモバイルアプリ',
            description: 'スムーズな動画再生、コンテンツ発見、ユーザーエンゲージメント機能を備えたエンターテインメント・メディアストリーミングアプリ。',
            tech: ['React Native', '動画ストリーミング', 'TypeScript', 'CDN'],
            link: 'https://apps.apple.com/pk/app/patel-films/id6449718401',
            color: '#ffd54f', icon: '🎬',
            stats: { プラットフォーム: 'iOS', 種別: 'エンタメ' },
        },
        {
            title: 'American TGB',
            category: 'Webプラットフォーム',
            description: 'American TGBブランド向けのフル機能Webプラットフォーム。レスポンシブデザイン、商品カタログ、ディーラーロケーター、顧客エンゲージメント機能を実装。',
            tech: ['React', 'TypeScript', 'REST API', 'レスポンシブ'],
            link: 'https://www.americantgb.com/',
            color: '#ef5350', icon: '🏍️',
            stats: { 種別: 'Web', プラットフォーム: 'クロスプラットフォーム' },
        },
        {
            title: 'Tiger Powersports',
            category: 'ECサイト',
            description: '商品カタログ、在庫管理、ATVおよびパワースポーツ車両のシームレスなチェックアウト体験を備えたパワースポーツECプラットフォーム。',
            tech: ['React', 'Shopify', 'TypeScript', 'EC'],
            link: 'https://tigerpowersports.com/',
            color: '#ff8f00', icon: '🏎️',
            stats: { 種別: 'EC', プラットフォーム: 'Web' },
        },
        {
            title: 'Al Bark Rent Car',
            category: 'Webプラットフォーム',
            description: 'UAE拠点のレンタカー会社向けに、リアルタイム空き状況確認、予約管理、フリート管理、顧客ポータルを備えたカーレンタルプラットフォーム。',
            tech: ['React', 'TypeScript', '予約システム', 'REST API'],
            link: 'https://www.albarkrentcar.com/',
            color: '#26a69a', icon: '🚗',
            stats: { 種別: 'Web', プラットフォーム: 'クロスプラットフォーム' },
        },
        {
            title: 'Sensoria Fitness Store',
            category: 'ECサイト',
            description: '商品カスタマイズ、サブスクリプション管理、IoTデバイス連携を備えたスマートフィットネスウェアラブルECプラットフォーム。',
            tech: ['React', 'EC', 'IoT連携', 'Stripe'],
            link: 'https://store.sensoriafitness.com/',
            color: '#66bb6a', icon: '⌚',
            stats: { 種別: 'EC', プラットフォーム: 'Web' },
        },
        {
            title: 'Happn',
            category: 'ソーシャルアプリ',
            description: '位置情報ベースのソーシャル発見アプリ。パフォーマンス最適化、リアルタイム位置情報機能、ユーザーマッチングアルゴリズムの改善に貢献。',
            tech: ['React Native', '位置情報サービス', 'リアルタイム', 'TypeScript'],
            link: 'https://www.happn.com/',
            color: '#ec407a', icon: '❤️',
            stats: { ユーザー数: '1億+', プラットフォーム: 'iOS/Android' },
        },
        {
            title: 'ParkWhiz',
            category: 'iOSモバイルアプリ',
            description: '駐車場予約・ナビゲーションアプリ。リアルタイム駐車場空き状況、決済処理、ターンバイターンナビゲーションを統合。',
            tech: ['React Native', 'マップ', '決済', 'リアルタイム'],
            link: 'https://www.parkwhiz.com/',
            color: '#29b6f6', icon: '🅿️',
            stats: { プラットフォーム: 'iOS/Android', 種別: 'ユーティリティ' },
        },
        {
            title: 'BlueBite Decode',
            category: 'Webプラットフォーム',
            description: 'NFCを活用したデジタル体験プラットフォーム。ブランドエンゲージメントと認証のためにNFCタグでトリガーされるインタラクティブな商品体験を構築。',
            tech: ['React', 'NFC', 'TypeScript', 'REST API'],
            link: 'https://www.bluebite.com/decode',
            color: '#5c6bc0', icon: '📡',
            stats: { 種別: 'IoT/NFC', プラットフォーム: 'Web' },
        },
        {
            title: 'AI駆動型ビジネスソリューション',
            category: 'Webプラットフォーム',
            description: '最先端技術統合を実現するエンタープライズAIプラットフォーム。AIエージェントシステム、RAGベースの文書検索、業務プロセス最適化のための知的自動化を搭載。',
            tech: ['Python', 'FastAPI', 'Dify', 'OpenAI API', 'AWS', 'React'],
            link: '#',
            color: '#64ffda', icon: '🤖',
            stats: { 種別: 'AI/エンタープライズ', プラットフォーム: 'Web' },
        },
        {
            title: 'チーム協業ハブ',
            category: 'Webプラットフォーム',
            description: '分散チーム向けの最新ワークスペースプラットフォーム。リアルタイム協業、プロジェクト管理、リモートファースト組織向けのシームレスなコミュニケーションツールを搭載。',
            tech: ['React', 'TypeScript', 'WebSocket', 'Node.js'],
            link: '#',
            color: '#7b5ea7', icon: '👥',
            stats: { 種別: '協業ツール', プラットフォーム: 'Web' },
        },
        {
            title: 'デザインシステム & UIコンポーネント',
            category: 'Webプラットフォーム',
            description: '再利用可能なUIコンポーネント、アクセシビリティ標準、レスポンシブデザインパターンを備えた包括的なデザインシステム。スケーラブルなエンタープライズアプリケーション向けに構築。',
            tech: ['React', 'TypeScript', 'Storybook', 'CSS-in-JS'],
            link: '#',
            color: '#ff6b6b', icon: '🎨',
            stats: { 種別: 'デザインシステム', プラットフォーム: 'Web' },
        },
    ],
}

function ProjectCard({ project, index }) {
    const cardRef = useRef(null)
    const [tilt, setTilt] = useState({ x: 0, y: 0 })
    const [hovered, setHovered] = useState(false)

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        setTilt({ x: y * 12, y: -x * 12 })
    }

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 })
        setHovered(false)
    }

    return (
        <div
            ref={cardRef}
            className={`project-card reveal`}
            style={{
                '--card-color': project.color,
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hovered ? 'translateY(-8px)' : ''}`,
                transitionDelay: `${(index % 3) * 0.1}s`,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={handleMouseLeave}
        >
            <div className="card-glow" />
            <div className="card-top">
                <div className="card-icon">{project.icon}</div>
                <div className="card-links">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Visit project">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="card-body">
                <span className="card-category">{project.category}</span>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.description}</p>
            </div>

            <div className="card-stats">
                {Object.entries(project.stats).map(([k, v]) => (
                    <span key={k} className="stat-item">
                        <span className="stat-label">{k}</span>
                        <span className="stat-value">{v}</span>
                    </span>
                ))}
            </div>

            <div className="card-tech">
                {project.tech.map(tk => (
                    <span key={tk} className="card-tech-tag">{tk}</span>
                ))}
            </div>
        </div>
    )
}

export default function Projects() {
    const { lang } = useLang()
    const sectionRef = useRef(null)
    const [filter, setFilter] = useState(t.projects.filters[lang][0])

    const categories = t.projects.filters[lang]

    useEffect(() => {
        setFilter(t.projects.filters[lang][0])
    }, [lang])

    const filterKeyMap = {
        en: { 'All': null, 'iOS Mobile App': 'iOS', 'Web Platform': 'Web', 'E-Commerce': 'EC', 'Social App': 'ソーシャル' },
        ja: { 'すべて': null, 'iOSモバイルアプリ': 'iOS', 'Webプラットフォーム': 'Web', 'ECサイト': 'EC', 'ソーシャルアプリ': 'ソーシャル' },
    }

    const activeKey = filterKeyMap[lang][filter]
    const filtered = !activeKey
        ? projectsData[lang]
        : projectsData[lang].filter(p => p.category.includes(activeKey))

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
            { threshold: 0.05 }
        )
        sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [filter])

    return (
        <section className="projects" id="projects" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title reveal" data-num="03.">{t.projects.title[lang]}</h2>

                <div className="project-filters reveal">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filtered.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
