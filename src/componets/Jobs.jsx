

const Jobs = ({apply}) => {
 const{logo,job_title,company_name,remote_or_onsite,salary}=apply;



    return (
       
            <div className="space-y-3">
                <img src={logo}></img>
                <p>{job_title}</p>
                <p>Job Type:{remote_or_onsite}</p>
                <p>salary:{salary}</p>
            </div>
     
    );
};

export default Jobs;