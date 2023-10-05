import { useEffect, useState } from "react";
import JobCard from "./JobCard";


const Fover = () => {
    const[local,setLocal]=useState([])
    const[nodata,setNoData]=useState(false)

    useEffect(()=>{
        const faverites=JSON.parse(localStorage.getItem('faver'))
        if(faverites){
            setLocal(faverites)
        }
       else{
           setNoData('no data found')
       }







    },[])


console.log(local)


   const handle=()=>{
    localStorage.clear()
    setLocal([])
    setNoData('no data found')


   }



    return (
        <div>
            <button onClick={handle} className="">delet</button>
        
                {nodata?<p>{nodata}</p> :<div>
                    {
                        local.map(card=><JobCard key={card.id} card={card}></JobCard>)
                    }
                    </div>}
        </div>
    );
};

export default Fover;