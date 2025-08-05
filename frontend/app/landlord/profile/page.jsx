"use client";
import { useState, useEffect } from "react";
import LoadingSpinner from '@/components/LoadingSpinner';


const dummyUser = {
  fullName: "Mintesinot Tefera",
  email: "mintesinot@example.com",
  gender: "Male",
  age: 28,
  location: "Addis Ababa",
  profileImage: "/avatar-placeholder.png", // default image
};

const ProfilePage = () => {
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/users/profile", {
          credentials: "include",
        });
        if (!res.ok) throw new Error("Failed to fetch user");
        const data = await res.json();
        setUser(data.user); // Assuming backend returns { user: { ... } }
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, []);



  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/users/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(user),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to update profile");
      alert("Profile updated successfully");
    } catch (err) {
      alert(err.message);
    }
  };



  const handleUserChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePasswordChange = (e) => {
    setPasswordForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };


  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert("New passwords do not match.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/users/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(passwordForm),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Password change failed");
      alert("Password changed successfully");
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (err) {
      alert(err.message);
    }
  };


  if (!user) {
    return <LoadingSpinner />
  }

  // const handleProfileUpdate = (e) => {
  //   e.preventDefault();
  //   alert("Profile updated (dummy)");
  //   console.log("Updated user:", user);
  // };

  // const handleChangePassword = (e) => {
  //   e.preventDefault();
  //   if (passwordForm.newPassword !== passwordForm.confirmPassword) {
  //     alert("New passwords do not match.");
  //     return;
  //   }
  //   alert("Password changed (dummy)");
  //   console.log("Password form:", passwordForm);
  // };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold text-blue-800">My Profile</h1>

      {/* Profile Image Upload */}
      <div className="flex items-center space-x-4">
        <img
          src={selectedImage || user.profileImage}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover border"
        />
        <label className="cursor-pointer bg-gray-100 px-4 py-2 rounded text-sm border hover:bg-gray-200">
          Upload Image
          <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
        </label>
      </div>

      {/* Update Personal Info */}
      <form onSubmit={handleProfileUpdate} className="space-y-4">
        <h2 className="text-lg font-semibold">Personal Information</h2>

        <input
          type="text"
          name="fullName"
          value={user.fullName}
          onChange={handleUserChange}
          placeholder="Full Name"
          className="w-full border p-2 rounded"
        />

        <input
          type="email"
          name="email"
          value={user.email}
          disabled
          className="w-full border p-2 rounded bg-gray-100 cursor-not-allowed"
        />

        <select
          name="gender"
          value={user.gender}
          onChange={handleUserChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          type="number"
          name="age"
          value={user.age}
          onChange={handleUserChange}
          placeholder="Age"
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="location"
          value={user.location}
          onChange={handleUserChange}
          placeholder="Location"
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
        >
          Save Changes
        </button>
      </form>

      {/* Change Password */}
      <form onSubmit={handleChangePassword} className="space-y-4">
        <h2 className="text-lg font-semibold">Change Password</h2>

        <input
          type="password"
          name="currentPassword"
          value={passwordForm.currentPassword}
          onChange={handlePasswordChange}
          placeholder="Current Password"
          className="w-full border p-2 rounded"
        />

        <input
          type="password"
          name="newPassword"
          value={passwordForm.newPassword}
          onChange={handlePasswordChange}
          placeholder="New Password"
          className="w-full border p-2 rounded"
        />

        <input
          type="password"
          name="confirmPassword"
          value={passwordForm.confirmPassword}
          onChange={handlePasswordChange}
          placeholder="Confirm New Password"
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
