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
  Button
} from "reactstrap";

// import { CartContext } from "../../Cart/Cart";

class TestApi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
      this.setState({
        products: res.data
      });
    });
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <h2>Products</h2>
        <Row>
          {products.map(product => (
            <Col sm="4">
              <Card>
                <CardImg top width="100%" src={product.url} />
                <CardBody>
                  <CardTitle>{product.title}</CardTitle>
                  <CardText>{product.description}</CardText>
                  {/* <CartContext.Consumer>
                    {({ addToCart }) => (
                      <Button onClick={() => addToCart(product)}>
                        Add to cart
                      </Button>
                    )}
                  </CartContext.Consumer> */}
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default TestApi;
