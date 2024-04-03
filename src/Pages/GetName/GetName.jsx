import { useEffect, useState } from "react";

const GetName = ({ getName, nm }) => {
  const name= getName(nm);
  console.log(name);

  return <div>{()=>getName(nm)}</div>;
};

export default GetName;
