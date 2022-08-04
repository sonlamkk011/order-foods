import { Button } from "@mui/material";

import "../Foods.css";
const Products = (list) => {


    
  return (
    <>
      <div>
      <img className="smail" src={list.image} alt={list.name} ></img>
      </div>
    </>
  );
};
export default Products;
