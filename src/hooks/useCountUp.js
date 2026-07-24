import { useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function useCountUp(target, duration = 1700) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!inView) return
    let frame; const started = performance.now()
    const tick = (now) => { const progress = Math.min((now - started) / duration, 1); setValue(Math.floor(target * (1 - (1 - progress) ** 3))); if (progress < 1) frame = requestAnimationFrame(tick) }
    frame = requestAnimationFrame(tick); return () => cancelAnimationFrame(frame)
  }, [inView, target, duration])
  return [ref, value]
}
