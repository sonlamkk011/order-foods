import {  Outlet, Route, Routes } from "react-router-dom";
import CreateFoods from "./CreateFoods/CreateFoods";
import Dasboard from "./Dasboard/Dasboard";
import HeaderAdmin from "./Shared/Header/HeaderAdmin";
import SidebarAdmin from "./Shared/Sidebar/SidebarAdmin";


const Admin = () => {
  return (
    <>
    <HeaderAdmin />
    <SidebarAdmin />
    <Outlet />
    {/* <Routes>
      <Route path="/admin-create-foods" element={<CreateFoods />} />
    </Routes> */}
     
    </>
  );
};
export default Admin;
