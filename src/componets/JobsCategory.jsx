import { useLoaderData } from "react-router-dom";
import Cate from "./Cate";


const JobsCategory = () => {
    const categoris=useLoaderData();
   
    return (
        <div className="grid grid-cols-2 gap-5">
                {
                    categoris.map(cate=><Cate key={categoris.id} cate={cate}></Cate>)
                }
        </div>
    );
};

export default JobsCategory;