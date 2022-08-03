import { RadiusBottomrightOutlined } from "@ant-design/icons";
import { Button, Divider, notification, Space } from "antd";
import { useState } from "react";
import { createContext, useEffect } from "react";

import { CartContext } from "../Contexts/Cart";

import "./Alerts.scss";
const Context = createContext({
  name: "Thêm vào giỏ hàng thành công   ",
});

const Alerts = () => {
  const [api, contextHolder] = notification.useNotification();
  const [cartItems, setcartItems] = useState([]);

  const openNotification = (placement) => {
    api.info({
      message: `Success`,
      description: (
        <Context.Consumer>{({ name }) => ` ${name}!`}</Context.Consumer>
      ),
      placement,
    });
  };

  useEffect(() => {
    if(cartItems.length){
        openNotification("bottomRight")
    }
  }, [cartItems]);

  return (
    <>
      <div id="alerts">
      {contextHolder}
        <CartContext.Consumer>
          {
            ({ cartItems }) => cartItems.length && setcartItems(cartItems)
            // (
            //   <div className="alert">
            //     <Context.Provider
            //       value={[cartItems,setcartItems]}
            //     >
            //       {contextHolder}

            //       {/* <Button
            //         type="primary"
            //         onClick={() => openNotification("bottomRight")}
            //       >
            //         <RadiusBottomrightOutlined />
            //         bottomRight
            //       </Button> */}
            //     </Context.Provider>
            //   </div>
            // )
          }
        </CartContext.Consumer>
      </div>
    </>
  );
};
export default Alerts;
