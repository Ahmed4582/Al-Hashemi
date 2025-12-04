import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinkClass = ({ isActive }) =>
    `block py-2 px-4 transition-colors ${isActive
      ? 'text-accent font-bold'
      : 'text-stone-800 hover:text-accent'
    }`

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white/90 ${scrolled ? ' shadow-md' : 'bg-gray-100'
        }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center ">
        <Link to="/" className="text-2xl font-amiri font-bold text-primary-dark">
          لواء الهواشم
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-stone-800 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-1 space-x-reverse">
            <li><NavLink to="/" className={navLinkClass}>الرئيسية</NavLink></li>
            <li><NavLink to="/about" className={navLinkClass}>عن العشيرة واللواء</NavLink></li>
            <li><NavLink to="/news" className={navLinkClass}>الأخبار والقرارات</NavLink></li>
            <li><NavLink to="/gallery" className={navLinkClass}>المعرض</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass}>اتصل بنا</NavLink></li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-60' : 'max-h-0'
          }`}
      >
        <ul className="p-4">
          <li><NavLink to="/" className={navLinkClass} onClick={toggleMenu}>الرئيسية</NavLink></li>
          <li><NavLink to="/about" className={navLinkClass} onClick={toggleMenu}>عن العشيرة واللواء</NavLink></li>
          <li><NavLink to="/news" className={navLinkClass} onClick={toggleMenu}>الأخبار والقرارات</NavLink></li>
          <li><NavLink to="/gallery" className={navLinkClass} onClick={toggleMenu}>المعرض</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass} onClick={toggleMenu}>اتصل بنا</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar