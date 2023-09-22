import { Link, NavLink } from "react-router-dom";


const Header = () => {

    const links=<>
    
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to="/jobs">Jobs</NavLink></li>
    <li><NavLink to="/apply">Applied jobs</NavLink></li>
    <li><NavLink to="/blogs">Blogs</NavLink></li>
    <li><NavLink to="/static">Stataiscs</NavLink></li>
     
    
    
    
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
     
        <li>
        
          <ul className="p-2">
         {links}
          </ul>
        </li>
       
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Carear Hub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end">
   <Link className="btn bg-gradient-to-r from-cyan-500 to-blue-500" to='/'>Apply Now</Link>
  </div>
</div>
        </div>
    );
};

export default Header;