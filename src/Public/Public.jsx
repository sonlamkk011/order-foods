import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Alerts from "./Module/Alerts/Alerts";
import Header from "./Module/Shared/Header/Header";
import Navbar from "./Module/Shared/Navbar/Navbar";
import "./Public.scss";
const Public = () => {
  return (
    <>
    <div id="public">
    <Header />
      <Navbar />
      <Alerts />
      <Outlet/>
    </div>
    
      {/* <BreadDetails /> */}
        {/* <Route path="home" element={<Home />} /> */}
        {/* <Route path="rice-details" element={<RiceDetails />} />
        <Route path="bread-details" element={<BreadDetails />} />
        <Route path="noodles-details" element={<NoodlesDetails />} />
        <Route path="soft-drinks" element={<SoftDrinks />} />
        <Route path="coffee" element={<Coffee />} /> */}
    </>
  );
};
export default Public;
