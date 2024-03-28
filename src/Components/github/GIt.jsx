/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export const GIt = () => {
  const data = useLoaderData();
  // const [data, setdata] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/afzal-2004")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.avatar_url);
  //       setdata(data);
  //     });
  // }, []);

  return (
    <div className=" text-center text-3xl bg-slate-500  p-3  flex  flex-col  items-center">
      Github picture
      <img src={data.avatar_url} alt="Git picture" className="  rounded-full" />
    </div>
  );
};

export const GitLoader = async () => {
  const response = await fetch("https://api.github.com/users/afzal-2004");
  console.log(response.json);
  return response.json();
};
