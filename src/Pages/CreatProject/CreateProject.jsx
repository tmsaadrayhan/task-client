const CreateProject = () => {
  return (
    <div className="w-full p-[2rem]">
      <h1 className="text-4xl text-[#8B5CF6] font-[600]">Project List</h1>
      <hr className="solid mt-[1rem]"></hr>
      <form className="rounded-lg shadow-lg mt-[1rem]">
        <div className="grid grid-cols-3 gap-[1rem] w-full p-[2rem]">
          <div>
            <p className="text-xl">Project title</p>
            <input
              className="border rounded-md w-full bg-[#F8F9FA] p-[.4rem]"
              type="text"
              placeholder="Enter title"
            />
          </div>
          <div>
            <p className="text-xl">Start date</p>
            <input
              className="border rounded-md w-full bg-[#F8F9FA] p-[.4rem]"
              type="date"
              placeholder="Enter start date"
            />
          </div>
          <div>
            <p className="text-xl">Finish date</p>
            <input
              className="border rounded-md w-full bg-[#F8F9FA] p-[.4rem]"
              type="date"
              placeholder="Enter finish date"
            />
          </div>
          <div>
            <p className="text-xl">Assigned Employee</p>
            <select className="border rounded-md bg-[#F8F9FA] p-[.4rem] w-full">
              <option>5</option>
              <option selected>10</option>
              <option>20</option>
            </select>
          </div>
          <div>
            <p className="text-xl">Client</p>
            <select className="border rounded-md bg-[#F8F9FA] p-[.4rem] w-full">
              <option>5</option>
              <option selected>10</option>
              <option>20</option>
            </select>
          </div>
          <div>
            <p className="text-xl">Priority</p>
            <select className="border rounded-md bg-[#F8F9FA] p-[.4rem] w-full">
              <option>5</option>
              <option selected>10</option>
              <option>20</option>
            </select>
          </div>
          <div>
            <p className="text-xl">Finish date</p>
            <input
              className="border rounded-md w-full bg-[#F8F9FA] p-[.4rem]"
              type="date"
              placeholder="Enter finish date"
            />
          </div>
          <div>
            <p className="text-xl">Priority</p>
            <select className="border rounded-md bg-[#F8F9FA] p-[.4rem] w-full">
              <option>5</option>
              <option selected>10</option>
              <option>20</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
