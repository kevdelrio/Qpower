import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop resets the scroll position to the top whenever the route
 * changes.  Without this component, navigating to a new page preserves
 * the scroll position from the previous route, which can confuse users.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}