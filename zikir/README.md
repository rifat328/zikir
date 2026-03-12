# 📿 Zikir Counter

A modern, minimalist, and highly localized digital Tasbih built with Next.js and Tailwind CSS v4. This app is designed for spiritual focus, featuring multi-language support, persistent progress, and tactile haptic feedback.

## ✨ Features

- 🌍 Universal Localization: Full support for English, Arabic, Bangla, Urdu, and Turkish.

- 🔢 Localized Numerals: Automatic conversion of digits to local scripts (e.g., ১, ২, ৩ or ١, ٢, ٣) using the Intl API.

- 💾 Persistent State: Your counts and language preferences are automatically saved to localStorage, surviving page refreshes.

- 📳 Haptic Feedback: Crisp vibration patterns for every click and special "Success" pulses for milestones (Android/Web).

- 🔄 Multi-Zikir Counting: Toggle multiple Zikirs to increment or decrement them simultaneously.

- 📜 Localized Hadith: Contextual Hadith regarding the virtues of Zikir, translated across all supported languages.

- 🎨 Premium UI: Glassmorphism header, font-orbitron for the counter, and traditional fonts like Amiri for Arabic/Urdu scripts.

## 🛠️ Tech Stack

- Framework: Next.js (App Router)
- Styling: Tailwind CSS v4
- Icons: Lucide React
- Components: Shadcn UI (Radix Primitives)
- Effects: react-confetti & react-use

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm / pnpm / yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/zikir-counter.git

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Run the development server:

   ```bash
   npm run dev

   ```

4. Open http://localhost:3000 in your browser.

## 🧠 Technical Deep Dive

**The "Hydration-Safe" Storage Pattern**
To prevent Next.js hydration mismatches when accessing localStorage, the app utilizes a "Gatekeeper" state logic. Data is only loaded and saved after the component has mounted on the client.

**Internationalization (i18n) Logic**
Instead of using heavy libraries, The app utilize a lightweight translations.js dictionary. Layout direction (rtl vs ltr) and specific font families are injected dynamically based on the selected locale.

```bash
// Example Translation Object
ar: {
  name: "العربية",
  dir: "rtl",
  font: "font-amiri",
  locale: "ar-EG",
  // ...
}
```

Haptic Patterns

- The app uses the Web Vibrations API to provide a native-app feel:
- Single Click: 10ms (Crisp tick)
- Milestone (Every 100): [30, 30, 30, 30, 30] (Triple tap)
- Goal Met (400+): [100, 50, 100] (Celebratory pulse)

## 📁 Project Structure

```bash
├── components/
│ ├── ui/ # Shadcn primitives
│ ├── Header.js # Language & Reset controls
│ └── Zikir.js # Individual Zikir cards
├── translations.js # Multi-language dictionary
├── app/
│ ├── globals.css # Tailwind v4 configuration
│ └── page.js # Main logic and state management
└── public/ # Static assets
```

## 📜 License

This project is open-source and available under the GNU GENERAL PUBLIC LICENSE
