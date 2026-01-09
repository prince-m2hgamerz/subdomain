# M2HSubDomain - Vercel-Inspired Landing Page

A premium, high-performance landing page consistent with the "Geist" design system.

## 🚀 Quick Start

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Start Development Server**
    ```bash
    # Watch for CSS changes
    npm run dev

    # In a separate terminal, serve the file
    python -m http.server 8000
    ```

3.  **Build for Production**
    ```bash
    npm run build
    ```

## 🛠 Deployment

This project is optimized for [Vercel](https://vercel.com).

1.  Push this code to a GitHub repository.
2.  Import the repository into Vercel.
3.  Vercel will automatically detect the configuration.
    -   **Build Command**: `npm run build`
    -   **Output Directory**: `.` (Root)

## 🎨 Design System

-   **Font**: Inter (UI) & JetBrains Mono (Code)
-   **Colors**: 
    -   Background: `#0a0a0a`
    -   Accent: `#0070f3` (Vercel Blue)
-   **Effects**: Glassmorphism, Fade-in animations, Smooth scrolling.

## 📁 Project Structure

-   `index.html`: Main entry point.
-   `styles.css`: Source CSS with Tailwind directives.
-   `output.css`: Compiled production CSS.
-   `tailwind.config.js`: Design tokens and theme configuration.
