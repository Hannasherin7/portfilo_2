import { useEffect, useRef, useState } from 'react'

function RevealSection({ as: Tag = 'section', className = '', children, delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.22, rootMargin: '0px 0px -12% 0px' },
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <Tag
      ref={ref}
      className={`${className} reveal-section${visible ? ' is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

export default RevealSection
