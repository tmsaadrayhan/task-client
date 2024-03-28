import cancelled from "../../assets/project/cancelled.svg";
import completed from "../../assets/project/completed.svg";
import inprogress from "../../assets/project/inprogress.svg";
import notstarted from "../../assets/project/notstarted.svg";
import kanban from "../../assets/project/kanban.svg";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";

const Projects = () => {
  return (
    <div className="p-[2rem] w-full">
      <h1 className="text-4xl text-[#8B5CF6] font-[600]">Project List</h1>
      <hr className="solid mt-[1rem]"></hr>
      <div className="grid grid-cols-4 gap-4 w-full mt-[2rem]">
        <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] rounded-xl flex items-center p-[1rem]">
          <div>
            <img src={completed} alt="" />
          </div>
          <div className="w-full flex justify-center">
            <div>
              <p>Completed</p>
              <p className="text-3xl font-[600] text-[#8B5CF6]">200</p>
            </div>
          </div>
        </div>
        <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] rounded-xl flex items-center p-[1rem]">
          <div>
            <img src={inprogress} alt="" />
          </div>
          <div className="w-full flex justify-center">
            <div>
              <p>In progress</p>
              <p className="text-3xl font-[600] text-[#8B5CF6]">50</p>
            </div>
          </div>
        </div>
        <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] rounded-xl flex items-center p-[1rem]">
          <div>
            <img src={notstarted} alt="" />
          </div>
          <div className="w-full flex justify-center">
            <div>
              <p>Not started</p>
              <p className="text-3xl font-[600] text-[#8B5CF6]">20</p>
            </div>
          </div>
        </div>
        <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] rounded-xl flex items-center p-[1rem]">
          <div>
            <img src={cancelled} alt="" />
          </div>
          <div className="w-full flex justify-center">
            <div>
              <p>Cancelled</p>
              <p className="text-3xl font-[600] text-[#8B5CF6]">15</p>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] w-full mt-[3rem] rounded-xl p-[1rem]">
        <div className="w-full flex justify-end">
          <button className="flex items-center text-[#00000050] bg-[#E8DEFD] rounded-md px-[.5rem] py-[.25rem] me-[1rem]">
            <img className="me-[.2rem]" src={kanban} alt="Kanban Image" />
            Kanban View
          </button>
          <button className="flex items-center text-[#FFFFFF] bg-[#8B5CF6] rounded-md px-[.5rem] py-[.25rem]">
            <FiPlusCircle className="pe-[.25rem]" /> Create
          </button>
        </div>
        <hr className="solid mt-[1rem]"></hr>
        <div className="flex items-center w-full mt-[1rem]">
          <select className="border join-item p-[.2rem] rounded-md">
            <option>5</option>
            <option selected>10</option>
            <option>20</option>
          </select>
          <div className="w-full flex justify-end items-center">
            <IoIosSearch className="me-[-1.5rem] z-[1]" />
            <input
              className="z-[0] border ps-[2rem] p-[.2rem] bg-[#E8DEFD] rounded-md"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
