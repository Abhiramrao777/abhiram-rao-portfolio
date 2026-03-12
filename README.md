# Abhiram Rao - Personal Portfolio

A sleek, responsive, and highly interactive personal portfolio website showcasing my academic background, technical skills, projects, and contact information. Built with modern web technologies and designed for optimal user experience with full Dark/Light theme support.

## Features

- **Interactive UI**: Smooth animations and transitions powered by Framer Motion.
- **Modern Design**: Designed to be responsive with a mobile-first approach, ensuring a perfect look on all devices (Mobile, Tablet, Desktop).
- **Dark/Light Mode**: Full theme toggle support across the entire application using native state context management.
- **Dynamic Projects Section**: Hover effects and detailed cards for showcasing technical work, including code and document links.
- **Timeline-based Education Section**: Visually appealing, chronological academic journey tracking.
- **Functional Contact Form**: Direct email integration for user queries.
- **Floating Actions**: Quick access to theme toggle and scroll-to-top functionality.

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [FontAwesome](https://fontawesome.com/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)

## Project Structure

- `src/Components/` - Reusable UI components including:
  - `Navbar.tsx` & `Footer.tsx` (Navigation & Footer links)
  - `About.tsx` (Personal Bio)
  - `Skills.tsx` (Programming languages, tools & circuit design skills)
  - `Projects.tsx` (Academic and personal projects showcase)
  - `Education.tsx` (Academic timeline)
  - `Contact.tsx` (Working contact form)
  - `FloatingActions.tsx` (Theme & Scroll to top toggle constraints)
- `src/data/personalData.ts` - Static data configuration managing portfolio content details.
- `src/ThemeContext.tsx` - Global state management for Dark/Light mode toggle.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abhiramrao777/abhiram-rao-portfolio.git
   cd abhiram-rao-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   *Note: Using npm is recommended to ensure package lock compatibility.*

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

5. Build for production:
   ```bash
   npm run build
   ```

## About Me

**Abhiram Rao**
*Electronics Enthusiast • Coder*

I am an enthusiastic Electronics and Communication Engineering student with a passion for power systems, circuit design, embedded systems, and coding.

- **GitHub**: [Abhiramrao777](https://github.com/Abhiramrao777)
- **LinkedIn**: [Abhiram Rao](https://www.linkedin.com/in/abhiram-rao-5b227928a)
