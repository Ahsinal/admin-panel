import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Jan",
    user: 2400,
  },
  {
    name: "Feb",
    user: 1398,
  },
  {
    name: "March",
    user: 9800,
  },
  {
    name: "April",
    user: 3908,
  },
  {
    name: "May",
    user: 4800,
  },
  {
    name: "June",
    user: 3800,
  },
  {
    name: "July",
    user: 4300,
  },
];
const Chart = () => {
  return (
    <div className=" bg-slate-50 shadow-lg rounded-md p-4 my-8">
      <h1 className="text-xl font-semibold my-2"> User Analytics</h1>
      <ResponsiveContainer width="100%" aspect={4 / 1} className="py-4">
        <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="user" stroke="#8884d8"  />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
