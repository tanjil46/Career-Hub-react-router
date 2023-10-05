import { useLoaderData, useParams } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';

import Swal from "sweetalert";

const JobDetails = () => {

 const jobId=useLoaderData()
const{id}=useParams()
const idInt=parseInt(id)
const job=jobId.find(job=>job.id===idInt)
console.log(job)
const{job_description,job_responsibility,educational_requirements, experiences,salary,job_title,contact_information}=job;

const applyJob=()=>{
 
 const addToFaver=[];

    const faverites=JSON.parse(localStorage.getItem('faver'))

      if(!faverites){
        addToFaver.push(job)
        localStorage.setItem('faver',JSON.stringify(addToFaver))
        Swal("Good job!", "You clicked the button!", "success")
      }
      else{

    const isExits=faverites.find(job=>job.id===idInt)
    console.log(isExits)
  
      if(!isExits){

        addToFaver.push(...faverites,job)
        localStorage.setItem('faver',JSON.stringify(addToFaver))
      }
      else{
        swal("Good job!", "You clicked the button!", "error")
      }




      }








   
}






    return (
<div className="">
    <p className="text-center font-bold text-xl my-3">Job Details</p>
        <div className="grid  gap-3 md:grid-cols-4">
            <div className="col-span-3 space-y-4">
              <p className="font-bold">Job Description:<span className="font-normal">{job_description}</span></p>
              <p className="font-bold">Job Description:<span className="font-normal">{job_responsibility}</span></p>
              <p className="font-bold">Job Description:<span className="font-normal">{educational_requirements}</span></p>
              <p className="font-bold">Job Description:<span className="font-normal">{experiences}</span></p>
            </div>
            
       <div className="col-span-1 space-y-4">

        <p className="font-bold">Job Details</p>
        <h1>Salary: {salary}</h1>
        <h1>Job-Title: {job_title}</h1>

        <p className="font-bold">Contact Information</p>
        <p className=" font-bold">Phone:<span className="font-normal" >{contact_information.phone}</span></p>
        <p className=" font-bold">Phone:<span className="font-normal" >{contact_information.email}</span></p>
        <p className=" font-bold">Phone:<span className="font-normal" >{contact_information.address}</span></p>
        <button onClick={applyJob} className="btn bg-gradient-to-r from-cyan-500 to-blue-500">Add To Foverites</button>

       </div>

     



        </div>
       
        </div>
    );
};

export default JobDetails;