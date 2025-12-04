import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

function GalleryGrid({ images }) {
  const [selectedImage, setSelectedImage] = useState(null)
  
  const openLightbox = (image) => {
    setSelectedImage(image)
  }
  
  const closeLightbox = () => {
    setSelectedImage(null)
  }
  
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div 
            key={image.id}
            className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
            onClick={() => openLightbox(image)}
          >
            <img 
              src={image.url} 
              alt={image.title} 
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
            onClick={closeLightbox}
          >
            <FaTimes size={24} />
          </button>
          
          <div className="max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title} 
              className="max-w-full max-h-[80vh] mx-auto"
            />
            <p className="text-white text-center mt-4 text-lg">{selectedImage.title}</p>
            {selectedImage.description && (
              <p className="text-gray-300 text-center mt-2">{selectedImage.description}</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default GalleryGrid