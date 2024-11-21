import React, { useState } from 'react';
import { Card, Alert } from 'react-bootstrap';

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse move
  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  // Use useEffect to attach and clean up event listener
  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener when component is unmounted
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Card className="shadow-sm p-3">
      <Card.Body>
        <h5>Current Mouse Position:</h5>
        <Alert variant="info">
          <strong>X:</strong> {mousePosition.x} <br />
          <strong>Y:</strong> {mousePosition.y}
        </Alert>
      </Card.Body>
    </Card>
  );
};

export default MouseTracker;
