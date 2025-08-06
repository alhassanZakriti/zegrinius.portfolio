import { Palette,  ScanLineIcon, BrainIcon, PenToolIcon, FilmIcon, CodeIcon } from "lucide-react"

export default function Skills() {
  const skills = [
    {
    icon: Palette,
    title: "Design & Visuals",
    description: "Creating visually appealing designs and user experiences with a focus on usability and aesthetics.",
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    technologies: ["UI/UX Design","Graphic Design", "Illustration", "Prototyping", "Branding"],
  },
  {
    icon: ScanLineIcon,
    title: "Mathematical Modeling",
    description: "Applying mathematical principles to solve complex problems and optimize solutions.",
    color: "bg-cyan-400/20 text-cyan-300 border-cyan-400/30",
    technologies: ["Linear Algebra", "Calculus", "Statistics", "Data Analysis"],
  },
  {
    icon: CodeIcon,
    title: "Development & Programming",
    description: "Proficient in a diverse array of programming languages and technologies, including TypeScript, Python, Java, C, Matlab, R, HTML, CSS, and JavaScript. Experienced in developing solutions across various domains, from web development to scientific computing, leveraging a strong foundation in software engineering principles.",
    color: "bg-violet-500/20 text-violet-400 border-violet-500/30",
    technologies: ["TypeScript", "Python", "Java", "C", "Matlab", "R", "HTML", "CSS", "JavaScript"],
  },
  {
    icon: FilmIcon,
    title: "Motion Graphics",
    description: "Animating ideas through motion to tell stories and enhance user engagement.",
    color: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    technologies: ["After Effects", "Premiere Pro", "SVG Animation"],
  },
  {
    icon: PenToolIcon,
    title: "Creative Writing",
    description: "Writing clear, thoughtful, and expressive content to shape ideas and deliver impact.",
    color: "bg-orange-400/20 text-orange-300 border-orange-400/30",
    technologies: ["Storytelling", "Scriptwriting", "Content Writing", "Narrative Design"],
  },
  {
    icon: BrainIcon,
    title: "Problem Solving & Logic",
    description: "Using structured thinking and analytical reasoning to navigate challenges across disciplines.",
    color: "bg-teal-400/20 text-teal-300 border-teal-400/30",
    technologies: ["Algorithm Design", "Debugging", "Systems Thinking", "Critical Analysis"],
  },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Skills & Expertise</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">A comprehensive set of skills to bring your ideas to life</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-700/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 fade-in group"
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300 border`}
              >
                <skill.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{skill.title}</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-slate-700/50 text-slate-300 border border-slate-600 rounded text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
