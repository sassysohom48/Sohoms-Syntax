# 🚀 Sohom's Syntax - Personal Portfolio

A modern, developer-centric portfolio web application built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Features an interactive Python IDE simulation, particle canvas backgrounds, 3-card project carousels, sleek glassmorphism UI components, and dynamic master-detail experience explorers.

---

## ✨ Features

- **⚡ Next.js 14 & React 18** — High-performance routing and component-driven architecture.
- **🎨 Tailwind CSS & Glassmorphism** — Dark-mode aesthetic with custom color palettes and responsive layouts.
- **✨ Framer Motion** — Fluid page transitions and staggered enter animations.
- **💻 Interactive Code Editor Mockup** — Live Python IDE on the hero landing page with "Run Profile" and quick resume access.
- **📂 3-Card Swiper Project Carousel** — Interactive horizontal carousel showcasing highlighted projects matching resume order with external navigation arrows and pagination dots.
- **💼 Master-Detail Experience Explorer** — Expandable internship and research viewer with detailed responsibilities and company logos.
- **🌌 Dynamic Particle Canvas** — Particle effects powered by `tsparticles`.
- **📬 Web3Forms Contact Integration** — Serverless client contact form with field validations.
- **📱 Fully Responsive** — Tailored viewing experience across mobile, tablet, laptop, and ultra-wide screens.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (Pages Router)
- **Library:** [React 18](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & [react-type-animation](https://github.com/maxmarinich/react-type-animation)
- **Carousel & Sliders:** [Swiper](https://swiperjs.com/)
- **Particles:** [tsparticles](https://particles.js.org/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Forms:** [Web3Forms](https://web3forms.com/)

---

## 🚀 Getting Started

### 1. Prerequisites
Make sure **Node.js** (v18.x or higher) and **Git** are installed on your computer.

### 2. Installation
Clone the repository and install the dependencies:

```bash
git clone https://github.com/sassysohom48/Sohoms-Syntax.git
cd Sohoms-Syntax
npm install
```

### 3. Environment Variables (Optional)
Create a `.env.local` file in the root directory if you wish to configure your custom Web3Forms access key:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

### 4. Running Locally
Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 5. Production Build
To create an optimized production build:

```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```bash
Sohoms-Syntax/
├── components/          # Reusable UI components
│   ├── Avatar.jsx       # Profile avatar component
│   ├── Bulb.jsx         # Background glowing bulb accent
│   ├── Circles.jsx      # Background radial ornament
│   ├── CodeEditor.jsx   # Python IDE simulation with Run & Resume actions
│   ├── ExperienceSlider.jsx # Master-detail internship & experience viewer
│   ├── Header.jsx       # Header bar with logo and social links
│   ├── Layout.jsx       # Global application shell layout
│   ├── Nav.jsx          # Floating navigation dock with tooltips
│   ├── ParticlesContainer.jsx # tsparticles dynamic background
│   ├── ProjectsSlider.jsx # 3-card Swiper carousel for projects
│   ├── ResumeBtn.jsx    # Rotating circular resume button
│   ├── Socials.jsx      # Social media links (LinkedIn, GitHub, Email, etc.)
│   └── Transition.jsx   # Framer Motion route change overlay
├── pages/               # Next.js Pages
│   ├── _app.jsx         # App root & animation providers
│   ├── index.jsx        # Landing page
│   ├── about/index.jsx  # About Me, Skills matrix, & Certifications
│   ├── projects/index.jsx # Featured Projects page
│   ├── experience/index.jsx # Internship & Professional Experience page
│   └── contact/index.jsx # Validated contact form
├── public/              # Static assets, logos, and icons
├── styles/
│   └── globals.css      # Tailwind directives & Swiper custom styles
├── tailwind.config.js   # Tailwind theme configurations
└── package.json         # Project scripts and dependencies
```

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).