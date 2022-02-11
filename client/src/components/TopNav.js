import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./Topnav.css"
const TopNav = () => {
  
  const dispatch = useDispatch();
  const { user} = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    
    <div className="head1 container-fluid  text-center">
      <h1>NpBooking</h1>
  
      
      {user!== null && (
       
         <a className="topnav-right" onClick={logout}>
          Logout
        </a>
      )} 
    
      {user !== null && (
          <Link className=" topnav-right " to="/dashboard">
            Dashboard
          </Link>
      )}
     
      {user === null && (
        <>
           <Link className="button3 btn-pink" to="/">Home </Link>

          <Link className=" button4 btn-pink" to="/login">
            Login
          </Link>
          <Link button className="button5 btn-pink" to="/register">
            Register
          </Link>
          
          
        </>
       
      )}
    </div>
    
    
  );
};
    

  export default TopNav;
  