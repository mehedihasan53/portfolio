# Mehedi Hasan Emon - Portfolio

A modern, responsive portfolio website built with React, featuring smooth animations and a glassmorphism design.

## 🚀 Features

- **Modern Tech Stack**: React 18, Vite, Tailwind CSS
- **UI Components**: ShadCN UI for consistent, accessible components
- **Smooth Scrolling**: Lenis for buttery smooth scroll experience
- **Animations**: GSAP and Framer Motion for engaging interactions
- **Responsive Design**: Mobile-first approach with glassmorphism effects
- **Dark Theme**: Beautiful dark mode with gradient accents
- **Performance Optimized**: Fast loading and smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript (ES6+)
- **Styling**: Tailwind CSS, ShadCN UI
- **Animations**: GSAP, Framer Motion
- **Smooth Scrolling**: Lenis
- **Build Tool**: Vite
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mehedi-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # ShadCN UI components
│   ├── Navigation.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
├── hooks/
│   └── useLenis.js   # Smooth scrolling hook
├── lib/
│   └── utils.js      # Utility functions
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## 🎨 Key Features

### Smooth Scrolling
- Implemented with Lenis for natural, momentum-based scrolling
- Customizable easing and duration

### Animations
- **GSAP**: Complex timeline animations, scroll triggers
- **Framer Motion**: Component animations, hover effects, page transitions

### Glassmorphism Design
- Backdrop blur effects
- Transparent overlays with subtle borders
- Modern glass-like appearance

### Responsive Layout
- Mobile-first design approach
- Flexible grid systems
- Adaptive typography and spacing

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```js
colors: {
  primary: "#2b6cee", // Change primary color
  "background-dark": "#0a0f16", // Dark background
  // Add more custom colors
}
```

### Animations
Modify animation settings in component files:
- GSAP animations in `useEffect` hooks
- Framer Motion props on components
- CSS animations in `App.css`

### Content
Update personal information in each component:
- `Hero.jsx` - Main introduction
- `About.jsx` - Professional summary
- `Skills.jsx` - Technical skills
- `Projects.jsx` - Portfolio projects
- `Contact.jsx` - Contact information

## 📱 Sections

1. **Hero** - Introduction with animated text and social links
2. **About** - Professional summary with stats and skills
3. **Skills** - Technical expertise organized by category
4. **Projects** - Featured work with live demos and code links
5. **Contact** - Contact form and social media links

## 🎯 Performance

- Optimized images and assets
- Lazy loading for smooth performance
- Minimal bundle size with tree shaking
- Efficient animation rendering

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Contact

- **Email**: mehedihasan.codes3@gmail.com
- **LinkedIn**: [https://www.linkedin.com/in/mehedi-hasan-c3/]

---

Built with ❤️ by Mehedi Hasan Emon
