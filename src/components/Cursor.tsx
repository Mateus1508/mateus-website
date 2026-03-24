import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let raf: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`
        dotRef.current.style.top = `${mouseY}px`
      }
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top = `${ringY}px`
      }
      raf = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.transform = 'translate(-50%,-50%) scale(2)'
      if (ringRef.current) {
        ringRef.current.style.width = '56px'
        ringRef.current.style.height = '56px'
        ringRef.current.style.opacity = '0.8'
      }
    }

    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.transform = 'translate(-50%,-50%) scale(1)'
      if (ringRef.current) {
        ringRef.current.style.width = '36px'
        ringRef.current.style.height = '36px'
        ringRef.current.style.opacity = '0.4'
      }
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)

    const links = document.querySelectorAll('a, button, input, textarea, select')
    links.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-2.5 h-2.5 bg-cyan rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        style={{ transition: 'transform 0.15s ease, width 0.2s, height 0.2s', top: 0, left: 0 }}
      />
      <div
        ref={ringRef}
        className="fixed w-9 h-9 border border-cyan/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 opacity-40"
        style={{ transition: 'width 0.25s ease, height 0.25s ease, opacity 0.25s ease', top: 0, left: 0 }}
      />
    </>
  )
}
