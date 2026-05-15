import React, { createContext, useContext, useState } from 'react'

export const LangContext = createContext()

export function LangProvider({ children }) {
    const [lang, setLang] = useState('en')
    const toggle = () => setLang(l => l === 'en' ? 'ja' : 'en')
    return (
        <LangContext.Provider value={{ lang, toggle }}>
            {children}
        </LangContext.Provider>
    )
}

export const useLang = () => useContext(LangContext)

export const t = {
    nav: {
        about: { en: 'About', ja: 'について' },
        experience: { en: 'Experience', ja: '経歴' },
        projects: { en: 'Projects', ja: 'プロジェクト' },
        skills: { en: 'Skills', ja: 'スキル' },
        contact: { en: 'Contact', ja: '連絡先' },
        resume: { en: 'Resume', ja: '履歴書' },
    },
    hero: {
        greeting: { en: 'Hi, my name is', ja: 'はじめまして、' },
        desc: {
            en: 'Senior Full-Stack Engineer with 8+ years of experience in AI systems, Web development, and Cloud architecture. Specialized in Python, FastAPI, AWS, and AI/LLM technologies — from PoC to production deployment.',
            ja: 'AI・Web・クラウド開発に8年以上の経験を持つシニアエンジニア。Python・FastAPI・AWS・生成AI技術を専門とし、PoC から本番導入まで一貫して対応。',
        },
        viewWork: { en: 'View My Work', ja: '実績を見る' },
        getInTouch: { en: 'Get In Touch', ja: 'お問い合わせ' },
        roles: {
            en: ['AI Engineer', 'Full-Stack Developer', 'Backend Specialist', 'Cloud Architect', 'Tech Lead'],
            ja: ['AI エンジニア', 'フルスタック開発者', 'バックエンド スペシャリスト', 'クラウド アーキテクト', 'テックリード'],
        },
    },
    about: {
        title: { en: 'About Me', ja: '自己紹介' },
        p1: {
            en: "I'm a senior full-stack engineer with 8+ years of experience building AI systems, web applications, and cloud infrastructure. My journey spans from requirement definition through design, development, and production deployment — with a strong focus on business value and operational excellence.",
            ja: 'AI・Web・クラウド開発に8年以上の経験を持つシニアエンジニアです。要件定義からデザイン・開発・本番運用まで一貫して担当し、ビジネス価値と運用品質を重視します。',
        },
        p2: {
            en: 'My core expertise lies in Python/FastAPI backend development, AI/LLM integration (OpenAI, Claude, Dify), and AWS cloud architecture. I\'ve led AI projects that achieved 60% reduction in inquiry workload and shipped products across healthcare, fintech, and business automation domains.',
            ja: 'Python・FastAPI によるバックエンド開発、OpenAI・Claude・Dify を活用した AI/LLM 統合、AWS クラウドアーキテクチャが得意です。問い合わせ工数 60% 削減を実現した AI プロジェクトをリードし、医療・フィンテック・業務自動化分野で多数のプロダクトをリリースしてきました。',
        },
        p3: {
            en: 'I thrive in agile environments, excel at translating business challenges into technical solutions, and care deeply about code quality and team collaboration. Whether it\'s designing RAG systems, optimizing database queries, or mentoring junior engineers — I bring the same level of precision to every aspect of development.',
            ja: 'アジャイル環境でのチーム開発が得意で、ビジネス課題を技術で解決することにこだわります。RAG システム設計、DB 最適化、後進エンジニアのメンタリングまで、開発のあらゆる側面に同じ精度で取り組みます。',
        },
        years: { en: 'Years Experience', ja: '年の経験' },
        projects: { en: 'Projects Shipped', ja: 'リリース実績' },
        companies: { en: 'Companies', ja: '勤務企業数' },
        jlpt: { en: 'Japanese JLPT', ja: '日本語能力試験' },
    },
    experience: {
        title: { en: 'Work Experience', ja: '職務経歴' },
    },
    projects: {
        title: { en: 'Projects', ja: 'プロジェクト' },
        filters: {
            en: ['All', 'iOS Mobile App', 'Web Platform', 'E-Commerce', 'Social App'],
            ja: ['すべて', 'iOSモバイルアプリ', 'Webプラットフォーム', 'ECサイト', 'ソーシャルアプリ'],
        },
    },
    skills: {
        title: { en: 'Skills & Technologies', ja: 'スキル・技術' },
    },
    contact: {
        title: { en: 'Get In Touch', ja: 'お問い合わせ' },
        heading: { en: "Let's work together", ja: '一緒に働きましょう' },
        text: {
            en: "I'm currently open to new opportunities. Whether you have a project in mind, want to discuss a role, or just want to say hi — my inbox is always open.",
            ja: '現在、新しい機会を積極的に探しています。プロジェクトのご相談、お仕事のご依頼、またはお気軽なご挨拶でも、いつでもご連絡ください。',
        },
        name: { en: 'Name', ja: 'お名前' },
        email: { en: 'Email', ja: 'メールアドレス' },
        message: { en: 'Message', ja: 'メッセージ' },
        namePh: { en: 'Your name', ja: 'お名前を入力' },
        emailPh: { en: 'your@email.com', ja: 'メールアドレスを入力' },
        messagePh: { en: 'Tell me about your project...', ja: 'プロジェクトについてお聞かせください...' },
        send: { en: 'Send Message', ja: '送信する' },
        sent: { en: 'Message Sent!', ja: '送信しました！' },
        resume: { en: 'Download Resume', ja: '履歴書をダウンロード' },
    },
    footer: {
        built: { en: 'Designed & Built by', ja: 'デザイン・開発：' },
        rights: { en: 'All rights reserved.', ja: 'All rights reserved.' },
    },
}
