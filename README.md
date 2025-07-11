# Bounty Details App

A clean and modern "Bounty Details" page built with Next.js and Tailwind CSS that matches the design from your screenshot.

## Features

- **Dark-themed UI** with responsive design
- **Breadcrumb Navigation** at the top
- **Bounty Details Card** with title, description, difficulty, points, deadline, and issue link
- **Tags Section** with pill-style tags
- **Comments Section** styled like a discussion thread
- **Submit Solution Button** with hover effects
- **Mobile-friendly** responsive design using Tailwind CSS

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

- Visit `/` to see the demo homepage
- Visit `/bounty/1` to see the bounty details page
- The page uses mock data that matches the content from your screenshot

## Components

- **Breadcrumb**: Navigation breadcrumb with chevron separators
- **BountyDetailsCard**: Main card displaying bounty information
- **Tags**: Pill-style tags for categorization
- **CommentsSection**: Discussion thread style comments

## Customization

You can easily customize the design by:
- Modifying the color scheme in `tailwind.config.js`
- Updating the mock data in `pages/bounty/[id].tsx`
- Adding more components or pages as needed

## Demo Data

The app includes mock data that replicates the bounty from your screenshot:
- Title: "Develop a Machine Learning Model for Image Classification"
- Tags: Machine Learning, Image Classification, Python
- Comments from Ethan Gerlar and Sophia Bennett
- Difficulty: Intermediate
- Points: 10
- Deadline: 2024-05-15
