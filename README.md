# COS 106 — Student Portfolio and Academic Management Website

A responsive five-page student portfolio built with HTML5, external CSS and vanilla JavaScript.

## Pages
- `index.html` — Home and welcome page
- `about.html` — Education, aspirations, skills and interests
- `projects.html` — Three sample project cards
- `planner.html` — Add, complete, delete and clear completed tasks
- `contact.html` — Contact form with required-field, email and digits-only phone validation

## Folder structure
```text
COS106_Student_Portfolio/
├── index.html
├── about.html
├── projects.html
├── planner.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── profile-placeholder.svg
│   ├── project-portfolio.svg
│   ├── project-planner.svg
│   └── project-security.svg
└── README.md
```

## Run locally
Open `index.html` in a browser. No build tools or packages are required. For a local development server, use VS Code with the Live Server extension.

## Personalise before submission
1. Replace `assets/profile-placeholder.svg` with your own suitable photograph. Keep the filename `profile-placeholder.svg` only if you use an SVG; for a JPG/PNG photo, update the image path in `index.html`.
2. Check your name, course, educational history and career goals.
3. Replace the sample projects with projects you have actually completed, and add your own screenshots and working links.
4. Add your real email and phone number on `contact.html`.
5. Test every page, planner action and contact validation on desktop and mobile.

## Publish with GitHub Pages
1. Sign in to GitHub and create a new repository, for example `cos106-student-portfolio`.
2. Upload all files and folders in this project. Ensure `index.html` is in the repository root.
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to publish. Copy the website URL shown in the Pages section for your assignment submission.

## Functionality notes
- Planner tasks are stored in the browser's `localStorage` on the device/browser being used.
- The contact form performs client-side validation only. A real message-delivery service or backend would be needed to send messages.
- The sample project cards are illustrative starter content, not a claim that those projects have been independently completed.
