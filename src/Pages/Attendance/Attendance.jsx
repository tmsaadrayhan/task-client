import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

const Attendance = ({ attendance }) => {
  const { _id, userId, startTime, finishTime, status } = attendance;
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
        <div className="font-bold">{startTime}</div>
      </td>
      <td>
        <div className="font-bold">{finishTime}</div>
      </td>
      <td>
        <div className="font-bold">{status}</div>
      </td>
      <td>
        <div className="flex justify-center items-center">
          <Link to={`http://localhost:5173/edit-attendance/${_id}`}>
            <FiEdit className="text-2xl m-[.2rem] text-[#8B5CF6]" />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default Attendance;