import React, { useEffect, useRef } from 'react'
import './Loader.css'

export default function Loader() {
    const countRef = useRef(null)

    useEffect(() => {
        let count = 0
        const interval = setInterval(() => {
            count += Math.floor(Math.random() * 15) + 5
            if (count >= 100) {
                count = 100
                clearInterval(interval)
            }
            if (countRef.current) countRef.current.textContent = count + '%'
        }, 80)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="loader">
            <div className="loader-inner">
                <div className="loader-logo">HG</div>
                <div className="loader-bar">
                    <div className="loader-fill" />
                </div>
                <div className="loader-count" ref={countRef}>0%</div>
                <p className="loader-text">Initializing Portfolio...</p>
            </div>
            <div className="loader-grid" />
        </div>
    )
}
