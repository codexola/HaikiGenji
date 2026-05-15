import React from 'react'
import { useLang, t } from '../i18n'
import './Footer.css'

export default function Footer() {
    const { lang } = useLang()
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-logo">
                        <span className="logo-bracket">&lt;</span>RT<span className="logo-bracket">/&gt;</span>
                    </div>
                    <p className="footer-text">
                        {t.footer.built[lang]} <span className="accent">徳永琉孝</span>
                    </p>
                    <div className="footer-links">
                        <a href="https://github.com/crystal70916" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://t.me/smose0917" target="_blank" rel="noopener noreferrer">Telegram</a>
                        <a href="mailto:hiroki.kodan2025@gmail.com
">Email</a>
                    </div>
                </div>
                <p className="footer-copy">
                    &copy; {new Date().getFullYear()} Ryuko Tokunaga. {t.footer.rights[lang]}
                </p>
            </div>
        </footer>
    )
}
