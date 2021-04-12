import { Container, Row, Col, Card } from "react-bootstrap";
import "./App.css";
import FormLogin from './components/form';
import CardLogin from './components/cards';
function App() {
  return (
    <Container className="mt-5">
      <Row className="w-100 d-flex justify-content-center">
        <Col xs="12" lg="8">
        <CardLogin>
          <FormLogin/>
        </CardLogin>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
