import { useEffect, useState } from "react";

const GetName = ({ getName, nm }) => {
  const user= getName(nm);
  console.log(user)
  const getEmail= (user)=> {
    try{
      return user[0].email;
    }
    catch{
      return "";
    }
  }
  const email= getEmail(user);
  console.log(email);
  return <div>{email}</div>;
};

export default GetName;
