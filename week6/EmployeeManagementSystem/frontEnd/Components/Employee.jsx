import { useLocation } from "react-router-dom"; // should use react-router-dom

function Employee() {
  // Get employee object passed via navigation state
  const { state } = useLocation();

  return (
    <div className="p-5 bg-gray-400 rounded-2xl text-left font-bold shadow-2xl shadow-amber-900 mx-80 py-20 pl-9">
      <div className="p-3 mx-10">
        {/* Display employee details */}
        <p className="mb-2">{state.name}</p>
        <p className="mb-2">{state.email}</p>
        <p className="mb-2">{state.mobile}</p>
        <p className="mb-2">{state.designation}</p>
        <p className="mb-2">{state.companyName}</p>
      </div>
    </div>
  );
}

export default Employee;
