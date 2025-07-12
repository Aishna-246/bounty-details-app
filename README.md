# MLSC Bounties - Explore & Discover

A modern, dark-themed bounty exploration platform built with Next.js and Tailwind CSS. Browse and discover coding bounties with an intuitive, responsive interface.

## Features

- **🎯 Explore Bounties Landing Page** - Browse available bounties with search and filtering
- **🔍 Advanced Search & Filtering** - Search by title/description, filter by difficulty and popularity
- **🎨 Beautiful SVG Graphics** - Unique, generated SVG patterns for each bounty type
- **📱 Fully Responsive Design** - Optimized for desktop, tablet, and mobile
- **⚡ Real-time Search** - Instant filtering as you type
- **🌙 Dark Theme UI** - Easy on the eyes with professional styling
- **🔗 Bounty Details Integration** - Click through to detailed bounty pages

## Tech Stack

- **Next.js 14** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Dynamic routing** with `/bounty/[id]` structure

## Project Structure

```
src/
├── components/
│   ├── Breadcrumb.tsx
│   ├── BountyDetailsCard.tsx
│   ├── Tags.tsx
│   └── CommentsSection.tsx
├── pages/
│   ├── _app.tsx
│   ├── index.tsx
│   └── bounty/
│       └── [id].tsx
└── styles/
    └── globals.css
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

- **Landing Page**: Visit `/` to explore the bounties dashboard with search and filtering
- **Search**: Use the search bar to find bounties by title or description
- **Filter**: Use dropdown filters to sort by difficulty (Easy, Medium, Hard) and popularity
- **Bounty Details**: Click "View Details" on any bounty to see full information at `/bounty/[id]`

## Available Bounties

The platform includes 6 diverse bounty types:

1. **Data Visualization** - Interactive charts with D3.js and JavaScript
2. **Machine Learning** - Bug fixes and model improvements with Python/TensorFlow
3. **Algorithm Development** - Image recognition and computer vision
4. **API Documentation** - Comprehensive REST API guides
5. **Tutorial Creation** - Step-by-step learning materials
6. **UI/UX Design** - Modern interface design and accessibility

## Components

### Main Application
- **ExploreBounties**: Main landing page with search, filters, and bounty grid
- **Dynamic SVG Graphics**: Unique visual patterns for each bounty category
- **Responsive Header**: Logo, navigation, search, and user profile

### Bounty Details
- **Breadcrumb**: Navigation breadcrumb with chevron separators
- **BountyDetailsCard**: Detailed bounty information display
- **Tags**: Skill and technology categorization
- **CommentsSection**: Discussion thread for bounty questions

## Customization

- **Colors**: Modify the dark theme in `tailwind.config.js` and `globals.css`
- **Bounties**: Update mock data in `pages/index.tsx` for the landing page
- **Details**: Customize individual bounty data in `pages/bounty/[id].tsx`
- **Graphics**: Extend the SVG pattern system in `getImagePlaceholder()` function
- **Filters**: Add new filter categories or sorting options
