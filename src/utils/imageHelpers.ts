// Image Path Helper for Project Data
// This file helps you understand and manage image paths correctly

export const IMAGE_GUIDELINES = {
  // ✅ CORRECT: Public folder paths (recommended)
  publicFolder: {
    description: "Images in public/ folder, accessible via absolute paths",
    example: "/assets/projects/tabla/cover.jpg",
    structure: `
public/
└── assets/
    └── projects/
        └── tabla/
            └── cover.jpg
    `,
    usage: "Best for: Project galleries, case study images, large files"
  },

  // ✅ CORRECT: Import statements (for smaller images)
  importStatement: {
    description: "Import images in src/ folder, webpack processed",
    example: `
import coverImage from "../assets/tabla-cover.jpg"
// Then use: coverImage
    `,
    usage: "Best for: Small images, icons, optimized loading"
  },

  // ❌ INCORRECT: These won't work
  incorrectPaths: [
    "@assets/tabla/cover.png",  // @ syntax doesn't work in data files
    "assets/tabla/cover.png",   // Missing leading slash
    "../assets/tabla/cover.png", // Wrong relative path in data
    "src/assets/tabla/cover.png" // src/ not accessible in production
  ]
}

// Helper function to validate image paths
export const validateImagePath = (path: string): boolean => {
  // Check if it's a valid public folder path
  if (path.startsWith('/assets/')) {
    return true
  }
  
  // Check if it's a valid external URL
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return true
  }
  
  // Check if it's a placeholder/fallback
  if (path.includes('placeholder') || path.includes('example')) {
    return true
  }
  
  console.warn(`⚠️  Invalid image path: ${path}`)
  return false
}

// Helper to generate correct paths
export const generateProjectImagePath = (projectSlug: string, imageName: string): string => {
  return `/assets/projects/${projectSlug}/${imageName}`
}

// Examples of correct usage:
export const PATH_EXAMPLES = {
  coverImage: "/assets/projects/tabla/cover.jpg",
  gallery: [
    "/assets/projects/tabla/hero.jpg",
    "/assets/projects/tabla/dashboard.jpg",
    "/assets/projects/tabla/mobile.jpg"
  ],
  wireframes: [
    "/assets/projects/tabla/wireframe1.jpg",
    "/assets/projects/tabla/wireframe2.jpg"
  ]
}

// Quick setup guide
export const SETUP_GUIDE = `
1. 📁 Create folder structure:
   public/assets/projects/[project-slug]/

2. 🖼️ Add your images:
   - cover.jpg (main project image)
   - hero.jpg, dashboard.jpg, etc. (gallery)
   - wireframe1.jpg, mockup1.jpg (process)

3. 🔗 Update paths in projects.ts:
   coverImage: "/assets/projects/tabla/cover.jpg"

4. ✅ Images will be available at:
   http://localhost:5174/assets/projects/tabla/cover.jpg
`
