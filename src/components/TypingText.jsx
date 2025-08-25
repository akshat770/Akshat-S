import { useState, useEffect } from 'react'

export default function TypingText({ words, typingSpeed = 100, deletingSpeed = 50, pauseMs = 1000 }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    
    if (!isDeleting) {
      if (currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseMs)
        return
      }
      
      const timeout = setTimeout(() => {
        setCurrentText(currentWord.slice(0, currentText.length + 1))
      }, typingSpeed)
      
      return () => clearTimeout(timeout)
    } else {
      if (currentText === '') {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        return
      }
      
      const timeout = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1))
      }, deletingSpeed)
      
      return () => clearTimeout(timeout)
    }
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseMs])

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
