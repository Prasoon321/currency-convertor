import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const TrendChart = () => {
  const [data, setData] = useState([]);

  // Simulate past 7 days trend manually (static data or mimic trend)
  useEffect(() => {
    const simulatedData = [
      { date: "Day 1", rate: 83.2 },
      { date: "Day 2", rate: 82.7 },
      { date: "Day 3", rate: 82.9 },
      { date: "Day 4", rate: 83.0 },
      { date: "Day 5", rate: 82.5 },
      { date: "Day 6", rate: 82.8 },
      { date: "Today", rate: 83.1 },
    ];
    setData(simulatedData);
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">7-Day USD to INR Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="rate"
            stroke="#3b82f6"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendChart;
