import React from "react";
import { useSelector } from "react-redux";

const popularCurrencies = [
  "USD",
  "EUR",
  "GBP",
  "JPY",
  "CAD",
  "INR",
  "CNY",
  "AUD",
  "CHF",
  "SGD",
];

const CurrencyTable = () => {
  const rates = useSelector((state) => state.currency.rates);

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Live Currency Table</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Currency</th>
            <th className="p-2">Rate (1 USD)</th>
          </tr>
        </thead>
        <tbody>
          {popularCurrencies.map((cur) => (
            <tr key={cur} className="border-t">
              <td className="p-2">{cur}</td>
              <td className="p-2">
                {rates[cur] ? rates[cur].toFixed(2) : "Loading..."}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyTable;
