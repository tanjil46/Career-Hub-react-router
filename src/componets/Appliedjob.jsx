import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../getStorage/Getstorage";
import Jobs from "./Jobs";



const Appliedjob = () => {
    const jobs=useLoaderData();


    const[jobApply,setjobApply]=useState([])
    const[displayJob,setdisplayJob]=useState([])


    const handleJobsFilter=filter=>{
        if(filter==='all'){
            setdisplayJob(jobApply)
        }
        else if(filter==='remote'){
            const reMote=jobApply.filter(job=>job.remote_or_onsite==='Remote')
            setdisplayJob(reMote)
        }else if(filter==='onsite'){
            const onSite=jobApply.filter(job=>job.remote_or_onsite==='Onsite')
            setdisplayJob(onSite)
        }
    }







useEffect(()=>{

const storedId=getStoredJobApplication()
if(jobs.length>0){
    const appliedJobs=jobs.filter(job=>storedId.includes(job.id))
   
setjobApply(appliedJobs)
setdisplayJob(appliedJobs)
}



},[jobs])



    return (
        <div>
            <p className="text-xl text-center">Jobs I Applied:{jobApply.length}</p>
            <details className="dropdown mb-32 text-center">
  <summary className="m-1 btn ">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li onClick={()=>handleJobsFilter('all')}><a>All</a></li>
    <li onClick={()=>handleJobsFilter('remote')}><a>Remote</a></li>
    <li onClick={()=>handleJobsFilter('onsite')}><a>Onsite</a></li>
  </ul>
</details>

         <div className="grid lg:grid-cols-2 gap-3 ">
            {
              displayJob.map(apply=><Jobs apply={apply} key={apply.id}></Jobs>)
              


               
            }
           </div>
        </div>
    );
};

export default Appliedjob;