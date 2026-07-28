# Sohom's Syntax - Personal Portfolio

A modern, highly interactive portfolio built with Next.js, Tailwind CSS, and Framer Motion. Features an immersive particle background, sleek glassmorphism UI components, and dynamic master-detail layouts.

## Features

- **Next.js 14** — Fast routing and component-based architecture.
- **Framer Motion** — Smooth page transitions and element animations.
- **Tailwind CSS** — Utility-first styling for complex responsive designs.
- **Interactive Layouts** — Custom grid systems and master-detail experience viewers.
- **Web3Forms** — Integrated serverless contact form submission.
- **Fully Responsive** — Optimized for desktop, tablet, and mobile viewing.

## Getting Started

1. Make sure **Git** and **Node.js** are installed.
2. Clone this repository to your local computer.
3. Open terminal in the root directory and run `npm install`.
4. Create a `.env.local` file and add your Web3Forms access key: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_key_here`
5. Start the development server using `npm run dev`.

## Folder Structure

```bash
modern-portfolio/
  |- components/     # Reusable UI elements (CodeEditor, ExperienceSlider, Nav, etc.)
  |- pages/          # Next.js routes
    |-- about/       # About me & Skills
    |-- contact/     # Contact form (Web3Forms integration)
    |-- experience/  # Interactive master-detail internships view
    |-- projects/    # Highlighted projects grid
    |-- _app.jsx     # Global layout wrapper
    |-- index.jsx    # Home landing page
  |- public/         # Static assets (images, icons, resume PDF)
  |- styles/
    |-- globals.css  # Global Tailwind imports
```