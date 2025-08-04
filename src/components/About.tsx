import { User, Award, Coffee, Heart } from "lucide-react"
import pic from "../assets/pic2.jpg"

export default function About() {
  const stats = [
    { icon: Award, label: "Projects Completed", value: "50+", color: "text-cyan-400" },
    { icon: Coffee, label: "Years Experience", value: "3+", color: "text-blue-400" },
    { icon: Heart, label: "Client Satisfaction", value: "100%", color: "text-cyan-500" },
    { icon: User, label: "Support Available", value: "24/7", color: "text-blue-500" },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="fade-in">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-2xl object-cover overflow-hidden h-96 flex items-center justify-center">
                <img src={pic} alt="Profile" className="object-cover translate-y-[-10%]" />
            </div>
          </div>

          <div className="fade-in">
            <h3 className="text-2xl font-bold mb-6 text-white">Who I Am?</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              I'm a multidisciplinary creator driven by the desire to make ideas both intelligent and intuitive. My background in mathematics gives me a deep appreciation for structure, clarity, and problem-solving, while my work as a designer and motion graphic artist allows me to give ideas form, rhythm, and emotion. As a developer, I bring these elements to life through functional, elegant code. And as a writer, I aim to capture the thought behind the form — to give meaning as much weight as mechanics.
              <br />
              I don’t see disciplines as boundaries but as tools. Whether I’m building an interface, animating a concept, writing a narrative, or solving a technical challenge, I approach each project with the same intention:
              To think with precision, design with feeling, and create with purpose.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Mathematics", "UI/UX Design", "Motion Graphics", "Front-end Development", "Branding", "Creative Writing"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 fade-in">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl hover:bg-slate-700/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-4 ${stat.color}`} />
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
              <p className="text-slate-300 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
