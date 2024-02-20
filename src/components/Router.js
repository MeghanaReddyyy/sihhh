import Nav from "./Nav";


import { Outlet } from "react-router-dom";
function Router() {
  return (
    <>
      <div className="m2">
        <Nav />

        <Outlet />
        
      </div>
    </>
  );
}
export default Router;
  