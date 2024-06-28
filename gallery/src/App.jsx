import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import UploadForm from './components/Upload/Upload';
import Gallery from './components/Gallery/Gallery';
import PhotoDetails from './components/Details/Details';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleUpload = (photoData) => {
    setPhotos([...photos, photoData]);
  };

  const handleViewDetails = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleBackToGallery = () => {
    setSelectedPhoto(null);
  };

  const handleDelete = (id) => {
    const updatedPhotos = photos.filter(photo => photo.id !== id);
    setPhotos(updatedPhotos);
    if (selectedPhoto && selectedPhoto.id === id) {
      setSelectedPhoto(null);
    }
  };

  return (
    <Container className="py-4">
      <UploadForm onUpload={handleUpload} />
      <hr />
      {selectedPhoto ? (
        <PhotoDetails photo={selectedPhoto} onBack={handleBackToGallery} />
      ) : (
        <Gallery photos={photos} onViewDetails={handleViewDetails} onDelete={handleDelete} />
      )}
    </Container>
  );
};

export default App;