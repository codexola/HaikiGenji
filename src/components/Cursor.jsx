import React, { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
    const dotRef = useRef(null)
    const ringRef = useRef(null)
    const pos = useRef({ x: 0, y: 0 })
    const ring = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const onMove = (e) => {
            pos.current = { x: e.clientX, y: e.clientY }
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
            }
        }

        const onEnter = () => {
            dotRef.current?.classList.add('hover')
            ringRef.current?.classList.add('hover')
        }
        const onLeave = () => {
            dotRef.current?.classList.remove('hover')
            ringRef.current?.classList.remove('hover')
        }

        document.addEventListener('mousemove', onMove)
        document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
            el.addEventListener('mouseenter', onEnter)
            el.addEventListener('mouseleave', onLeave)
        })

        let raf
        const animate = () => {
            ring.current.x += (pos.current.x - ring.current.x) * 0.12
            ring.current.y += (pos.current.y - ring.current.y) * 0.12
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`
            }
            raf = requestAnimationFrame(animate)
        }
        raf = requestAnimationFrame(animate)

        return () => {
            document.removeEventListener('mousemove', onMove)
            cancelAnimationFrame(raf)
        }
    }, [])

    return (
        <>
            <div className="cursor-dot" ref={dotRef} />
            <div className="cursor-ring" ref={ringRef} />
        </>
    )
}
