import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, Search, Filter, ArrowRight, BookOpen, X } from 'lucide-react'
import { blogPosts, getUniqueSubjects, searchBlogPosts, getBlogPostsBySubject } from '../data/blog'
import Header from '../components/Header'
import Footer from '../components/Footer'

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSubject, setSelectedSubject] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const subjects = getUniqueSubjects()

  // Filter and search logic
  const filteredPosts = useMemo(() => {
    let posts = blogPosts

    // Apply subject filter
    if (selectedSubject) {
      posts = getBlogPostsBySubject(selectedSubject)
    }

    // Apply search query
    if (searchQuery.trim()) {
      posts = searchBlogPosts(searchQuery)
      // If both filters are applied, get intersection
      if (selectedSubject) {
        const subjectPosts = getBlogPostsBySubject(selectedSubject)
        posts = posts.filter(post => subjectPosts.some(sp => sp.id === post.id))
      }
    }

    return posts
  }, [searchQuery, selectedSubject])

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedSubject('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                My thoughts
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore my ideas, thoughts, and experiences in professional and personal life.
              Sharing insights, tutorials, in addition to philosophical reflections on every aspect of life.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 px-6 bg-gray-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                />
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-6 py-3 bg-gray-700/50 hover:bg-gray-700 border border-gray-600 rounded-xl transition-colors"
              >
                <Filter className="w-5 h-5" />
                Filters
                {(selectedSubject || searchQuery) && (
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                )}
              </button>
            </div>

            {/* Filter Panel */}
            {showFilters && (
              <div className="mt-6 p-6 bg-gray-800/50 rounded-xl border border-gray-600">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-gray-300 font-medium">Filter by subject:</span>
                  <div className="flex flex-wrap gap-2">
                    {subjects.map((subject) => (
                      <button
                        key={subject}
                        onClick={() => setSelectedSubject(selectedSubject === subject ? '' : subject)}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          selectedSubject === subject
                            ? 'bg-cyan-500 text-white'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                      >
                        {subject}
                      </button>
                    ))}
                  </div>
                  
                  {(selectedSubject || searchQuery) && (
                    <button
                      onClick={clearFilters}
                      className="flex items-center gap-2 px-4 py-2 text-red-400 hover:text-red-300 transition-colors"
                    >
                      <X className="w-4 h-4" />
                      Clear filters
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Results Summary */}
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                {filteredPosts.length === blogPosts.length 
                  ? `Showing all ${filteredPosts.length} articles`
                  : `Found ${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''}`
                }
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    {/* Article Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-cyan-400/20 backdrop-blur-sm text-cyan-300 text-sm rounded-full border border-cyan-400/30">
                          {post.subject}
                        </span>
                      </div>
                      {post.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-yellow-400/20 backdrop-blur-sm text-yellow-300 text-sm rounded-full border border-yellow-400/30">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Article Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Article Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More Link */}
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              /* No Results */
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-400 mb-2">No articles found</h3>
                <p className="text-gray-500 mb-6">
                  Try adjusting your search query or filters to find what you're looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default BlogPage
