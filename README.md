# SeenThem Website

Official website for the SeenThem app - Your personal concert companion for tracking artists and discovering live music experiences.

## 🎨 Color Scheme

- **Deep Purple**: `#6B2C91` - Primary brand color
- **Electric Blue**: `#00D4FF` - Accent and highlight color
- **Dark Background**: `#1A1A1A` - Main background color

## 🚀 Tech Stack

- **React 18.3+** - Modern UI library with hooks
- **Vite** - Fast build tool and development server
- **CSS3** - Custom styling with CSS variables
- **HTML5** - Semantic markup

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd SeenThem-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
SeenThem-website/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation header with sticky behavior
│   │   ├── Hero.jsx         # Hero section with CTA
│   │   ├── Features.jsx     # Features showcase grid
│   │   ├── About.jsx        # About section with company info
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer with links
│   ├── App.jsx              # Main app component
│   ├── App.css              # App-level styles
│   ├── index.css            # Global styles and CSS variables
│   └── main.jsx             # App entry point
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
└── package.json             # Project dependencies
```

## 🎯 Features

- **Responsive Design** - Mobile-first approach, works on all devices
- **Smooth Scrolling** - Seamless navigation between sections
- **Animated Elements** - Subtle animations and hover effects
- **Modern UI** - Clean, professional design with gradient accents
- **Contact Form** - Functional contact form (ready for backend integration)
- **Performance Optimized** - Fast loading with Vite

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.jsx`
3. Style it using CSS modules or inline in the component's CSS file

### Updating Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --deep-purple: #6B2C91;
  --electric-blue: #00D4FF;
  --dark-background: #1A1A1A;
  /* Add more variables as needed */
}
```

### Modifying Content

- **Hero Section**: Edit `src/components/Hero.jsx`
- **Features**: Update the `features` array in `src/components/Features.jsx`
- **About**: Modify content in `src/components/About.jsx`
- **Contact Info**: Update in `src/components/Contact.jsx`

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### Deploy to Netlify, Vercel, or GitHub Pages

1. Connect your repository to your hosting platform
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2025 SeenThem. All rights reserved.

## 🤝 Contributing

This is a private project for the SeenThem app. For questions or contributions, please contact the development team.

## 📧 Contact

- Email: support@seenthem.com
- Social: @SeenThemApp

---

Made with ❤️ for music fans
