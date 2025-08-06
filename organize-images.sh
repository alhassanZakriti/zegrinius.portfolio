#!/bin/bash
# Image Organization Script
# Run this to properly organize your project images

echo "🖼️  Organizing Project Images..."

# Create all necessary directories
mkdir -p public/assets/projects/tabla
mkdir -p public/assets/projects/itma  
mkdir -p public/assets/projects/uranus
mkdir -p public/assets/projects/innunik

echo "📁 Created project directories"

# Copy existing images to correct locations (if they exist)
if [ -f "src/assets/TablaMa.png" ]; then
  cp "src/assets/TablaMa.png" "public/assets/projects/tabla/cover.jpg"
  echo "✅ Copied Tabla cover image"
fi

if [ -f "src/assets/ITMA.jpg" ]; then
  cp "src/assets/ITMA.jpg" "public/assets/projects/itma/cover.jpg"
  echo "✅ Copied ITMA cover image"
fi

if [ -f "src/assets/URANUS.jpg" ]; then
  cp "src/assets/URANUS.jpg" "public/assets/projects/uranus/cover.jpg"
  echo "✅ Copied Uranus cover image"
fi

if [ -f "src/assets/INNUNIK.jpg" ]; then
  cp "src/assets/INNUNIK.jpg" "public/assets/projects/innunik/cover.jpg"
  echo "✅ Copied Innunik cover image"
fi

echo "
🎯 Next Steps:
1. Add more images to each project folder:
   - Gallery images (hero.jpg, dashboard.jpg, etc.)
   - Process images (wireframe1.jpg, mockup1.jpg, etc.)

2. Your images are now accessible at:
   http://localhost:5174/assets/projects/tabla/cover.jpg

3. The paths in projects.ts are already correct!

📂 Current structure:
public/assets/projects/
├── tabla/cover.jpg
├── itma/cover.jpg  
├── uranus/cover.jpg
└── innunik/cover.jpg
"
