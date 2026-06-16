# 🌸 SochFool

> *The more you overthink (soch), the more foolish (fool) you feel.*  
> A personal website for raw thoughts, trip diaries, and everyday moments.

---

## 🔗 Live Site

**[sochfool.github.io](https://your-username.github.io/sochfool)**  
*(Replace with your actual GitHub Pages URL once deployed)*

---

## 📁 Project Structure

```
sochfool/
├── index.html       → Home page
├── about.html       → About Me
├── trips.html       → Trip Diaries
├── merch.html       → Merch / Coming Soon
├── style.css        → Global stylesheet (all pages share this)
├── script.js        → Shared JS — dark mode, nav highlighting
├── assets/          → Images used across the site
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ...
└── README.md        → This file
```

---

## ✨ Features

- 🌙 **Dark mode** — persists across all pages via localStorage
- 📱 **Fully responsive** — works on mobile, tablet, and desktop
- 🎨 **Consistent design** — one shared CSS file with CSS variables for light/dark theming
- 🔗 **All pages connected** — unified navbar on every page
- 🛍️ **Merch coming soon page** — countdown timer + email notify form
- 🗺️ **Trip Diaries** — photo cards from travels
- 📸 **Photo collage** — grid layout on home and trips pages

---

## 🛠️ Built With

- HTML5
- CSS3 (custom properties / CSS variables)
- Vanilla JavaScript
- [Bootstrap 5.3](https://getbootstrap.com/)
- [Google Fonts](https://fonts.google.com/) — Playfair Display + DM Sans

---

## 🚀 How to Run Locally

No build tools needed. Just open the files directly:

1. Clone or download this repository
2. Open `index.html` in your browser
3. That's it — all pages work via relative links

```bash
git clone https://github.com/your-username/sochfool.git
cd sochfool
# Open index.html in your browser
```

---

## 🌐 Deploying to GitHub Pages

1. Push this project to a GitHub repository
2. Go to your repo → **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose branch: `main` → folder: `/ (root)`
5. Click **Save**
6. Your site will be live at `https://your-username.github.io/repository-name`

> ⏳ It can take 1–2 minutes for the site to go live after first deploy.

---

## 📄 Pages Overview

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Intro, carousel, content cards, photo collage, socials |
| About Me | `about.html` | Story behind SochFool, creator bio, values |
| Trips | `trips.html` | Travel memory cards + photo collage |
| Merch | `merch.html` | Coming soon — countdown, teaser items, notify form |

---

## 🎨 Customisation Guide

### Changing the accent color
Open `style.css` and update the `--accent` variable:
```css
:root {
  --accent: #d63384; /* ← change this to any color you like */
}
```
Both light and dark mode will update automatically.

### Adding a new trip card
Open `trips.html` and copy this block inside `.sf-card-grid`:
```html
<div class="sf-card">
  <img src="assets/your-photo.jpg" alt="Trip Name" />
  <div class="sf-card-body">
    <h5>Trip Name, Year</h5>
    <p>Your memory, vibe, or small story from this place.</p>
  </div>
</div>
```

### Adding new photos to the collage
Open `index.html` or `trips.html` and add inside `.sf-collage`:
```html
<img src="assets/your-new-photo.jpg" alt="Memory" />
```

### Updating the merch countdown date
Open `merch.html` and find this line:
```javascript
const launchDate = new Date('2025-12-01T00:00:00').getTime();
```
Change `2025-12-01` to your actual launch date.

### Updating social links
Open `index.html`, find the socials section and update the `href` values:
```html
<a href="https://www.youtube.com/@yourchannel" class="sf-social-link">📺 YouTube</a>
<a href="https://instagram.com/yourhandle" class="sf-social-link">📸 Instagram</a>
```

---

## 📸 Assets

All images live in the `/assets` folder. The site currently uses `1.jpg` through `8.jpg`.  
You can add more — just reference them in the HTML as `assets/your-image.jpg`.

**Recommended image sizes:**
| Use | Recommended Size |
|-----|-----------------|
| Carousel | 1400 × 480 px |
| Card thumbnails | 600 × 400 px |
| Collage photos | 500 × 400 px |
| Creator portrait | 400 × 400 px (square) |

---

## 🙋‍♀️ About the Creator

**Neha Nayak** — Founder & Writer of SochFool.  
She writes from late-night spirals and daydreams, and believes the best way to stop overthinking is to write it all down.

---

## 📃 License

This project is personal and not open for reuse without permission.  
© 2025 SochFool. All rights reserved.
