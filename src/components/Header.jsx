import React from 'react'

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-emerald-400 to-cyan-400 text-slate-950 font-bold">A</span>
          <span className="text-lg font-semibold tracking-tight">AkshatSingh</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:text-white text-white/70">Projects</a>
          <a href="#skills" className="hover:text-white text-white/70">Skills</a>
          <a href="#about" className="hover:text-white text-white/70">About</a>
          <a href="#contact" className="hover:text-white text-white/70">Contact</a>
          
        </nav>
      </div>
    </header>
  )
}

export default Header

