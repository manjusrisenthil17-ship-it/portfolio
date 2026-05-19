# Portfolio Website for Manjusri S

This is a modern, professional, and fully responsive personal portfolio website built with Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Lucide React, React Hook Form, and Zod.

## Features

- Modern, clean, and minimal design
- Fully responsive (mobile, tablet, desktop)
- Light and dark mode toggle
- Sticky navbar with smooth scrolling
- Framer Motion animations
- Interactive project cards
- Skills section with badges/progress
- Professional typography (Inter font)
- Download Resume button
- Contact form with validation
- Social links (GitHub, LinkedIn placeholders)
- Scroll-to-top button
- SEO metadata & Open Graph tags
- Sitemap and robots.txt

## Project Structure

- `app/` — Next.js App Router pages and layouts
- `components/` — Reusable UI components
- `data/` — Static TypeScript data files
- `lib/` — Utility functions
- `hooks/` — Custom React hooks
- `public/` — Static assets, favicon, robots.txt, sitemap.xml
- `styles/` — Tailwind and global CSS

## Getting Started

### 1. Install dependencies

```
npm install
```

### 2. Run the development server

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Build for production

```
npm run build
npm start
```

## Deployment (AWS EC2 + Nginx + PM2)

1. **Build the app:**
   ```
   npm run build
   ```
2. **Install PM2 globally:**
   ```
   npm install -g pm2
   ```
3. **Start the app with PM2:**
   ```
   pm2 start npm --name "portfolio" -- start
   ```
4. **Set up Nginx as a reverse proxy:**
   - Point Nginx to `localhost:3000`.
   - Enable SSL with Let's Encrypt (see below).
5. **Enable SSL (Let's Encrypt):**
   - Use Certbot to generate and renew certificates.

## Customization

- Update content in `data/` files.
- Replace social links and resume file in `public/`.

## License

MIT
