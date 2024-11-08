import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
  const data = useLoaderData()

  // this is the first method to call the api , basicially we use loder than it call the api directly

  // const [data , setdata]=useState([])
  //   useEffect(()=>{
  //       fetch('https://api.github.com/users/adithyarana')
  //       .then(response=> response.json())
  //       .then(data=>{
  //         console.log(data)
  //         setdata(data)
  //   })
     
    
  //   },[])
    return (
      <div className="text-center m-4 bg-gray-500 text-white
      p-4 text-3xl">Github Followers:{data.followers}
      <img src={data.avatar_url} alt="git" width={300} />
      </div>
    );
}

export default Github;

export const githubloader=async()=>{
  const response = await fetch('https://api.github.com/users/adithyarana')
  return response.json()
}