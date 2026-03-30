import { forwardRef, useEffect, useRef, useState } from 'react'

const RevealSection = forwardRef(function RevealSection(
  { as: Tag = 'section', className = '', children, delay = 0, ...props },
  forwardedRef
) {
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
      ref={(node) => {
        ref.current = node

        if (typeof forwardedRef === 'function') {
          forwardedRef(node)
        } else if (forwardedRef) {
          forwardedRef.current = node
        }
      }}
      className={`${className} reveal-section${visible ? ' is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  )
})

export default RevealSection
