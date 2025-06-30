"use client";
import { useEffect, useState } from "react";
import useAuthRedirect from "@/hooks/useAuthRedirect";

const EditProfilePage = () => {
  useAuthRedirect(); // Protect the page

  // implement the form similar to registration with pre-filled data
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Your Profile</h1>
      {/* Form for editing profile will go here */}
    </div>
  );
};

export default EditProfilePage;
