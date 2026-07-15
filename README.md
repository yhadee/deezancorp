# Deezan Corp - Corporate Profile Website

A complete, modern, responsive, multi-page company profile website designed for **Deezan Corp**, a professional software engineering studio.

This website is **production-ready**, fully optimized for **GitHub Pages** deployment, and structured to meet compliance requirements for **Google Play Console Organization account verification**.

---

## 📁 Directory Structure

```text
webcompany/
├── 404.html                  # Custom 404 Error Page
├── README.md                 # Deployment & Developer Guide
├── about.html                # About Page (Mission, Vision, Timeline, Team)
├── contact.html              # Contact Page (Form, Map, Address, Emails)
├── index.html                # Home Page (Hero, Stats, Process, FAQ)
├── manifest.json             # Web App Manifest
├── portfolio.html            # Applications Portfolio Showcase Grid
├── privacy-policy.html       # Google Play Compliant Privacy Policy
├── robots.txt                # Search Engine Crawler Configurations
├── sitemap.xml               # SEO Search Sitemap
├── terms-of-service.html     # Software Product Terms of Service
└── assets/
    ├── css/
    │   └── style.css         # Core Design System, Variables & Keyframes
    ├── js/
    │   └── main.js           # Interactive Counters, Filters & Form Validation
    └── images/
        ├── 404-illustration.svg
        ├── about-illustration.svg
        ├── app-commerce.svg  # Portfolio App Icon
        ├── app-edu.svg       # Portfolio App Icon
        ├── app-finance.svg   # Portfolio App Icon
        ├── app-health.svg    # Portfolio App Icon
        ├── avatar-cdo.svg    # Creative Director Avatar
        ├── avatar-ceo.svg    # CEO Avatar
        ├── avatar-cto.svg    # CTO Avatar
        ├── contact-illustration.svg
        ├── hero-illustration.svg
        └── logo.svg          # scalability vector & scalable favicon
```

---

## ✨ Features Implemented

*   **Premium Tech Stack:** Pure HTML5, CSS3, Bootstrap 5 (CDN), and Vanilla JavaScript only. Zero backend, zero bundlers, zero dependencies.
*   **Modern Light Palette:** A clean, vibrant blue, teal, and white aesthetic designed to make a premium, state-of-the-art first impression.
*   **Fully Responsive & Accessible:** Fully mobile-first scaling, custom CSS grid/flex structures, screen-reader helpers (`sr-only`), and semantic HTML5 anchors.
*   **Interactive Components:**
    *   Sticky Glassmorphism Navbar with hamburger mobile toggles.
    *   Vanilla JS animated statistics counter triggered as elements scroll into view.
    *   Interactive portfolio filters allowing users to switch category collections smoothly.
    *   Form-validation listener giving instant feedback via a custom toast notification popup.
*   **Royalty-Free SVG Vectors:** Built-in crisp vector illustrations and corporate team avatars that load instantly and scale perfectly on high-definition displays.
*   **Full SEO Optimization:** Open Graph and Twitter Card metadata, canonical URLs on every page, custom descriptions, and JSON-LD Organization Structured Data.

---

## 🛠️ Google Play Developer Verification Readiness

When establishing or verifying a **Google Play Console Organization Account**, Google requires a professional, verifiable developer website showing a high level of legitimacy and security. This repository is built specifically to pass this audit:

1.  **Verifiable Corporate Identifiers:** Identical placeholders for the company name (**Deezan Corp**), registered address (**Jakarta, Indonesia**), and business email address (**yhadee@gmail.com**) are synced across the header, footer, contact form, and legal documents.
2.  **Compliant Legal Pages:** Includes a full, detailed [Privacy Policy](file:///Users/supriyanto/Desktop/MyData/WebsiteOrganization/webcompany/privacy-policy.html) addressing data collection, biometric logins, storage permissions, third-party SDK transparency (AdMob, Firebase, Google Play Services), and account deletion request routes. It also has a detailed [Terms of Service](file:///Users/supriyanto/Desktop/MyData/WebsiteOrganization/webcompany/terms-of-service.html).
3.  **App Distribution Context:** The [Applications Portfolio](file:///Users/supriyanto/Desktop/MyData/WebsiteOrganization/webcompany/portfolio.html) contains mock applications with tech tags and Google Play badges, establishing a clear history of Android application development.

---

## 🚀 How to Deploy on GitHub Pages

Because the codebase uses strictly relative pathways (`./assets/...` and `./about.html`), the website works immediately when hosted inside a subfolder or root domain.

### Step 1: Create a GitHub Repository
1.  Log in to your GitHub account and create a new repository (e.g., `webcompany` or `developer-profile`).
2.  Leave it public. Do not initialize it with a README or gitignore (we already have them).

### Step 2: Push the Files to GitHub
Open your terminal inside this directory and run:
```bash
git init
git add .
git commit -m "Initial commit: Production-ready Deezan Corp corporate profile"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1.  Navigate to your repository on GitHub.
2.  Go to the **Settings** tab.
3.  In the left sidebar, under the "Code and automation" section, click on **Pages**.
4.  Under **Build and deployment**, select **Deploy from a branch** in the Source dropdown.
5.  Under **Branch**, select **main** and folder **/(root)**, then click **Save**.
6.  Wait 1–2 minutes. GitHub will generate a green notification showing your live URL (e.g., `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`).

---

## 🖥️ Local Preview

To test and preview the website locally without git or remote hosting:

*   **Option A:** Double-click the `index.html` file in your system file explorer. It will open directly in your web browser.
*   **Option B (Recommended for testing service workers/manifests):** Spin up a simple HTTP server using Python or Node.js.
    ```bash
    # Python 3
    python -m http.server 8000
    
    # Node.js (if 'serve' package is installed)
    npx serve
    ```
    Then visit `http://localhost:8000` or `http://localhost:3000` in your web browser.
