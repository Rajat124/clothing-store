import React from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { CartContext } from "../context/Context";

const ListItem = (props) => {
  const cartCtx = CartContext();

  const lButtonHandler = () => {
    cartCtx.addItem(
      {
        name: props.item.name,
        descr: props.item.descr,
        id: props.item.id,
        price: props.item.price,
      },
      "lQuantity"
    );
  };
  const mButtonHandler = () => {
    cartCtx.addItem(
      {
        name: props.item.name,
        descr: props.item.descr,
        id: props.item.id,
        price: props.item.price,
      },
      "mQuantity"
    );
  };
  const sButtonHandler = () => {
    cartCtx.addItem(
      {
        name: props.item.name,
        descr: props.item.descr,
        id: props.item.id,
        price: props.item.price,
      },
      "sQuantity"
    );
  };

  return (
    <ListGroup>
      <div className="form-control">
        <ListGroup.Item>
          <Row>
            <Col md={2}>
              <span>{props.item.name}</span>
            </Col>
            <Col md={2}>
              <span>{props.item.descr}</span>
            </Col>
            <Col md={2}>
              <span>RS.{props.item.price}/-</span>
            </Col>
            <Col md={2}>
              <Button onClick={lButtonHandler}>
                Buy Large({props.item.large})
              </Button>
            </Col>
            <Col md={2}>
              <Button onClick={mButtonHandler}>
                Buy Medium({props.item.medium})
              </Button>
            </Col>
            <Col md={2}>
              <Button onClick={sButtonHandler}>
                Buy Small({props.item.small})
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      </div>
    </ListGroup>
  );
};

export default ListItem;
