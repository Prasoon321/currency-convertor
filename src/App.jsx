import React, { useEffect } from "react";
import Converter from "./components/Converter";
import TrendChart from "./components/TrendChart";
import CurrencyTable from "./components/CurrencyTable";
import OfflineBanner from "./components/OfflineBanner";
import { useDispatch } from "react-redux";
import { setOffline, setRates } from "./features/currencySlice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  // Connectivity detection + auto refetch when online
  useEffect(() => {
    const handleOnline = async () => {
      dispatch(setOffline(false));

      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/${
            import.meta.env.VITE_EXCHANGE_API_KEY
          }/latest/USD`
        );

        dispatch(
          setRates({
            rates: response.data.conversion_rates,
            time: response.data.time_last_update_utc,
          })
        );

        toast.success("🔄 You're back online! Exchange rates updated.");
      } catch (error) {
        console.error("Auto-refetch failed:", error);
        toast.error("⚠️ Back online, but failed to update exchange rates.");
      }
    };

    const handleOffline = () => {
      dispatch(setOffline(true));
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

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

      {/* Toasts for messages */}
      <ToastContainer />
    </div>
  );
}

export default App;
