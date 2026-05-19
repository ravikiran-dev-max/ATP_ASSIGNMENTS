import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom"; // should use react-router-dom
import { useEffect, useState, useContext } from "react";
import axios from "axios";

function EditEmployee() {
  // Access context values (counter and changeCounter)
  const { counter, changeCounter } = useContext(counterContexObj);

  // State for loading and error messages
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  // Get employee object passed via navigation state
  const { state } = useLocation();

  // Pre-fill form fields with employee data
  useEffect(() => {
    setValue("name", state.name);
    setValue("email", state.email);
    setValue("mobile", state.mobile);
    setValue("designation", state.designation);
    setValue("companyName", state.companyName);
  }, []);

  // Function to save modifications (PUT request)
  const saveModification = async (modifiedEmp) => {
    try {
      setLoading(true);
      const res = await axios.put(
        `http://localhost:4000/emp-api/employees/${state._id}`,
        modifiedEmp
      );
      if (res.status === 200) {
        navigate("/list"); // navigate back to list after update
      }
    } catch (err) {
      console.log("err in catch", err);
      setError(err.message); // set error state
    } finally {
      setLoading(false); // stop loading
    }
  };

  // Show loading message
  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }
  // Show error message
  if (error) {
    return <p className="text-red-500 text-center text-3xl">{error}</p>;
  }

  return (
    <div>
      <h1 className="text-5xl text-center text-gray-600 font-bold">
        EDIT EMPLOYEE
      </h1>

      {/* Employee edit form */}
      <form
        className="max-w-md mx-auto mt-10"
        onSubmit={handleSubmit(saveModification)}
      >
        {/* Name */}
        <input
          type="text"
          placeholder="Enter name"
          {...register("name")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Enter Email"
          {...register("email")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />

        {/* Mobile */}
        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />

        {/* Designation */}
        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />

        {/* Company Name */}
        <input
          type="text"
          placeholder="Enter name of the company"
          {...register("companyName")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />

        {/* Submit button */}
        <button
          type="submit"
          className="text-2xl rounded-2xl bg-green-900 text-white block mx-auto p-4"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default EditEmployee;
