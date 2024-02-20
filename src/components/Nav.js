import { Link } from "react-router-dom";
import  Logo  from '../images/logo.jpg'
function Nav(){
  return (
    <div>
      <nav className="navbar navbar-expand-lg m-auto navbar-light bg-dark  nav ">
        <div className="container navbar-nav m-auto">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" className="logo" style={{ width: '50px', height: 'auto' }}/>
        </Link>
        
        <Link className="nav-item nav-link active one text-light " to="/home">
            Home
          </Link>
          <Link className="nav-item nav-link active one text-light " to="/form">
            Form
          </Link>
         
        
        

          {/* <Link className="nav-item nav-link active one text-light" to="/procedure">
            Procedure
          </Link>
          <Link className="nav-item nav-link active one text-light" to="/hotel">
            Courses
          </Link> */}
          <Link className="nav-item nav-link active one text-light" to="/userpage">
            Userpage
          </Link>
          <Link className="nav-item nav-link active one text-light" to="/lawyerpage">
            Lawyerpage
          </Link>
          <Link className="nav-item nav-link active one text-light" to="/admin">
            Admin
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
