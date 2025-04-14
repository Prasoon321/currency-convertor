import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setRates, setLoading, setError } from "../features/currencySlice";

const Converter = () => {
  const dispatch = useDispatch();
  const rates = useSelector((state) => state.currency.rates);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      dispatch(setLoading(true));
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/7659fd736798c40b04b299de/latest/${fromCurrency}`
        );
        dispatch(
          setRates({
            rates: response.data.conversion_rates,
            time: response.data.time_last_update_utc,
          })
        );
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setError("Failed to fetch exchange rates"));
        dispatch(setLoading(false));
      }
    };
    fetchRates();
  }, [fromCurrency, dispatch]);

  useEffect(() => {
    if (rates[toCurrency]) {
      setResult((amount * rates[toCurrency]).toFixed(2));
    }
  }, [amount, toCurrency, rates]);

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Currency Converter</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="number"
          className="border rounded p-2 w-full"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          className="border rounded p-2"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <select
          className="border rounded p-2"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4 text-lg">
        {result && `${amount} ${fromCurrency} = ${result} ${toCurrency}`}
      </div>
    </div>
  );
};

export default Converter;
