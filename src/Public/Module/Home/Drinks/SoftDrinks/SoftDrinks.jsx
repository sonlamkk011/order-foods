import "./SoftDrinks.scss";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  
} from "reactstrap";
import { useState } from "react";
import { useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Search from "../../Foods/Search/Search";
import { CartContext } from "../../../Contexts/Cart";
import { Button } from "antd";





const SoftDrinks = ({ handleClick }) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch("https://order-foods.herokuapp.com/api/v1/foods/list")
      .then((res) => res.json())
      .then((lists) => {
        setLists(lists.Pageable.content);
      });
  }, []);

  return (
    <>
      <div id="soft-drinks">
        <Container>
        <LinearProgress />
            <div className="foods">
              <h1 className="title"> Foods</h1>
            </div>
          <Search />
          <Row>
            {lists.map((list) => (
              <Col md="4" key={list.id} className="hover-css" >
                <Card className="cart">
                  <CardImg style={{ width: 130, height: 120, margin: 20 }} src={list.image} />
                  <div>
                    <div style={{ marginTop: - 140, marginLeft: 180, fontSize: 20 }}>{list.name} </div>
                    <div style={{ backgroundColor: "#00b14f", width: 60, marginLeft: 10, marginTop: -35, textAlign: "center", color: "whitesmoke" }}>
                      {list.status}
                    </div>
                    <div style={{ marginLeft: 180, marginTop: 30, fontSize: 20 }} > {list.price} VND </div>
                    <CartContext.Consumer>
                      {({ addToCart }) => (
                        <Button className="button" style={{ width: 100, marginLeft: 250, marginTop: 25, backgroundColor:"rgb(0, 177, 79)" }} onClick={() => {
                          handleClick(list);
                          addToCart(list);
                        }}>
                          Add to card
                        </Button>
                      )}
                    </CartContext.Consumer>
                  </div>
                </Card>
              </Col>
            ))}
           
          </Row>
        </Container>
      </div>
    </>
  );
};
export default SoftDrinks;
