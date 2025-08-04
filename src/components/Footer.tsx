"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Logo from "./layout/Logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-800 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4 ">
              <Logo />
              <span className="text-2xl font-bold text-[#FFF] bg-clip-text flex gap-[2px]">Trasart</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Creating exceptional digital experiences through innovative design and cutting-edge technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(`#${link.toLowerCase()}`)}
                    className="text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/alhassanZakriti" className="text-slate-300 hover:text-cyan-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/alhassan-zakriti/" className="text-slate-300 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:zakriti.alhassan1@gmail.com" className="text-slate-300 hover:text-cyan-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className=" flex flex-col space-y-2">
              <a href="mailto:zakriti.alhassan1@gmail.com" className="text-slate-300">zakriti.alhassan1@gmail.com</a>
              <a href="tel:+212637655794" className="text-slate-300">+212 63 765 5794</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-300 text-sm">© {currentYear} TRASART Portfolio. All rights reserved.</p>
          <p className="text-slate-300 text-sm flex items-center mt-4 md:mt-0">
            Made by TRASART {' (Al Hassan Zakriti)'}
          </p>
        </div>
      </div>
    </footer>
  )
}
