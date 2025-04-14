import React, { useEffect } from "react";
import Converter from "./components/Converter";
import TrendChart from "./components/TrendChart";
import CurrencyTable from "./components/CurrencyTable";
import OfflineBanner from "./components/OfflineBanner";
import { useDispatch } from "react-redux";
import { setOffline } from "./features/currencySlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  // Connectivity detection
  useEffect(() => {
    const handleOnline = () => dispatch(setOffline(false));
    const handleOffline = () => dispatch(setOffline(true));

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Check once on load
    if (!navigator.onLine) {
      dispatch(setOffline(true));
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
        💱 Currency Converter with Prediction
      </h1>

      {/* Show Offline Warning */}
      <OfflineBanner />

      <div className="grid gap-6 md:grid-cols-2">
        {/* Left: Converter + Chart */}
        <div className="space-y-6">
          <Converter />
          <TrendChart />
        </div>

        {/* Right: Real-Time Currency Table */}
        <CurrencyTable />
      </div>

      {/* Toasts for error messages */}
      <ToastContainer />
    </div>
  );
}

export default App;
