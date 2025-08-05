"use client"

import { ArrowDown , MapPin } from "lucide-react"
import { Github, Linkedin, Mail, Twitter, Dribbble } from "lucide-react"
import pic from "../assets/PHOTO.jpg"


export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const socialLinks = [
    // { icon: Figma, href: "#", color: "hover:text-purple-600" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/alhassan-zakriti/", color: "hover:text-blue-600 hover:border-blue-600" },
    { icon: Dribbble, href: "https://dribbble.com/zakriti_alhassan", color: "hover:text-pink-600 hover:border-pink-600" },
    { icon: Github, href: "https://github.com/alhassanZakriti", color: "hover:text-gray-800 hover:border-gray-800" },
    { icon: Twitter, href: "https://x.com/zegrinius", color: "hover:text-blue-400 hover:border-blue-400" },
    { icon: Mail, href: "mailto:zakriti.alhassan1@gmail.com", color: "hover:text-red-600 hover:border-red-600" },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 bg-transparent">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 ">
            {/* Available Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 px-2 py-1 rounded-md mb-[1em] text-xs font-medium border border-cyan-500/30">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span>AVAILABLE FOR WORK</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-white leading-tight">
                Designing Thought, <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Coding Motion,</span> Writing Experience.
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 max-w-md mt-[-1em] leading-relaxed">
              Multidisciplinary thinker blending math, design, code, motion, and words into meaningful digital experiences.
            </p>

            {/* CTA Button */}
            <button
              onClick={scrollToContact}
              className="bg-[#004fff] cursor-pointer text-white px-6 py-3 rounded-md font-medium  transition-all duration-200 transform hover:scale-105"
            >
              Contact Me
            </button>
          </div>

          {/* Right Content - Cards */}
          <div className="relative">
            {/* Profile Card */}
            <div className="relative z-10 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-6 shadow-2xl max-w-md mx-auto lg:mx-0">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-slate-700 to-slate-800">
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  <div className="text-6xl">
                    <img src={pic} alt="Profile" className="w-full h-full  object-cover transition-transform duration-300 hover:scale-105 translate-y-[-10%]" />
                  </div>
                </div>
              </div>

              {/* Profile Info Card */}
              <div className="bg-slate-700/50 rounded-2xl p-4  border border-slate-600">
                <h3 className="font-semibold text-white mb-1">Creative Polymath</h3>
                <div className="flex items-center text-slate-300 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                    Casablanca, Morocco
                </div>
              </div>

             
              
            </div>

            {/* Social Media Icons */}
            <div className="absolute right-0 top-1/2 transform translate-x-16 -translate-y-1/2 hidden xl:flex flex-col space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-slate-700/80 backdrop-blur-sm border border-slate-600 rounded-full shadow-lg flex items-center justify-center text-slate-300 ${social.color}  transition-all duration-200`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -left-8 w-20 h-20 bg-cyan-500/20 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-12 -right-4 w-16 h-16 bg-blue-500/20 rounded-full opacity-60 animate-pulse animation-delay-2000"></div>
            <div className="absolute top-1/4 -left-12 w-12 h-12 bg-cyan-400/20 rounded-full opacity-60 animate-pulse animation-delay-4000"></div>
          </div>
        </div>

        {/* Mobile Social Links */}
        <div className="flex justify-center space-x-4 mt-12 xl:hidden">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-10 h-10 bg-slate-700/80 backdrop-blur-sm border border-slate-600 rounded-full shadow-lg flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-200"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-16">
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-slate-400" />
          </div>
        </div>
      </div>
    </section>
  )
}
