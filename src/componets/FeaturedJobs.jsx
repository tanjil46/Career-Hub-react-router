
import { useEffect, useState } from "react";
import JobsShow from "./JobsShow";


const FeaturedJobs = () => {
 const[jobs,setJobs]=useState([]);
 const[useLength,setDataLength]=useState(4)


 useEffect(()=>{
  
    fetch('jobs.json')
    .then(res=>res.json())
    .then(data=>setJobs(data))

},[])









    return (
        <div className="text-center">
            <h1 className="text-3xl text-center">Featured Jobs</h1>
            <p className="">An explorers aim to make discoveries by systematically mapping and exploring unknown or poorly understood areas of our global ocean. In the process, explorers take observati</p>
        
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0,useLength).map(job=><JobsShow key={jobs.id} job={job}></JobsShow>)
                }
            </div>

<div className={useLength==jobs.length && 'hidden' }>
    <button onClick={()=>setDataLength(jobs.length)} className="btn bg-gradient-to-r from-cyan-500 to-blue-500">See All Jobs</button>
</div>

        </div>
    );
};

export default FeaturedJobs;