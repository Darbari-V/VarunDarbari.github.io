import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // storage unavailable: fall through to the system setting
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function SocialSidebar(){
    const [theme, setTheme] = useState(getInitialTheme());

    useEffect(() => {
        try {
            localStorage.setItem('theme', theme);
        } catch {
            // Storage is blocked: keep the theme, just don't remember it
        }
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return(
        <div className="social-sidebar">
            <a href="https://github.com/Darbari-V" target="_blank" rel = "noreferrer" aria-label="GitHub">
                <FaGithub/>
            </a>
            <a href="https://www.linkedin.com/in/varun-darbari" target="_blank" rel = "noreferrer" aria-label="LinkedIn">
                <FaLinkedin/>
            </a>
            <a href="mailto:work.varundarbari@gmail.com" aria-label="Email">
                <FaEnvelope />
            </a>
            <div className="theme-toggle">
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label="Toggle Theme">
                    {theme === 'light' ? <FaMoon /> : <FaSun />}
                </button>
            </div>
        </div>
    )
}

export default SocialSidebar
