import { Button, TextField } from "@mui/material";

const CartFoods = ({ cartItems, onAdd, onRemove }) => {

    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice  ;
  return (
    <>
    <aside className="col-4" style={{marginRight:"1rem", backgroundColor:"aliceblue", borderRadius:"20px"}}>
      <h2>Giỏ Hàng </h2>
      <div style={{marginTop:"60px"}}>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">
                <img src={item.image} width="180px" style={{borderRadius:"15px"}} />
                <p style={{marginTop:"15px", fontSize:"30px"}}>

                {item.name}
                </p>
                </div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            
           <div >
           <TextField  style={{width:"610px"}} id="outlined-basic" label="Ghi Chú ..." variant="outlined" />
           </div>
           <hr></hr>

           
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right" >
                <strong style={{marginRight:"50px"}}>{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Oder
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
    </>
  );
};
export default CartFoods;
