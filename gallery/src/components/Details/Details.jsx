import React from 'react';
import { Card, Button } from 'react-bootstrap';

const PhotoDetails = ({ photo, onBack }) => {
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <Card>
          <Card.Img
            variant="top"
            src={photo.url}
            style={{ width: '100%', height: 'auto' }}
          />
          <Card.Body>
            <Card.Title>{photo.title}</Card.Title>
            {photo.description && (
              <Card.Text>{photo.description}</Card.Text>
            )}
            <Button onClick={onBack}>Back to Gallery</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default PhotoDetails;
