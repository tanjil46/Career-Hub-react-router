import { json } from "react-router-dom";

const getStoredJobApplication=()=>{
const storedJobApplication=localStorage.getItem('local-storage');

if(storedJobApplication){
    return JSON.parse(storedJobApplication)
}
return[]
}

const saveJobApplication=id=>{
const storedJobApply=getStoredJobApplication()
const exits=storedJobApply.find(jobId=>jobId===id)
if(!exits){

    storedJobApply.push(id)
    localStorage.setItem('local-storage',JSON.stringify(storedJobApply))
}

}

export{ getStoredJobApplication,saveJobApplication}