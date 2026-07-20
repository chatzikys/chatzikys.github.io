# Portfolio Site — Usage Guide

This is your personal engineering portfolio, built with React + Vite. No backend, no database — everything is edited directly as files.

---

## Adding or Editing Projects

Projects are plain Markdown files located at:

```
artifacts/portfolio/src/content/projects/
```

Each file is one project. The filename (without `.md`) becomes the URL slug.
For example, `pump-control-panel.md` → `/projects/pump-control-panel`

### Frontmatter (required at the top of every project file)

```md
---
title: "Your Project Title"
description: "One sentence shown on the project list card."
tags: ["Tag1", "Tag2", "Tag3"]
date: "Month YYYY – Month YYYY"
status: "Complete"   ← or "In Progress"
---
```

### Body

Write normal Markdown below the frontmatter. Headings, bullet lists, bold text, and images all work.

---

## Adding Images to a Project

1. Copy your image file (`.jpg`, `.png`, etc.) into:
   ```
   artifacts/portfolio/public/projects/
   ```
   Create the `projects/` folder if it doesn't exist yet.

2. In your markdown file, reference it like this:
   ```md
   ![Caption text](/projects/your-image-name.jpg)
   ```

Images in the `public/` folder are served as static files and render automatically in the project detail page.

---

## Updating Your Personal Information

| What                        | File                                              |
|-----------------------------|---------------------------------------------------|
| Name, tagline, bio, links   | `artifacts/portfolio/src/pages/home.tsx`          |
| About page, current work    | `artifacts/portfolio/src/pages/about.tsx`         |
| Resume / CV content         | `artifacts/portfolio/src/pages/resume.tsx`        |
| Nav logo, footer            | `artifacts/portfolio/src/components/layout.tsx`   |

---

## Downloading the CV as PDF

1. Navigate to the **Resume** page in the site.
2. Click **Download PDF**.
3. In the browser print dialog, set:
   - **Destination:** Save as PDF
   - **Paper size:** A4
   - **Margins:** Default (the site sets its own via CSS)
   - **Background graphics:** Off (recommended — the dark theme is stripped automatically)

---

## Adding a Real Profile Photo

### On the About page

In `artifacts/portfolio/src/pages/about.tsx`, find the block with the `SC` initials and replace it with:

```tsx
<img
  src="/profile.jpg"
  alt="Stefanos Chatzikyriakou"
  className="w-full md:w-[250px] aspect-square object-cover border border-border"
/>
```

Place your photo at `artifacts/portfolio/public/profile.jpg`.

### On the CV (Resume page)

In `artifacts/portfolio/src/pages/resume.tsx`, find the `SC` placeholder in the header and replace the inner `<span>` with:

```tsx
<img src="/profile.jpg" alt="SC" className="w-full h-full object-cover print:grayscale" />
```

---

## Deploying

When you're ready to publish, click **Publish** in the Replit toolbar. The site will be live at your configured domain (e.g. `chatzikys.github.io` if you set up GitHub Pages, or a Replit deployment URL).
