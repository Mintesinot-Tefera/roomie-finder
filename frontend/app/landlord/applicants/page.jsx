"use client";

import { useState } from "react";

const dummyApplicants = [
  {
    id: "app1",
    name: "Sara Yohannes",
    email: "sara@example.com",
    status: "pending",
    room: "Room near 4 Kilo",
    budget: 5000,
    gender: "Female",
    age: 24,
    message: "I’m clean and friendly. I’d love to stay here!",
  },
  {
    id: "app2",
    name: "Samuel Kebede",
    email: "samuel@example.com",
    status: "accepted",
    room: "Bole 2BR Flat",
    budget: 6500,
    gender: "Male",
    age: 29,
    message: "Looking for a calm and quiet place. I’m respectful and tidy.",
  },
];

const ApplicantsPage = () => {
  const [applicants, setApplicants] = useState(dummyApplicants);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleAction = (id, newStatus) => {
    setApplicants((prev) =>
      prev.map((app) =>
        app.id === id ? { ...app, status: newStatus } : app
      )
    );
  };

  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-800">Room Applicants</h1>

      <div className="grid grid-cols-1 gap-6">
        {applicants.map((app) => (
          <div key={app.id} className="p-4 border rounded-lg bg-white shadow">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold">{app.name}</h2>
                <p className="text-sm text-gray-500">{app.email}</p>
                <p className="mt-1">
                  <span className="font-medium">Applied for:</span>{" "}
                  {app.room}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Budget:</span> {app.budget} ETB
                </p>
                <p className="text-sm">
                  <span className="font-medium">Message:</span> {app.message}
                </p>
                <p
                  className={`inline-block mt-2 px-2 py-1 text-xs font-semibold rounded-full ${
                    app.status === "accepted"
                      ? "bg-green-100 text-green-700"
                      : app.status === "rejected"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {app.status}
                </p>
              </div>

              {/* Actions */}
              <div className="space-y-2 text-right">
                {app.status === "pending" && (
                  <>
                    <button
                      onClick={() => handleAction(app.id, "accepted")}
                      className="text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleAction(app.id, "rejected")}
                      className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Reject
                    </button>
                  </>
                )}
                <button
                  onClick={() => alert(`Messaging ${app.name}...`)}
                  className="text-sm border text-blue-700 border-blue-600 px-3 py-1 rounded hover:bg-blue-50"
                >
                  Message
                </button>
                <button
                  onClick={() => setSelectedProfile(app)}
                  className="text-sm text-gray-600 hover:underline"
                >
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Profile Modal */}
      {selectedProfile && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl relative">
            <button
              onClick={() => setSelectedProfile(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-2">
              {selectedProfile.name}'s Profile
            </h2>
            <p><strong>Email:</strong> {selectedProfile.email}</p>
            <p><strong>Gender:</strong> {selectedProfile.gender}</p>
            <p><strong>Age:</strong> {selectedProfile.age}</p>
            <p><strong>Budget:</strong> {selectedProfile.budget} ETB</p>
            <p><strong>Message:</strong> {selectedProfile.message}</p>
            <p><strong>Room:</strong> {selectedProfile.room}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicantsPage;
