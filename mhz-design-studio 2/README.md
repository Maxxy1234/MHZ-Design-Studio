# MHZ Design Studio - Website

Premium interior design studio website for MHZ Design Studio in Alor Setar, Kedah, Malaysia.

## Features

✨ **Pure HTML/CSS/JavaScript** - No frameworks, lightweight and fast  
📱 **Fully Responsive** - Mobile-first design for all devices  
🎬 **Hero Video** - Autoplay muted loop with dark overlay  
🖼️ **Portfolio Gallery** - Interactive modal with image galleries  
💬 **WhatsApp Integration** - Direct WhatsApp contact buttons  
🔍 **SEO Optimized** - Meta tags, schema markup, semantic HTML  
🌐 **Chinese Support** - Noto Sans SC font for multilingual content  
⚡ **Fast Loading** - Optimized static files, no server required  
🎨 **Smooth Animations** - Scroll effects and hover interactions  

## Project Structure

```
mhz-design-studio/
├── index.html              # Main page
├── css/
│   └── styles.css         # All styles and animations
├── js/
│   └── main.js            # All JavaScript functionality
├── images/                # Image assets folder
├── assets/                # Video and media files
├── pages/                 # Additional pages (optional)
├── vercel.json            # Vercel deployment config
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## Quick Start

### Local Development

1. **Clone or extract the project**
   ```bash
   cd mhz-design-studio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (with http-server)
   npx http-server
   ```

3. **Visit** `http://localhost:8000`

## Customization

### Update Company Information

Edit `index.html` to update:
- Company name and logo
- Contact information
- Business hours
- Address and phone number
- WhatsApp number (currently: +60 11-1060 4905)

### Modify Colors

Edit `css/styles.css` CSS variables (lines 7-18):
```css
:root {
    --cream: #F4EBD8;
    --beige: #E6D4B8;
    --terracotta: #A7633D;
    /* ... other colors ... */
}
```

### Add Portfolio Projects

Edit `js/main.js` portfolio data (lines 6-70):
```javascript
const portfolioData = [
    {
        id: 1,
        title: 'Your Project Title',
        category: 'Category',
        description: 'Project description',
        images: ['image1.jpg', 'image2.jpg'],
        materials: 'Materials used',
        concept: 'Design concept'
    },
    // Add more projects...
];
```

### Replace Placeholder Images

1. **Portfolio images**: Replace placeholder URLs in `js/main.js`
2. **Hero video**: Upload video to `assets/hero-video.mp4`
3. **Other images**: Add to `images/` folder and reference in HTML

### Update Typography

Google Fonts are loaded in `index.html`. Current fonts:
- **Playfair Display** - Headlines (serif)
- **Lato** - Body text (sans-serif)
- **Montserrat** - Accents (sans-serif)
- **Noto Sans SC** - Chinese characters

To change fonts, edit the Google Fonts link in `<head>`.

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/mhz-design-studio
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Custom Domain**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain
   - Follow DNS setup instructions

### Deploy to Netlify

1. **Connect GitHub** at [netlify.com](https://netlify.com)
2. **Select repository**
3. **Build settings**: Leave empty (static site)
4. **Deploy**

### Deploy to GitHub Pages

1. **Push to GitHub**
2. **Go to Settings → Pages**
3. **Select "Deploy from a branch"**
4. **Choose main branch**
5. **Save**

Your site will be live at `https://yourusername.github.io/mhz-design-studio`

## SEO Optimization

✅ Meta title and description  
✅ Open Graph tags  
✅ Local business schema  
✅ Semantic HTML headings  
✅ Alt text on images  
✅ Mobile responsive  
✅ Fast loading speed  
✅ Sitemap ready  

### Add Sitemap

Create `sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com</loc>
    <lastmod>2024-04-28</lastmod>
  </url>
</urlset>
```

### Add robots.txt

Create `robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

## Performance Tips

- 🖼️ Optimize images: Use WebP format where possible
- 🎬 Compress video: Keep hero video under 5MB
- ⚡ Minify CSS/JS: Use online tools for production
- 🔄 Enable caching: Use Vercel's default caching
- 📊 Monitor: Use Google PageSpeed Insights

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## Features Breakdown

### Navigation
- Sticky header with smooth scroll
- Mobile hamburger menu
- Active state indicators
- Smooth anchor scrolling

### Hero Section
- Full-screen video background
- Dark overlay for text readability
- Responsive headline and CTA buttons
- Autoplay muted video with fallback

### Portfolio
- Interactive card grid
- Hover zoom effects
- Click to open modal
- Image gallery in modal
- WhatsApp CTA in modal

### Contact Form
- Direct WhatsApp integration
- Form validation
- Pre-filled message template
- Mobile-friendly form

### Floating Elements
- Sticky WhatsApp button
- Always-visible CTA
- Smooth animations
- Mobile optimized

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Mobile touch-friendly buttons

## License

© 2024 MHZ Design Studio. All rights reserved.

## Support

For issues or questions:
- 📞 Phone: +60 11-1060 4905
- 💬 WhatsApp: https://wa.me/601110604905
- 📍 Location: No.25 B, Batu 6 1/4, Jalan Gunong Keriang, 06570 Alor Setar, Kedah

---

**Last Updated:** April 28, 2024  
**Version:** 1.0.0  
**Status:** Production Ready
