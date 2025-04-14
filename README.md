# 💱 Currency Converter with Prediction

A fully responsive React web app that provides real-time currency conversion, a 7-day exchange rate trend graph, and a live currency rate table. Built for an interview project to demonstrate advanced frontend and state management skills.

---

## 🚀 Features

- 🌐 **Live Currency Conversion** using ExchangeRate API
- 📊 **7-Day Exchange Rate Trend Graph** with Recharts (simulated data for free tier)
- 💹 **Real-Time Currency Table** for 10 popular currencies
- 📴 **Offline Mode** with Redux Persist and `navigator.onLine`
- 🔁 **Automatic Data Refetching** when the user comes back online
- ❗ **Retry Logic** for API failures using Axios
- 📱 **Mobile-Responsive UI** using Tailwind CSS
- 🔔 **User Notifications** using React Toastify

---

## 🛠️ Tech Stack

- **React.js** with Hooks
- **Vite** (for fast build/dev experience)
- **Redux Toolkit** + **Redux Persist**
- **Axios** for API interactions
- **Recharts** for charts
- **Tailwind CSS** for styling
- **React Toastify** for in-app notifications

---

## 📦 How to Set Up and Run the Project (Vite Setup)

### 1. Clone the Repository

```bash
git clone https://github.com/Prasoon321/currency-converter-app.git
cd currency-converter-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Your API Key

Create a `.env` file in the root of the project and add your [ExchangeRate API](https://www.exchangerate-api.com) key:

```env
VITE_EXCHANGE_API_KEY=your_api_key_here
```

> ⚠️ Note: Vite requires all environment variables to be prefixed with `VITE_`

### 4. Run the App in Development Mode

```bash
npm run dev
```

Then open your browser and navigate to:

```
http://localhost:5173
```

---

## 📁 Project Structure

```
src/
├── app/                  # Redux store configuration
├── components/           # UI components (Converter, TrendChart, etc.)
├── features/             # Redux slice (currencySlice.js)
├── utils/                # Axios instance with retry logic
├── App.jsx               # Main layout and router
└── main.jsx              # App entry point (Vite)
```

---

## 🔄 Offline Mode Behavior

- Latest fetched data is stored using Redux Persist.
- When offline, the app uses stored data and shows a yellow warning banner.
- When reconnected, the app automatically refetches data and shows a success toast.

---

## 🧪 Simulated Data for Demo

The 7-day trend chart uses hardcoded/simulated data for `USD → INR` because the free tier of ExchangeRate API does **not** support historical trends.

For real historical support, consider:

- [exchangerate.host](https://exchangerate.host)
- [open-meteo.com](https://open-meteo.com)

---

## ⚙️ Environment Summary

### Required Tools

- Node.js v18+
- npm v9+

### Commands Summary

```bash
# Install packages
npm install

# Run dev server
npm run dev

# Build for production (optional)
npm run build
```

---

## 📨 Contact

Feel free to reach out for questions, contributions, or feedback:

**Author**: Prasoon Sengar  
**Email**: jbprasoon@gmail.com  
**GitHub**: [github.com/Prasoon321](https://github.com/Prasoon321)

---

## 📃 License

This project is open-source and available under the MIT License.
