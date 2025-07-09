"use client";
import { useState } from "react";

const dummyReports = [
  {
    id: 1,
    user: "Sara Yohannes",
    type: "Room Complaint",
    content: "The room posted at Bole is not available.",
    status: "Pending",
  },
  {
    id: 2,
    user: "Kebede Alemu",
    type: "User Report",
    content: "User XYZ is sending spam messages.",
    status: "Resolved",
  },
];

const ReportsPage = () => {
  const [reports, setReports] = useState(dummyReports);

  const handleMarkResolved = (id) => {
    setReports((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "Resolved" } : r))
    );
  };

  const handleDelete = (id) => {
    setReports((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">User Reports</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-4 py-2 text-left">User</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Content</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="border-t">
                <td className="px-4 py-2">{report.user}</td>
                <td className="px-4 py-2">{report.type}</td>
                <td className="px-4 py-2">{report.content}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      report.status === "Resolved"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {report.status}
                  </span>
                </td>
                <td className="px-4 py-2 space-x-2">
                  {report.status !== "Resolved" && (
                    <button
                      onClick={() => handleMarkResolved(report.id)}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Mark Resolved
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(report.id)}
                    className="text-sm text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {reports.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No reports found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportsPage;
