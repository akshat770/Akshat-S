import React from 'react'

function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-white/10">
      <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
      <p className="mt-4 text-white/70">Reach me at <a className="underline decoration-white/30 underline-offset-4 hover:decoration-white/60" href="mailto:2023nitsgr203@gmail.com">2023nitsgr203@gmail.com</a></p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href="https://github.com/akshat770"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white/90 hover:border-white/40"
        >
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.486 2 12.021c0 4.43 2.865 8.184 6.839 9.504.5.091.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.606-3.369-1.34-3.369-1.34-.455-1.159-1.111-1.468-1.111-1.468-.908-.62.069-.607.069-.607 1.004.071 1.531 1.032 1.531 1.032.893 1.531 2.343 1.088 2.914.833.091-.648.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.953 0-1.094.39-1.99 1.03-2.691-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.027A9.564 9.564 0 0 1 12 6.844c.851.004 1.706.115 2.505.337 1.909-1.297 2.748-1.027 2.748-1.027.546 1.378.202 2.397.1 2.65.64.701 1.028 1.597 1.028 2.69 0 3.849-2.338 4.697-4.566 4.945.36.311.679.923.679 1.861 0 1.343-.012 2.425-.012 2.756 0 .268.18.579.688.481C19.138 20.2 22 16.449 22 12.02 22 6.485 17.523 2 12 2Z" clipRule="evenodd"/>
          </svg>
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/akshat-singh-226815278/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400"
        >
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M20.447 20.452h-3.555v-5.569c0-1.328-.027-3.036-1.85-3.036-1.853 0-2.136 1.447-2.136 2.943v5.662H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.603 0 4.268 2.372 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.116 20.452H3.554V9h3.562v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact

