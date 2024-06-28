import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Gallery = ({ photos, onViewDetails, onDelete }) => {
  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <div className="row">
      {photos.map((photo) => (
        <div key={photo.id} className="col-md-4 mb-4">
          <Card>
            <Card.Img variant="top" src={photo.url} />
            <Card.Body>
              <Card.Title>{photo.title}</Card.Title>
              <Button onClick={() => onViewDetails(photo)}>View Details</Button>
              <Button variant="danger" onClick={() => handleDelete(photo.id)}>Delete</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
