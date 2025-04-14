// OfflineBanner.jsx
import React from "react";
import { useSelector } from "react-redux";

const OfflineBanner = () => {
  const isOffline = useSelector((state) => state.currency.isOffline);

  return (
    isOffline && (
      <div className="bg-yellow-100 border border-yellow-300 text-yellow-700 p-2 rounded mb-4 text-center">
        ⚠️ You’re offline — showing last known exchange rates.
      </div>
    )
  );
};

export default OfflineBanner;
