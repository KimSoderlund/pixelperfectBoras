import { useState, useEffect } from 'react'
import pixelPerfect from '../assets/images/pixel perfect.jpg'
import '../App.scss'

function Overlay() {
  const [showOverlay, setShowOverlay] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'a' || e.key === 'A') {
        setShowOverlay((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    showOverlay && (
      <div className="overlay">
        <img src={pixelPerfect} alt="Pixel Perfect" />
      </div>
    )
  )
}

export default Overlay
