import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center"> 
            <h1 className="text-7xl text-center ">OPPS!!!!</h1>
            <Link className="text-xl text-center " to='/'>Go To Home</Link>
        </div>
    );
};

export default ErrorPage;