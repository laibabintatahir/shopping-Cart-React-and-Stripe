import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";

function ProductCard(props) {
  // props.product - is the selling product
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);
  return (
    <Card>
      <Card.Body>
        <Card.Img
          src={product.img}
          style={{ maxWidth: "200px", maxHeight: "200px" }}
        />
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price}</Card.Text>

        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">
                In Cart: {productQuantity}
              </Form.Label>

              <Col sm="6">
                <Button  style={{ backgroundColor: "red", color: "white", border: "none" }}
                  sm="6"
                  onClick={() => cart.addOneToCart(product.id)}
                  className="mx-2"
                >
                  +
                </Button>
                <Button  style={{ backgroundColor: "red", color: "white", border: "none" }}
                  sm="6"
                  onClick={() => cart.removeOneFromCart(product.id)}
                  className="mx-2"
                >
                  -
                </Button>
              </Col>
            </Form>
          </>
        ) : (
          //if false
          <Button
            style={{ backgroundColor: "red", color: "white", border: "none" }}
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add To Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
