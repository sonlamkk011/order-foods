import "./SoftDrinks.scss";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Alert,
} from "reactstrap";
import { useState } from "react";
import { useEffect } from "react";
import Search from "../../Foods/Search/Search";
import { CartContext } from "../../../Contexts/Cart";





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
          <Search />
          <Row>
            {lists.map((list) => (
              <Col md="4" key={list.id} className="hover-css" >
                <Card className="cart">
                  <CardImg style={{ width: 130, height: 120, margin: 20 }} src={list.image} />
                  <div>
                    <div style={{ marginTop: - 140, marginLeft: 180, fontSize: 20 }}>{list.name} </div>
                    <div style={{ backgroundColor: "#00b14f", width: 55, marginLeft: 10, marginTop: -35, textAlign: "center", color: "whitesmoke" }}>
                      {list.status}
                    </div>
                    <div style={{ marginLeft: 180, marginTop: 30, fontSize: 20 }} > {list.price} VND </div>
                    <CartContext.Consumer>
                      {({ addToCart }) => (
                        <button className="button-add" style={{ width: 100, marginLeft: 230, marginTop: 25 }} onClick={() => {
                          handleClick(list);
                          addToCart(list);
                        }}>
                          Add to card
                        </button>
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
