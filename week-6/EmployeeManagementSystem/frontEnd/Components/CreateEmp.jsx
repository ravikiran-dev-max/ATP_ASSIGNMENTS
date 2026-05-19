import { useForm } from "react-hook-form";
import { useState } from "react";
// useNavigate should come from react-router-dom
import { useNavigate } from "react-router-dom";

function CreateEmp() {
  // State for loading and error messages
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);
      // Send POST request to backend API
      let res = await fetch("http://localhost:4000/emp-api/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmpObj),
      });

      // If employee created successfully, navigate to list page
      if (res.status === 201) {
        navigate("/list");
      } else {
        // Handle error response from backend
        let errorRes = await res.json();
        throw new Error(errorRes.message); // use message instead of reason
      }
    } catch (err) {
      setError(err.message); // set error state
    } finally {
      setLoading(false); // stop loading
    }
  };

  // Show loading message
  if (loading) {
    return <p className="text-center text-2xl font-semibold">Loading...</p>;
  }
  // Show error message
  if (error) {
    return <p className="text-red-600 text-center text-xl">{error}</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Form container */}
      <div className="bg-white/10 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl p-10 w-full max-w-lg">
        <h1 className="text-4xl font-extrabold text-center text-indigo-400 mb-8 tracking-wide drop-shadow-lg">
          Create New Employee
        </h1>

        {/* Employee form */}
        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-3">
          {/* Name input */}
          <input
            type="text"
            placeholder="Enter name"
            {...register("name", { required: "Name is required" })}
            className="w-full border border-gray-600 bg-gray-900 text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
          />
          {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}

          {/* Email input */}
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email", { required: "Email is required" })}
            className="w-full border border-gray-600 bg-gray-900 text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
          />
          {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}

          {/* Mobile input */}
          <input
            type="number"
            placeholder="Enter mobile number"
            {...register("mobile")}
            className="w-full border border-gray-600 bg-gray-900 text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
          />

          {/* Designation input */}
          <input
            type="text"
            placeholder="Enter designation"
            {...register("designation", { required: "Designation is required" })}
            className="w-full border border-gray-600 bg-gray-900 text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
          />
          {errors.designation && <p className="text-red-400 text-sm">{errors.designation.message}</p>}

          {/* Company Name input */}
          <input
            type="text"
            placeholder="Enter company name"
            {...register("companyName", { required: "Company name is required" })}
            className="w-full border border-gray-600 bg-gray-900 text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
          />
          {errors.companyName && <p className="text-red-400 text-sm">{errors.companyName.message}</p>}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition duration-300"
          >
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateEmp;
