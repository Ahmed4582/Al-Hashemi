import { useState } from 'react'
import GalleryGrid from '../components/GalleryGrid'
import { galleryImages } from '../data/gallery'

function Gallery() {
  const [filter, setFilter] = useState('all')
  
  const filteredImages = filter === 'all'
    ? galleryImages
    : galleryImages.filter(image => image.type === filter)
  
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="section-title text-center mb-12">معرض الصور والفيديو</h1>
      
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-sm font-medium border border-gray-200 rounded-r-lg ${
              filter === 'all' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            الكل
          </button>
          <button
            onClick={() => setFilter('image')}
            className={`px-4 py-2 text-sm font-medium border-t border-b border-gray-200 ${
              filter === 'image' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            الصور
          </button>
          <button
            onClick={() => setFilter('video')}
            className={`px-4 py-2 text-sm font-medium border border-gray-200 rounded-l-lg ${
              filter === 'video' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            الفيديو
          </button>
        </div>
      </div>
      
      {filteredImages.length > 0 ? (
        <GalleryGrid images={filteredImages} />
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-stone-500">لم يتم العثور على صور أو فيديوهات في هذا القسم</p>
        </div>
      )}
    </div>
  )
}

export default Gallery