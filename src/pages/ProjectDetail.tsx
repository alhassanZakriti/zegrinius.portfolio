import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github, Calendar, User, Building, ChevronRight, Code, Palette, ArrowRight } from 'lucide-react'
import { getProjectBySlug } from '../data/projects'
import { useEffect, useState } from 'react'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [project, setProject] = useState(getProjectBySlug(slug || ''))

  useEffect(() => {
    if (slug) {
      const foundProject = getProjectBySlug(slug)
      setProject(foundProject)
      if (!foundProject) {
        navigate('/')
      }
    }
  }, [slug, navigate])


  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#004fff]">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-6">{project.subtitle}</p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">{project.description}</p>
          </div>

          {/* Project Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <Calendar className="w-8 h-8 text-[#004fff] mx-auto mb-2" />
              <h3 className="font-semibold text-white mb-1">Duration</h3>
              <p className="text-slate-300">{project.duration}</p>
            </div>
            <div className="text-center">
              <User className="w-8 h-8 text-[#004fff] mx-auto mb-2" />
              <h3 className="font-semibold text-white mb-1">Role</h3>
              <p className="text-slate-300">{project.role}</p>
            </div>
            <div className="text-center">
              <Building className="w-8 h-8 text-[#004fff] mx-auto mb-2" />
              <h3 className="font-semibold text-white mb-1">Client</h3>
              <p className="text-slate-300">{project.client || 'Personal'}</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 rounded-full text-[#004fff] mx-auto mb-2 flex items-center justify-center">
                {project.type.toUpperCase() === "DEV" ? <Code className="w-full h-full" /> : <Palette className="w-full h-full" />}
              </div>
              <h3 className="font-semibold text-white mb-1">Type</h3>
              <p className="text-slate-300 capitalize">{project.type}</p>
            </div>
          </div>

          {/* Cover Image */}
          <div className="rounded-2xl overflow-hidden mb-12">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#004fff] hover:bg-[#0033cc] rounded-lg font-medium transition-all duration-200 flex items-center"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Live Project
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 border border-slate-600 rounded-lg font-medium transition-all duration-200 flex items-center"
              >
                <Github className="w-5 h-5 mr-2" />
                Source Code
              </a>
            )}
            {project.behanceUrl && (
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 border border-slate-600 rounded-lg font-medium transition-all duration-200 flex items-center"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Behance
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Project Overview</h2>
                <p className="text-slate-300 text-lg leading-relaxed">{project.overview}</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">The Challenge</h3>
                <p className="text-slate-300 leading-relaxed">{project.challenge}</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">The Solution</h3>
                <p className="text-slate-300 leading-relaxed">{project.solution}</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">The Outcome</h3>
                <p className="text-slate-300 leading-relaxed">{project.outcome}</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Design & Development Process</h2>
          
          <div className="space-y-12">
            {project.process.map((step, index) => (
              <div key={step.id} className="relative">
                {index < project.process.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-24 bg-[#004fff] hidden md:block"></div>
                )}
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#004fff] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                    <h3 className="text-2xl font-semibold mb-4 text-white">{step.title}</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">{step.description}</p>
                    
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3 text-slate-300">
                          <ChevronRight className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-16 px-4 max-h-fit bg-slate-800/30">
          <div className="container h-fit mx-auto max-w-6xl">
            <h2 className="text-3xl h-fit font-bold mb-12 text-center text-white">Project Gallery</h2>
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((image, index) => (
                <div key={index} className="rounded-xl max-h-fit overflow-hidden bg-[#161616] shadow-lg hover:shadow-xl transition-shadow duration-300 relative group">
                  <img
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full  transition-transform duration-300 hover:scale-105"
                  />

                  {/* Overlay with image info on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-lg font-semibold">Gallery Image {index + 1}</div>
                      <div className="text-sm opacity-75">{project.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* YouTube Videos Section */}
      {project.youtubeVideos && project.youtubeVideos.length > 0 && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Video Showcase</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {project.youtubeVideos.map((video) => (
                <div key={video.id} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{video.title}</h3>
                    {video.description && (
                      <p className="text-slate-300 text-sm">{video.description}</p>
                    )}
                  </div>
                  
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-900">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.embedId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation to other projects */}
      <section className="py-16 px-4  bg-slate-800/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold mb-6 text-white">Explore More Projects</h2>
          <button
            onClick={() => navigate('/')}
            className="px-8 py-4 bg-[#004fff] hover:bg-[#0033cc] cursor-pointer rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            View All Projects
            <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  )
}
