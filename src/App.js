import React from 'react';
import MouseTracker from './MouseTracker';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center">Mouse Tracker</h1>
          <MouseTracker />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
