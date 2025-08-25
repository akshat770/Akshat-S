import React from 'react'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/60">© {new Date().getFullYear()} Akshat. All rights reserved.</div>
    </footer>
  )
}

export default Footer

