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
            en: 'Full-stack engineer with 7+ years of experience building high-performance mobile and web applications. Specialized in Java, C#, React Native, and modern cloud architectures — from concept to production.',
            ja: 'モバイル・Webアプリ開発に7年以上の経験を持つフルスタックエンジニア。Java・C#・React Nativeおよびクラウドアーキテクチャを専門とし、企画から本番リリースまで一貫して対応。',
        },
        viewWork: { en: 'View My Work', ja: '実績を見る' },
        getInTouch: { en: 'Get In Touch', ja: 'お問い合わせ' },
        roles: {
            en: ['Mobile Engineer', 'Full-Stack Developer', 'React Native Expert', 'Java / C# Specialist', 'UI/UX Craftsman'],
            ja: ['モバイルエンジニア', 'フルスタック開発者', 'React Native エキスパート', 'Java / C# スペシャリスト', 'UI/UX クラフトマン'],
        },
    },
    about: {
        title: { en: 'About Me', ja: '自己紹介' },
        p1: {
            en: "I'm a full-stack engineer with over 7 years of experience building mobile and web applications from the ground up. My journey spans from requirement definition through design, development, and deployment — with a strong focus on code quality and long-term maintainability.",
            ja: '要件定義からデザイン・開発・デプロイまで一貫して担当するフルスタックエンジニアです。コード品質と長期的な保守性を重視し、7年以上の実務経験を持ちます。',
        },
        p2: {
            en: 'My core expertise lies in Java and C# backend development, paired with React Native for cross-platform mobile apps. I\'ve shipped products used by thousands of users across fitness, healthcare, e-commerce, and fintech domains.',
            ja: 'バックエンドはJava・C#を中心に、React Nativeによるクロスプラットフォームアプリ開発が得意です。フィットネス・医療・EC・フィンテック分野で多数のプロダクトをリリースしてきました。',
        },
        p3: {
            en: 'I thrive in agile environments, love clean architecture, and care deeply about the user experience. Whether it\'s optimizing API response times to under 100ms or crafting smooth mobile animations — I bring the same level of precision to every layer of the stack.',
            ja: 'アジャイル環境でのチーム開発が得意で、クリーンアーキテクチャとUXにこだわります。APIレスポンスの100ms以下最適化からスムーズなモバイルアニメーションまで、スタック全体に同じ精度で取り組みます。',
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
