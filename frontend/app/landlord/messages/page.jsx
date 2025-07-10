"use client";

import { useState } from "react";

const dummyUsers = [
  { id: 1, name: "Sara Johnson", lastMessage: "Can I visit the room?", time: "2h ago" },
  { id: 2, name: "Michael Lee", lastMessage: "Is it still available?", time: "1d ago" },
];

const dummyMessages = {
  1: [
    { id: 1, text: "Hi! Is the room available?", sender: "seeker" },
    { id: 2, text: "Yes, it is!", sender: "landlord" },
    { id: 3, text: "Can I visit the room?", sender: "seeker" },
  ],
  2: [
    { id: 1, text: "Hello, is the room still open?", sender: "seeker" },
    { id: 2, text: "Yes, you can book a visit.", sender: "landlord" },
  ],
};

export default function MessagingPage() {
  const [selectedUserId, setSelectedUserId] = useState(1);
  const [newMessage, setNewMessage] = useState("");

  const selectedMessages = dummyMessages[selectedUserId] || [];

  const handleSend = () => {
    if (!newMessage.trim()) return;
    dummyMessages[selectedUserId].push({ id: Date.now(), text: newMessage, sender: "landlord" });
    setNewMessage("");
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 border-r">
        <div className="p-4 text-lg font-bold text-blue-800">Chats</div>
        {dummyUsers.map((user) => (
          <div
            key={user.id}
            onClick={() => setSelectedUserId(user.id)}
            className={`px-4 py-3 cursor-pointer hover:bg-blue-100 ${
              selectedUserId === user.id ? "bg-blue-200" : ""
            }`}
          >
            <p className="font-medium text-gray-800">{user.name}</p>
            <p className="text-sm text-gray-500 truncate">{user.lastMessage}</p>
            <p className="text-xs text-gray-400">{user.time}</p>
          </div>
        ))}
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b font-semibold text-blue-800 bg-white shadow">
          Chat with {dummyUsers.find((u) => u.id === selectedUserId)?.name}
        </div>

        <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-blue-50">
          {selectedMessages.map((msg) => (
            <div
              key={msg.id}
              className={`max-w-sm px-4 py-2 rounded-lg ${
                msg.sender === "landlord"
                  ? "ml-auto bg-blue-600 text-white"
                  : "bg-white border text-gray-700"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="p-4 border-t bg-white flex gap-2">
          <input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border rounded-lg"
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
