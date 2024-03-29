import { useState } from "react";

const CreateProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    finishDate: "",
    assignedEmployee: "employeeId2", // Default value
    priority: "Medium", // Default value
    progress: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRangeChange = (event) => {
    setFormData({
      ...formData,
      progress: parseInt(event.target.value),
    });
  };

  const getTokenFromLocalStorage = () => {
    return localStorage.getItem('accessToken');  
  };
  
  const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const token = getTokenFromLocalStorage(); // Retrieve token from local storage

    const response = await fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token // Include the JWT token in the request headers
      },
      body: JSON.stringify({
        title: formData.title, // Include project title
        startDate: formData.startDate, // Include project start date
        finishDate: formData.finishDate, // Include project finish date
        assignedEmployees: [formData.assignedEmployee], // Include assigned employee
        priority: formData.priority, // Include project priority
        progress: formData.progress, // Include project progress
      })
    });

    if (!response.ok) {
      throw new Error("Failed to create project");
    }

    // Handle successful response
  } catch (error) {
    console.error("Failed to create project:", error);
  }
};

  return (
    <div className="w-full p-[2rem]">
      <h1 className="text-4xl text-[#8B5CF6] font-[600]">Create Project</h1>
      <hr className="solid mt-[1rem]" />
      <form className="rounded-lg shadow-lg mt-[1rem]" onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-[1rem] w-full p-[2rem]">
          <div>
            <p className="text-xl">Project title</p>
            <input
              className="border rounded-md w-full bg-[#F8F9FA] p-[.4rem]"
              type="text"
              placeholder="Enter title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <p className="text-xl">Start date</p>
            <input
              className="border rounded-md w-full bg-[#F8F9FA] p-[.4rem]"
              type="date"
              placeholder="Enter start date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <p className="text-xl">Finish date</p>
            <input
              className="border rounded-md w-full bg-[#F8F9FA] p-[.4rem]"
              type="date"
              placeholder="Enter finish date"
              name="finishDate"
              value={formData.finishDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <p className="text-xl">Assigned Employee</p>
            <select
              className="border rounded-md bg-[#F8F9FA] p-[.4rem] w-full"
              name="assignedEmployee"
              value={formData.assignedEmployee}
              onChange={handleInputChange}
            >
              <option value="employeeId1">Employee 1</option>
              <option value="employeeId2">Employee 2</option>
              <option value="employeeId3">Employee 3</option>
            </select>
          </div>
          <div>
            <p className="text-xl">Priority</p>
            <select
              className="border rounded-md bg-[#F8F9FA] p-[.4rem] w-full"
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div>
            <p className="text-xl">Progress</p>
            <input
              type="range"
              name="progress"
              min="0"
              max="100"
              step="1"
              value={formData.progress}
              onChange={handleRangeChange}
              className="w-full h-[2rem]"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#8B5CF6] ms-[2rem] mb-[2rem] py-[.5rem] px-[1rem] rounded-md text-[#FFFFFF]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
