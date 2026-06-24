# WIBLY 🌊

WIBLY is a premium, modern web design and development studio portfolio. Built with an incredibly sleek dark-mode aesthetic, micro-animations, and performance in mind.

## ✨ Features
- **Modern Tech Stack**: React, Tailwind CSS, Framer Motion, and Lucide Icons.
- **Premium Design**: Dark aesthetic with custom "Flame" and "Bone" color accents.
- **Advanced Scrollspy**: Perfect viewport-based scroll tracking for the navigation bar.
- **Floating Hero Animations**: Staggered infinite float effects for a premium feel.
- **International Phone Input**: Built-in `react-phone-number-input` with auto-formatting, country code search, and strict validation.
- **Serverless Contact Form**: Direct integration with Google Apps Script to save leads securely into Google Sheets and instantly dispatch email notifications.

## 🚀 Quick Start

### 1. Install Dependencies
Navigate into the frontend directory and install the required packages:
```bash
cd frontend
npm install
```

### 2. Run the Development Server
```bash
npm run dev
# or 
npm start
```
The application will launch locally (typically at `http://localhost:3000` or `http://localhost:3002`).

## 🛠️ Deployment (Vercel)
This project is perfectly optimized to be deployed to [Vercel](https://vercel.com).
1. Connect this GitHub repository to your Vercel account.
2. The framework preset (Create React App) will be automatically detected.
3. Deploy!

## 📞 Contact Form Backend
The contact form uses a `fetch` POST request to securely pipe data into a Google Sheet using Google Apps Script. 
If you duplicate this repository, you must create your own Google Sheet and replace the `GOOGLE_SCRIPT_URL` inside `frontend/src/pages/Home.jsx` with your own Apps Script Web App URL.
