import React from 'react'

const projects = [
  { title: 'To-Do', desc: 'A simple ToDo app but using redux-toolkit', link: 'https://to-do-eight-ivory.vercel.app/', img: '/public/todo.jpg' },
  { title: 'Portfolio ', desc: 'Redesigned portfolio with Tailwind CSS and Vite+React.', link: '#', img: '/public/portfolio.jpg' },
  { title: 'Currency Converter', desc: 'Fetches real-time currency exchange rates using the Fawaz Ahmed Currency API', link: 'https://currency-converter-xi-steel.vercel.app/', img: '/public/currency.jpg' },
  { title: 'Guess The Number', desc: 'A simple game made with HTML, CSS, and JavaScript.', link: 'https://guess-the-number-theta-seven.vercel.app/', img: '/public/guess.jpg' },
]

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 transition">
            <div className="aspect-video w-full bg-white/5">
              {p.img ? (
                <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-emerald-500/10 to-cyan-500/10" />
              )}
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="text-sm text-white/70 mt-2 leading-relaxed">{p.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects

