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

const Chart = ({ title, data, datakey, grid }) => {
  return (
    <div className=" bg-slate-50 shadow-lg rounded-md p-4 my-8">
      <h1 className="text-xl font-semibold my-2"> {title}</h1>
      <ResponsiveContainer width="100%" aspect={4 / 1} className="py-4">
        <LineChart data={data}>
          {grid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="user" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
