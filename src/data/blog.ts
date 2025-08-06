export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  readTime: string
  featuredImage: string
  tags: string[]
  subject: string
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "mud",
    title: "Mud",
    excerpt: "A raw portrayal of emotional entrapment—where pain and love mix into something addictively destructive.",
    content: `# Mud

    Are you stuck like I am?

    Escaping feels like throwing yourself to wolves—hoping they'll eat you fast enough to free you. The more I try to erase the idea of the kidnapper—the one who stole my life—the deeper I sink. It’s like falling into mud: the faster you struggle to escape, the faster it swallows you whole.

    I hate realizing that I’m trapped in this mud.  
    You killed me.  
    You killed my ideas.  
    You stole my life.

    And yet—the only time I feel alive is with you.

    You're a drug I can’t overcome. I hate you for what you did. But I love the sensation you give me.

    In humiliation, there’s a strange kind of power—an illusion of holding the world in one hand. A power no one sees. A power no one can deny.

    I love and hate this mud of yours.`,
    author: "Your Name",
    publishedAt: "2025-08-06",
    readTime: "3 min read",
    featuredImage: "/assets/blog/mud.jpg",
    tags: ["love", "psychology", "dependency", "grief"],
    subject: "Life",
    featured: true
  },
  {
    id: "2",
    slug: "dictator-paradox",
    title: "The Dictator Paradox",
    excerpt: "If a dictator ignores the cries of his people, we call him cruel. But if God does the same, we call Him wise. Why?",
    content: `# The Dictator Paradox

    If a dictator sits in a golden palace while his people starve and suffer, we call him cruel.  
    But if God does the same, we call Him wise.

    If a dictator burns down villages for a divine plan, we call him evil.  
    But if God does the same, we say it's mercy in disguise.

    If a dictator tells you to worship him without question, punishing doubt, we call him a tyrant.  
    But if God does the same, we call Him holy.

    This is the paradox:  
    We see abuse in power when it's human—but sanctity when it's divine.

    Why?  
    What makes the divine exempt from the same moral judgment we apply to the human?

    Is it fear? Tradition?  
    Or are we simply too desperate for meaning to dare ask the obvious?`,
    author: "Your Name",
    publishedAt: "2025-08-06",
    readTime: "4 min read",
    featuredImage: "/assets/blog/dictator-paradox.jpg",
    tags: ["philosophy", "religion", "morality", "power"],
    subject: "Philosophy",
    featured: true
  },
  {
  id: "3",
  slug: "my-reality",
  title: "My Reality",
  excerpt: "In a world that feels void of meaning, love becomes the only thread that connects us to existence.",
  content: `# My Reality

Only emptiness surrounds me  
no thoughts to hold, no place to belong, no one to hide from, and no time to waste, yet no time to gain either.  
Everything appears real, yet slips through understanding, as if meaning is promised but never delivered.  
I called to you across the skies and through the vast cosmos.  
You heard me… but could not answer.  
Am I the one who cannot hear, or are you the one who cannot speak?  
Am I the one who cannot see, or are you simply beyond vision?

In the silence, the only proof that I am alive—  
is your voice, your presence, your beauty, your love.  
Is this a delusion, or are you the reason I exist?  
I never chose this life, this reality, this moment,  
but if I had the power to choose, I would choose every path that leads to you.

Even in a world that feels meaningless,  
you give it all the meaning it could ever hold.  
You are my reality.`,
  author: "Your Name",
  publishedAt: "2025-08-06",
  readTime: "3 min read",
  featuredImage: "/assets/blog/the-reality.jpg",
  tags: ["existence", "love", "philosophy", "introspection"],
  subject: "Philosophy",
  featured: true
}

];


// Helper functions
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug)
}

export const getAllBlogSlugs = (): string[] => {
  return blogPosts.map(post => post.slug)
}

export const getBlogPostsBySubject = (subject: string): BlogPost[] => {
  return blogPosts.filter(post => post.subject.toLowerCase() === subject.toLowerCase())
}

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured)
}

export const searchBlogPosts = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase()
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    post.subject.toLowerCase().includes(lowercaseQuery)
  )
}

export const getUniqueSubjects = (): string[] => {
  const subjects = blogPosts.map(post => post.subject)
  return [...new Set(subjects)]
}
