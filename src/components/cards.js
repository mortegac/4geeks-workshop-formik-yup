import React from "react";
import { Card } from "react-bootstrap";
import Logo from './logo.svg';
const CardLogin = (props) => {
  return (
    <Card className='pt-4'>
      <Card.Img variant="top" src={Logo} style={{width:'50%',  display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
      <Card.Body >
        <Card.Text>
         {props.children}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardLogin;
