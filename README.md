# John Son - Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS. This site showcases my professional experience, skills, and contact information for potential employers and collaborators.

## 🚀 Features

- **Responsive Design**: Mobile-first approach that works seamlessly on all devices
- **Dark/Light Theme**: Built-in theme toggle for user preference
- **Modern Tech Stack**: React, Vite, Tailwind CSS, React Router
- **Contact Form**: Functional contact form with validation
- **Resume Downloads**: Both PDF and DOCX format downloads available
- **Component Library**: Reusable UI components with shadcn/ui
- **Accessibility**: A11y-focused development practices

## 🛠️ Tech Stack

- **Framework**: React 18 with React Router
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library
- **Form Handling**: React Hook Form with Zod validation
- **Theme Management**: Custom theme provider with system preference detection
- **Icons**: Lucide React icons

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── Navbar.jsx    # Navigation component
│   ├── Footer.jsx    # Footer component
│   └── theme-provider.jsx  # Theme context
├── pages/            # Page components
│   ├── Home.jsx      # Landing page
│   ├── About.jsx     # About me page
│   ├── Resume.jsx    # Resume experience page
│   └── Contact.jsx   # Contact page
├── lib/
│   └── utils.ts      # Utility functions
└── main.jsx          # App entry point
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/personal-website.git
   cd personal-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix linting issues

## 🎨 Design System

The website uses a custom design system built on top of Tailwind CSS with:
- Custom color palette with CSS variables
- Consistent spacing and typography scales
- Dark mode support with automatic system preference detection
- Responsive breakpoints for mobile-first design

## 📱 Pages Overview

- **Home**: Professional summary and key highlights
- **About**: Detailed background and expertise areas
- **Resume**: Complete work experience and downloadable resumes
- **Contact**: Contact information and contact form

## 🌟 Key Features

### Theme System
- Automatic system preference detection
- Manual theme toggle with smooth transitions
- Persistent theme selection across sessions

### Contact Form
- Client-side validation using Zod schemas
- Form state management with React Hook Form
- Accessibility-focused form design

### Resume Downloads
- Both PDF and DOCX formats available
- Professional file naming conventions
- Download buttons with proper accessibility labels

## 🚀 Deployment

The site is optimized for static site deployment and can be hosted on:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## 🤝 Contributing

This is a personal portfolio website. For questions or collaboration opportunities, please use the contact information provided on the site.

## 📄 License

This project is proprietary and not open source.

---

**Built with ❤️ by John Son**