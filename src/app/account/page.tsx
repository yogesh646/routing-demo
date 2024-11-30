// app/create-account/page.tsx
"use client";
import {useEffect, useState } from "react";
import withprotectedroute from "routes/helper/page";


interface UserData {
  name: string;
  email: string;
  password: string;
}
 function Account() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [origin, setorigin] = useState<(string | UserData)[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    // Simple validation
    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill out all fields.");
      setIsSubmitting(false);
      return;
    }

    // Simulate an API call
    try {
      // You would typically send formData to your backend API here
      console.log("Form submitted:", formData);
      // Reset form after submission
      setFormData({ name: "", email: "", password: "" });

      // setorigin((prevList) => [...prevList, data]);
      const datas = JSON.parse(
        localStorage.getItem("datas") || "[]"
      ) as string[];

      const updated = [
        
          ...datas,
          formData
      ];
      localStorage.setItem("datas", JSON.stringify(updated));
      setorigin(updated);

      console.log("Form submitted:", origin);
      alert("Account created successfully!");
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Create Account
        </h1>

        {/* Display error message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-2 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Creating..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}
export default Account;
