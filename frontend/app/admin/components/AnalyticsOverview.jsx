"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50"];

const AnalyticsOverview = ({ data }) => {
  return (
    <div className="space-y-8">
      {/* User Signups */}
      <div className="bg-white rounded-xl shadow py-2 px-4">
        {/* <h2 className="text-lg font-semibold mb-2">User Signups Over Time</h2> */}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data.signupData}>
            <XAxis dataKey="_id" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="#2563eb" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Rooms by Region */}
      {/* <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Rooms Listed by Region</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.roomByRegion}>
            <XAxis dataKey="_id" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#38bdf8" />
          </BarChart>
        </ResponsiveContainer>
      </div> */}

      {/* Gender Distribution */}
      {/* <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Gender Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data.genderDist}
              dataKey="count"
              nameKey="_id"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.genderDist.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div> */}
    </div>
  );
};

export default AnalyticsOverview;
