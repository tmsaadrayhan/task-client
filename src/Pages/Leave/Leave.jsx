const Leave = ({ leave }) => {
  const { _id, userId, department, leaveType, startDate, finishDate, status } =
    leave;
  console.log(leave);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (value === "Approved") {
      fetch(`http://localhost:5000/leave/${_id}/approve`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("accessToken"),
        },
        body: JSON.stringify({ name: value }),
      });
    } else {
      fetch(`http://localhost:5000/leave/${_id}/reject`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("accessToken"),
        },
        body: JSON.stringify({ name: value }),
      });
    }
  };
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="font-bold">{userId}</div>
      </td>
      <td>
        <div className="font-bold">{department}</div>
      </td>
      <td>
        <div className="font-bold">{leaveType}</div>
      </td>
      <td>
        <div className="font-bold">{startDate}</div>
      </td>
      <td>
        <div className="font-bold">{finishDate}</div>
      </td>
      <td>
        <div className="font-bold">{status}</div>
      </td>
      <td>
        <div className="flex justify-center items-center">
          {/* Status */}
          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="Rejected">Rejected</option>
              <option value="Approved">Approved</option>
            </select>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default Leave;
