import { Link } from "react-router-dom";


const JobsShow = ({job}) => {
    const{logo,id,job_title,company_name,remote_or_onsite,location,job_type,salary}=job;
   
    return (
        <div>
          
          <div className="card card-compact bg-base-100 shadow-xl text-start">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body space-y-3">
    <h2 className="card-title">{job_title}</h2>
    <p className="text-xl text-start">{company_name}</p>
    <div className="text-start flex gap-2 ">
        <button className="btn border border-black text-blue-600 font-bold ">{remote_or_onsite}</button>
        <button className="btn border border-black text-blue-600 font-bold ">{job_type}</button>
    </div>

    <div className="flex gap-3">
        <p className="text-xl">Location:{location}</p>
        <p className="text-xl">Salary:{salary}</p>
    </div>
    <div className="text-start">
       <Link to={`/job/${id}`}>
       <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500">Show Details</button>
       </Link>
    </div>
  </div>
</div>





        </div>
    );
};

export default JobsShow;