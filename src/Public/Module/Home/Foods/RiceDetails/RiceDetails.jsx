import React, { Component } from "react";
import axios from "axios";
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

import LinearProgress from "@mui/material/LinearProgress";
import Stack from '@mui/material/Stack';

import { CartContext } from "../../../Contexts/Cart";
import "./RiceDetails.scss";
import Search from "../Search/Search";


class RiceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      count: 0,
      openAlest: false,
    };
  }
  handleOpen = () => {

  }

  componentDidMount() {
    axios.get("https://yjw3wp4vvz.sse.codesandbox.io/products").then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }

  render() {
    const { products, count, openAlest } = this.state;
    return (
      <>
        <div id="rice-details">
          <Container>
            <LinearProgress />
            <div className="foods">
              <h1 className="title"> Foods</h1>
            </div>
            <Search />
            <Row>
              {products.map((product) => (
                <Col sm="3">
                  <Card className="cart">
                    <CardImg top width="100%" src={product.imageUrl} />
                    <CardBody>
                      <CardTitle>{product.name}</CardTitle>
                      <CardText>{product.description}</CardText>
                      <CartContext.Consumer>
                        {({ addToCart }) => (
                          <Button onClick={() => addToCart(product)}>
                            Add to cart
                          </Button>
                        )}

                      </CartContext.Consumer>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

      </>
    );
  }
}

export default RiceDetails;
