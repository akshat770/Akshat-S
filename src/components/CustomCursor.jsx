import React, { useEffect, useRef } from 'react'

function CustomCursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)

  useEffect(() => {
    const cursorEl = cursorRef.current
    const dotEl = dotRef.current
    if (!cursorEl || !dotEl) return

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dotEl.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    }

    const animate = () => {
      // simple ease
      cursorX += (mouseX - cursorX) * 0.15
      cursorY += (mouseY - cursorY) * 0.15
      cursorEl.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`
      requestAnimationFrame(animate)
    }

    const addHoverClass = () => cursorEl.classList.add('cc-active')
    const removeHoverClass = () => cursorEl.classList.remove('cc-active')

    document.addEventListener('mousemove', handleMouseMove)
    document.querySelectorAll('a, button, [role="button"], .cursor-pointer').forEach((el) => {
      el.addEventListener('mouseenter', addHoverClass)
      el.addEventListener('mouseleave', removeHoverClass)
    })

    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.querySelectorAll('a, button, [role="button"], .cursor-pointer').forEach((el) => {
        el.removeEventListener('mouseenter', addHoverClass)
        el.removeEventListener('mouseleave', removeHoverClass)
      })
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cc-ring" />
      <div ref={dotRef} className="cc-dot" />
    </>
  )
}

export default CustomCursor


