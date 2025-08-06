import { ExternalLink, Github } from "lucide-react"
import { useNavigate } from "react-router-dom"

// Import all project images - trying with a working image for testing
import tablaPic from "../assets/TablaMa.png"
import uranusPic from "../assets/URANUS.jpg"
import innunikPic from "../assets/INNUNIK.jpg"
import itmaPic from "../assets/ITMA.jpg"

export default function Projects() {
  const navigate = useNavigate()
  
  const projects = [
    {
      id: "1",
      slug: "tabla-ma",
      title: "Tabla.ma | Restaurant Booking & Management Platform",
      description:
        "Tabla.ma is a comprehensive full-stack web application designed to simplify restaurant reservations and table management. It features an intuitive user interface, real-time availability tracking, and an efficient admin dashboard for managing bookings, reviews, and restaurant profiles.",
      image: tablaPic,
      type: "dev",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe API",
        "React Query",
        "i18next",
      ],
      liveUrl: "manage.tabla.ma",
      githubUrl: "#",
    },
    {
      id: "2",
      slug: "its-my-agency",
      title: "IT'S MY AGENCY | Creative Portfolio Website",
      description:
        "IT'S MY AGENCY is a modern, visually engaging website concept designed for a creative digital agency. The project showcases bold typography, fluid layouts, and a seamless user experience aimed at highlighting agency services, past work, and team culture.",
      image: itmaPic,
      type: "design",
      technologies: ["Figma", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "3",
      slug: "uranus-study",
      title: "Uranus Study | Educational Web Application",
      description:
        "Uranus Study is a sleek and minimalist educational platform designed to help students study efficiently through structured lessons, interactive content, and progress tracking. The UI emphasizes clarity and focus, with a clean layout, calm color palette, and intuitive navigation.",
      image: uranusPic,
      type: "design",
      technologies: ["Figma", "TypeScript", "React.js", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "https://www.behance.net/gallery/152158131/Uranus-Study-WebApp",
    },
    {
      id: "4",
      slug: "innunik-branding",
      title: "INNUNIK | Branding",
      description:
        "INNUNIK is a branding project that focuses on creating a unique visual identity for a fictional company. The design includes a modern logo, color palette, typography, animating, advertizing videos and brand guidelines that reflect the company's values and mission.",
      image: innunikPic,
      type: "design",
      technologies: ["Illustrator", "Photoshop", "After Effects", "Premiere Pro"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const handleProjectClick = (slug: string) => {
    navigate(`/project/${slug}`)
  }

  return (
    <section id="projects" className="py-20 px-4 bg-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">A showcase of my recent work and creative solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:bg-slate-700/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 fade-in group cursor-pointer"
              onClick={() => handleProjectClick(project.slug)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  onLoad={() => console.log('Project image loaded successfully')}
                  onError={() => console.log('Project image failed to load')}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 text-white font-medium">
                      View Case Study
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleProjectClick(project.slug)
                    }}
                    className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center transition-colors"
                  >
                    View Details <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                  
                  {project.type === "dev" && (
                    <a
                      href={project.liveUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center transition-colors"
                    >
                      Live Demo <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
                  {project.type === "dev" && (
                    <a
                      href={project.githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-400 hover:text-slate-300 font-medium text-sm flex items-center transition-colors"
                    >
                      Source Code <Github className="w-4 h-4 ml-1" />
                    </a>
                  )}
                  {project.type === "design" && (
                    <a
                      href={project.githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-400 hover:text-slate-300 font-medium text-sm flex items-center transition-colors"
                    >
                      Behance Post <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center fade-in">
          <button className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black rounded-lg font-medium bg-transparent flex items-center mx-auto transition-all duration-200">
            View All Projects <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div> */}
      </div>
    </section>
  )
}
