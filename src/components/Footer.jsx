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
                        <span className="logo-bracket">&lt;</span>HG<span className="logo-bracket">/&gt;</span>
                    </div>
                    <p className="footer-text">
                        {t.footer.built[lang]} <span className="accent">Hakimi Genji</span>
                    </p>
                    <div className="footer-links">
                        <a href="https://github.com/codexola" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://t.me/smose0917" target="_blank" rel="noopener noreferrer">Telegram</a>
                        <a href="mailto:toms90305@gmail.com">Email</a>
                    </div>
                </div>
                <p className="footer-copy">
                    &copy; {new Date().getFullYear()} Hakimi Genji. {t.footer.rights[lang]}
                </p>
            </div>
        </footer>
    )
}
