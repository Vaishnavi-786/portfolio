# Vaishnavi R — Portfolio

A modern, responsive developer portfolio website.

---

## 📁 Folder Structure

```
portfolio/
├── index.html          ← Main HTML file
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Interactivity & animations
└── README.md           ← This file
```

---

## 🚀 Step-by-Step: Run in VS Code

### Step 1 — Install VS Code
Download from https://code.visualstudio.com if you haven't already.

### Step 2 — Open the Portfolio Folder
1. Open VS Code
2. Go to **File → Open Folder**
3. Select the `portfolio` folder you downloaded

### Step 3 — Install Live Server Extension
1. Click the **Extensions** icon on the left sidebar (or press `Ctrl+Shift+X`)
2. Search for **"Live Server"** by Ritwick Dey
3. Click **Install**

### Step 4 — Launch the Portfolio
1. Make sure `index.html` is open in the editor
2. Click **"Go Live"** in the bottom-right status bar  
   *(or right-click `index.html` → "Open with Live Server")*
3. Your browser will open at `http://127.0.0.1:5500`

Your portfolio is now live locally! 🎉

---

## ✏️ How to Customise

| What to Change | Where to Edit |
|---|---|
| Name, bio, links | `index.html` |
| Colors & fonts | `css/style.css` (`:root` variables at the top) |
| Animations & typing effect | `js/main.js` |
| Add a new project | Copy a `.project-card` block in `index.html` |

---

## 🎨 Color Tokens (css/style.css)

Edit the `:root` block to change the theme:

```css
--accent:   #7C6EFF;   /* Primary purple */
--accent2:  #C084FC;   /* Gradient end */
--bg:       #0D0F1A;   /* Background */
--text:     #E8EAF2;   /* Body text */
```

---

## 🌐 Deploy Online (Free)

### Option A — GitHub Pages
1. Push the folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Option B — Netlify (Easiest)
1. Go to https://netlify.com
2. Drag and drop the `portfolio` folder
3. Instantly live with a public URL!

---

## 📬 Contact Form
The contact form shows a success message on submit. To make it actually send emails,
integrate a free service like **Formspree** (https://formspree.io):

1. Sign up at formspree.io
2. Create a form and get your endpoint URL
3. In `index.html`, update the form tag:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
4. Remove the `id="contactForm"` and the JS form handler

---

Built with ❤️ · Vaishnavi R · 2025
