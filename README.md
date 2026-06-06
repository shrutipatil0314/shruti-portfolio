# Shruti Patil — DevOps Portfolio

A pixel art / retro 8-bit themed portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🗂 Project Structure

```
/app
  layout.tsx          — Root layout, fonts, metadata
  page.tsx            — Main page, assembles all sections

/components
  Navbar.tsx          — Fixed top nav with mobile drawer
  Hero.tsx            — Full-viewport hero with typewriter
  About.tsx           — Bio, photo frame, stat cards
  Skills.tsx          — RPG skill tree with HP bars
  Experience.tsx      — Quest log timeline
  Projects.tsx        — Side quests project cards
  Contact.tsx         — Dialogue box contact form
  Footer.tsx          — Maroon footer with socials
  Sticker.tsx         — Reusable floating emoji sticker
  PixelTerminal.tsx   — Animated fake CLI terminal

/styles
  globals.css         — CSS vars, pixel classes, animations
```

## 🎨 Color Palette

| Name         | Hex       |
|--------------|-----------|
| Primary Red  | `#780000` |
| Dark Red     | `#3d0000` |
| Cream BG     | `#FFF6F2` |
| Navy Accent  | `#1a3a6b` |

## 🔧 Customization

- **Personal info**: Update name, bio, and contact details in each component
- **Projects**: Edit the `projects` array in `components/Projects.tsx`
- **Experience**: Edit the `quests` array in `components/Experience.tsx`
- **Skills**: Edit the `categories` array in `components/Skills.tsx`
- **Photo**: Replace the photo placeholder in `About.tsx` with a real `<Image />`

## 📝 Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- Google Fonts: Press Start 2P + VT323
