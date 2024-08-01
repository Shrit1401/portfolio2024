"use client";
import AddProject from "@/components/AddProject";
import React, { useState } from "react";

const NewPage = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "1401") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen text-white">
      {isAuthenticated ? (
        <AddProject />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="p-8 rounded-lg max-w-sm w-full"
        >
          <h1 className="text-4xl font-bold mb-4">Enter Password</h1>
          <label className="block mb-4">
            <span className="block text-lg font-medium mb-2">Password:</span>
            <input
              className="w-full px-3 py-2 bg-black/10 text-white rounded-lg border border-white/30 outline-none placeholder:text-gray-400"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter password"
              required
            />
          </label>
          <button type="submit" className="btn  ">
            Submit
          </button>
        </form>
      )}
    </main>
  );
};

export default NewPage;
