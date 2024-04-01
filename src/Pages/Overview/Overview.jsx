import { useState } from "react";
import UpdateProfile from "./UpdateProfile/UpdateProfile";
import Leave from "./Leave/Leave";
import Projects from "./Projects/Projects";
import Tasks from "./Tasks/Tasks";

const Overview = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="p-[2rem] w-full">
      <h1 className="text-4xl text-[#8B5CF6] font-[600]">Overview</h1>
      <hr className="solid mt-[1rem]"></hr>
      <div className="grid grid-cols-3 gap-4 w-full mt-[2rem]">
        <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] rounded-xl overflow-hidden">
          <div className="py-[.5rem] px-[1rem] bg-[#E8DEFD] font-bold">
            Leave taken vs remaing
          </div>
          <div>graph</div>
        </div>
        <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] rounded-xl overflow-hidden">
          <div className="py-[.5rem] px-[1rem] bg-[#E8DEFD] font-bold">
            Projects by status
          </div>
          <div>graph</div>
        </div>
        <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] rounded-xl overflow-hidden">
          <div className="py-[.5rem] px-[1rem] bg-[#E8DEFD] font-bold">
            Task by status
          </div>
          <div>graph</div>
        </div>
        <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] rounded-xl overflow-hidden">
          <div className="py-[.5rem] px-[1rem] bg-[#E8DEFD] font-bold">
            
            Latest Assigned Task
          </div>
          <table className="table w-full text-center">
            {/* head */}
            <thead>
              <tr>
                <th className="px-[1rem] mx-auto"></th>
                <th className="px-[1rem] mx-auto">Project</th>
                <th className="px-[1rem] mx-auto">States</th>
                <th className="px-[1rem] mx-auto">Assigned</th>
                <th className="px-[1rem] mx-auto">Progress</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="font-bold">Project Title Here</div>
                </td>
                <td>{status}</td>
                <td>
                  <div className="mx-auto w-fit">x, y, z</div>
                </td>
                <td>
                  <div className="mx-auto w-fit">0%</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] rounded-xl overflow-hidden">
          <div className="py-[.5rem] px-[1rem] bg-[#E8DEFD] font-bold">
            Latest Assigned Task
          </div>
          <table className="table w-full text-center">
            {/* head */}
            <thead>
              <tr>
                <th className="px-[1rem] mx-auto"></th>
                <th className="px-[1rem] mx-auto">Task</th>
                <th className="px-[1rem] mx-auto">States</th>
                <th className="px-[1rem] mx-auto">Project</th>
                <th className="px-[1rem] mx-auto">Progress</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="font-bold">Task Title Here</div>
                </td>
                <td>{status}</td>
                <td>
                  <div className="font-bold">Project Title Here</div>
                </td>
                <td>
                  <div className="mx-auto w-fit">0%</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div className="flex text-xl overflow-hidden md:overflow-hidden my-[1rem]">
          <p
            className={`${activeTab === 1 && "text-primary border"} rounded-lg p-[1rem] mx-[1rem]`}
            onClick={() => handleTabClick(1)}
          >
            Personal Details
          </p>
          <p
            className={`${activeTab === 2 && "text-primary border"} rounded-lg p-[1rem] mx-[1rem]`}
            onClick={() => handleTabClick(2)}
          >
            Leave
          </p>
          <p
            className={`${activeTab === 3 && "text-primary border"} rounded-lg p-[1rem] mx-[1rem]`}
            onClick={() => handleTabClick(3)}
          >
            Projects
          </p>
          <p
            className={`${activeTab === 4 && "text-primary border"} rounded-lg p-[1rem] mx-[1rem]`}
            onClick={() => handleTabClick(4)}
          >
            Tasks
          </p>
        </div>
        <hr className="solid mt-[1rem]"></hr>
        <div className={`${activeTab === 1 ? "block" : "hidden"}`}>
            <UpdateProfile></UpdateProfile>
        </div>
        <div className={`${activeTab === 2 ? "block" : "hidden"}`}>
            <Leave></Leave>
        </div>
        <div className={`${activeTab === 3 ? "block" : "hidden"}`}>
        <Projects></Projects>
        </div>
        <div className={`${activeTab === 4 ? "block" : "hidden"}`}>
            <Tasks></Tasks>
        </div>
      </div>
    </div>
  );
};

export default Overview;
