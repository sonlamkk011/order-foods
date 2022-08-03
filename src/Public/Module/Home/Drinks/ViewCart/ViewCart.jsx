import { useState } from "react";
import { useEffect } from "react";
import Search from "../../Foods/Search/Search";
import "./ViewCart.scss";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Contexts/Cart";



const ViewCart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };




  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };


  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += count * item.price));
    setPrice(ans);
  };


  const handleAddcount = () => {
    setCount(count + 1);
  }
  const handleRemoveCount = () => {
    if (count == 0) {

    } else {
      setCount(count - 1)
    }

  }

  useEffect(() => {
    handlePrice();
  });




  return (
    <>
      <div id="view-cart">
        <div className="container">
          <article >
            {cart.map((item) => (
              <div className="cart_box" key={item.id}>
                <div className="cart_img">
                  <img src={item.image} />
                  <p className="name" style={{ marginTop: 1, marginLeft: 50 }} >{item.name}</p>
                </div>
                <div style={{ marginRight: 20, display: "flex" }} className="button-count">
                  <button style={{ width: 50, borderRadius: 5, border: 10, marginRight: 10 }} onClick={handleAddcount}> + </button>
                  ({count})

                  <button style={{ width: 50, borderRadius: 5, border: 10, marginLeft: 10 }} onClick={handleRemoveCount}> - </button>
                </div>
                <div style={{ display: "flex" }}>
                  <span style={{ width: 80 }}>{item.price} VND</span>
                  <button onClick={() => handleRemove(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="total">
              <span>Total Price : </span>
              <span>{price} VND</span>
              <div className="button">
                <Button onClick={handleClickOpenDialog} className="oder">Oder</Button>
                <div>
                  <Dialog
                    open={openDialog}
                    onClose={handleCloseDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Thêm ghi chú của bạn"}
                    </DialogTitle>
                    <DialogContent>
                      <TextField id="standard-basic" label="Note" variant="standard" />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Link to="/order-details">
                      <Button onClick={handleCloseDialog} autoFocus>
                        Order
                      </Button>
                    
                    </Link>
                    </DialogActions>
                  </Dialog>
                </div>
                <div>
                </div>
              </div>
            </div>
          </article>

        </div>
      </div>
    </>
  );
};
export default ViewCart;
